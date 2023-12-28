import { serverList } from "@/config";

export type leagueList = {
	leagueId: string;
	entries: player[];
	tier: string;
	name: string;
	queue: string;
};

export type summoner = {
	id: string;
};
export type player = {
	summonerId: string;
	summonerName: string;
	wins: number;
	hotStreak: boolean;
	rank: string;
	leaguePoints: number;
	losses: number;
};
export interface leagueEntry extends player {
	tier: string;
	queueType: string;
	leagueID: string;
}

export type selectedServerContextType = {
	list: typeof serverList;
	region: string;
	set: (value: string) => void;
};

export const enum queueType {
	solo = "RANKED_SOLO_5x5",
	flex = "RANKED_FLEX_SR",
	tft = "RANKED_FLEX_TT",
}
