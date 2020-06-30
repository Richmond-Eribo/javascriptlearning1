const correctAnswers = ['A', 'B', 'A', 'A', 'A'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const Insult = document.querySelector('.insult');


let thisForm = form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0; 
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    //check Answers.
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index])
        score += 20;
    
    });

    //display Result
    // console.log(score);
    result.classList.remove('d-none');
    scrollTo(0,0);

    if (score < 50) {
        // Insult.classList.remove('d-none');
        // Insult.style.display = 'block';
        Insult.textContent = 'Motherfucking bitch, you are not worth';
    } else {
        // myBlessing.classList.remove('d-none');
        // myBlessing.style.display = 'block';
        Insult.textContent = "Well, you're my bitch congrat";
    
    };

    

    //animation of the score.
    let output = 0;
    const timer = setInterval( () => {
        result.querySelector('span').textContent= `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else{
            output++;
        }
    } ,10);

    

});


