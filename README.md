# Node.js CRUD app
Application based on:
* MySQL database
* Sequelize ORM
* Express.js framework
* Pug

## Get started
1. **Install packages**
```Bash
npm install
```
2. **Configure database**
`config.json`
```Javascript
{
  "development": {
    "username": "root", // your mysql username
    "password": "1234", // your mysql password
    "database": "info_db", // your mysql database name
    "host": "localhost",
    "dialect": "mysql"
  }
}

```
3. **Running Migrations**
To create the tables in database you need to run
```Bash
npx sequelize-cli db:migrate
```
To insert some data into the tables by default
```Bash
npx sequelize-cli db:seed:all
```
[Sequelize migrations documentation](https://sequelize.org/master/manual/migrations.html) 
