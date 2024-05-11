consider exports as a object module

^4.19.2
4 -> major
19-> minor
0 -> patch

'^'accepts updates future minor version
'*' accepts updates future major version
'~' accepts updates future patch version




Response Status Codes

200 : Ok
201 : Created
202 : Accepted


300 : Moved Pemamently
302 : Found


400 : Bad Request
401 : Unauthorized
403 : Forbidden
404 : Not Found
405 : Method Not Allowed


500 : Internal Server Error
502 : Bad Gateway




Server is kind of funtion which runs once after every request.




ExpressJs --> 




Browser can only do get requests


req.body: This is a property in Express.js that holds the parsed request body of an incoming HTTP POST request. When a client sends data to the server, such as when submitting a form or sending JSON data, req.body allows you to access that data on the server side. It's particularly useful for handling data submitted through HTML forms or APIs.

req.query: This is a property in Express.js that holds the parsed query parameters of an incoming HTTP request. Query parameters are part of the URL after the ? symbol and are used to send data to the server. req.query allows you to access these parameters on the server side, making it easy to retrieve information sent via GET requests.

res.: This is the response object in Express.js that represents the HTTP response that the server sends back to the client. It contains various methods and properties that allow you to customize and send the response to the client. Some important methods include:

res.send(): Sends a response of various types, such as a string, object, or buffer, to the client.
res.json(): Sends a JSON response to the client.
res.status(): Sets the HTTP status code of the response.
res.redirect(): Redirects the client to a different URL.
res.render(): Renders a view template and sends it as the response.


Middleware  --> Server k entry and client k request k bich ka operations


Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.
If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.




app.use(express.json());   //Body Parser 

 In simple terms, it helps the server understand and work with the data sent from the client-side (like a web browser or a mobile app) in JSON format. Without it, the server wouldn't know how to interpret the incoming JSON data. So, it's like a translator between the client's JSON data and the server's understanding, making communication between them smoother.



express.urlencoded() 
in simple words: It's a middleware in Express.js that helps the server understand and process data sent from HTML forms by decoding it from a URL-encoded format.





express.static('public') in simple words: It serves static files, like HTML, CSS, and JavaScript, from the 'public' folder, making them accessible to users when they visit your website.





npm i morgan
Morgan is a middleware for Node.js that logs HTTP request details, like request method, URL, and response status code, making it easier to monitor and debug web server activity.




------------------------CRUD--------------------------
GET: Use GET to request data from a specified resource. It's like asking for information, such as viewing a webpage or fetching a list of products.

POST: Use POST to submit data to be processed to a specified resource. It's like sending information to be saved or acted upon, such as submitting a form or creating a new user account.

PUT: Use PUT when you want to completely replace an existing resource with a new one. It's like changing a book's entire content with a new version.

PATCH: Use PATCH when you want to partially update an existing resource. It's like making edits or corrections to a book without rewriting the whole thing.

DELETE: Use DELETE to request the removal of a specified resource. It's like asking the server to delete a file or record from a database, permanently removing it from the system.






---------------MVC------------------
------------Foolder-Structure---------
 
model - data business logic
view - show to be data
contollers - logic btw model and view


Models: This is where your application's data and business logic reside. Models represent the structure and behavior of your data, including database interactions, data validation, and business rules.

Views: Views are responsible for presenting data to the user. They contain the HTML, CSS, and client-side JavaScript code that define the user interface of your application. Views typically render data retrieved from the models.

Controllers: Controllers act as intermediaries between the models and views. They handle user input, process requests, and determine the appropriate response. Controllers invoke methods on models to retrieve or manipulate data and then pass that data to the views for display.