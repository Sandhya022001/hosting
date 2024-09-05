// Hosting>>>>>  all the declarations in the page/scope are get shifted at the top of the page/scope.
   
   
   //Not-defind>>>>declaration is not declared yet as called not-defind...(showing error)

   //undefined>>>>>>declarationis declared but value not assign as called undefined....
   
  // var x; >>>  hoisting is happened. only declaration get shifted at the top of the scope
  
  console.log(x);
   
  var x=10;
  
  console.log(x);
  
 // console.log(y); >>> hoisting is not posiible here bcoz we haven't declare the declaration 
 