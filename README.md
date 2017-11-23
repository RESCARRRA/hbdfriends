# EAT-DA-BURGER

:hamburger::hamburger::hamburger::hamburger::hamburger::hamburger::hamburger::hamburger::hamburger: 

[Check it out ~ Heroku](https://eat-da-burger-ryn.herokuapp.com/)

### Purpose

To create a _burger logger_ using MySQL, Node, Express, Handlebars and a homemade ORM (yum!). 

- _Uses Node and MySQL to query and route data in the app, and Handlebars to generate HTML._



### Overview

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app displays the burger on the page -- waiting to be devoured.

* Each burger in the Burger List area also has a `Devour!` button. When the user clicks it, the burger moves to the Devoured Panel on the same page.

* The app stores every burger in a MySQL database, whether devoured or not.

![alt text](https://github.com/rescarra/Burger/blob/master/eat-da-burg.png?raw=true).
_The burger names listed in the screenshot demo are from Bob's Burgers :clap:_



### Directory structure

All the recommended files and directories adhere to the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── [[assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   |── img
│   │   |    └── burger.png
|   |   └── js
|   |        └── burgers.js
│   └── test.html
│
├── server.js
│
└── [[views]]
    ├── index.handlebars
    └── [[ layouts ]]
        └── main.handlebars
```

#### Author
Ryn Escarra-Cypher
[@RESCARRA](https://github.io/rescarra)
