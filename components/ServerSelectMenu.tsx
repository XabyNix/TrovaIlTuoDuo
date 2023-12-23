"use client";

import React from "react";
import {
	Select,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectGroup,
} from "./ui/select";
import { useQueryState } from "next-usequerystate";
import { serverList } from "@/config";

const ServerSelectMenu = ({ className }: { className?: string }) => {
	const [region, setRegion] = useQueryState("region");

	return (
		<div className={className}>
			<Select
				defaultValue="EUW"
				value={region || undefined}
				onValueChange={(value) => setRegion(value)}
			>
				<SelectTrigger className="w-max font-bold border-none">
					<SelectValue />
				</SelectTrigger>

				<SelectContent>
					<SelectGroup>
						{serverList.map(({ region }) => (
							<SelectItem key={region} value={region}>
								{region}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export default ServerSelectMenu;
