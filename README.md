# assignment-2-3-shihhu0a0-zheng-duan
## Report
### Web or mobile application
We chose to build a web application simply because both of us have no experience with building a mobile application but we already have some basic knowledge around web development technologies such as HTML, CSS and JavaScript. 

### Frontend
Some of the popular tech stacks for the frontend are the  JavaScript frameworks: React, Angular and Vue.
- React
    - pros: 
        - easier to learn compared to Angular
        - rich package ecosystem
        - most tutorials and manuals found 
    - cons: 
        - harder to learn if no JavaScript experience
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

We eliminated Angular first. First, we have no exprience with Angular before, the learning curve of Angular will not meet the timeline of A2 submission. In addition, we are only building a simple web appliction, so we don't need a framework that's better for complicated applications. 

It is hard to choose between React and Vue. Both are lightweight and suitable for a simple application. Both can be integrated with Node.js and MongoDB as a tech stacks, referred as MERN stack with React as frontend and MEVN with Vue as frontend. However, when researching online resources for both of these tech stacks, there are much more resources and supports available for MERN stack than MEVN so we decided to choose React as our frontend.

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
Because we wanted to add the functionality of login feature, we need a database to store user data. Since we are using Node.js as our backend. A NoSQL database will make it easier for us to store and manipulate JSON files. As JSON data can easily flow from the frontend to backend, the development process is faster and easier to debug. 
- MongoDB
    - pros:
        - NoSQL database
        - document-oriented so higher speed than relational database
        - easy integration with Node.js
    - cons:
        - need to manually code to join stored documents
        - limited data size

There are also other popular database such as MySQL and PostgreSQL, but they are both relational, which is harder to work with using Node and Express. Since our web application will not store a lot of data and we won't need to join the collections for our features, the cons of MongoDB won't have too much effects on our web application.

THe MERN stack (MongoDB, Express.js, React, Node.js) is chosen because it provides an end-to-end full stack development environment. There are also testing tools avialable for this stack such as Jest and Mocha. Using this tech stack, we also only need to get more familiar with JavaScript instead of working on multiple languages. There are also a lot of online tutorials regarding building a full-stack app using MERN stack, making finding solutions to issues easier. 
