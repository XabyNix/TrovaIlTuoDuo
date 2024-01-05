import { arrayChunks, calculateWinRate, getEndpoint } from "@/lib/utils";
import { Button } from "../ui/button";
import Image from "next/image";
import { leagueEntry, queueType } from "@/lib/types";
import { endpoints } from "@/config";
import { fetcherFunction } from "@/lib/fetchers";
import PaginationSection from "../BestPlayers/PaginationSection";

type prop = {
	tier: string;
	rank: string;
	page: number;
	region: string;
};

const DuoPartners = async ({ tier, rank, page, region }: prop) => {
	const getData = async () => {
		const url = getEndpoint(region, `${endpoints.leaguePlayers}${queueType.solo}/${tier}/${rank}`);
		const res = (await fetcherFunction(url)) as leagueEntry[];

		const chunks: leagueEntry[][] = arrayChunks(res);
		return chunks;
	};

	const data = await getData();
	const positivePage = page ? page - 1 : 0;

	return (
		<div className="flex flex-col w-full gap-2 justify-center">
			{data[positivePage].map(async (player) => (
				<div
					key={player.summonerId}
					className="group bg-myGray flex items-center justify-between p-7 py-9 rounded-sm transition-all hover:ring-2 ring-myRed"
				>
					<div className="flex items-center basis-[300px]">
						<Image src={"/3135715.png"} width={50} height={50} alt="" />
						<span className="ml-7">{player.summonerName}</span>
					</div>
					<div className="flex items-center basis-[200px]">
						<Image src={`/ranks/${player.tier}.png`} width={50} height={50} alt={""} />
						<span>
							{player.tier} {player.rank}
						</span>
					</div>
					<div>{player.hotStreak ? "Win Streak" : null}</div>
					<div>{calculateWinRate(player.wins, player.losses) + "% Win Rate"}</div>
					<Button className="hidden lg:group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto lg:block transition-all opacity-0 pointer-events-none">
						Gioca
					</Button>
				</div>
			))}
			<PaginationSection total={data.length} />
		</div>
	);
};

export default DuoPartners;
