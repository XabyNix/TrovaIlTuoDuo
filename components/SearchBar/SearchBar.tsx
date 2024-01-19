"use client";

import React, { FormEvent, FormEventHandler } from "react";
import ServerSelectMenu from "./ServerSelectMenu";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useQueryState } from "next-usequerystate";
import { Button } from "../ui/button";

const SearchBar = ({ className }: { className?: string }) => {
	const [name, setName] = useQueryState("name");
	const params = useSearchParams();
	const router = useRouter();

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const queryParams = new URLSearchParams(params.toString());
		queryParams.set("name", name || "");
		router.push(`/playerslist?${queryParams.toString()}`);
	};

	return (
		<form onSubmit={handleSubmit} className={cn(className)}>
			<div className="flex items-center relative rounded-md">
				<ServerSelectMenu className="absolute left-3" />

				<Input
					value={name || ""}
					onChange={(value) => setName(value.currentTarget.value)}
					className="w-full h-max py-5 px-28 bg-slate-300 hover:bg-slate-200  text-black font-bold text-md  transition-all"
					placeholder="Summoner Name"
				/>

				<Button
					type="submit"
					className="absolute right-3 h-[75%] shadow-md p-3 font-semibold rounded-md bg-myRed"
				>
					Aiutami!
				</Button>
			</div>
		</form>
	);
};

export default SearchBar;
