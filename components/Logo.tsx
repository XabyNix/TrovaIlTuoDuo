import React from "react";
import { Julee } from "next/font/google";
import { cn } from "@/lib/utils";

const julee = Julee({ weight: ["400"], subsets: ["latin"] });

const Logo = ({ className }: { className?: string }) => {
	return (
		<div>
			<h1 className={cn(julee.className, className)}>
				Mbare
				<br />
				<span className="text-myRed">Finder</span>
			</h1>
		</div>
	);
};

export default Logo;
