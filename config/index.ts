import { queueType, serverListType } from "@/lib/types";

export const ranks = [
	{ rank: "Iron", image: "/ranks/Iron.png" },
	{ rank: "Bronze", image: "/ranks/Bronze.png" },
	{ rank: "Silver", image: "/ranks/Silver.png" },
	{ rank: "Gold", image: "/ranks/Gold.png" },
	{ rank: "Platinum", image: "/ranks/Platinum.png" },
	{ rank: "Emerald", image: "/ranks/Emerald.png" },
	{ rank: "Diamond", image: "/ranks/Diamond.png" },
	{ rank: "Master", image: "/ranks/Master.png" },
	{ rank: "GrandMaster", image: "/ranks/Grandmaster.png" },
	{ rank: "Challenger", image: "/ranks/Challenger.png" },
];

export const serverList: serverListType[] = [
	{ region: "EUW", image: "/regions/EUW.svg", platform: "https://euw1.api.riotgames.com/lol" },
	{ region: "BR", image: "/regions/BR.svg", platform: "https://br1.api.riotgames.com/lol" },
	{ region: "JP", image: "/regions/JP.svg", platform: "https://jp1.api.riotgames.com/lol" },
	{ region: "LAS", image: "/regions/LAS.svg", platform: "https://la2.api.riotgames.com/lol" },
	{ region: "NA", image: "/regions/NA.svg", platform: "https://na1.api.riotgames.com/lol" },
	{ region: "OCE", image: "/regions/OCE.svg", platform: "https://oc1.api.riotgames.com/lol" },
	{ region: "RU", image: "/regions/RU.svg", platform: "https://ru.api.riotgames.com/lol" },
	{ region: "TR", image: "/regions/TR.svg", platform: "https://tr1.api.riotgames.com/lol" },
	{ region: "EUNE", image: "/regions/EUNE.svg", platform: "https://eun1.api.riotgames.com/lol" },
];

export const endpoints = {
	topChallenger: "/league/v4/challengerleagues/by-queue/" + queueType.solo,
	topGrandmaster: "/league/v4/grandmasterleagues/by-queue/" + queueType.solo,
	topMaster: "/league/v4/masterleagues/by-queue/" + queueType.solo,

	summonerByName: "/summoner/v4/summoners/by-name/",
	summonerRankedStats: "/league/v4/entries/by-summoner/",
	leaguePlayers: "/league/v4/entries/",
};
/* export const serverList: serverListType = {
	EUW: { image: "/regions/EUW.svg", platform: "https://euw1.api.riotgames.com/lol/" },
	BR: { image: "/regions/BR.svg", platform: "https://br1.api.riotgames.com/lol/" },
	JP: { image: "/regions/JP.svg", platform: "https://jp1.api.riotgames.com/lol/" },
	LAS: { image: "/regions/LAS.svg", platform: "https://la2.api.riotgames.com/lol/" },
	NA: { image: "/regions/NA.svg", platform: "https://na1.api.riotgames.com/lol/" },
	OCE: { image: "/regions/OCE.svg", platform: "https://oc1.api.riotgames.com/lol/" },
	RU: { image: "/regions/RU.svg", platform: "https://ru.api.riotgames.com/lol/" },
	TR: { image: "/regions/TR.svg", platform: "https://tr1.api.riotgames.com/lol/" },
	EUNE: { image: "/regions/EUNE.svg", platform: "https://eun1.api.riotgames.com/lol/" },
}; */
