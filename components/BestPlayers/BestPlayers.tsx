import { leagueList } from "@/lib/types";
import PlayersList from "./PlayersList";
import { endpoints } from "@/config";
import { fetcherFunction } from "@/lib/fetchers";
import { ScrollArea } from "../ui/scroll-area";
import { getEndpoint } from "@/lib/utils";

const BestPlayers = async ({ region }: { region: string }) => {
	try {
		const topLeaguePlayers = (await Promise.all([
			fetcherFunction(getEndpoint(region, endpoints.topChallenger), { cache: "no-cache" }),
			fetcherFunction(getEndpoint(region, endpoints.topGrandmaster), { cache: "no-cache" }),
			fetcherFunction(getEndpoint(region, endpoints.topMaster), { cache: "no-cache" }),
		])) as leagueList[];

		const sortedTopLeaguePlayers = topLeaguePlayers.map((league) => {
			if (league.entries.length > 300) league.entries = league.entries.slice(0, 300);

			league.entries = league.entries.sort((a, b) => {
				if (a.leaguePoints < b.leaguePoints) return 1;
				if (a.leaguePoints > b.leaguePoints) return -1;
				return 0;
			});

			return league;
		});

		return (
			<div className="my-40 flex flex-col max-w-sm m-auto gap-10 lg:flex-row lg:max-w-full lg:justify-between">
				{sortedTopLeaguePlayers.map((league) => (
					<div key={league.leagueId} className="flex-1">
						<h2 className="my-7 font-bold text-center">
							Migliori giocatori <br />
							<span className=" font-extrabold tracking-wider uppercase">{league.tier}</span>
						</h2>
						<ScrollArea className="h-96 rounded-md">
							<PlayersList players={league.entries} />
						</ScrollArea>
					</div>
				))}
			</div>
		);
	} catch (error) {
		return <div className=" text-center">Le API di riot sembrano non funzionare</div>;
	}
};

export default BestPlayers;
