exports.getQuizData = () => {
  
  const got = require('got');
  
  
  (async () => {
  try { 
    
    const promise = await got('https://opentdb.com/api.php?amount=10'); 
    const response = promise.body;
    console.log(response)
    return response;

  } catch (error) { 

    console.log(error.response.body); 
   
  }
  
})()
}
