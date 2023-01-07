import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="hu">
			<Head>
				<meta
					name="description"
					content="Ahol a kérdésed válaszra talál."
				/>

				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
