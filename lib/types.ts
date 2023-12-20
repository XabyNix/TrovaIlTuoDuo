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

export type league = {
	tier: string;
	leagueId: string;
	queue: string;
	name: string;
	entries: player[];
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
