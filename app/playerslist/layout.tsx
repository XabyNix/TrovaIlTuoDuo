import Logo from "@/components/Logo";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SearchBar from "@/components/SearchBar/SearchBar";
import Link from "next/link";
import { ReactNode } from "react";

const playersListLayout = ({ children }: { children: ReactNode }) => {
	return (
		<MaxWidthWrapper className="py-3">
			<div className="flex gap-10">
				<Link href={"/"}>
					<Logo className=" text-4xl" />
				</Link>

				<SearchBar className="flex-1" />
			</div>
			{children}
		</MaxWidthWrapper>
	);
};

export default playersListLayout;
