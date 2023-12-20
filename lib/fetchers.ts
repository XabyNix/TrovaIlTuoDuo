import { endpoints } from "./enpoints";
import { league } from "./types";

const APIKEY = "RGAPI-6a273a01-e837-4270-9e8f-ed0e16c0dc6b";

export const enum queueType {
	solo = "RANKED_SOLO_5x5",
	flex = "RANKED_FLEX_SR",
	tft = "RANKED_FLEX_TT",
}

async function fetcher(endpoint: string, param?: string) {
	const BASEURL = "https://euw1.api.riotgames.com";

	const apiUrl = BASEURL + endpoint + param;

	try {
		const res = await fetch(apiUrl, {
			method: "GET",
			headers: { "X-Riot-Token": APIKEY },
			cache: "no-cache",
		});

		const body = (await res.json()) as league;

		body.entries = body.entries.sort((a, b) => {
			if (a.leaguePoints > b.leaguePoints) return -1;
			if (a.leaguePoints < b.leaguePoints) return 1;
			return 0;
		});

		if (body.entries?.length > 300) {
			body.entries = body.entries.slice(0, 300);
			return body;
		}

		return body;
	} catch (error) {
		console.error(error);
		return null;
	}
}

const fetchLeagueFromSummonerName = async (name: string) => {
	return await fetcher(endpoints.summonerByName, name);
};

export const fetchTopPlayer = async (queueType: queueType) => {
	const topPlayer = await Promise.all([
		fetcher(endpoints.topChallenger, queueType),
		fetcher(endpoints.topGrandmaster, queueType),
		fetcher(endpoints.topMaster, queueType),
	]);

	return topPlayer;
};

export const fetchLeagueStats = async (name: string) => {
	const { id } = await fetchLeagueFromSummonerName(name);

	const stats = await fetcher(endpoints.summonderLeagueStats, id);
	return stats;
};
