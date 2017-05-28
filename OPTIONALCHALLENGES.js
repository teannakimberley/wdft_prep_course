/*
Exercise #1
Hello Name be your name
*/
var name = "Teanna";
console.log ("Hello " + name);

/*
Excercise #2
*/

var x = 1125;
var answer = x%2;
console.log (answer)

/*
Excercise #3
*/

var a = true;
var b = false;
var c = true;
console.log (a||b||c)

/*
Excercise #4
*/
var a = true;
var b = false;
var c = true;
console.log (a&&b&&c)

/*
Excercise #5
*/
console.log (10 - 3 * 5/4 + 202 % 3);
var answer = 1;
console.log (10 - (3 * (5/4) + (202 % 3)));
var answer = 2;

/* 
Excercise 6 
*/
var t = 12;
var e = "113";
var a = "1.12356";
var x1 = "hello world";

t2 = String(t);
e2 = parseInt(e);
a2 = parseFloat(a);
x = parseInt(x1);
console.log (parseInt("Hello world"));

//magic eightball

var numberofreplys = 4;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply1 = 'yes! this is a definate'
    var reply2 = 'ask me again a little later, i need to think about it'
    var reply3 = 'NO WAY! you must be crazy'
    var reply4 = 'hmmm... definately maybe'

function ask(numberofreplys) {
    r = random(1,numberofreplys)
    if (r=1) {
        console.log("yes! this is a definate");
    }
    else if (r=2) {
        console.log("ask me again a little later, i need to think about it")
    }
    else if (r=3) {
        console.log("NO WAY! you must be crazy");
    }
    else if (r=4) {
        console.log("hmmm... definately maybe");
    }
    else {
        console.log("That is not a valid question... ask again");
    }

    console.log(r);
};

ask(r);

//ask('reply4');


    /*
    write conditional logic here using if, else if, and else


    */

    console.log(choice);
}

ask();