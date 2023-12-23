export type player = {
	freshBlood: boolean;
	wins: number;
	summonerName: string;
	inactive: boolean;
	veteran: boolean;
	hotStreak: boolean;
	rank: string;
	leaguePoints: number;
	losses: number;
	summonerId: string;
};

export type leagueList = {
	tier: string;
	leagueId: string;
	queue: string;
	name: string;
	entries: player[];
};

export type leagueEntry = {
	leagueID: string;
	summonerId: string;
	summonerName: string;
	queueType: string;
	tier: string;
	rank: string;
	leaguePoints: number;
	wins: number;
	losses: number;
	hotStreak: boolean;
};

export type selectedServerContextType = {
	list: typeof serverList;
	region: string;
	set: (value: string) => void;
};

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

export const ranks = [
	{
		rank: "Iron",
		image: "/ranks/Iron.png",
	},
	{
		rank: "Bronze",
		image: "/ranks/Bronze.png",
	},
	{
		rank: "Silver",
		image: "/ranks/Silver.png",
	},
	{
		rank: "Gold",
		image: "/ranks/Gold.png",
	},
	{
		rank: "Platinum",
		image: "/ranks/Platinum.png",
	},
	{
		rank: "Emerald",
		image: "/ranks/Emerald.png",
	},
	{
		rank: "Diamond",
		image: "/ranks/Diamond.png",
	},
	{
		rank: "Master",
		image: "/ranks/Master.png",
	},
	{
		rank: "GrandMaster",
		image: "/ranks/Grandmaster.png",
	},
	{
		rank: "Challenger",
		image: "/ranks/Challenger.png",
	},
];
