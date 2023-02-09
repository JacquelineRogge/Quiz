function saveOptionQuestion() {
	const queryString = window.location.search;
	console.log(queryString);
	const urlParams = new URLSearchParams(queryString);

	const keys = urlParams.keys(),
		values = urlParams.values(),
		entries = urlParams.entries();

	for (const key of keys) console.log(key);
	for (const value of values) console.log(value);
	console.log('keys');
	console.log(keys);
	let idQuiz = localStorage.getItem('idquiz');
	for (const entry of entries) {
		console.log(idQuiz);
		console.log(`${entry[0]}: ${entry[1]}`);

		saveRadioOption(idQuiz, entry[0], entry[1]);
	}
}

function saveRadioOption(idQuiz, idQuestion, idOption) {
	fetch(`http://localhost:8080/TPRestAPI_war_exploded/api/system/quiz/${idQuiz}/question/${idQuestion}/answer/${idOption}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			//idQuiz: idQuiz,
			//idQuestion: idQuestion,
			//idOption: idOption
		}),
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error('Network response was not ok');
		})
		.then((data) => console.log(data))
		.catch((error) => console.error(error));
}
