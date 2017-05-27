/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/

 for(var i=0;i<=100;i++){
    myArray.push(i);
    console.log([i]);
 }

/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
var z = '';
var x = '';
var myArray = [1=="#",2=="##",3=="###",4=="####",5=="#####",6=="######",7=="#######"];
 for(var i=1;i<=7;i++){z='';
for(var i2=1;i2<i;i2++) { z=z+'#'; }
    console.log(z);
 }