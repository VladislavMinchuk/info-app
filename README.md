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
