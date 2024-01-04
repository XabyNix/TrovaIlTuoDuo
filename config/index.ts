import { queueType } from "@/lib/types";

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

export const serverList = [
	{ region: "EUW", image: "/regions/EUW.svg" },
	{ region: "BR", image: "/regions/BR.svg" },
	{ region: "JP", image: "/regions/JP.svg" },
	{ region: "LAS", image: "/regions/LAS.svg" },
	{ region: "NA", image: "/regions/NA.svg" },
	{ region: "OCE", image: "/regions/OCE.svg" },
	{ region: "RU", image: "/regions/RU.svg" },
	{ region: "TR", image: "/regions/TR.svg" },
	{ region: "EUNE", image: "/regions/EUNE.svg" },
];

export const endpoints = {
	topChallenger:
		"https://euw1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/" + queueType.solo,
	topGrandmaster:
		"https://euw1.api.riotgames.com/lol/league/v4/grandmasterleagues/by-queue/" + queueType.solo,
	topMaster:
		"https://euw1.api.riotgames.com/lol/league/v4/masterleagues/by-queue/" + queueType.solo,

	summonerByName: "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/",
	playerRankedsStats: "https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/",
	playersPerLeague: `https://euw1.api.riotgames.com/lol/league/v4/entries/`,
	summonerIcon: "https://res.cloudinary.com/dw5p5em1a/image/upload/v1703956750/summonerIcons/", //"https://res.cloudinary.com/dw5p5em1a/image/upload/f_auto,q_auto/v2/icons/",
};
