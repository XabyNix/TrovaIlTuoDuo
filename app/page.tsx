import MaxWidthWrapper from "../components/MaxWidthWrapper";
import SearchSection from "../components/SearchBar/SearchSection";
import BestPlayers from "../components/BestPlayers/BestPlayers";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home({ searchParams }: { searchParams: { region: string } }) {
	return (
		<MaxWidthWrapper>
			<SearchSection />
			<Suspense fallback={<Loading />}>
				<BestPlayers region={searchParams.region} />
			</Suspense>
		</MaxWidthWrapper>
	);
}
