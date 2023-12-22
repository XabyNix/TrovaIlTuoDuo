"use client";

import React from "react";
import { Julee } from "next/font/google";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { serverList } from "@/lib/types";
import { useSearchParams } from "next/navigation";

const julee = Julee({ weight: ["400"], subsets: ["latin"] });

const SearchSection = () => {
	const param = useSearchParams();

	function getImageByRegion() {
		const selectedRegion = param.get("region") === null ? "EUW" : param.get("region");
		console.log(selectedRegion);

		const foundObject = serverList.find(({ region }) => region === selectedRegion);
		return foundObject!.image;
	}

	return (
		<div className="flex flex-col relative items-center">
			<div className="py-20">
				<h1 className={`${julee.className} text-9xl`}>
					<span className="text-myRed">Trova </span>
					<br />
					il tuo duo
				</h1>
			</div>

			<SearchBar className="w-full max-w-2xl" />

			<Image
				className="absolute w-auto h-full mx-auto opacity-30 -z-10"
				fill
				src={getImageByRegion()}
				alt=""
			/>
		</div>
	);
};

export default SearchSection;
