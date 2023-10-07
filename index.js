function receivesAFunction(callback) {
    
    callback();
  }
  
  
  function myCallbackFunction() {
    console.log("Callback function called!");
  }
  
  receivesAFunction(myCallbackFunction);
  function returnsANamedFunction() {
    return "This is a named function.";
  }
  
  const result = returnsANamedFunction();
  console.log(result); 
  
  function returnsAnAnonymousFunction() {

    return function() {
      console.log("This is an anonymous function.");
    };
  }
  
  
  const anonymousFunc = returnsAnAnonymousFunction();
  
  
  anonymousFunc(); 
  