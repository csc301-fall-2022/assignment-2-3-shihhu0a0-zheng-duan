# assignment-2-3-shihhu0a0-zheng-duan
## Instructions
### URL of deployed application
https://thriving-baklava-1e7330.netlify.app/

### Application walkthrough video

https://user-images.githubusercontent.com/79493876/196084242-28f915d3-5537-4b5b-bb0d-e11a81f736bd.mp4

### Setting up a local copy of the application
1. git clone the repo.
2. cd into frontend and backend folder separately.
3. For both folder, first do npm install, then npm start
4. The server will run on http://localhost:5001.

#### Running test locally
The test infrastructure for the web application is set up using mocha and chai. The tests files are in the directory /test.
To run the tests, you should be in the root directory. Run npm test. Below shuold be the results you'll see.
![npm test results](https://user-images.githubusercontent.com/79493876/196078658-e3956099-a342-4311-b95c-6dfd1a5298f1.png)

Right now there are two tests. Both of them are integration tests that test whether the connections between the frontend and backend. but since the test infrastructure is already set up, it is easy to add more tests by adding test files into the test folder. Everytime, to run test, we just need to simply call npm test in the root directory.

### Deployment
The backend is deployed using heroku on another repository with automatic deployment when merged or pushed to main.
![automatic deploy](https://user-images.githubusercontent.com/79493876/196076008-4a4035ac-031e-4d80-b5c5-14259a125234.jpeg)
The frontend is deployed using netlify on another repository with automatic deployment when merged or pushed to main.

### External resources and code usage
The frontend follows a similar infrastructure and a similar UI design as the project in this github repo: https://github.com/piyush-eon/React-shopping-cart-context-with-reducer

The backend follows a similar instrastructure to connect to MongoDB and create APIs for communicating with the frontend as the project in this github repo: https://github.com/beaucarnes/restaurant-reviews

Added Features:
- calculate total price based on currency and tax
- user sign-up and login
- light and dark theme
- add and view reviews
- save and load

## Report

### Web or mobile application
We chose to build a web application because both of us have no experience with building a mobile application but we already have some basic knowledge around web development frontend and backend technologies such as HTML, CSS and JavaScript. 

### Frontend
For a web application, the frontend is usually built using HTML, CSS and JavaScript. C++ can also be used but its advatage is on system programming, which is not a focus of our application. We decided to look for different JavaScript framework options, which have pre-built structure and library, to save us some development time. Some of the popular options are React, Vue, and Angular, which we are going to compare below.
- React
    - pros: 
        - easier to learn compared to Angular
        - rich package ecosystem
        - most tutorials and manuals found 
    - cons: 
        - harder to learn if no JavaScript experience compared to Vue
        - require extra modules and components
- Angular
    - pros: 
        - better for complicated applications and enterprise-ready
        - larger library
    - cons: 
        - Typescript-based, which we are not familiared with yet
        - steepest learning curve
- Vue.js
    - pros: 
        - easiest to learn among all
        - offcial libraries include routing and state components
        - highly flexible
    - cons: 
        - smaller ecosystem compared to React 

We eliminated Angular first. First, we have no exprience with Angular and TypeScript before. The learning curve of Angular will not meet the timeline of A2 submission. In addition, we are only building a simple web appliction, so we don't need a framework that's better for complicated applications. 

It is hard to choose between React and Vue. Both are lightweight and suitable for a simple application. Both can be integrated with Node.js and MongoDB as a tech stack, referred as MERN stack with React as frontend and MEVN with Vue as frontend. However, when researching online resources for both of these tech stacks, there are much more resources and supports available for MERN stack than MEVN so we decided to choose React as our frontend.

### Backend
There are lots of options for the backend. We are both most familar with Python, have some experience with Java and some basic knowledge of JavaScript, so we narrowed down our options to Node JS with Express framework, Django and Java. 
- Node.js + Express.js
    - pros:
        - rich ecosystem 
        - same syntax as React
        - microservices architecture allows us to easily make adjustions to the features we want 
        - easier to build APIs to communicate with NoSQL database
    - cons:
        -  low perforamance in heavy computation tasks
        -  since it is open srouce, some of the tools may be immature
- Python + Django
    - pros:
        - rich libraries that can make web development faster and easier 
        - good community with thorough documentations
        - high flexibility
    - cons:
        - monolithic
        - unable to handle multiple requests simultaneously
- Java
    - pros:
        - supports multithreading 
        - memory management
    - cons: 
        - slightly longer to develope due to its regid definitions

Since we already decided to use MERN stack as our tech stack, Node.js is the only part that is not replaceable. Therefore, it is a clear choice that we are choosing Node.js with Express.js framework for our backend.

### Database
Because we wanted to add the functionality of login feature, we need a database to store user data. Since we are using Node.js as our backend. A NoSQL database will make it easier for us to store and manipulate JSON files. Since JSON data can easily flow from the frontend to backend, the development process is faster and easier to debug. We look at different options of NoSQL database.
- MongoDB
    - pros:
        - platform-agnostic
        - users have high control of database
        - support document size up to 16MB
        - schema-free 
    - cons:
        - increased complexity due to mandatory user infrastructure and configuration management
- CouchDB
    - pros:
        - accepts queries via a RESTful HTTP API
        - schema-free
    - cons: 
        - much smaller user base than MongoDB

- DynamoDB
    - pros:
        - fast set up due to no dedicated infrastructure management need
    - cons:
        - production deployment limited to AWS
        - single item limited to 400KB

As we've already chosen to use the MERN stack, we were looking at other options to see if they are better so we can replace MongoDB with that database. After doing the comparisons, we didn't see any high advantages of using other NoSQL database over MongoDB, so we decided to use MongoDB as our database.

### Conclusion
The decision of which tech stack to use were made together looking at frontend, backend and database. The MERN stack (MongoDB, Express.js, React, Node.js) is a popular tech stack with many online resources available. Both frontend and backend are JavaScript based so we only need to get familiar with one programming language. In additionm it provides an end-to-end full stack development environment. There are also testing tools avialable for this stack such as Jest and Mocha. Using this tech stack, we also only need to get more familiar with JavaScript instead of working on multiple languages. There are also a lot of online tutorials regarding building a full-stack app using MERN stack, making finding solutions to issues easier. 
