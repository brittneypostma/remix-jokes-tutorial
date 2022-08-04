import type { LoaderArgs } from '@remix-run/node'
// import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
// import type { Joke } from "@prisma/client";

import { db } from '~/utils/db.server'

export async function loader({ params }: LoaderArgs) {
	const joke = await db.joke.findUnique({
		where: { id: params.jokeId }
	})
	if (!joke) throw new Error('Joke not found')
	const data = { joke }
	return data
}

export default function JokeRoute() {
	const data = useLoaderData<typeof loader>()
	return (
		<article>
			<h2>Here's a hilarious joke:</h2>
			<p>{data.joke.content}</p>
			<Link to=".">{data.joke.name}</Link>
		</article>
	)
}
