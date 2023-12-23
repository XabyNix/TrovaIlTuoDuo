import { fetchPlayerStats, queueType } from "@/lib/fetchers";
import { leagueEntry, ranks } from "@/lib/types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const UserElo = ({ data }: { data: leagueEntry[] | null }) => {
	const typedata = data ? data.find((queue) => queue.queueType === queueType.solo) : null;
	return typedata ? (
		<div className="p-7 bg-myGray rounded-lg font-bold w-max ring-2 ring-myRed ring-offset-4 ring-offset-card">
			<h3>Ranked Solo</h3>
			<div className="flex gap-5 mt-3">
				<div>
					<Image src={"/ranks/Gold.png"} width={50} height={50} alt="" />
				</div>
				<div className="flex gap-10 items-center">
					<div>
						<span className="block">{typedata.rank}</span>
						<span className="block font-light">45 LP</span>
					</div>
					<div className="text-right">
						<span className="block">39W 36L</span>
						<span className="block">52% win rate</span>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div>null</div>
	);
};

export default UserElo;
