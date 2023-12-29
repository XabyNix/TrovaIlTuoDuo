import { endpoints } from "@/config";
import { fetchDuoPartner, fetcherFunction } from "@/lib/fetchers";
import { leagueEntry, queueType } from "@/lib/types";
import { calculateWinRate } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";

type prop = {
	rank: string;
	tier: string;
};

const DuoPartners = async ({ rank, tier }: prop) => {
	const URL = `${endpoints.duoPlayersEndpoint}${queueType.solo}/${tier}/${rank} `;
	const duo = (await fetcherFunction(URL, { next: { revalidate: 360 } })) as leagueEntry[];

	return (
		<div className="flex flex-col flex-1 gap-3">
			{duo.map((player) => (
				<div
					key={player.summonerId}
					className="group bg-myGray flex items-center justify-around py-10 px-7"
				>
					<div className="flex items-center gap-3">
						<Image src={"/3135715.png"} width={50} height={50} alt="" />
						<span>{player.summonerName}</span>
					</div>
					<div className="flex items-center gap-3">
						<Image src={`/ranks/${player.tier}.png`} width={50} height={50} alt={""} />
						<span>
							{player.tier} {player.rank}
						</span>
					</div>
					<div>{player.hotStreak ? "Win Streak" : null}</div>
					<div>{calculateWinRate(player.wins, player.losses) + "%"}</div>
					<Button className="hidden group-hover:block">Gioca</Button>
				</div>
			))}
		</div>
	);
};

export default DuoPartners;
