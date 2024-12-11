Assignments
Research them and provide example
document. 
querySelector()
querySelectorAll()

Complete To Do List
onclick="insertElement()"

Create a to do list application in javascript 
having the following features and functionality
1. should be able to add an item to the list
2. should be able to delete an item th the list
3. should be able to mark an item as complete (strike through of change color)
4 (optional) edit an item 



DOM -- Document Object Model

DOM Tree of Objects

Three flavors of DOM

API -Go back to video
convinient methods to manipulate 

Manipulation is not limited to changing. can add or remove
A;ways start by locating the element

get element by ID (single element)
get elemetns by tag name
get elements by class name


action --> event occurs --> event handler or event listener
document.getElementById("btn1").addEventListener("click",onClickHandler);

when events are nested the events get propogaded from the inner most element to the outer most
event bubbling 
capturing- from outermost to innermost
by default bubbling is set to false
third parameter in addEventListener is capturing
can be set to true