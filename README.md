# GraphQL learning 

This is a simple 2 hour course on LinkedIn Learning to give you a grasp of GraphQL. 
<<<<<<< HEAD
It uses MongoDB and sqlite3. 

## How to run

Before you start, you should also have MongoDB installed and running. You find the instructions here: https://docs.mongodb.com/manual/administration/install-community/
```
git clone https://github.com/tamasmagyarhunor88/graphql_learn.git
cd graphql_learn
npm install
npm start
```

MongoDB service on Ubuntu with systemctl 
```
sudo systemctl status mongod
sudo systemctl start mongod
sudo systemctl restart mongod
sudo systemctl stop mongod
```
=======

### Errors
when you see this:
```
/home/usernamehere/path/to/project/node_modules/whatwg-url/lib/encoding.js:2
const utf8Encoder = new TextEncoder();
^

ReferenceError: TextEncoder is not defined
```

do this:

https://stackoverflow.com/a/69287561

when you see this:

```
var sequelize = (0, _sequelize2.default)('database', null, null, {
^

TypeError: Class constructor Sequelize cannot be invoked without 'new'
```

change: 
```
// SQL
const sequelize = Sequelize('database', null, null, {
dialect: 'sqlite',
store: './alien.sqlite',
});
```

to:
```
// SQL
const sequelize = new Sequelize('database', null, null, {
dialect: 'sqlite',
store: './alien.sqlite',
});
```
