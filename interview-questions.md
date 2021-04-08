# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: Model View Controller. In Rails you first create models. You're able to View them and then Control them to make changes to the Model.

  Researched answer: Rails follows the MVC pattern in a way where it stores its Model, Views, and Controllers in separate files. Active Record is an example of the Model part of the MVC pattern. Model is also what stores the business logic. The controller retrieves data it needs from the model for the view. The controller is also the logical center for the application. It helps coordinate the interaction between the user, the views, and the model. The view is what the user sees and interacts with, once interacted with the controller will interact with the Model and the View.



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: Create Read Update and Delete. It is essentially the life cycle of data and how it is processed in an application. 

  Researched answer: CRUD is the model of how an application functions. Creating, Reading, Updating, and updating data in the app. CRUD is divided up into those four categories. If an app has this it will Create data that gets stored in the database. Then this data gets Read, Updated, and or Deleted. The logic for how that will get handled will get programmed into the app. In the end, the data created in the app may touch one or all these milestones at some point in the application's life. Not to get too meta here, but right now I'm in CRUD right now and so are you by Reading and maybe even Updating this document.



3. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is a database that is related to another data base. You essentially nest one database in another. Say a customer has multiple payment methods. You would have the customer in the Primary database and the nested one that would store more data for the primary database in it.

  Researched answer: The relational database is the database that is linked to another table. The relation database will typically have a column for a foreign key that will link up to the primary key of the main database. This is helpful when one item on the main database had many items that need to be stored in it. 
There are many other databases and they are included below:
  -Centralised database.
  -Distributed database.
  -Personal database.
  -End-user database.
  -Commercial database.
  -NoSQL database.
  -Operational database.
  -Cloud database.
  -Object-oriented database.
  -Graph database.



4. What are the 5 HTTP verbs? What are they important?

  Your answer: Post Get Put Patch and Delete. They are important because this is the life cycle of how data is handled on the internet.

  Researched answer: The five HTTP verbs are Post Get Put Patch and Delete. They are important because this is how requests get handled on the internet. An example of this is when you're interacting with a webpage,  you'll actually get to go through each of these verbs in the process of using it. Heck right now where this file is going to get Put, you (the reader and the almighty grader) will be Getting then Putting your feedback on this assessment.



5. What is object-relational mapping?

  Your answer: Also called ORM, it's a way of mapping one set of data to an object so that the object can store many objects in one object.

  Researched answer: ORM is a programming technique that lets us query and manipulate data from a database using an Object-Oriented paradigm. It allows us to use Ruby when we're updating databases instead of SQL. Cutting out the repetition of the FROM, WHERE, etc commands. 



6. What is a gem?

  Your answer: A gem is a dependency that is installed into a program or app to help run tasks.

  Researched answer: A gem is a library or chunk of code functionality. Gems contain ruby code that gets shared across the web. This allows developers to access these tools for their projects. One tool in particular that we used was RSpec, which is then used to test our Ruby code.



7. What are primary keys? Why are they important?

  Your answer:  It is a unique Key that has a corresponding value pair in the database. Each instance in the database is automatically assigned a Primary key. They are important for many reasons, one being that they are a way for us to retrieve our data of a particular instance by using methods like `.first` `.last` and `.find`. Also, when creating nested databases the child of the primary database will need to use the primary key to be attached to that data.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes - They are attempts to translate operations into HTTP verbs so that the actions between the server and the client can be executed
- JSON Is a programming language and is an open standard file format. It uses human readable test to store and transmit data.
- Validations - are used to ensure that the data that is being stored in your database is valid. It will run error checks to throw an error on bad data and prevent it from being saved.
- Strong params - Similar to validation, strong params allow you to have control over was information is allowed into your database. You can set restrictions on the controller methods to prevent bad data from getting in.
