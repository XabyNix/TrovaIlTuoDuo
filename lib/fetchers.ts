const APIKEY = "RGAPI-6067b169-558b-465e-89fb-0a432a389aac";
const BASEURL = "https://euw1.api.riotgames.com";

export async function fetchLeagueFromSummonerId(id: string) {
	const endpoint = `${BASEURL}/lol/league/v4/entries/by-summoner/${id}`;

	try {
		const res = await fetch(endpoint, {
			method: "GET",
			headers: { "X-Riot-Token": APIKEY },
		});

		return await res.json();
	} catch (error) {
		console.log(error);
	}
}

export async function fetchSummonerIDByName(summonerName: string) {
	const endpoint = `${BASEURL}/lol/summoner/v4/summoners/by-name/${summonerName}`;

	try {
		const res = await fetch(endpoint, {
			method: "GET",
			headers: { "X-Riot-Token": APIKEY },
		});
		const { id } = await res.json();
		const leagueInfo = await fetchLeagueFromSummonerId(id);
		console.log(leagueInfo);
	} catch (error) {
		console.log(error);
	}
}
