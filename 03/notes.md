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

Web Tech
Request , Response (HTTP)

Request - Response Cycle

1. Sends a request to the server
2. the server recieves the request
3. the server process the request, typically using an application or program
4. The server returns a response to the client
5. The client recieves the response(data) and displays it 


Client -- Browser -- makes the request


callback
browser will display data (200, 404, 500)

-Promise (3 States) 
Pending
Resolved
Rejected

var Promise = new Promise(resolve, rejected)
.then(()=>{
    do something when it is success
})
.then(()=>{
    do something when it is rejected
})
.catch(()=>{
    do something in the catch
})

.then works like if-else

In order to make Asyn http request/resp in JS 
1. AJAX
2. Fetch API(uses or returns Promises)

in order to use the promise you have to consume the promise

Assigment use url and fetch API


async -- Async execution
await -- wait for the result of the execution of the method
Async and Await wraps the promises, Async and await result in a Promise