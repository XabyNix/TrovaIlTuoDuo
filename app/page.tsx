import MaxWidthWrapper from "../components/MaxWidthWrapper";
import SearchSection from "../components/SearchBar/SearchSection";
import BestPlayers from "../components/BestPlayers/BestPlayers";

export default async function Home() {
	return (
		<MaxWidthWrapper>
			<SearchSection />
			<BestPlayers />
		</MaxWidthWrapper>
	);
}
