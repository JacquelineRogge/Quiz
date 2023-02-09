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
let nbrReponsesCorrects = 0;
let quantiteQuestions = 0;
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

let h2Reponses = document.createElement("h2");
h2Reponses.setAttribute("class", "text-center text-success");
let spanQtdReponses = document.createElement("span");
spanQtdReponses.innerHTML = "0 / ";
let spanQtdQuestions = document.createElement("span");
spanQtdQuestions.innerHTML = "0";
let spanText = document.createElement("span");
spanText.innerHTML = " bonnes réponses";
h2Reponses.appendChild(spanQtdReponses);
h2Reponses.appendChild(spanQtdQuestions);
h2Reponses.appendChild(spanText);
form.appendChild(h2Reponses);

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
    quantiteQuestions = dataQuizQuestions.length;
    console.log(quantiteQuestions);
    spanQtdQuestions.innerHTML = quantiteQuestions;
    for (let i = 0; i < dataQuizQuestions.length; i++) {
      questionId = dataQuizQuestions[i].questionId;
      let selectedOptionByUser = 0;
      fetch(
        `http://localhost:8080/TPRestAPI_war_exploded/api/system/quiz/${idQuiz}/question/${questionId}`
      )
        .then((resp) => {
          return resp.json();
        })
        .then((getquizquestion) => {
          console.log("getquizquestion selectedID");
          console.log(getquizquestion.selectedOptionID);
          selectedOptionByUser = getquizquestion.selectedOptionID;
        });

      fetch(
        "http://localhost:8080/TPRestAPI_war_exploded/api/system/questions/" +
          questionId +
          "/options"
      )
        .then((resp) => {
          return resp.json();
        })
        .then((dataOptions) => {
          console.log("dataoptions");
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
            inputOption.setAttribute("type", "radio");
            inputOption.setAttribute("name", dataOptions[j].questionId);
            inputOption.setAttribute("value", dataOptions[j].optionId);
            if (dataOptions[j].optionId == selectedOptionByUser) {
              inputOption.setAttribute("checked", "checked");
            }

            let textOption = document.createElement("label");
            // textOption.setAttribute('class', 'form-check-label');
            if (dataOptions[j].estVrai == true) {
              textOption.setAttribute("class", "form-check-label text-success");
            } else {
              textOption.setAttribute("class", "form-check-label text-danger");
            }
            textOption.innerHTML = dataOptions[j].texte;
            divInputOption.appendChild(inputOption);
            divInputOption.appendChild(textOption);
            fildsetQuestion.appendChild(divInputOption);
            divLabelQuestion.appendChild(bQuestion);
            divLabelQuestion.appendChild(fildsetQuestion);
            divQuestion.appendChild(divLabelQuestion);
            form.appendChild(divQuestion);

            //compter la quantite de reponses corrects de l'utilisateur

            let optionCorrect = dataOptions[j].estVrai;
            if (optionCorrect == true) {
              if (selectedOptionByUser == dataOptions[j].optionId) {
                nbrReponsesCorrects += 1;
                spanQtdReponses.innerHTML = nbrReponsesCorrects + " / ";
              }
            }
          }
        })

        .catch((error) => {
          console.log(error.toString());
        });
    }
  });
