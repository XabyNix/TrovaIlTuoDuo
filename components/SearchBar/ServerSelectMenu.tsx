"use client";

import React, { useTransition } from "react";
import {
	Select,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectGroup,
} from "../ui/select";
import { useQueryState } from "next-usequerystate";
import { serverList } from "@/config";

const ServerSelectMenu = ({ className }: { className?: string }) => {
	const [isLoading, startTransition] = useTransition();

	const [region, setRegion] = useQueryState("region", { shallow: false, startTransition });

	return (
		<div className={className}>
			<Select value={region ?? "EUW"} onValueChange={(value) => setRegion(value)}>
				<SelectTrigger className="bg-card w-max shadow-md font-bold border-none">
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
