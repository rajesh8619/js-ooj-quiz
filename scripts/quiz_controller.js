function Quiz(questions){

    this.score = 0;
    this.questionIndex = 0;
    this.questions = questions;
}

// to check the end of quiz

Quiz.prototype.isEnded = function(){

    return this.questions.length === this.questionIndex;
}

Quiz.prototype.getquestionIndex = function(){
    
        return this.questions[this.questionIndex];
    }

    Quiz.prototype.correctAnswer = function(ans){
        
            return this.questions[this.questionIndex].answer === ans;
        }
        
    

