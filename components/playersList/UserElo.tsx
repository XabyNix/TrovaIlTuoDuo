import { leagueEntry, queueType } from "@/lib/types";
import { calculateWinRate, cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const UserElo = ({ data, className }: { data: leagueEntry; className?: string }) => {
	return (
		<div className={cn("p-7 bg-myGray rounded-lg font-bold w-max mb-5", className)}>
			<h3>{data.queueType}</h3>
			<div className="flex gap-5 mt-3">
				<div>
					<Image src={`/ranks/${data.tier}.png`} width={50} height={50} alt="" />
				</div>
				<div className="flex gap-10 items-center">
					<div>
						<span className="block">{data.rank}</span>
						<span className="block font-light">{data.leaguePoints}</span>
					</div>
					<div className="text-right">
						<span className="block">
							{data.wins}W {data.losses}L
						</span>
						<span className="block">{calculateWinRate(data.wins, data.losses)}% Win Rate</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserElo;
