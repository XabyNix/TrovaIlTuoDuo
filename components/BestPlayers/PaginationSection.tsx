"use client";

import { Pagination } from "@nextui-org/pagination";
import { parseAsInteger, useQueryState } from "next-usequerystate";
import { useRouter } from "next/navigation";

const PaginationSection = ({ total }: { total: number }) => {
	const [page, setPage] = useQueryState(
		"page",
		parseAsInteger.withDefault(1).withOptions({ shallow: false, scroll: true, history: "push" })
	);
	const router = useRouter();
	return (
		<div className=" mx-auto">
			<Pagination
				total={total}
				page={page}
				onChange={(page) => {
					setPage(page);
					router.refresh();
				}}
			/>
		</div>
	);
};

export default PaginationSection;
