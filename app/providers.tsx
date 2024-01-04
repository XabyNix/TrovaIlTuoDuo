"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<NextUIProvider>
			<ThemeProvider attribute="class" defaultTheme="dark">
				{children}
			</ThemeProvider>
		</NextUIProvider>
	);
};
export default Providers;
