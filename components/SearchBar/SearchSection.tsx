"use client";

import React from "react";
import { Julee } from "next/font/google";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { useQueryState } from "next-usequerystate";
import { serverList } from "@/config";
import { getImageByRegion } from "@/lib/utils";

const julee = Julee({ weight: ["400"], subsets: ["latin"] });

const SearchSection = () => {
	const [region] = useQueryState("region");

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
				src={getImageByRegion(region || "EUW")}
				alt=""
			/>
		</div>
	);
};

export default SearchSection;
