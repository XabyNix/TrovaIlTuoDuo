import { endpoints, serverList } from "@/config";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { fetcherFunction } from "./fetchers";
import { leagueEntry, serverListType } from "./types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getImageByRegion = (urlRegion: string) => {
	const { image } = serverList.find(({ region }) => region === urlRegion)!;
	return image;
};

export const calculateWinRate = (wins: number, losses: number) => {
	const winrate = (wins / (wins + losses)) * 100;

	return winrate.toPrecision(2);
};

export const getEndpoint = (selectedRegion: string, endpoint: string) => {
	const myRegion = selectedRegion ?? "EUW";
	const server = serverList.find(({ region }) => region === myRegion);

	return server!.platform + endpoint;
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
