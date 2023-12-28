import { endpoints } from "@/config";
import { fetchDuoPartner, fetcherFunction } from "@/lib/fetchers";
import { leagueEntry, queueType } from "@/lib/types";
import { Player } from "../BestPlayers/PlayersList";

type prop = {
	rank: string;
	tier: string;
};

const DuoPartners = async ({ rank, tier }: prop) => {
	const URL = `${endpoints.duoPlayersEndpoint}${queueType.solo}/${tier}/${rank} `;
	const duo = (await fetcherFunction(URL)) as leagueEntry[];

	return (
		<div className="flex flex-col flex-1 gap-3">
			{duo.map((player) => (
				<Player
					className="bg-myGray p-5 py-16 rounded-md"
					key={player.summonerId}
					image={`/ranks/${player.tier.toLowerCase()}.png`}
					player={{ ...player }}
				/>
			))}
		</div>
	);
};

export default DuoPartners;
