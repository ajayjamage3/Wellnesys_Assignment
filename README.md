# Wellnesys_Assignment

- In this assignment, I followed several steps to build a web application using Node.js and the Express framework. 
- Here's a summary of the steps I followed:

#### Project Setup: 
I created a new directory for the project and initialized a new Node.js project using npm init -y. 
I installed the Express,nodemon,morgan packages as a dependency.

#### Server Setup: 
I created an server.js file and required the necessary modules (express,fs,morgan). 
I defined a constant for the server's port number and the file name for storing user information.

#### Middleware Setup: 
I added middleware file to handle common tasks and handle error. 
First, I implemented a logging middleware using morgan that logs data in logBook.log file. 
Then, I added the built-in express.json() middleware to parse JSON request payloads.

#### Route 1: 
I implemented the first route to handle GET requests for the root URL ("/"). 
The route sends a simple welcome message as the response.

#### Route 2: 
I implemented the second route to handle POST requests to "/users". 
The route reads the request body, appends the user information to the existing list of users in the JSON file, and saves the updated list back to the file. 
Appropriate error handling is implemented for file read/write operations.

#### Route 3: 
I implemented the third route to handle GET requests to "/users". 
The route reads the user information from the JSON file and sends it as the response.

#### Error Handling: 
I added error handling middleware in middleware.js file to handle any server errors that may occur during the request/response cycle. 
If an error occurs, the middleware logs the error and sends an appropriate error response.

#### Invalid Routes: 
I implemented a middleware to handle invalid routes. 
If a request reaches this middleware, it means that no route was matched. In such cases, a 404 error response is sent.


#### Challenges Faced: 
- Error Handling: 
Implementing error handling was challenging, especially when dealing with file read/write operations. 
I had to ensure that appropriate error responses are sent, and the server doesn't crash in case of errors.

#### Lessons Learned: 
- Middleware: 
Working with middleware functions helped me understand their significance in handling common tasks and controlling the request/response flow.
- Routing: 
Defining routes and handling different HTTP methods for each route was a valuable lesson. It allowed me to map specific functionalities to the appropriate routes.
Error Handling: Proper error handling is crucial for providing a reliable and user-friendly web application. I learned how to handle errors gracefully and send meaningful error responses.

#### Summary:
- dependencies:
    1. Express
    2. morgan
    3. nodemon
#### Required files:
    - Create logBook.log to store logs (Used createWriteStream so it will generate automatically)
    - Create users.json file to store users data
