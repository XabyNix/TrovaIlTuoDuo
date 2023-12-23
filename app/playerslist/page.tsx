import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SearchBar from "@/components/SearchBar";
import UserElo from "@/components/UserElo";
import { fetchDuoPartner, fetchPlayerStats } from "@/lib/fetchers";

const page = async ({ searchParams }: { searchParams: any }) => {
	const playerQueuesStats = await fetchPlayerStats(searchParams.name);
	const { tier, rank } = playerQueuesStats![0];
	const duo = await fetchDuoPartner(rank, tier);
	return (
		<MaxWidthWrapper>
			<SearchBar />
			{playerQueuesStats?.map((queueStats) =>
				queueStats.queueType !== "CHERRY" ? (
					<UserElo key={queueStats.summonerId} data={queueStats} />
				) : null
			)}
		</MaxWidthWrapper>
	);
};

export default page;
