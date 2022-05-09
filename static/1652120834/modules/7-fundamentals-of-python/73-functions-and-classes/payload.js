__NUXT_JSONP__("/modules/7-fundamentals-of-python/73-functions-and-classes", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP){return {data:[{path:af,_img:{}}],fetch:{"data-v-13708080:0":{module:{slug:ag,moduleid:73,title:ah,published:true,authors:["Danil Nagy"],toc:[{id:ai,depth:M,text:aj},{id:ak,depth:M,text:al},{id:am,depth:M,text:an},{id:ao,depth:M,text:ap},{id:aq,depth:3,text:ar}],body:{type:"root",children:[{type:b,tag:as,props:{id:ag},children:[{type:b,tag:p,props:{href:"#functions-and-classes",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:ah}]},{type:a,value:f},{type:b,tag:N,props:{id:ai},children:[{type:b,tag:p,props:{href:"#module-summary",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:aj}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"In this module, we will learn how to package code in custom Functions so it is easily reusable throughout our code. We will also learn how to create custom Classes, which define objects as containers of both data and behaviors, which is the basic building block of modern object-oriented programming (OOP)."}]},{type:a,value:f},{type:b,tag:N,props:{id:ak},children:[{type:b,tag:p,props:{href:"#introduction",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:al}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"So far, we have seen how we can use "},{type:b,tag:p,props:{href:O},children:[{type:a,value:"Variables"}]},{type:a,value:" in Python to store different kinds of data, and how we can use 'flow control' structures such as "},{type:b,tag:p,props:{href:O},children:[{type:a,value:"Conditionals and Loops"}]},{type:a,value:" to change the order or the way in which lines of code get executed. With only these tools we can already start to express some pretty complex logics. However, with only our current tools, any sufficiently complex script would start to get very long, since every time we wanted to do a certain process we would have to rewrite all of its code."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"This is where Functions and Classes come in. Functions allow us to encapsulate lines of code to create custom processes that can be reused anywhere throughout the script. Classes take this encapsulation one step further and wrap up not only a single process, but several related processes, as well as local variables that can keep track of the state of a particular instance of the Class."}]},{type:a,value:f},{type:b,tag:N,props:{id:am},children:[{type:b,tag:p,props:{href:"#functions",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:an}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"We have already seen and used some Functions such as "},{type:b,tag:g,props:{},children:[{type:a,value:"type()"}]},{type:a,value:T},{type:b,tag:g,props:{},children:[{type:a,value:"str()"}]},{type:a,value:U},{type:b,tag:g,props:{},children:[{type:a,value:"range()"}]},{type:a,value:" which are included within Python. But what are Functions really?"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"As in math, a Function is a basic structure that can accept inputs, perform some processing on those inputs, and give back a result. Let’s create a basic Function that will add two to a given number and give us back the result:"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:w}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:J}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:A}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:a,value:" result\n"}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"A function’s definition begins with the keyword "},{type:b,tag:g,props:{},children:[{type:a,value:z}]},{type:a,value:". After this is the function's name, which follows the same naming conventions as Variables. The Function's name is always followed immediately by a set of parenthesis. Inside the parenthesis you can place any number of input variables separated by commas ("},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:"), which will be passed to the function when it is called, and are available within the body of the function. If a function does not expect any inputs you still include the parenthesis, however in this case there won't be anything inside of them, for example: "},{type:b,tag:g,props:{},children:[{type:a,value:"my_function_name()"}]},{type:a,value:o}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"On its own, this code will only define what the Function does, but will not actually run any code. To execute the code inside the Function you have to call it somewhere within the script and pass it the proper inputs:"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Here we call the Function by writing its name and passing in '2' as the input. The result of the Function (the number '4') will then be passed into the "},{type:b,tag:g,props:{},children:[{type:a,value:"print()"}]},{type:a,value:" Function which will print '4' to the console."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"When you call a Function, you can either directly pass values or pass Variables that have values stored inside of them. For example, this code will call the Function in the same way:"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"var "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:w}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Here the value of the "},{type:b,tag:g,props:{},children:[{type:a,value:P}]},{type:a,value:" variable, which in this case is 2, is being passed to the "},{type:b,tag:g,props:{},children:[{type:a,value:H}]},{type:a,value:" Function, and is then available within that Function through the "},{type:b,tag:g,props:{},children:[{type:a,value:K}]},{type:a,value:" Variable. Notice that the names of the two Variables "},{type:b,tag:g,props:{},children:[{type:a,value:P}]},{type:a,value:" and "},{type:b,tag:g,props:{},children:[{type:a,value:K}]},{type:a,value:" don’t have to match. When a value gets passed to a Function it is reassigned to the Variable name declared in the Function definition, and the value is then available through that name."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"In this case we refer to "},{type:b,tag:g,props:{},children:[{type:a,value:P}]},{type:a,value:" as a "},{type:b,tag:I,props:{},children:[{type:a,value:"global variable"}]},{type:a,value:" since it stores the value '2' in the main script, while "},{type:b,tag:g,props:{},children:[{type:a,value:K}]},{type:a,value:" is a "},{type:b,tag:I,props:{},children:[{type:a,value:"local variable"}]},{type:a,value:" since it stores that value only within the body of that Function. In this way, Functions 'wrap up' specific tasks and all the data that is necessary to execute that task to limit the number of global variables necessary in the main script."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"The first line declaring the Function and its inputs ends with a colon ("},{type:b,tag:g,props:{},children:[{type:a,value:q}]},{type:a,value:"), which should be familiar by now, with the rest of the Function body inset from the first line. Optionally, if you want to return a value from the function back to the main script, you can end the function with the keyword "},{type:b,tag:g,props:{},children:[{type:a,value:x}]},{type:a,value:", followed by the value or variable you want to return. Once the function hits on a "},{type:b,tag:g,props:{},children:[{type:a,value:x}]},{type:a,value:" statement, it will skip over the rest of the body and return the associated value. This can be used to create more complex behavior within the function:"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"if"}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u003C"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"'Number must be positive!'"}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:w}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:J}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:A}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"-"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"You can see that in this case, if the input is less than zero the conditional will be met, which causes the first "},{type:b,tag:g,props:{},children:[{type:a,value:x}]},{type:a,value:" statement to run, skipping the rest of the code in the Function. However, if the number is equal or greater than zero, the conditional will be skipped causing the rest of the Function to run, ending with the second "},{type:b,tag:g,props:{},children:[{type:a,value:x}]},{type:a,value:" statement."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"You can pass any number of inputs into a Function, but the number of inputs must always match between what is defined in the Function, and what is passed into it when the Function is called. For example, we can expand our simple addition Function to accept two numbers to be added:"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:" input_number_2"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:w}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:J}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"You can also return multiple values by separateing them with a comma ("},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:") after the return statement. In this case, you also need to provide the same number of variables to which to assign the results of executing the Function. Let’s expand our Function to return both the addition and multiplication of two numbers:"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"two_numbers"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:" inputinput_number_2Number2"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n    addition "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:w}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:J}]},{type:a,value:" input_number_2\n    multiplication "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:w}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"*"}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:a,value:" addition"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:" multiplication\n\nval_1"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:" val_2 "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:w}]},{type:a,value:" twoNumbers"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"'addition: '"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:J}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,az]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"val_1"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"'multiplication: '"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:J}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,az]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"val_2"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Functions are extremely useful for creating efficient and readable code. Wrapping up sections of code into custom Functions allow you (and possibly others) to reuse code in a very efficient way, and also forces you to be explicit about the set of operations involved in accomplishing a certain task in your code, as well as the data needed execute it."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"You can see that the basic definition of Functions is quite simple, however you can quickly start to define more advanced logics, where Functions call each other and pass around inputs and returns in highly complex ways. You can even pass a Function as an input into another function and create Functions which call themselves. These are called "},{type:b,tag:I,props:{},children:[{type:a,value:"Recursive Functions"}]},{type:a,value:" which we will look at in a "},{type:b,tag:p,props:{href:O},children:[{type:a,value:"later module"}]},{type:a,value:o}]},{type:a,value:f},{type:b,tag:N,props:{id:ao},children:[{type:b,tag:p,props:{href:"#classes",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:ap}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"While Functions make our code more efficient and reuseble, they still assume that the code is meant to be executed a single time. This is typical in design applications, where code is used to create relatively short 'scripts' that are meant to be run when needed to accomplish a specific task. This type of programming is commonly referred to as "},{type:b,tag:I,props:{},children:[{type:a,value:"procedural programming"}]},{type:a,value:", since each passage of code defines a single procedure that is meant to be executed once and runs top to bottom until it is complete."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"For more complex modern programs, however, the program does not have a single specific behavior, but runs continuously and changes based on a user's input. Instead of just using Conditionals, Loops, and Functions to control the execution of the code, such programs rely on "},{type:b,tag:I,props:{},children:[{type:a,value:"objects"}]},{type:a,value:" that define the different functionalities of the program. As the program runs, these objects can interact with each other and change their behavior based on user input and other events that are happening within the program."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"This type of programming is called "},{type:b,tag:I,props:{},children:[{type:a,value:"object-oriented programming"}]},{type:a,value:aB},{type:b,tag:I,props:{},children:[{type:a,value:"OOP"}]},{type:a,value:", and is one of the major foundations of modern programming. The key to OOP are Classes, which defines the behavior of these objects. Although we will not get too deep into OOP within this sequence, creating custom Classes can be very useful for defining custom objects with specific behaviors even if we are using a mostly procedural approach. In a later module we will see how we can use Classes and OOP to create interesting design models based on "},{type:b,tag:p,props:{href:O},children:[{type:a,value:"agent-based behavior"}]},{type:a,value:o}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Like Functions, Classes are structures in our code that contain passages of code that define functionality that can be used in our main script. However, while Functions define a single set of procedures, Classes can define a set of related Functions that define the behavior of a particular object, as well as a set of local variables that keep track of the state of each instance of that object. Functions defined within a Class are commonly called "},{type:b,tag:$,props:{},children:[{type:a,value:"Methods"}]},{type:a,value:", while variables that are local to that Class are referred to as its "},{type:b,tag:$,props:{},children:[{type:a,value:"Properties"}]},{type:a,value:". Together, these variables and methods define the 'behavior' of the object, and dictate how it interacts with other objects in the programming 'environment'."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Like Functions, Classes are structures that define certain functionality, but don't do anything on their own. Just like a class needs to be called within the main script to run its code, we can use Class definions to create "},{type:b,tag:$,props:{},children:[{type:a,value:"Instances"}]},{type:a,value:" of the Class, which we can then use within our script."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Let’s think about this in everyday terms. For an animal, an example of a Method might be 'running'. Lots of things can run, so the definition of running as a Function would be general, and would not necessarily relate to who is doing the running. On the other hand, an example of a Class might be 'dog', which would have an instance of the 'running' Method, as well as other Methods related to being a dog such as 'eating' and 'barking'. It would also have a set of Properties for storing information about a given dog, such as its age, breed, or weight. Another class might be 'human', which would store different Properties, and would have its own particular version of Methods such as 'running' and 'eating' (but hopefully not 'barking')."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"You may not realize it, but we've already used Classes and Methods throughout this sequence. With the exception of a few basic data types such as "},{type:b,tag:g,props:{},children:[{type:a,value:"int"}]},{type:a,value:T},{type:b,tag:g,props:{},children:[{type:a,value:"float"}]},{type:a,value:U},{type:b,tag:g,props:{},children:[{type:a,value:"bool"}]},{type:a,value:", all data types we've worked with including "},{type:b,tag:g,props:{},children:[{type:a,value:"str (string)"}]},{type:a,value:T},{type:b,tag:g,props:{},children:[{type:a,value:"list"}]},{type:a,value:U},{type:b,tag:g,props:{},children:[{type:a,value:"dict (dictionary)"}]},{type:a,value:" are actually implemented as Classes that come built into Python. When we created "},{type:b,tag:g,props:{},children:[{type:a,value:"strings"}]},{type:a,value:aB},{type:b,tag:g,props:{},children:[{type:a,value:"lists"}]},{type:a,value:" we've actually been creating Instances of those Classes, and when we've run operations on them (for example calling "},{type:b,tag:g,props:{},children:[{type:a,value:".append"}]},{type:a,value:" to add an item to a list), we've actually been using the Methods implemented for those Classes."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"For the rest of this module we will look at how we can define custom Classes in Python and use them within our scripts to create Instances of the Class."}]},{type:a,value:f},{type:b,tag:"h3",props:{id:aq},children:[{type:b,tag:p,props:{href:"#defining-a-custom-class",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:ar}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Let's define a very basic class to see how it works. We will use an example of a counter, which will store a value, and increment that value based on user requests:"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aC}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,aD]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n\n    count "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:w}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:at}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ac}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:ad}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Notice we are again using the "},{type:b,tag:g,props:{},children:[{type:a,value:ac}]},{type:a,value:" shorthand to increment the value of the Instance's "},{type:b,tag:g,props:{},children:[{type:a,value:aJ}]},{type:a,value:" Property by the input value. To use this Class, we first need to create an Instance of it, which we will store in a variable just like any other piece of data:"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:g,props:{},children:[{type:a,value:aK},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:w}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Once we create an instance of a Class, we can run that Instance's Methods, and query it's internal Properties. Note that the general class definition is only a construct. All Properties defined within the Class only apply to a particular Instance, and the Methods can only be run as they relate to that Instance. For example:"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:g,props:{},children:[{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Right away, you will notice a few differences between how we define Functions and Classes. First of all, no variables are passed on the first line of the definition since the "},{type:b,tag:g,props:{},children:[{type:a,value:"Class"}]},{type:a,value:" keyword only defines the overall structure of the class. After the first line you will find a list of Variables which define the local Parameters of that Class, and keep track of data for individual Instances. After this you will have a collection of local Methods (remember 'Methods' are simply Functions that belong to a particular Class) that define the Class functionality. These Methods are defined just like Functions, except you see that the first input is always the keyword 'self'. This is a reference to the Instance that is calling the Method, and is always passed as the first input into each Method within a Class. This allows you to query the local Parameters of the Instance, as you can see us doing with the 'count' variable."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"To call a Method within a Class, you use the name of the variable that is storing the Instance, and use the dot ("},{type:b,tag:g,props:{},children:[{type:a,value:o}]},{type:a,value:") notation to call the Method. The dot is basically your way into the Instance and all of its data and functionality. It is also possible to use the dot syntax to query the local Parameters of the Class instance. For example, if we want to find the value of my_counter’s "},{type:b,tag:g,props:{},children:[{type:a,value:aJ}]},{type:a,value:" variable, we can just ask it by typing:"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:g,props:{},children:[{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:ad}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"However, this is discouraged because it reveals the true name of the local Parameters to the end user of the Class. In a production environment this would pose severe security risks, but it is considered bad practice even in private uses. Instead, you are encouraged to create special 'accessor' methods to pull Parameter values from the Instance, as we have done with the "},{type:b,tag:g,props:{},children:[{type:a,value:"get_count()"}]},{type:a,value:" method in the example above. Another advantage of this practice (which is called "},{type:b,tag:p,props:{href:"http:\u002F\u002Fbeginnersbook.com\u002F2013\u002F05\u002Fencapsulation-in-java\u002F",rel:[aM,aN,aO],target:aP},children:[{type:a,value:"encapsulation"}]},{type:a,value:") is that the code is easier to maintain. You are free to make any changes within the Class definition, including changing the names of the local Parameters and what they do. As long as you maintain the accessor functions and they return the expected result, you do not have to update anything in the main code that uses the Class."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"As far as naming Classes goes, you can follow the same rule as naming variables or functions, however the standard practice is to capitalize every word, including the first one."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Finally, in the example above every Instance we make of the Counter will start the counter at 0. However, what if we want to specify what this count should be when we make an Instance of the Class? For this we can implement the "},{type:b,tag:g,props:{},children:[{type:a,value:ae}]},{type:a,value:" method (those are two underscores on each side of "},{type:b,tag:g,props:{},children:[{type:a,value:"init"}]},{type:a,value:"):"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aC}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,aD]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"__init__"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:" initial_value"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:w}]},{type:a,value:" initial_value\n\n    "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ac}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:ad}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Now when we can create a new Instance of the counter we can pass in a starting value for the count:"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:g,props:{},children:[{type:a,value:aK},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:w}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"10"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\nmy_counter"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"#this should now return 12"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"When the Class Instance is initialized, it will automatically run the "},{type:b,tag:g,props:{},children:[{type:a,value:ae}]},{type:a,value:" Method, which will utilize any variable passed into it during initialization. "},{type:b,tag:g,props:{},children:[{type:a,value:ae}]},{type:a,value:" is one of a series of special methods that Classes can implement to achieve different functionality. The rest of these are beyond the scope of this module, but you can find a more thorough description of these, as well as other aspects of Classes, in the "},{type:b,tag:p,props:{href:"https:\u002F\u002Fdocs.python.org\u002F2\u002Ftutorial\u002Fclasses.html",rel:[aM,aN,aO],target:aP},children:[{type:a,value:"Python documentation"}]},{type:a,value:o}]},{type:a,value:f},{type:b,tag:as,props:{id:"challenge"},children:[{type:b,tag:p,props:{href:"#challenge",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:"Challenge"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Story generator - custom Class that stores information and generates a story with title and body."}]}]},dir:"\u002Fmodules\u002F7-fundamentals-of-python",path:af,extension:".md",createdAt:"2022-03-31T06:51:56.728Z",updatedAt:"2022-03-31T06:51:56.729Z"}},"data-v-9c60a860:0":{_error:{message:"Cannot read property 'forEach' of undefined",statusCode:500}}},mutations:[]}}("text","element","span","token","punctuation","\n","code","p","(",")","keyword"," ","operator","number",".","a",":","div","nuxt-content-highlight","pre","language-python","line-numbers","=","return",",","def","2","function","print","true",-1,"icon","icon-link","add_function","u","+","input_number","self",2,"h2","","var","add_to_counter","get_count","my_counter",", ",", and ","\n    result "," input_number ","\n    ","\n        ","string"," input_number_1 ","strong","\n        self","count ","+=","count\n","__init__()","\u002Fmodules\u002F7-fundamentals-of-python\u002F73-functions-and-classes","functions-and-classes","Functions and Classes","module-summary","Module Summary","introduction","Introduction","functions","Functions","classes","Classes","defining-a-custom-class","Defining a custom Class","h1","0"," result\n\n","add_two_numbers","input_number_1"," input_number_2\n    ","3","builtin","str"," or ","class","class-name","Counter","\n\n    "," input_value"," input_value\n            \n    "," self","count","my_counter "," Counter","nofollow","noopener","noreferrer","_blank")));