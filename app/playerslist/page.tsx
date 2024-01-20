import DuoPartners from "@/components/playersList/DuoPartners";
import { Suspense } from "react";
import Loading from "./loading";
import { fetcherFunction } from "@/lib/fetchers";
import { leagueEntry, summoner } from "@/lib/types";
import UserElo from "@/components/playersList/UserElo";
import { Separator } from "@/components/ui/separator";
import { endpoints } from "@/config";
import { getEndpoint } from "@/lib/utils";

const page = async ({
	searchParams,
}: {
	searchParams: { name: string; page: number; region: string };
}) => {
	const getPlayerInfo = async () => {
		const idUrl = getEndpoint(searchParams.region, endpoints.summonerByName) + searchParams.name;
		const { id } = (await fetcherFunction(idUrl, { cache: "no-cache" })) as summoner;

		const playerStatsUrl = getEndpoint(searchParams.region, endpoints.summonerRankedStats) + id;
		const data = (await fetcherFunction(playerStatsUrl, { cache: "no-cache" })) as leagueEntry[];
		const filteredData = data.filter((queueStats) => queueStats.queueType !== "CHERRY");
		console.log(filteredData);
		return filteredData;
	};

	const queuesInfo = await getPlayerInfo();

	if (!queuesInfo.length)
		return <h2>Il giocatore deve essere rankato in almeno una modalità tra flex e solo-duo</h2>;
	else {
		return (
			<div className="flex flex-col lg:flex-row gap-3">
				<div className=" bg-card h-max rounded-sm">
					{queuesInfo.map((queue, index) =>
						queue ? (
							<div key={queue.leagueID}>
								<UserElo data={queue} />

								{queuesInfo.length > 1 && index < queuesInfo.length ? (
									<Separator decorative className="bg-white opacity-20 max-w-[85%] m-auto" />
								) : null}
							</div>
						) : null
					)}
				</div>
				<Suspense fallback={<Loading />}>
					<DuoPartners
						region={searchParams.region}
						page={searchParams.page}
						tier={queuesInfo[0].tier}
						rank={queuesInfo[0].rank}
					/>
				</Suspense>
			</div>
		);
	}
};

export default page;
