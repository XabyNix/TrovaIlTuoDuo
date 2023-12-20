import { league } from "@/lib/types";
import PlayersList from "./PlayersList";

const BestPlayers = ({ data }: { data: league[] }) => {
	const firstData = data[0];
	return (
		<div className=" my-40 flex flex-col max-w-sm m-auto gap-10 lg:flex-row lg:max-w-full lg:justify-center">
			{data.map((league) => (
				<div className="text-center" key={league.leagueId}>
					<h2 className="my-7 font-bold">
						Migliori giocatori <br />{" "}
						<span className=" font-extrabold tracking-wider">{league.tier}</span>
					</h2>
					<PlayersList players={league.entries} />
				</div>
			))}
		</div>
	);
};

export default BestPlayers;
