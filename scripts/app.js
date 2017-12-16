(function(){

var questions = [

    new Questions("In which Year the Madras State was Renamed as Tamil Nadu",[1996,1969,1986,1997],1969),
    new Questions("'Dandia' is a popular dance of",["Punjab","Gujarat","Tamil Nadu","Maharashtra"],"Gujarat"),
    new Questions("The Centre for Cellular and Molecular Biology is situated at",["Patna","Jaipur","Hyderabad","New Delhi"],"Hyderabad"),
    new Questions("Where is the Railway Staff College located?",["Pune","Allahabad","Vadodara","Delhi"],"Vadodara"),
    new Questions("The famous Dilwara Temples are situated in",["Uttar Pradesh","Rajasthan","Maharashtra","Madhya Pradesh"],"Rajasthan")

];

var quizLs = new Quiz(questions);

function showResults(){

    var resultPage = document.getElementById("main");
    var resultHTML = '<h1>Result</h1>';
        resultHTML += '<h2> Your score is '+quizLs.score+'</h2>';

        resultPage.innerHTML= resultHTML;


}

function populate(){

    if (quizLs.isEnded()){

        showResults();
    } else{

    var questIonHtml = document.getElementById("question");
   questIonHtml.innerHTML = quizLs.getquestionIndex().question;
   var choices =  quizLs.getquestionIndex().choices;

   for ( var i = 0; i < choices.length; i++ ){
       var ele =   document.getElementById("choice"+i);
       ele.innerHTML = choices[i];
       clickAnswer("btn"+i,choices[i]);
   }
}
}
function clickAnswer(id,choiceguess){
    var choiceBtn = document.getElementById(id);
    choiceBtn.onclick = function(){
       
        if ( quizLs.correctAnswer(choiceguess) === true ){
            quizLs.score++;
        }
        quizLs.questionIndex++;
        populate();
        showProgress();

    }
}

function showProgress(){
    if (!quizLs.isEnded())
    document.getElementById("currentQues").innerHTML =  quizLs.questionIndex+1;

}

populate();

var totQues = document.getElementById("totalQuestions");
totQues.innerHTML = quizLs.questions.length;

})();