import { leagueEntry, queueType } from "@/lib/types";
import Image from "next/image";
import React from "react";

const UserElo = ({ data }: { data: leagueEntry }) => {
	return (
		<div className="p-7 bg-myGray rounded-lg font-bold w-max ring-2 ring-myRed ring-offset-4 ring-offset-card">
			<h3>{data.queueType}</h3>
			<div className="flex gap-5 mt-3">
				<div>
					<Image src={"/ranks/Gold.png"} width={50} height={50} alt="" />
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
						<span className="block">{(data.wins / (data.wins + data.losses)) * 100}% Win Rate</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserElo;
