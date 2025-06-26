const allQuestions = [
	{
		question: 'What does HTML stand for?',
		options: [
			'Hyper Trainer Marking Language',
			'HyperText Markup Language',
			'HyperText Markdown Language',
			'HighText Markup Language',
		],
		answerIndex: 1,
	},
	{
		question: 'Which programming language is known for its snake mascot?',
		options: ['Java', 'C++', 'Python', 'Ruby'],
		answerIndex: 2,
	},
	{
		question: 'What is the core function of an operating system?',
		options: [
			'Connect to the internet',
			'Manage hardware and software resources',
			'Compile code',
			'Play multimedia files',
		],
		answerIndex: 1,
	},
	{
		question: 'Which company developed the React JavaScript library?',
		options: ['Google', 'Microsoft', 'Facebook', 'Amazon'],
		answerIndex: 2,
	},
	{
		question: "What does 'CSS' stand for?",
		options: [
			'Cascading Style Sheets',
			'Computer Style Sheets',
			'Creative Style Syntax',
			'Colorful Style Standards',
		],
		answerIndex: 0,
	},
	{
		question: 'Which language is primarily used for styling web pages?',
		options: ['HTML', 'Python', 'JavaScript', 'CSS'],
		answerIndex: 3,
	},
	{
		question: 'Which of these is a JavaScript framework?',
		options: ['Django', 'Angular', 'Laravel', 'Flask'],
		answerIndex: 1,
	},
	{
		question: 'What does HTTP stand for?',
		options: [
			'HyperText Transfer Protocol',
			'HighText Transfer Protocol',
			'HyperText Translation Process',
			'Hyper Transfer Text Protocol',
		],
		answerIndex: 0,
	},
	{
		question: 'Which of the following is NOT a programming language?',
		options: ['Ruby', 'Python', 'Node.js', 'C#'],
		answerIndex: 2,
	},
	{
		question: 'What is Git used for?',
		options: [
			'Graphic design',
			'Database management',
			'Version control',
			'Web hosting',
		],
		answerIndex: 2,
	},
	{
		question:
			'Which technology is used for creating mobile apps with web technologies?',
		options: ['React Native', 'WordPress', 'MySQL', 'XAMPP'],
		answerIndex: 0,
	},
	{
		question: 'Which company owns Android?',
		options: ['Apple', 'Microsoft', 'Google', 'Samsung'],
		answerIndex: 2,
	},
	{
		question: 'Which file extension is commonly used for JavaScript files?',
		options: ['.js', '.java', '.py', '.html'],
		answerIndex: 0,
	},
	{
		question: 'Which one is a NoSQL database?',
		options: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
		answerIndex: 2,
	},
	{
		question: 'What does API stand for?',
		options: [
			'Application Program Interface',
			'Application Programming Interface',
			'Advanced Programming Interface',
			'Application Processing Interface',
		],
		answerIndex: 1,
	},
	{
		question: 'Which method is used to start a Java program?',
		options: ['mainMethod()', 'start()', 'run()', 'main()'],
		answerIndex: 3,
	},
	{
		question: 'What does the acronym SQL stand for?',
		options: [
			'Sequential Query Language',
			'Structured Query Language',
			'Standard Query List',
			'Server Query Logic',
		],
		answerIndex: 1,
	},
	{
		question: 'Which company created the TypeScript programming language?',
		options: ['Google', 'Facebook', 'Microsoft', 'IBM'],
		answerIndex: 2,
	},
	{
		question: 'Which HTML tag is used to create a hyperlink?',
		options: ['<link>', '<a>', '<href>', '<url>'],
		answerIndex: 1,
	},
	{
		question: 'Which property is used in CSS to change text color?',
		options: ['text-color', 'font-color', 'color', 'text-style'],
		answerIndex: 2,
	},
	{
		question: 'Which operator is used to assign a value in JavaScript?',
		options: ['=', '==', '===', ':'],
		answerIndex: 0,
	},
	{
		question: 'Which HTML tag is used to display an image?',
		options: ['<image>', '<pic>', '<img>', '<src>'],
		answerIndex: 2,
	},
	{
		question: 'What is a variable in programming?',
		options: [
			'A fixed number',
			'A name for a value that can change',
			'An error message',
			'A type of function',
		],
		answerIndex: 1,
	},
	{
		question: "What is the correct syntax to log 'Hello World' in the console?",
		options: [
			"log('Hello World')",
			"console.log('Hello World')",
			"print('Hello World')",
			"write('Hello World')",
		],
		answerIndex: 1,
	},
	{
		question: 'Which CSS property controls the size of text?',
		options: ['font-size', 'text-style', 'text-size', 'font-weight'],
		answerIndex: 0,
	},
	{
		question: 'Which keyword declares a constant in JavaScript?',
		options: ['let', 'var', 'const', 'define'],
		answerIndex: 2,
	},
	{
		question:
			'Which Git command is used to upload local changes to a remote repository?',
		options: ['git push', 'git upload', 'git commit', 'git add'],
		answerIndex: 0,
	},
	{
		question: 'Which language is best suited for data analysis?',
		options: ['HTML', 'C', 'Python', 'CSS'],
		answerIndex: 2,
	},
	{
		question: 'What does JSON stand for?',
		options: [
			'JavaScript Object Notation',
			'Java Syntax Object Notation',
			'JavaScript Online Notation',
			'Just Structured Object Notation',
		],
		answerIndex: 0,
	},
	{
		question: 'What does DOM stand for?',
		options: [
			'Document Object Model',
			'Data Object Management',
			'Digital Output Method',
			'Desktop Object Monitor',
		],
		answerIndex: 0,
	},
	{
		question: 'Which of these is a frontend JavaScript library?',
		options: ['Vue', 'Express', 'Django', 'Flask'],
		answerIndex: 0,
	},
	{
		question: 'What is a loop used for in programming?',
		options: [
			'To make the app colorful',
			'To repeat a set of instructions',
			'To decorate the UI',
			'To add graphics',
		],
		answerIndex: 1,
	},
	{
		question: 'What symbol starts a comment in JavaScript?',
		options: ['//', '/*', '#', '<!--'],
		answerIndex: 0,
	},
	{
		question: 'Which language runs in a web browser?',
		options: ['Python', 'C', 'Java', 'JavaScript'],
		answerIndex: 3,
	},
	{
		question: 'Which version control system is most widely used?',
		options: ['Git', 'Mercurial', 'SVN', 'CVS'],
		answerIndex: 0,
	},
	{
		question: 'Which type of loop will always run at least once?',
		options: ['while', 'do...while', 'for', 'repeat...until'],
		answerIndex: 1,
	},
	{
		question: 'Which of the following is not a JavaScript data type?',
		options: ['Boolean', 'Number', 'String', 'Float'],
		answerIndex: 3,
	},
	{
		question: 'What is used to structure the content of web pages?',
		options: ['CSS', 'HTML', 'JavaScript', 'Python'],
		answerIndex: 1,
	},
	{
		question: 'Which HTML tag creates a list?',
		options: ['<list>', '<ul>', '<div>', '<li>'],
		answerIndex: 1,
	},
	{
		question: 'Which command initializes a new Git repository?',
		options: ['git start', 'git init', 'git new', 'git create'],
		answerIndex: 1,
	},
	{
		question: 'Which function converts a string to an integer in JavaScript?',
		options: ['parseInt()', 'convert()', 'toInt()', 'parseInteger()'],
		answerIndex: 0,
	},
	{
		question: 'Which symbol is used for strict equality in JavaScript?',
		options: ['==', '===', '!=', '!='],
		answerIndex: 1,
	},
	{
		question: 'What does UX stand for?',
		options: [
			'User Xperience',
			'Unified Experience',
			'User Experience',
			'Ultimate Xperience',
		],
		answerIndex: 2,
	},
	{
		question: 'What type of language is SQL?',
		options: ['Procedural', 'Object-oriented', 'Query', 'Functional'],
		answerIndex: 2,
	},
	{
		question: 'Which tag is used for inserting a line break in HTML?',
		options: ['<br>', '<lb>', '<break>', '<new>'],
		answerIndex: 0,
	},
	{
		question: 'What is the default HTTP method for submitting forms?',
		options: ['GET', 'POST', 'PUT', 'FETCH'],
		answerIndex: 0,
	},
	{
		question:
			'Which tool is used to inspect and debug HTML and CSS in a browser?',
		options: ['CodePen', 'DevTools', 'Visual Studio Code', 'npm'],
		answerIndex: 1,
	},
	{
		question: 'Which JavaScript method adds an element to the end of an array?',
		options: ['add()', 'append()', 'push()', 'insert()'],
		answerIndex: 2,
	},

	{
		question: 'Which command is used to install packages in Node.js?',
		options: ['npm install', 'node get', 'install package', 'add npm'],
		answerIndex: 0,
	},
	{
		question: 'What does CPU stand for?',
		options: [
			'Central Process Unit',
			'Central Processing Unit',
			'Computer Personal Unit',
			'Central Processor Utility',
		],
		answerIndex: 1,
	},
	{
		question: 'Which language is primarily used for web development?',
		options: ['Python', 'Java', 'HTML', 'C++'],
		answerIndex: 2,
	},
	{
		question: 'What does RAM stand for?',
		options: [
			'Read Access Memory',
			'Random Access Memory',
			'Run Access Module',
			'Random Allocate Memory',
		],
		answerIndex: 1,
	},
	{
		question: 'Which company developed the Windows operating system?',
		options: ['Apple', 'Microsoft', 'IBM', 'Google'],
		answerIndex: 1,
	},
	{
		question: 'What is the primary function of an IP address?',
		options: [
			'To identify a device on a network',
			'To secure data transmission',
			'To store user credentials',
			'To increase network speed',
		],
		answerIndex: 0,
	},
];

let techQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = Array(5).fill(-1);

const quizQuestion = document.getElementById('question');
const quizOptions = document.getElementById('choices');
const results = document.getElementById('result');
const quizScore = document.getElementById('score');
const quizElement = document.getElementById('quiz');

// Shuffle array utility
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

// Select 5 random questions
function pickRandomQuestions() {
	techQuestions = shuffleArray([...allQuestions]).slice(0, 5);
}

// Display The Questions and Options to DOM
function displayQuestion() {
	const currentQuestion = techQuestions[currentIndex];
	quizQuestion.textContent = currentQuestion.question;

	quizOptions.innerHTML = '';

	currentQuestion.options.forEach((option, index) => {
		const li = document.createElement('li');
		li.innerHTML = ` <label for="radio">
						<input type="radio" name="radio" id="radio" value="${index}" ${
			userAnswers[currentIndex] === index ? 'checked' : ''
		}/> 
                        ${option}
					</label>`;

		quizOptions.appendChild(li);
	});
}

function getSelectedAnswer() {
	const answers = document.querySelectorAll('input[name ="radio"]');

	let selectedAnswer = -1;

	answers.forEach((answer, index) => {
		if (answer.checked) {
			selectedAnswer = parseInt(answer.value);
		}
	});

	return selectedAnswer;
	// console.log(selectedAnswer);
}

