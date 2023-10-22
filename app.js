//Javascript Assignment 5-7
//question 1
// var num1=+prompt('Enter Number 1')
// var num2=+prompt('Enter Number 2')

// var sum=num1+num2
// alert('Sum of '+num1+' and '+num2+' is '+sum)


//question 2
// var num1=+prompt('Enter Number 1')
// var num2=+prompt('Enter Number 2')
// var subs=num1-num2
// var mul=num1*num2
// var div=num1/num2
// var mod=num1%num2

// alert('Result of subtracting '+num2+' from '+num1+' is '+subs)
// alert('Result of multiplication '+num2+' from '+num1+' is '+mul)
// alert('Result of division '+num2+' from '+num1+' is '+div)
// alert('Result of modulus '+num2+' from '+num1+' is '+mod)


//question 3
// var value=3
// document.write('Value after variable declaration is undefined'+'<br>')
// document.write('Initial value: '+value+'<br>')
// var incre= ++value
// document.write('Value after increment is: '+incre+'<br>')
// var add=value+7
// document.write('Value after addition is: '+add+'<br>')
// var dec= --value
// document.write('Value after decrement is: '+dec+'<br>')
// var rem=value/3
// document.write('The reminder is: '+rem)

//question 4
// var movie=600
// var tickets=5
// var sum=movie*tickets
// document.write('Total cost to buy '+tickets+' tickets to a movie is '+sum+' PKR')


//question 5
// var num=4
// document.write('Multiplication table of '+num+'<br>')
// document.write('<br>')
// document.write(num+' x 1 = '+num*1+'<br>')
// document.write(num+' x 2 = '+num*2+'<br>')
// document.write(num+' x 3 = '+num*3+'<br>')
// document.write(num+' x 4 = '+num*4+'<br>')
// document.write(num+' x 5 = '+num*5+'<br>')
// document.write(num+' x 6 = '+num*6+'<br>')
// document.write(num+' x 7 = '+num*7+'<br>')
// document.write(num+' x 8 = '+num*8+'<br>')
// document.write(num+' x 9 = '+num*9+'<br>')
// document.write(num+' x 10 = '+num*10)

//question 6
// var C=12
// var F=(C * 9/5) + 32
// document.write(C+'°C is '+F+'°F'+'<br>')
// var F=68
// var C=(F - 32) * 5/9
// document.write(F+'°F is '+C+'°C')

//question 7
// var item1 = 560
// var item2 = 200
// var quant_item1=2
// var quant_item2=5
// var ship_charg=150
// var total=(item1*quant_item1)+(item2*quant_item2)+ship_charg

// document.write("<b>Shopping Cart</b>"+'<br>'+'<br>'+'<br>')
// document.write("Price of item 1 is "+item1+'<br>')
// document.write("Quantity of item 1 is "+quant_item1+'<br>')
// document.write("Price of item 2 is "+item2+'<br>')
// document.write("Quantity of item 2 is "+quant_item2+'<br>'+'<br>')
// document.write("Shipping Charges "+ship_charg+'<br>'+'<br>')
// document.write("Total cost of your order is "+total+" PKR")

//question 8
// var total=1200
// var marks=900
// var percent=(marks/total)*100

// document.write("<b>Marks Sheet</b>"+'<br>'+'<br>'+'<br>')
// document.write("Total marks : "+total+'<br>')
// document.write("Marks obtained : "+marks+'<br>')
// document.write("Percentage : "+percent+"%")

//question 9
// var dollars=10
// var riyals=25
// var rs=(dollars*104)+(riyals*28)

// document.write("<b>Currency in PKR</b>"+'<br>'+'<br>'+'<br>')
// document.write("Total currency in PKR : "+rs)

//question 10
// var num=3

// alert((((num+5)*10)/2))

//question 11
// var curr_year=2023
// var birth_year=2000
// var year=curr_year-birth_year
// document.write("<b>The Age Calculator</b>"+'<br>'+'<br>'+'<br>')
// document.write("Current Year : "+curr_year)
// document.write("Birth Year : "+birth_year+'<br>'+'<br>')
// document.write("They are either "+year+" or "+(year+1)+" years old")


//question 12
// var radius=12
// var circum=2*3.142*radius
// var area=3.142*radius*radius
// document.write("<b>The Geometrizer</b>"+'<br>'+'<br>'+'<br>')
// document.write("Radius of a circle : "+radius+'<br>')
// document.write("The circumference is : "+circum+'<br>')
// document.write("The area is : "+area)


//question 13
// var a=10

// document.write("Result:"+'<br>'+"The value of a is: "+a+'<br>'+"......................................"+'<br>')
// document.write("The value of ++a is: "+(++a)+'<br>')
// document.write("Now the value of a is: "+a+'<br>'+'<br>')
// document.write("The value of a++ is: "+(a++)+'<br>')
// document.write("Now the value of a is: "+a+'<br>'+'<br>')
// document.write("The value of --a is: "+(--a)+'<br>')
// document.write("Now the value of a is: "+a+'<br>'+'<br>')
// document.write("The value of a-- is: "+(a--)+'<br>')
// document.write("Now the value of a is: "+a+'<br>'+'<br>')

//question 14
// var a=2,b=1
// var result= (--a) //the value of a decrement a=1
// -(--b) //the value of b decrement b=0 and result=1
// +(++b) //the value of b increment b=1 and result=2 
// +(b--) //the value of b post decrement afte the execution of result value=3 and b=0

// document.write("a is "+a+'<br>')
// document.write("b is "+b+'<br>')
// document.write("result is "+result)

//question 15
var snack="Oreo biscuits"
var curr_age=23
var max_age=55
var snack_per_day=2

document.write("<b>The Lifetime Supply Calculator</b>"+'<br>'+'<br>'+'<br>')
document.write("Favourite Snack : "+snack+'<br>')
document.write("Current Age : "+curr_age+'<br>')
document.write("Estimated Maximum Age : "+max_age+'<br>')
document.write("Amount of snacks per day : "+snack_per_day+'<br>'+'<br>')
document.write("You will need "+((max_age-curr_age)*2)+" "+snack+" to last you until the ripe old age of "+max_age)


