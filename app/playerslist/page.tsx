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
		return filteredData;
	};

	const [solo, flex] = await getPlayerInfo();
	return (
		<div className="flex flex-col lg:flex-row gap-3">
			<div className=" bg-card h-max rounded-sm">
				<UserElo key={solo.leagueID} data={solo} />
				<Separator decorative className="bg-white opacity-20 max-w-[85%] m-auto" />
				<UserElo key={flex.leagueID} data={flex} />
			</div>
			<Suspense fallback={<Loading />}>
				<DuoPartners
					region={searchParams.region}
					page={searchParams.page}
					tier={solo.tier}
					rank={solo.rank}
				/>
			</Suspense>
		</div>
	);
};

export default page;
