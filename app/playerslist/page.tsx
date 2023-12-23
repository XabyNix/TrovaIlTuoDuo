import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SearchBar from "@/components/SearchBar";
import UserElo from "@/components/UserElo";

import { fetchPlayerStats } from "@/lib/fetchers";

const page = async ({ searchParams }: { searchParams: any }) => {
	console.log("searchParams:	", searchParams.name);
	const searcherInfo = await fetchPlayerStats(searchParams.name);
	return (
		<MaxWidthWrapper>
			<SearchBar />
			<UserElo data={searcherInfo} />
		</MaxWidthWrapper>
	);
};

export default page;
