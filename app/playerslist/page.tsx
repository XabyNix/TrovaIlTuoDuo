import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SearchBar from "@/components/SearchBar/SearchBar";
import DuoPartners from "@/components/playersList/DuoPartners";
import UserElo from "@/components/playersList/UserElo";
import { endpoints } from "@/config";
import { fetchDuoPartner, fetchPlayerStats, fetcherFunction } from "@/lib/fetchers";
import { leagueEntry, summoner } from "@/lib/types";

const Page = async ({ searchParams }: { searchParams: any }) => {
	const byNameUrl = endpoints.summonerByName + searchParams.name;
	const { id } = (await fetcherFunction(byNameUrl, { cache: "no-cache" })) as summoner;

	const playerStatsUrl = endpoints.summonerLeagueStats + id;
	const playerStatsData = (await fetcherFunction(playerStatsUrl)) as leagueEntry[];
	const [flex, solo] = playerStatsData.filter((queueStats) => queueStats.queueType !== "CHERRY");

	return (
		<MaxWidthWrapper>
			<SearchBar />
			<div className="flex gap-5 mt-32">
				<div>
					<UserElo
						className="ring-2 ring-myRed ring-offset-4 ring-offset-card"
						key={solo.summonerId}
						data={solo}
					/>
					<UserElo key={flex.summonerId} data={flex} />
				</div>
				<DuoPartners rank={solo.rank} tier={solo.tier} />
			</div>
		</MaxWidthWrapper>
	);
};

export default Page;
