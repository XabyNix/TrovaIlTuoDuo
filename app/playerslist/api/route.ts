import { endpoints } from "@/config";
import { fetcherFunction } from "@/lib/fetchers";
import { summoner, leagueEntry } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const getPlayerInfo = async () => {
		const { searchParams } = new URL(req.url);

		const idUrl = endpoints.summonerByName + searchParams.get("name");
		const { id } = (await fetcherFunction(idUrl, { cache: "no-cache" })) as summoner;

		const playerStatsUrl = endpoints.playerRankedsStats + id;
		const data = (await fetcherFunction(playerStatsUrl, { cache: "no-cache" })) as leagueEntry[];
		const filteredData = data.filter((queueStats) => queueStats.queueType !== "CHERRY");
		return filteredData;
	};
	return NextResponse.json(await getPlayerInfo());
}
