
const correctAnswers = {
    q1: 'D',
    q2: 'C',
    q3: 'C',
    q4: 'B',
    q5: 'C'
};


document.getElementById('submit').addEventListener('click', function() {
    
    let score = 0;
    let totalQuestions = 5;
    let feedback = '';


    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        
  
        if (userAnswer) {
            if (userAnswer.value === correctAnswers[`q${i}`]) {
                score++;
                feedback += `<p>vraag ${i}: correct!</p>`;
            } else {
                feedback += `<p>vraag ${i}: fout. het juiste antwoord is ${correctAnswers[`q${i}`]}.</p>`;
            }
        } else {
            feedback += `<p>vraag ${i}: je hebt geen antwoord gekozen.</p>`;
        }
    }


    document.getElementById('result').innerHTML = `
        <h2>je score is ${score} van de ${totalQuestions}!</h2>
        ${feedback}
    `;
});
