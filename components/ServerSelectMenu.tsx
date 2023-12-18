"use client";

import React, { useContext, useState } from "react";
import {
	Select,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectGroup,
} from "./ui/select";
import { selectedServerContext } from "./SearchSection";

const ServerSelectMenu = ({ className }: { className?: string }) => {
	//const [selectedServer, setSelectedServer] = useState("EUW");

	//const servers = ["BR", "LAS", "NA", "EUNE", "LAN", "OCE", "RU", "TP", "JP", "EUW"];
	const regionContext = useContext(selectedServerContext);
	return (
		<div className={className}>
			<Select
				defaultValue="EUW"
				value={regionContext.region}
				onValueChange={(value) => regionContext.set(value)}
			>
				<SelectTrigger className="w-max font-bold border-none">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{regionContext.list.map(({ region }) => (
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