function nextQuestion() {
	const selectedAnswer = getSelectedAnswer();

	if (selectedAnswer === -1) {
		alert('Please Pick an option');
		return;
	}

	// Check if the user has already answered this question
	if (userAnswers[currentIndex] === -1) {
		// Increment score only if the selected answer is correct
		if (selectedAnswer === techQuestions[currentIndex].answerIndex) {
			score++;
		}
	}

	// Save the selected answer
	userAnswers[currentIndex] = selectedAnswer;

	currentIndex++;

	if (currentIndex < techQuestions.length) {
		displayQuestion();
	} else {
		showResult();
	}
}

function prevQuestion() {
	if (currentIndex > 0) {
		currentIndex--;
		displayQuestion();
	}
}

function showResult() {
	quizElement.classList.add('hidden');
	results.classList.remove('hidden');
	quizScore.textContent = `You scored ${score} out of ${techQuestions.length}!`;
}

function restartQuiz() {
	if (quizElement.classList.contains('hidden')) {
		currentIndex = 0;
		score = 0;
		userAnswers = Array(5).fill(-1); // Reset user answers
		pickRandomQuestions();
		quizElement.classList.remove('hidden');
		results.classList.add('hidden');
		displayQuestion();
	}
}

pickRandomQuestions();
displayQuestion();
