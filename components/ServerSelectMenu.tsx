"use client";

import React, { useEffect, useState } from "react";
import {
	Select,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectGroup,
} from "./ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { serverList } from "@/lib/types";

const ServerSelectMenu = ({ className }: { className?: string }) => {
	const [region, setRegion] = useState<string>("EUW");

	const searchparam = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const param = new URLSearchParams(searchparam);

	useEffect(() => {
		param.set("region", region);
		router.push(`${pathname}?${param}`);
		console.log("ciao");
	}, [region]);

	return (
		<div className={className}>
			<Select defaultValue="EUW" value={region} onValueChange={(value) => setRegion(value)}>
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
