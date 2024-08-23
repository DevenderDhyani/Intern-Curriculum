
// // Create an XMLHttpRequest object
// const xhttp = new XMLHttpRequest();

// // Define a callback function
// xhttp.onload = function() {
//   // Here you can use the Data
// }

// // Send a request
// xhttp.open("GET", "ajax_info.txt");
// xhttp.send();
// Access Across Domains
// For security reasons, modern browsers do not allow access across domains.

// This means that both the web page and the XML file it tries to load, must be located on the same server.

// The examples on W3Schools all open XML files located on the W3Schools domain.

// If you want to use the example above on one of your own web pages, the XML files you load must be located on your own server.

// XMLHttpRequest Object Methods
// Method	Description
// new XMLHttpRequest()	Creates a new XMLHttpRequest object
// abort()	Cancels the current request
// getAllResponseHeaders()	Returns header information
// getResponseHeader()	Returns specific header information
// open(method, url, async, user, psw)	Specifies the request

// method: the request type GET or POST
// url: the file location
// async: true (asynchronous) or false (synchronous)
// user: optional user name
// psw: optional password
// send()	Sends the request to the server
// Used for GET requests
// send(string)	Sends the request to the server.
// Used for POST requests
// setRequestHeader()	Adds a label/value pair to the header to be sent
// XMLHttpRequest Object Properties
// Property	Description
// onload	Defines a function to be called when the request is received (loaded)
// onreadystatechange	Defines a function to be called when the readyState property changes
// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
// responseText	Returns the response data as a string
// responseXML	Returns the response data as XML data
// status	Returns the status-number of a request
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
// For a complete list go to the Http Messages Reference
// statusText	Returns the status-text (e.g. "OK" or "Not Found")




//note: xmlhttprequest is availble on node but it is availbale in chrome browser
function working(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET","./test.txt")
    xhttp.onload = function(){
        //document.getElementById("demo").innerHTML = this.responseText;
        console.log(this.responseText)
    }
    xhttp.send();
}
working()
// JSON Data (application/json): 
//      Use JSON.parse() to convert the response text into a JavaScript object.
// HTML Data (text/html): 
//      Directly set the response text as HTML content (e.g., using innerHTML).
// Plain Text Data (text/plain): 
//      Handle the response text as plain text.