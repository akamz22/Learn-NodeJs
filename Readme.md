consider exports as a object module

^4.19.2
4 -> major
19-> minor
0-> patch

^ accepts updates future minor version
* accepts updates future major version
~ accepts updates future patch version




Response Status Codes

200 : Ok
201 : Created
202 : Accepted


300 : Moved Pemamently
302 : Found


400 : Bad Request
401 :Unauthorized
403 :Forbidden
404 :Not Found
405 Method Not Allowed


500 : Internal Server Error
502 : Bad Gateway




Server is kind of funtion which runs once after every request.




ExpressJs --> 




Browser can only do get requests



Middleware  --> Server k entry and client k request k bich ka operations


Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.
If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.