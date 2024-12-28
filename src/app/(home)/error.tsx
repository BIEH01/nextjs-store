"use client";

export default function Error({ reset }: ErrorPageProps) {
	return (
		<div>
			<h1>😕</h1>
			<p>Something went wrong</p>
			<button onClick={reset}>Try again</button>
		</div>
	);
}
