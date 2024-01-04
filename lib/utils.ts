import { endpoints, serverList } from "@/config";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { fetcherFunction } from "./fetchers";
import { leagueEntry } from "./types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getImageByRegion = (urlRegion: string) => {
	const foundObject = serverList.find(({ region }) => region === urlRegion);
	return foundObject!.image;
};

export const calculateWinRate = (wins: number, losses: number) => {
	const winrate = (wins / (wins + losses)) * 100;

	return winrate.toPrecision(2);
};

export const getSummonerImageID = async (summonerName: string) => {
	const URL = endpoints.summonerByName + summonerName;
	const { profileIconId } = await fetcherFunction(URL);

	return endpoints.summonerIcon + profileIconId + ".png";
};

export const arrayChunks = (inputArray: leagueEntry[]) => {
	const chunkSize = 10;
	const chunks: leagueEntry[][] = [];

	for (let i = 0; i < inputArray.length; i += chunkSize) {
		const chunk = inputArray.slice(i, i + chunkSize);
		chunks.push(chunk);
	}
	return chunks;
};
