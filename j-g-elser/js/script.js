const quizData = [
    {
        question: "1. Wo wurde Johann Georg Elser geboren?",
        answers: {
            a: "Hermaringen",
            b: "Herringsdorf",
            c: "Königsbronn"
        },
        correct: "a"
    },
    {
        question: "2. Als was arbeitete er 1938?",
        answers: {
            a: "als Hilfsarbeiter in einem Hüttenwerk",
            b: "als Hilfsarbeiter im Bau- und Möbeltischlerler",
            c: "Hilfsarbeiter in einer Armaturenfabrik"
        },
        correct: "c"
    },
    {
        question: "3. Was inspirierte Elser zum Wiederstand?",
        answers: {
            a: "der Widerstand der Weißen Rose",
            b: "der Auftrag zur Rüstungsproduktion der Nationalsozialisten und die Gedenkveranstaltungen der NSDAP zum Hitler-Putsch",
            c: "die Verfolgung der Juden."
        },
        correct: "b"
    },
    {
        question: "4. Was plante Georg Elser für seinen Widerstand?",
        answers: {
            a: "Er wollte Hitler im Bürgerbräu-Keller, wo er traditionell eine jährliche Rede zum 9. November hielt, ermordern.",
            b: "Er wollte Hitler im Bürgerbräu-Keller, wo er traditionell eine jährliche Rede zum 8. November hielt, ermordern.",
            c: "Er wollte Hitler seine Kriegsplänne im Bürgerbräu-Keller, wo er traditionell seine jährliche Rede hielt, aufdecken durch eine Rede."
        },
        correct: "b"
    },
    {
        question: "5. Wie wollte er dies erreichen?",
        answers: {
            a: "Er wollte Hitler im Bürgerbräu-Keller erschiessen.",
            b: "Er wollte eine Bombe im Bürgerbräu-Dachboden platzieren.",
            c: "Er wollte eine Bombe im Bürgerbräu-Keller platzieren."
        },
        correct: "c"
    },
    {
        question: "6. Woran ist er gescheitert?",
        answers: {
            a: "Hitler hatte den Raum jedoch wenige Minuten vor der Explosion verlassen um seinen Zug nach Berlin zu erwischen",
            b: "Hitler hat den Raum verlassen, um auf Toilette zu gehen.",
            c: "Hitler stand aushalb des Explosion-Radius."
        },
        correct: "a"
    },
    {
        question: "7. Wo wurde er verhaftet?",
        answers: {
            a: "An der Grenze zu Frankreich",
            b: "An der Grenze zu Belgien",
            c: "An der Grenze zur Schweiz"
        },
        correct: "c"
    },
    {
        question: "8. Wann Gestand Elser zum Sonderkommission Bürgerbräuattentat?",
        answers: {
            a: "19. November 1939",
            b: "13. November 1939",
            c: "23. November 1939"
        },
        correct: "b"
    },
    {
        question: "9. Was war seine Strafe?",
        answers: {
            a: "Er wurde ins KZ Sachsenhausen gebacht. Um 1944/45 wurde er ins KZ Dachau verlegt",
            b: "Er wurde hingerichtet.",
            c: "Er wurde zu lebenslänglich im Gefängnis verurteilt."
        },
        correct: "a"
    },
    {
        question: "10. Wann und wie ist er gestorben?",
        answers: {
            a: "Er wurde am 19. April 1945 erhangen im KZ Dachau.",
            b: "Er wurde am 09. April 1945 auf dem Hinrichtungsplatz erschossen",
            c: "Er starb am 10. April 1945 an einer Krankheit im KZ Dachau."
        },
        correct: "b"
    },
    {
        question: "11. Wieso wurde sein Widerstand erst später als solches annerkannt?",
        answers: {
            a: "Die NS haben seinen Widerstand verheimlicht.",
            b: "Die Menschen haben  ihn nicht annerkannt, weil er gescheitert hat.",
            c: "Es gab Gerüchte, dass Elser für den britischen Geheimdienst gearbeitet und die Menschen konnten nicht glauben, dass ein Einzelner eine solche Tat hätte planen und durchführen können. "
        },
        correct: "c"
    },
    {
        question: "12. Welche Auswirkung hatte sein Wiederstand auf den Krieg?",
        answers: {
            a: "Sein widerstand hatte keinen direkten Einfluss auf den Krieg, die NS ihn als auslandsfeindliche Propaganda  benutzten.",
            b: "Sein Widerstand inspirierte weitere Deutsche.",
            c: "Sein Widerstand verunsicherte Hitler."
        },
        correct: "a"
    },
    {
        question: "13. Was sagt sein Wiederstand über den Charakter des 2. Weltkrieges aus?",
        answers: {
            a: "Das alleiniger Widerstand nicht funktioniert.",
            b: "Das es selbst in einer Zeit des totalitären Terrors Menschen gab, die die Unmenschlichkeit des Regimes erkannten und versuchten, sie zu stoppen.",
            c: "Widerstand ist zwecklos."
        },
        correct: "b"
    }
];

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    const output = [];

    quizData.forEach((questionObj, index) => {
        const answers = [];
        for (let letter in questionObj.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${index}" value="${letter}" style="margin-right: 10px;">
                    ${letter}: ${questionObj.answers[letter]}
                </label><br>`
            );
        }
        output.push(
            `<div class="question"><strong>${questionObj.question}</strong></div>
             <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = document.querySelectorAll('.answers');
    let score = 0;
    const feedback = [];

    quizData.forEach((questionObj, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        const correctAnswer = questionObj.correct;

        if (selectedAnswer && selectedAnswer.value === correctAnswer) {
            score++;
            feedback.push(
                `<p>Question ${index + 1}: Correct! The answer is ${questionObj.answers[correctAnswer]}.</p>`
            );
            answerContainers[index].style.color = 'green';
        } else {
            feedback.push(
                `<p>Question ${index + 1}: Incorrect. The correct answer is ${questionObj.answers[correctAnswer]}.</p>`
            );
            answerContainers[index].style.color = 'red';
        }
    });

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `
        <p>You scored ${score} out of ${quizData.length}.</p>
        <div>${feedback.join('')}</div>
    `;
}

document.getElementById('submit').addEventListener('click', showResults);

buildQuiz();
