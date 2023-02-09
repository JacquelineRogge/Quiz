let genererQuizList = () => {
	fetch('http://localhost:8080/TPRestAPI_war_exploded/api/system/notusedquizzes/')
		.then((resp) => {
			return resp.json();
		})
		.then((data) => {
			console.log(data);

			for (let i = 0; i < data.length; i++) {
				//trouve le balise ou sera affiché le contenu
				let form = document.getElementById('formListQuiz');

		
				let labelOptionQuiz = document.createElement('a');
				labelOptionQuiz.setAttribute('class', 'row');
				labelOptionQuiz.setAttribute('id', data[i].quizId);
				labelOptionQuiz.setAttribute('href', 'answersToQuiz.html?id=' + data[i].quizId + '&titre=' + data[i].titre);
				labelOptionQuiz.innerHTML = data[i].titre;
				form.appendChild(labelOptionQuiz);
			}
		})
		.catch((error) => {
			console.log(error.toString());
		});
};


