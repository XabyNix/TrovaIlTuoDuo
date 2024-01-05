"use client";

import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return <div className=" w-max mx-auto">{error.message}</div>;
};
export default Error;
