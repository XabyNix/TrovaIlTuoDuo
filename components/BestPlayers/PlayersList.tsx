import { leagueEntry, player } from "@/lib/types";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";

function PlayersList({ players }: { players: player[] }) {
	return (
		<ul className=" list-none flex flex-col gap-5 bg-myGray p-5">
			{players.map((player) => (
				<Player key={player.summonerId} player={player} />
			))}
		</ul>
	);
}

export default PlayersList;

const Player = ({
	player,
	className,
	image,
}: {
	player: player | leagueEntry;
	className?: string;
	image?: string;
}) => {
	return (
		<li className={cn("flex items-center justify-between gap-3", className)}>
			<Image src={image || "/3135715.png"} width={50} height={50} alt="" />
			<span>{player.summonerName}</span>
			<span className="text-myRed">{player.leaguePoints} LP</span>
		</li>
	);
};
