import { fetchTopPlayer } from "@/lib/fetchers";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import SearchSection from "../components/SearchSection";
import BestPlayers from "../components/BestPlayers";
import { queueType } from "@/lib/types";

export default async function Home() {
	const topPlayer = await fetchTopPlayer(queueType.solo);

	return (
		<MaxWidthWrapper>
			<SearchSection />
			<BestPlayers data={topPlayer} />
		</MaxWidthWrapper>
	);
}
