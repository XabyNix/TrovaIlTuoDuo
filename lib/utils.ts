import { serverList } from "@/config";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getImageByRegion = (urlRegion: string) => {
	const foundObject = serverList.find(({ region }) => region === urlRegion);
	return foundObject!.image;
};
