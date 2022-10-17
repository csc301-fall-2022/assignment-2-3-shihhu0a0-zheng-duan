# assignment-2-3-shihhu0a0-zheng-duan
## Instructions to view the application
### URL of deployed application
https://thriving-baklava-1e7330.netlify.app/

### Application walkthrough video

https://user-images.githubusercontent.com/79493876/196084242-28f915d3-5537-4b5b-bb0d-e11a81f736bd.mp4

### Setting up to run the application locally
1. git clone the repo.
2. cd into backend directory. First run npm install, then run npm start.
3. In another terminal, cd into frontend directory. First run npm install, then run npm start.
4. The server will run on http://localhost:5001 by default. You can change the port number in .env file, if needed.  
5. The client-side app will run on http://localhost:3000. If port 3000 is already in use, it will prompt you to connect to another port. Simply type y.

#### Running test locally
The test infrastructure for the web application is set up using mocha and chai. The tests files are in the directory /test.
To run the tests, you should be in the root directory. Run npm test. Below shuold be the results you'll see.
![npm test results](https://user-images.githubusercontent.com/79493876/196078658-e3956099-a342-4311-b95c-6dfd1a5298f1.png)

Right now there are two tests. Both of them are integration tests that test whether the connections between the frontend and backend. but since the test infrastructure is already set up, it is easy to add more tests by adding test files into the test folder. Everytime, to run test, we just need to simply call npm test in the root directory. Since we have already set up automated deployment, to automate the test, we can set up a pipeline to automatically run the tests before every build. 

### Deployment
We deployed the backend and frontend separately.

The backend is deployed using heroku on another repository with automatic deployment when merged or pushed to main. (https://github.com/Zheng-Duan/Zheng-Duan-a-2-shihhu0a0-zheng-duan-server)
![automatic deploy](https://user-images.githubusercontent.com/79493876/196076008-4a4035ac-031e-4d80-b5c5-14259a125234.jpeg)
The frontend is deployed using netlify on another repository with automatic deployment when merged or pushed to main. (https://github.com/Zheng-Duan/a-2-shihhu0a0-zheng-duan-client)

### External resources and code usage
We watched online tutorial at https://www.youtube.com/watch?v=HptuMAUaNGk&t=3076s and its corresponding repo https://github.com/piyush-eon/React-shopping-cart-context-with-reducer as a reference of our frontend infrastructure and UI. 

We watched online tutorial at https://www.youtube.com/watch?v=mrHNSanmqQ4&t=6305s and its corresponding repo https://github.com/beaucarnes/restaurant-reviews as a reference of our MongoDB atlas setup and the review feature.

We watched online tutorial at https://www.youtube.com/watch?v=I7EDAR2GRVo for overall MERN stack infrastructure and backend frontend connection.

Added Features:
- calculate total price based on selected currencies and tax ratios
- filter products by attributes
- user sign-up and login
- light and dark theme (I forgot to demo it in the walkthrough video. It's the switch button in the top left corner)
- add/delete reviews
- save and load

## Report

### Web or mobile application
We chose to build a web application as a preparation for our project: also a web application. Besides both of us have no experience with building a mobile application but we already have some basic knowledge around web development frontend and backend technologies such as HTML, CSS and JavaScript. 

For the following tech stack choices, we not only considered the pros and cons of the technologies but also considered how much they fit our project.

### Frontend
For a web application, the frontend is usually built using HTML, CSS and JavaScript. C++ can also be used but its advatage is on system programming, which is not a focus of our application. We decided to look for different JavaScript framework options, which have pre-built structure and library, to save us some development time. Popular options are React, Vue, and Angular, which we are going to compare below.
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
        - our project partner prefers angular
    - cons: 
        - Typescript-based, which we are not familiared with yet
        - steepest learning curve
- Vue.js
    - pros: 
        - easiest to learn among all
        - offcial libraries include routing and state components
        - highly flexible
        - vue is the most popular js framework in China, and I am from China :)
    - cons: 
        - smaller ecosystem compared to React 

We eliminated Angular first. First, we have no exprience with Angular and TypeScript before. The learning curve of Angular will not meet the timeline of A2 submission. In addition, we are only building a simple web appliction, so we don't need a framework that's better for complicated applications. 

It is hard to choose between React and Vue. Both are lightweight and suitable for a simple application. Both can be integrated with Node.js and MongoDB as a tech stack, referred as MERN stack with React as frontend and MEVN with Vue as frontend. However, when researching online resources for both of these tech stacks, there are much more resources and supports available for MERN stack than MEVN so we decided to choose React as our frontend.

Note that react also works with typescript well, and I agree typescript is the future, and in fact, our group chose typescript for the project. However we only have 2 weeks for this assignment, so we finally picked javascript over typescript since typescript is new to us, and we prefer to spend more on functionalities. 

### Backend
There are too many options for the backend. We are both most familar with Python, have some experience with Java and some basic knowledge of JavaScript, so we narrowed down our options to Node JS with Express framework, Django and Java. 
- Node.js + Express.js
    - pros:
        - rich ecosystem 
        - same syntax as React
        - microservices architecture allows us to easily make adjustions to the features we want 
        - easier to build APIs to communicate with NoSQL database
        - my team's choice for the project
    - cons:
        -  low perforamance in heavy computation tasks
        -  since it is open srouce, some of the tools may be immature
- Python + Django
    - pros:
        - rich libraries that can make web development faster and easier 
        - good community with thorough documentations
        - high flexibility
        - it is in the scope of CSC309 
    - cons:
        - monolithic
        - unable to handle multiple requests simultaneously
- Java
    - pros:
        - supports multithreading 
        - memory management
        - both of us learned it in CSC207
    - cons: 
        - slightly longer to develope due to its regid definitions

Since we already decided to use MERN stack as our tech stack, Node.js is the only part that is not replaceable. Therefore, it is a clear choice that we are choosing Node.js with Express.js framework for our backend.

### Database
We want a database to store products' attributes and user info for the login feature, so I think we would better use a document-based non-relational database, also called an object-based system. This is the reason we eliminated MySQL/postgreSQL at the beginning: MySQL is a table-based system (or open-source relational database).

- MongoDB
    - pros:
        - platform-agnostic
        - users have high control of database
        - support document size up to 16MB
        - schema-free 
        - MongoDB integrates well with Node. js, making it easier to store, represent, and manipulate JSON data in web apps.
        - my team's choice for the project
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
The decision of which tech stack to use were made together looking at frontend, backend and database. The MERN stack (MongoDB, Express.js, React, Node.js) is a popular tech stack with many online resources available. In additionm it provides an end-to-end full stack development environment. Every line of code in mern full-stack development is written in JavaScript, developers can easily integrate and work with various frameworks, whether for the client-side or server-side. There are also testing tools avialable for this stack such as Jest and Mocha. Using this tech stack, we also only need to get more familiar with JavaScript instead of working on multiple languages. There are also a lot of online tutorials regarding building a full-stack app using MERN stack, making finding solutions to issues easier. 
