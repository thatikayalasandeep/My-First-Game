let arr = [1, 2, 3, 4] //images names in assets folder
var count = 0;
var img = document.createElement('img');

window.onload = displayQuestions();

const questions = [{
        question: arr[1],
        answer: 'Phoenix',
        options: [
            'Peacock',
            'phoenix',
            'Parrot',
            'Pegion'
        ]
    },
    {
        question: arr[2],
        answer: 'welcome',
        options: [
            'welcome',
            'Bye',
            'Hai',
            'Hello'
        ]
    },
    {
        question: arr[3],
        answer: 'AngryBird',
        options: [
            'Parrot',
            'Peacock',
            'Hen',
            'AngryBird'
        ]
    },
    {
        question: arr[4],
        answer: 'Books',
        options: [
            'Book',
            'Pen',
            'Pencil',
            'None of above'
        ]
    }
]

let value = JSON.stringify(questions); //JSON stands for javascript object notation
localStorage.setItem("question", value);

function displayQuestions() {


    let answer = document.getElementById("answer");
    let [first, second, third, fourth] = questions[count].options;

    answer.innerHTML = `
   img.src = 'assets/' + arr[count] + '.jpg' 
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;

}




function next() {
    img.src = 'assets/' + arr[count] + '.jpg';
    document.getElementById('questions').appendChild(img);
    if (count < arr.length) {
        count++;
    }
}

function start() {

}