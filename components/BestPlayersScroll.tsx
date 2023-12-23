import { player } from "@/lib/types";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";

function PlayersList({ players }: { players: player[] }) {
	return (
		<ScrollArea className="h-96 rounded-md">
			<ol className="list-inside list-decimal flex flex-col gap-5 bg-myGray p-5">
				{players.map((player) => (
					<Player key={player.summonerId} player={player} />
				))}
			</ol>
		</ScrollArea>
	);
}

export default PlayersList;

const Player = ({ player }: { player: player }) => {
	return (
		<div key={player.summonerId} className="flex items-center justify-between gap-3">
			<Image src={"/3135715.png"} width={50} height={50} alt="" />
			<li>{player.summonerName}</li>
			<span className="text-myRed">{player.leaguePoints} LP</span>
		</div>
	);
};
