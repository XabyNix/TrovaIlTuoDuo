"use client";

import React, { createContext, useState } from "react";
import { Julee } from "next/font/google";
import SearchBar from "./SearchBar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import europe from "./../public/pngegg.svg";
import brazil from "./../public/brazil.png";

const serverList = [
	{ region: "BR", image: brazil },
	{ region: "LAS", image: "" },
	{ region: "NA", image: "" },
	{ region: "EUNE", image: "" },
	{ region: "LAN", image: "" },
	{ region: "OCE", image: "" },
	{ region: "RU", image: "" },
	{ region: "TP", image: "" },
	{ region: "JP", image: "" },
	{ region: "EUW", image: europe },
];

const julee = Julee({ weight: ["400"], subsets: ["latin"] });

type selectedServerContextType = {
	list: typeof serverList;
	region: string;
	set: (value: string) => void;
};

export const selectedServerContext = createContext<selectedServerContextType>({
	list: [],
	region: "",
	set: () => {},
});

const SearchSection = () => {
	const [selectedServer, setSelectedServer] = useState<string>("EUW");
	function changeSelectedServer(region: string) {
		setSelectedServer(region);
	}

	function getImageByRegion() {
		const foundObject = serverList.find(({ region, image }) => region === selectedServer);
		return foundObject!.image;
	}

	return (
		<div className=" flex flex-col relative items-center">
			<div className="py-20">
				<h1 className={`${julee.className} text-9xl`}>
					<span className="text-myRed">Trova </span>
					<br />
					il tuo duo
				</h1>
			</div>
			<selectedServerContext.Provider
				value={{ list: serverList, region: selectedServer, set: changeSelectedServer }}
			>
				<SearchBar className="w-full max-w-2xl" />
			</selectedServerContext.Provider>
			<Image
				className="absolute w-auto h-full mx-auto opacity-10 -z-10"
				src={getImageByRegion()}
				alt=""
			/>
		</div>
	);
};

export default SearchSection;
