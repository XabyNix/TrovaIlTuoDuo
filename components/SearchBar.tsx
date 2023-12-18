"use client";

import React from "react";
import ServerSelectMenu from "./ServerSelectMenu";
import { fetchSummonerIDByName } from "@/lib/fetchers";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const SearchBar = ({ className }: { className: string }) => {
	return (
		<div className={cn("flex items-center relative", className)}>
			<ServerSelectMenu className="absolute left-0 ml-3" />
			<Input className="w-full h-max py-5 px-28" placeholder="RiotID" />
			<Button className="absolute right-0 mr-3">Aiutami!</Button>
		</div>
	);
};

export default SearchBar;
