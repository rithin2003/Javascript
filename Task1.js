/*    
                                    JavaScript Basics


1.What is a variable in JavaScript?
--A variable is a named container used to store data values in a JavaScript program.

2.What are the three keywords used to create variables?
--var
  let
  const

3.Write the syntax to create a variable using var.
--var variable = value;

4.Write the syntax to create a variable using let.
--let variable = value;

5.Write the syntax to create a variable using const.
--const variable = value;

6.What is declaration?
--Declaration means creating a variable without assigning a value to it.

7.What is initialization?
--Initialization means assigning a value to a variable

8.What is reassignment?
--Reassignment means changing the existing value of a variable.

9.What is redeclaration?
--Redeclaration means declaring the same variable again using the same keyword within the same scope.

10.Which keyword allows redeclaration?
--var allows redeclaration.

11.Which keyword allows reassignment?
--var and let allow reassignment.

12.Which keyword requires initialization when declared?
--const requires initialization when declared.

13.Identify the declaration and initialization:
   let age = 25;
--Declaration: let age
  Initialization: age = 25

14.What is the value of a?
   var a = 100;
   console.log(a);
--100

15.Change the value of this variable to 200:
   let number = 100;
--let number = 100;
  number = 200;

16.What will be the output?
  var a = 10;
  console.log(a);
--10

17.What will be the output?
   var a = 10;
   a = 20;
   console.log(a);
--20

18.What will be the output?
  var a = 10;
  var a = 30;
  console.log(a);
--30

19.Write a var variable named name with the value "John".
--var name = "John";

20.Create a var variable named price with the value 500.
--var price = 500;

21.Reassign price from 500 to 1000.
--var price = 500;
  price = 1000;

22.What will be the output?
   var x = 50;
   x = 100;
   console.log(x);
--100

23.Can a var variable be reassigned?
--Yes, a var variable can be reassigned.

24.Can a var variable be redeclared?
--Yes, a var variable can be redeclared.

25.Write an example of var redeclaration.
--var a = 10;
  var a = 20;

26.Create a let variable named age with the value 25.
--let age = 25;

27.What will be the output?
   let age = 20;
   age = 30;
   console.log(age);
--30

28.Can a let variable be reassigned?
--Yes, a let variable can be reassigned.

29.Can a let variable be redeclared?
--No, a let variable cannot be redeclared.

30.Find the error:
  let name = "John";
  let name = "David";
--Error: name has already been declared.

31.Create a let variable called city and assign "Chennai".
--let city = "Chennai";

32.Change the value of city to "Salem".
--let city = "Chennai";
  city = "Salem";

33.What will be the output?
   let x = 10;
   x = 50;
   console.log(x);
--50

34.Write a let variable called salary with the value 25000.
--let salary = 25000;

35.Reassign salary to 30000.
--let salary = 25000;
  salary = 30000;

36.Create a const variable called pi with the value 3.14.
--const pi = 3.14;

37.Can a const variable be reassigned?
--No, a const variable cannot be reassigned.

38.Can a const variable be redeclared?
--No, a const variable cannot be redeclared.

39.What is wrong with this code?
   const age;
   age = 25;
--Error: A const variable must be initialized when it is declared.

40.What happens here?
   const price = 500;
   price = 1000;
--Error: Assignment to a const variable is not allowed.

41.Create a const variable called country with the value "India".
--const country = "India";

42.What will be the output?
   const x = 100;
   console.log(x);
--100

43.Which keyword should you use if the value should not be reassigned?
--const

44.What is the difference between let and const?
--let allows reassignment, but const does not allow reassignment.

45.What is the difference between var and const?
--var allows both reassignment and redeclaration, while const does not allow reassignment or redeclaration.

46.Write JavaScript code to print Hello World using console.log().
--console.log("Hello World");

47.Write JavaScript code to print the number 500 using console.log().
--console.log(500);

48.What is the purpose of console.warn()?
--console.warn() is used to display warning messages in the console.

49.What is the purpose of console.error()?
--console.error() is used to display error messages in the console.

50.What is the purpose of each?
   alert()
   prompt()
   confirm()
   document.writeln()
   console.log()
--alert() - Displays a message in a popup box.

  prompt() - Displays a popup box that allows the user to enter a value.

  confirm() - Displays a popup box with OK and Cancel buttons.

  document.writeln() - Writes content directly into the HTML document.

  console.log() - Displays messages or values in the browser console.

  */

                                    /* coding Task */

// 1.Create a variable for student name, age, and mark and print all three.
 
let studentName = "Rithin";
let age = 23;
let marks = 76;
console.log(studentName);
console.log(age);
console.log(marks);

// 2.Ask the user's name using prompt() and display it using alert().
let userName = prompt("Enter your name:");
alert(userName);

// 3.Ask the user's age using prompt() and print it using console.log().
let userAge = prompt("Enter your age:");
console.log(userAge);

// 4.Ask the user a question using confirm().
let answer = confirm("Do you want to go out?");
console.log(answer);

// 5.Ask the user's name and display it on the webpage using document.writeln().
let name = prompt("Enter your name:");
document.writeln(name);