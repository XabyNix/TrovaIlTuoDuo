import { player } from "@/lib/types";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";

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

export const Player = ({
	player,
	className,
	image,
}: {
	player: player;
	className?: string;
	image?: string;
}) => {
	return (
		<div
			key={player.summonerId}
			className={cn("flex items-center justify-between gap-3", className)}
		>
			<Image src={image || "/3135715.png"} width={50} height={50} alt="" />
			<li>{player.summonerName}</li>
			<span className="text-myRed">{player.leaguePoints} LP</span>
		</div>
	);
};
