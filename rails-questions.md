# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

`$ rails new app_app -d postgresql -T`

`rails new app_app` creates the app.

Rails comes with a default SQL database, adding the flags `-d postgresql -T` will replace the default data base with postgres
`-T` is added to skip adding the Minitest framework, because we'll be using Rspec instead.


2. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.
    Long Way(which I typed first and I am too stubborn to remove it after watching lecture again)
    1. In the terminal you would run `rails g migration AddForeignKeyToModel`
    2. Go to the app>db>migrate>newest_migration in your text editor
    3. In the `def change` method we add the logic of a `add_column :Model, :foreign_key, :integer`
    4. Back in the terminal run `rails db:migrate`
    5. You can go to the Schema file to confirm its being added or just do `Model.all` to see that the column was added.

    Short Way
    1.In the terminal you would run `rails g migration AddForeignKeyToModel foreign_key:integer`
    2.Run `rails db:migrate`

3. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

`$ rails g model Person, shirt:string pants:string shoes:string`

4. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

The model is in Pascal case and singular The tables are plural and in snake_case

5. A Rails application is going to have two models. One is called Library and one is called Book. A library will have many books and a book will belong to a library. Which model would contain the foreign key? What would the foreign key column be named?

Book will belong to Library and the book's foreign key column will be named Library_ID

6. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

Rails creates the schema file for us and it represents the current shape of the database. It should not be modified directly because it will  cause issues with the data that was migrated and will then conflict with data in future migrations.
