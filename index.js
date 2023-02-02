const correctAnswers = ["B", "D", "C", "A", "B"];
const khan = document.querySelector(".quizform");
const result = document.querySelector(".result")
const bag = document.querySelectorAll(".ques")
const reload = document.querySelector(".reload")
khan.addEventListener("submit", event => {
    

    let score = 0;
    const answers = [khan.q1.value, khan.q2.value, khan.q3.value, khan.q4.value, khan.q5.value];
 

answers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
       score += 1;
       bag[index].classList.add("correct")
    }else{
        bag[index].classList.add("wrong")
    }
});
// console.log(score);
scrollTo(0, 0)
result.classList.remove("result");
event.preventDefault();
result.querySelector("p").textContent = `You Scored ${score}/5!`;
reload.addEventListener("onClick",   (event) => {
   
    document.location.reload()
})

});

