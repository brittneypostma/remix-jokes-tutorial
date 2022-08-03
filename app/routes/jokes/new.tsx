export default function New() {
	return (
		<div>
			<p>Add your own hilarious joke</p>
			<fieldset>
				<legend>Joke Form</legend>
				<form method="post">
					<div>
						<label>
							Name: <input type="text" name="name" />
						</label>
					</div>
					<div>
						<label>
							Content: <textarea name="content" />
						</label>
					</div>
					<div>
						<button type="submit">Add</button>
					</div>
				</form>
			</fieldset>
		</div>
	)
}
