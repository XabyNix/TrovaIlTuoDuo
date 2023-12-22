import { APIKEY } from "@/credentials";
import { endpoints } from "./enpoints";
import { league } from "./types";

/* const APIKEY = "RGAPI-2111c48e-4187-423b-a289-d41503075538"; */

export const enum queueType {
	solo = "RANKED_SOLO_5x5",
	flex = "RANKED_FLEX_SR",
	tft = "RANKED_FLEX_TT",
}

async function fetcher(endpoint: string, param?: string) {
	const BASEURL = "https://euw1.api.riotgames.com";

	const apiUrl = BASEURL + endpoint + param;

	const res = await fetch(apiUrl, {
		method: "GET",
		headers: { "X-Riot-Token": APIKEY },
		next: { revalidate: 10 },
	});

	const body = await res.json();
	if ([401, 403, 404].includes(body.status?.status_code)) {
		console.log(body.status?.status_code);
		throw new Error("api server error");
	}
	return body;
}

const fetchLeagueFromSummonerName = async (name: string) => {
	return await fetcher(endpoints.summonerByName, name);
};

export const fetchTopPlayer = async (queueType: queueType) => {
	try {
		const topPlayer = (await Promise.all([
			fetcher(endpoints.topChallenger, queueType),
			fetcher(endpoints.topGrandmaster, queueType),
			fetcher(endpoints.topMaster, queueType),
		])) as league[];

		topPlayer.forEach((body) => {
			body.entries = body.entries.sort((a, b) => {
				if (a.leaguePoints > b.leaguePoints) return -1;
				if (a.leaguePoints < b.leaguePoints) return 1;
				return 0;
			});
			if (body.entries?.length > 300) {
				body.entries = body.entries.slice(0, 300);
			}
		});
		return topPlayer;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const fetchLeagueStats = async (name: string) => {
	const { id } = await fetchLeagueFromSummonerName(name);

	const stats = await fetcher(endpoints.summonderLeagueStats, id);
	return stats;
};
