import { endpoints } from "../config/index";
import { leagueEntry, leagueList } from "./types";
import { queueType } from "./types";

async function fetcher(endpoint: string, param?: string) {
	const BASEURL = "https://euw1.api.riotgames.com";

	const apiUrl = param ? BASEURL + endpoint + param : BASEURL + endpoint;
	//console.debug("orazio", apiUrl);

	const response = await fetch(apiUrl, {
		method: "GET",
		headers: { "X-Riot-Token": process.env.NEXT_PUBLIC_API_KEY! },
		next: { revalidate: 10 },
	});

	//Check for api server error
	if (!response.ok) {
		throw new Error("api server error " + response.status + response.statusText);
	}
	return await response.json();
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
		])) as leagueList[];

		topPlayer.forEach((body) => {
			if (body.entries.length > 300) {
				body.entries = body.entries.slice(0, 300);
			}
			body.entries = body.entries.sort((a, b) => {
				if (a.leaguePoints > b.leaguePoints) return -1;
				if (a.leaguePoints < b.leaguePoints) return 1;
				return 0;
			});
		});
		return topPlayer;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const fetchPlayerStats = async (name: string) => {
	try {
		const { id } = await fetchLeagueFromSummonerName(name);

		const stats = (await fetcher(endpoints.summonerLeagueStats, id)) as leagueEntry[];
		return stats;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const fetchDuoPartner = async (tier: string, rank: string, queue?: string) => {
	try {
		queue = queue || queueType.solo;
		const endpoint = `${endpoints.duoPlayersEndpoint}${queue}/${rank}/${tier}`;

		const duosFound = await fetcher(endpoint);
		return duosFound;
	} catch (error) {
		console.log(error);
	}
};
