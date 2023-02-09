function genererQuiz() {
	const titreQuiz = document.getElementById('inputTitreQuiz').value;
	const nbrFacile = document.getElementById('inputNbrFacile').value;
	const nbrMoyen = document.getElementById('inputNbrMoyen').value;
	const nbrDifficile = document.getElementById('inputNbrDifficile').value;

	//alert (titreQuiz + nbrFacile + nbrMoyen + nbrDifficile);

	let dataTitre = {
		titre: titreQuiz,
	};

	fetch('http://localhost:8080/TPRestAPI_war_exploded/api/system/quiz/' + titreQuiz, {
		method: 'POST',
		body: JSON.stringify(dataTitre),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((result) => {
			console.log(result);
			let idQuizCree = result.quizId;
			// alert(idQuizCree);
			createQuestions(idQuizCree, nbrFacile, 'Facile');
			createQuestions(idQuizCree, nbrMoyen, 'Moyen');
			createQuestions(idQuizCree, nbrDifficile, 'Difficile');
			redirectToAnotherPage('home.html');
		})
		.catch((error) => console.error(error));
}

function createQuestions(idQuiz, n, difficulty) {
	let data = {};

	fetch('http://localhost:8080/TPRestAPI_war_exploded/api/system/quiz/' + idQuiz + '/questions/' + n + '/' + difficulty, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((result) => console.log(result))
		.catch((error) => console.error(error));
}

function redirectToAnotherPage(url) {
	window.location.replace(url);
}
