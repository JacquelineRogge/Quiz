//const idQuiz = URLSearchParams("selectedRadioValue");
const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const idQuiz = urlParams.get("id");
console.log(idQuiz);
// document.getElementById('idquiz').value = idQuiz;

const titreQuiz = urlParams.get("titre");
console.log(titreQuiz);

let questionId = 0;
//trouve le balise ou sera affiché le contenu
let form = document.getElementById("quizSelectione");

//titre du quiz
let h1TitreQuizSelectione = document.createElement("h1");
h1TitreQuizSelectione.setAttribute(
  "class",
  "text-center text-uppercase text-secondary"
);
let spanTitreQuizSelectione = document.createElement("span");
spanTitreQuizSelectione.setAttribute("id", "titreQuizSelectione");
//ici le idQuiz peut être different de sa position dans l'array. De cette façon le titre ne peut pas être chargé.
spanTitreQuizSelectione.innerHTML = "quiz: " + titreQuiz;
h1TitreQuizSelectione.appendChild(spanTitreQuizSelectione);
form.appendChild(h1TitreQuizSelectione);

//saute de ligne
let br1 = document.createElement("br");
let br2 = document.createElement("br");
form.appendChild(br1);
form.appendChild(br2);

fetch(
  "http://localhost:8080/TPRestAPI_war_exploded/api/system/quiz/" +
    idQuiz +
    "/questions/"
)
  .then((resp) => {
    return resp.json();
  })
  .then((dataQuizQuestions) => {
    console.log(dataQuizQuestions);

    for (let i = 0; i < dataQuizQuestions.length; i++) {
      questionId = dataQuizQuestions[i].questionId;
      fetch(
        "http://localhost:8080/TPRestAPI_war_exploded/api/system/questions/" +
          questionId +
          "/options"
      )
        .then((resp) => {
          return resp.json();
        })
        .then((dataOptions) => {
          console.log(dataOptions);

          //enonce question
          let divQuestion = document.createElement("div");
          divQuestion.setAttribute("class", "form-group");
          let divLabelQuestion = document.createElement("label");
          divLabelQuestion.setAttribute("for", "question");
          let bQuestion = document.createElement("b");
          bQuestion.innerHTML = dataQuizQuestions[i].enonce;
          let fildsetQuestion = document.createElement("fieldset");
          fildsetQuestion.setAttribute("class", "border");

          //options de reponse pour la question
          for (let j = 0; j < dataOptions.length; j++) {
            let divInputOption = document.createElement("div");
            divInputOption.setAttribute("class", "form-check");
            let inputOption = document.createElement("input");
            inputOption.setAttribute("class", "form-check-input");
            inputOption.setAttribute("type", "radio");
            inputOption.setAttribute("name", dataOptions[j].questionId);
            inputOption.setAttribute("value", dataOptions[j].optionId);
            let textOption = document.createElement("label");
            textOption.setAttribute("class", "form-check-label");
            textOption.innerHTML = dataOptions[j].texte;
            divInputOption.appendChild(inputOption);
            divInputOption.appendChild(textOption);
            fildsetQuestion.appendChild(divInputOption);
            divLabelQuestion.appendChild(bQuestion);
            divLabelQuestion.appendChild(fildsetQuestion);
            divQuestion.appendChild(divLabelQuestion);
            form.appendChild(divQuestion);
          }
        })
        .catch((error) => {
          console.log(error.toString());
        });
    }
  });

//sauvegarder les réponses de l'utilisateur
function saveOptionQuestion() {
  const keys = urlParams.keys(),
    values = urlParams.values(),
    entries = urlParams.entries();

  for (const key of keys) console.log(key);
  for (const value of values) console.log(value);
  for (const entry of entries) {
    console.log(`${entry[0]}: ${entry[1]}`);
  }

  localStorage.setItem("idquiz", idQuiz);
}

