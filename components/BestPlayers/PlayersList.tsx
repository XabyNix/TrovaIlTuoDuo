import { leagueEntry, player } from "@/lib/types";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";

function PlayersList({ players }: { players: player[] }) {
	return (
		<ol className="list-inside list-decimal flex flex-col gap-5 bg-myGray p-5">
			{players.map((player) => (
				<li key={player.summonerId}>
					<Player player={player} />
				</li>
			))}
		</ol>
	);
}

export default PlayersList;

export const Player = ({
	player,
	className,
	image,
}: {
	player: player | leagueEntry;
	className?: string;
	image?: string;
}) => {
	return (
		<div
			key={player.summonerId}
			className={cn("flex items-center justify-between gap-3", className)}
		>
			<Image src={image || "/3135715.png"} width={50} height={50} alt="" />
			<span>{player.summonerName}</span>
			<span className="text-myRed">{player.leaguePoints} LP</span>
		</div>
	);
};
