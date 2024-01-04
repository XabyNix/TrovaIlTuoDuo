"use client";

import React from "react";
import { Julee } from "next/font/google";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { useQueryState } from "next-usequerystate";
import { getImageByRegion } from "@/lib/utils";
import Logo from "../Logo";

const julee = Julee({ weight: ["400"], subsets: ["latin"] });

const SearchSection = () => {
	const [region] = useQueryState("region");

	return (
		<div className="flex flex-col relative items-center py-20">
			<Logo className="text-9xl" />
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
