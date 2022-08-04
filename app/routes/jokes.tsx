import type { LoaderArgs } from '@remix-run/node'
// import type { Joke } from '@prisma/client'

import { Link, Outlet } from '@remix-run/react'
import { useLoaderData } from '@remix-run/react'

import { db } from '~/utils/db.server'

export async function loader() {
	const data = {
		jokes: await db.joke.findMany({
			take: 5,
			select: { id: true, name: true },
			orderBy: { createdAt: 'desc' }
		})
	}
	return data
}

export default function JokesRoute() {
	const data = useLoaderData<typeof loader>()
	return (
		<>
			<h1>J🤪KES</h1>
			<hr />
			<section className="mt-4 grid gap-2 grid-cols-1 md:grid-cols-sidebar justify-start">
				<aside>
					<ul className="grid gap-1 grid-cols-1">
						{data.jokes.map(joke => (
							<li className="flex gap-1" key={joke.id}>
								<Link to={joke.id}>{joke.name}</Link>
							</li>
						))}
					</ul>
					<Link to="new" className="btn mt-4">
						Add your own
					</Link>
				</aside>
				<section>
					<Outlet />
				</section>
			</section>
		</>
	)
}
