## System integration mandatory 1

# Setup nodeJS

1. run the command: npm install mongoose express swagger-jsdoc swagger-ui-express
2. run the command: node app.js or nodemon app.js

For changing user that connect to the database go to, app.js.

# Documentation

For at accesing the application endpoints, use the uri: localhost:8080/docs for swagger documentation.

To manipulate the data in the database either use swagger or mongosh CLi (for connecting to the database with mongosh, use readme from database_docs_CLI).

To see the result of mandetory 1 go to folder -> screenshots

# Mongodb databasedump

1. run the command: mongodump --uri "mongodb+srv://<username>:<password>@cluster0.ppon8sk.mongodb.net/music_database" --out "~/Desktop/dump-2023-03-09"