const DATA = [
    {
        question: 'Какого цвета звезды на флаге Новой Зеландии?',
        answers:[
            {
                id: '1',
                value: 'Рош ха-Шана',
                correct: true,
            },
            {
                id: '2',
                value: 'Татьяна Станиславовна',
                correct: false,
            },
            {
                id: '3',
                value: 'Татьяна Владиславовна',
                correct: false,
            },
            {
                id: '4',
                value: 'Татьяна Владиславовна',
                correct: false,
            }
        ]
    },
    {
        question: 'Вопрос 2: Мой любимый мультик?',
        answers:[
            {
                id: '5',
                value: 'Вверх',
                correct: false,
            },
            {
                id: '6',
                value: '0',
                correct: true,
            },
            {
                id: '5',
                value: 'Вверх',
                correct: false,
            },
            {
                id: '6',
                value: 'Губка боб',
                correct: false,
            }
        ]
    },
    {
        question: 'Вопрос 2: Мой любимый мультик?',
        answers:[
            {
                id: '7',
                value: 'Вверх',
                correct: false,
            },
            {
                id: '8',
                value: 'Драко Малфой',
                correct: true,
            },
            {
                id: '5',
                value: 'Вверх',
                correct: false,
            },
            {
                id: '6',
                value: '0',
                correct: false,
            },
        ]
    },
    {
        question: 'Какого цвета звезды на флаге Новой Зеландии?',
        answers:[
            {
                id: '9',
                value: 'Татьяна Вячеславовна',
                correct: false,
            },
            {
                id: '10',
                value: 'Татьяна Станиславовна',
                correct: false,
            },
            {
                id: '11',
                value: 'Колибри',
                correct: true,
            },
            {
                id: '12',
                value: 'Татьяна Владиславовна',
                correct: false,
            }
        ]
    },
    {
        question: 'Какого цвета звезды на флаге Новой Зеландии?',
        answers:[
            {
                id: '1',
                value: 'Бразилия',
                correct: true,
            },
            {
                id: '2',
                value: 'Татьяна Станиславовна',
                correct: false,
            },
            {
                id: '3',
                value: 'Татьяна Владиславовна',
                correct: false,
            },
            {
                id: '4',
                value: 'Татьяна Владиславовна',
                correct: false,
            }
        ]
    },
    {
        question: 'Какого цвета звезды на флаге Новой Зеландии?',
        answers:[
            {
                id: '1',
                value: 'Татьяна Вячеславовна',
                correct: false,
            },
            {
                id: '2',
                value: 'Татьяна Станиславовна',
                correct: false,
            },
            {
                id: '3',
                value: 'Татьяна Владиславовна',
                correct: false,
            },
            {
                id: '4',
                value: 'Венера',
                correct: true,
            }
        ]
    },
    {
        question: 'Какого цвета звезды на флаге Новой Зеландии?',
        answers:[
            {
                id: '1',
                value: 'Черная жемчужина',
                correct: true,
            },
            {
                id: '2',
                value: 'Татьяна Станиславовна',
                correct: false,
            },
            {
                id: '3',
                value: 'Татьяна Владиславовна',
                correct: false,
            },
            {
                id: '4',
                value: 'Татьяна Владиславовна',
                correct: false,
            }
        ]
    },
    {
        question: 'Какого цвета звезды на флаге Новой Зеландии?',
        answers:[
            {
                id: '1',
                value: 'Татьяна Вячеславовна',
                correct: false,
            },
            {
                id: '2',
                value: 'I группа',
                correct: true,
            },
            {
                id: '3',
                value: 'Татьяна Владиславовна',
                correct: false,
            },
            {
                id: '4',
                value: 'Татьяна Владиславовна',
                correct: false,
            }
        ]
    },
    {
        question: 'Какого цвета звезды на флаге Новой Зеландии?',
        answers:[
            {
                id: '1',
                value: 'Татьяна Вячеславовна',
                correct: false,
            },
            {
                id: '2',
                value: 'Татьяна Станиславовна',
                correct: false,
            },
            {
                id: '3',
                value: 'Гюнтер',
                correct: true,
            },
            {
                id: '4',
                value: 'Татьяна Владиславовна',
                correct: false,
            }
        ]
    },
    {
        question: 'Какого цвета звезды на флаге Новой Зеландии?',
        answers:[
            {
                id: '1',
                value: 'Татьяна Вячеславовна',
                correct: false,
            },
            {
                id: '2',
                value: 'Татьяна Станиславовна',
                correct: false,
            },
            {
                id: '3',
                value: 'Гюнтер',
                correct: false,
            },
            {
                id: '4',
                value: '206',
                correct: true,
            }
        ]
    }
];

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');


const renderQuestions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
    .map((answers) =>`
        <li>
            <label>
                <input class="answer=input" type="radio" name=${index} value=${answers.id}>
                     ${answers.value}
                </label>
       </li>
    `)
    .join('');
    
    questions.innerHTML = `
    <div class="quiz-questions-item">
                <div class="quiz-questions-item__question">${DATA[index].question}</div>
                <ul class="quiz-questions-item__answers">${renderAnswers()}</ul>
            </div>`
};

const renderResults = () => {
    let content = '';

    const getClassname = (answers, questionIndex) =>{
        let classname = '';

        if (!answers.correct && answers.id === localResults[questionIndex]) {
            classname = 'answers--invalid';
        } else if (answers.correct) {
            classname = 'answers--valid';
        }

        return classname;
    }

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
        .map((answers) => `<li class=${getClassname(answers, questionIndex)}>${answers.value}</li>`)
        .join('');
    

    DATA.forEach((question, index) => {
        content += `
            <div class="quiz-results-item">
                <div class="quiz-results-item__question">${question.question}</div>
                <ul class="quiz-results-item__answers">${getAnswers(index)}</ul>
            </div>
        `; 
    })

    results.innerHTML = content;
};

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
    if(event.target.classList.contains('answer=input')) {
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;
    }
})

quiz.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn-next')) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;

        if (DATA.length === nextQuestionIndex){

            questions.classList.add('question--hidden')
            indicator.classList.add('indicator--hidden')
            results.classList.add('indicator--visible')
            btnNext.classList.add('btn-next--hidden')
            btnRestart.classList.add('btn-restart--visible')

            renderResults();
        } else {
            renderQuestions(nextQuestionIndex);
        }

        btnNext.disabled = true;
    }

    if(event.target.classList.contains('btn-restart')) {
        localResults = {};
        results.innerHTML = '';

        questions.classList.remove('question--hidden')
        indicator.classList.remove('indicator--hidden')
        results.classList.remove('indicator--visible')
        btnNext.classList.remove('btn-next--hidden')
        btnRestart.classList.remove('btn-restart--visible')

        renderQuestions(0);
    }
})

renderQuestions(0)
