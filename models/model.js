global.fetch = require('node-fetch');
const quizApi = 'https://opentdb.com/api.php?amount=10';

module.exports = {
  getQuiz: async () => {
    const results = [];
    let answers = [];
    try {
      const response = await fetch(quizApi);
      const quizAPI = await response.json();
      quizAPI.results.forEach(result => {
        if (result.type === 'multiple') {
          answers = [result.correct_answer, ...result.incorrect_answers];
          //answers = result.incorrect_answers.concat;
          //answers.push(result.correct_answer);
          answers = arrayShuffle(answers);
        }
        else if (result.type === 'boolean'){
          answers = ['true','false'];
        }
        const quizData = {
          category: result.category,
          type: result.type,
          difficulty: result.difficulty,
          question: result.question,
          correct_answer: result.correct_answer,
          incorrect_answers: result.incorrect_answers,
          buttonValue: answers
         };
         results.push(quizData);
      });
      return results;
    } catch (error) {
      console.log(error);
    }
  },
};

//配列のランダムソート関数
const arrayShuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}