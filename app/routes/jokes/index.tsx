import type { LoaderArgs } from '@remix-run/node'
import { Link, Outlet } from '@remix-run/react'
import { useLoaderData } from '@remix-run/react'

import { db } from '~/utils/db.server'

export async function loader() {
	const count = await db.joke.count()
	const randomRowNumber = Math.floor(Math.random() * count)
	const [randomJoke] = await db.joke.findMany({
		take: 1,
		skip: randomRowNumber
	})

	const data = { randomJoke }

	return data
}

export default function JokesIndexRoute() {
	const data = useLoaderData<typeof loader>()
	return (
		<article className="grid gap-1">
			<h2>Here's a random joke:</h2>
			<p>{data.randomJoke.content}</p>
			<Link to={data.randomJoke.id}>{data.randomJoke.name}</Link>
		</article>
	)
}
