import { LiveReload, Link, Links, Outlet } from '@remix-run/react'
import type { LinksFunction } from '@remix-run/node'
import styles from './styles/app.css'
import React from 'react'

export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: styles }]
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<Links />
				<title>Remix: So great, it's funny!</title>
			</head>
			<body>
				<Layout>
					<main className="m-4">
						<Outlet />
					</main>
				</Layout>
				<LiveReload />
			</body>
		</html>
	)
}

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<nav className="flex gap-2 m-4 text-lg text-white font-semibold transition-all">
				<Link to="/" className="hover:underline">
					Home
				</Link>
				<Link to="/jokes" className="hover:underline">
					Jokes
				</Link>
			</nav>
			{children}
		</>
	)
}
