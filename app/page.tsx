import { fetchTopPlayer, queueType } from "@/lib/fetchers";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import SearchSection from "../components/SearchSection";
import BestPlayers from "../components/BestPlayers";

const ranked = queueType.solo;

export default async function Home() {
	const topPlayer = await fetchTopPlayer(ranked);
	return (
		<MaxWidthWrapper>
			<SearchSection />
			<BestPlayers data={topPlayer} />
		</MaxWidthWrapper>
	);
}
