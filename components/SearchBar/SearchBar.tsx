"use client";

import React, { useState } from "react";
import ServerSelectMenu from "./ServerSelectMenu";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SearchBar = ({ className }: { className?: string }) => {
	const [name, setName] = useState("");

	return (
		<div className={cn("flex items-center relative rounded-md", className)}>
			<ServerSelectMenu className="absolute left-3" />
			<Input
				value={name || ""}
				onChange={(value) => setName(value.currentTarget.value)}
				className="w-full h-max py-5 px-28 bg-slate-300 hover:bg-slate-200  text-black font-bold text-md  transition-all"
				placeholder="RiotID"
			/>
			<Link
				href={{
					pathname: "/playerslist",
					query: { name: name },
				}}
				className="absolute right-2 shadow-md p-3 font-semibold rounded-md bg-myRed"
			>
				Aiutami!
			</Link>
		</div>
	);
};

export default SearchBar;
