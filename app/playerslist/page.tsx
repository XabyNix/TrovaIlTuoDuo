import DuoPartners from "@/components/playersList/DuoPartners";
import { Suspense } from "react";
import Loading from "./loading";
import { fetcherFunction } from "@/lib/fetchers";
import { leagueEntry } from "@/lib/types";
import UserElo from "@/components/playersList/UserElo";
import { Separator } from "@/components/ui/separator";

const page = async ({ searchParams }: { searchParams: { name: string; page: number } }) => {
	const [solo, flex] = (await fetcherFunction(`/playerslist/api?name=${searchParams.name}`, {
		cache: "no-cache",
	})) as leagueEntry[];

	return (
		<div className="flex flex-col lg:flex-row gap-3">
			<div className=" bg-card h-max rounded-sm">
				<UserElo key={solo.leagueID} data={solo} />
				<Separator decorative className="bg-white opacity-20 max-w-[85%] m-auto" />
				<UserElo key={flex.leagueID} data={flex} />
			</div>
			<Suspense fallback={<Loading />}>
				<DuoPartners page={searchParams.page} tier={solo.tier} rank={solo.rank} />
			</Suspense>
		</div>
	);
};

export default page;
