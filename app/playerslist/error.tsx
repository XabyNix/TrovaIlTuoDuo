"use client";

import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
	useEffect(() => {
		console.log(error.message);
	}, [error]);
	return <div className="mx-auto text-2xl">errore in /playerslist {error.message}</div>;
};
export default Error;
