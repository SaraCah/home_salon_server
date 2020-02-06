# Home Salon Redcliffe

[Github Link](https://github.com/Jyeb/home_salon_server)
[Deployed Website](https://homesalonredcliffe.herokuapp.com/)

## Purpose

The purpose of this assessment piece was to find a commercial client and develop an application utilising the appropriate technology stack. Subsequent to the completion of the task, the final product is intended to see purposeful use, and assist the business of the client in question.

Specifically, the chosen task was to perform a complete overhaul of an existing website for a client in the hair & beauty industry. The intent is to completely alter the UI/UX of the existing website in order to achieve a more modern aesthetic. On top of the improved experience for the clients customers, the website will also improve the experience for the business owner through the implementation of dynamic features.

Outside of the benefits for the client, the application will serve as a platform to further develop technical proficiency and showcase acquired skills to potential employers.

## Functionality/Features

The website which the business is currently using exists as a sequence of static web pages with minimal design features, and HTML text. In the creation of the new website, modern design principles will be applied with the use of a user friendly navigation bar, and made visually appealing through the use of CSS.

One of the major changes from the existing product would see the addition of an admin link which would redirect to a login page in which only the business owner would be granted access. Once logged in the owner would have the ability to perform the CRUD operations on the existing deals being sold, which in this case is a service. The application will possess the following Features.

- The client will have an admin account
- A client will have the ability to create a deal
- A client can edit existing deals
- A client can delete existing deals
- A customer view the available deals

## Target Audience

The target audience of the application is those who are seeking the services of the client the business is to be created for. It is also targeted at the client/business owner themselves to provide a more pleasing experience in the use of their website.
Potential employers in the tech space are also apart of the target audience as the website will act as a showcase of knowledge for the developers who created it.

## Tech Stack

MongoDB is a NoSQL database language used in the development of web applications. It will be used to store the information of the deals which are being sold, allowing the client to update, and alter them at will. The MongoAtlas cloud tool will be used as the management system responsible for handling the intricacies of the database. In order to create the server and API the express.js framework is to be used, it is one of the most popular web application frameworks built on JavaScript. Both of these technologies will use the node runtime environment which is designed to execute native JavaScript code outside of a web browser, and also permits the use of a large variety of existing functionality native the node extension. The React.js framework will be used for the front-end of the application in order to create the UI. Below is a list of the technology stack used in the development of the application.

- MongoDB
- Express.js
- React.js
- Node.js

Some of the other technologies and modules/packages used in the application were as follows:

- redux
  Redux is a JavaScript library used in the managment of application state. The library was used in the application to simplify the process of making API calls from the server to the frontend of the application.

- NPM
  npm was used as the package manager to install many various packages used throughout the application.

- express-validator
  Express validator is a small module used in express applications in order to sanitize and validate input.

- bcryptjs
  Bcrypt is an encryption software which is used to encrypt and decrypt password in a simplistic manor for maximizing security

- jsonwebtoken
  Jsonwebtoken is a module which produces authentication tokens to determine a number of security permissions within an application. It determines things such as whether a user, or in this case the admin is logged into their account. Using this information it is able to give the user the ability to perform certain tasks, such as access pages, or edit create and delete objects.

- config
  Config, as the name suggest is a module which assists in the managment of configuration files. These files include private information such as environment variables.

- mongoose
  The mongoose module is built for use with mongoDB. It's built in functionality and methods greatly simplify the process of interacting with mongoDB. Examples of these methods is the built in connect method which gives the ability to create a server connection primarily through the use of a single line of code.

- concurrently
  The concurrently package is used to allow the simultaneous running of script commands. It is used to allow both the client side server, and back-end server to run with a single command.

- request
  Request is designed to be a simplistic method to make http requests. It support modern syntax with regards to Async/Await, and is used extensively throughout the application.

- Materialui
  For styling, the MaterialUI css framework was used. It's specifity to react was the primary factor influencing this decision. The framework is designed in a way which has pre-built react components to greatly increase development speed

- Axios
  Axios was used to make http requests to the API endpoints created on the back end of the application.

## User Stories

[Link To Trello Board](https://trello.com/b/v73DMPfk/home-salon-redcliffe)

![user stories](./docs/Trello/User_Stories.png)

## Wire Frames

### Desktop

**Home**

![Home](./docs/wireframing/Home.png)

**Contact**

![Contact](./docs/wireframing/contact.png)

**Rates**

![Rates](./docs/wireframing/Rates.png)

**Images**

![Images](./docs/wireframing/images.png)

**Testimonials**

![Testimonials](./docs/wireframing/testimonials.png)

### Mobile

**Home**

![Home Mobile](./docs/wireframing/HomePhone.png)

**Contact**

![Contact Mobile](./docs/wireframing/ContactPhone.png)

**Rates**

![Rates Mobile](./docs/wireframing/RatesPhone.png)

**Images**

![Images Mobile](./docs/wireframing/ImagesPhone.png)

**Testimonials**

![Testimonials Mobile](./docs/wireframing/TestimonialsPhone.png)

## Project Management

Below is a list of tools we used on this project:

- wireframes.cc
- trello.com
- stackedit.io
- cava.com
- pinterest.com.au
- google docs
- Slack
- GitHub
- AWS
- Heroku
- Cypress

We used wireframes.cc to create the wireframes, stackedit for the README.md file, canva and pinterest was for design ideas, we created a dev log and shared it on google docs, this was to keep a log of all team or client meetings and who was working on what. Slack was essential for communication. GitHub was used for source control and we deployed using AWS for front end and Heroku for the backend. Cypress was utilised for all testing.

### Design Samples

![Moodboard](./docs/style_ideas/home_salon_moodboard.png)
![Fonts](./docs/style_ideas/fonts-1.png)
![Background](./docs/style_ideas/background-2.png)
![Website](./docs/style_ideas/website2.png)
![Website](./docs/style_ideas/website3.png)

### Slack Sample

![Slack](./docs/slack_example.png)

### Development Log

[Link to Dev Log](./docs/dev_log.docx)

## Dataflow Diagram

![Dataflow](./docs/Diagrams/Dataflow_Diagram.png)

## App Architecture Diagram

![AppArchitecture](./docs/Diagrams/App_Architecture_Diagram.png)
