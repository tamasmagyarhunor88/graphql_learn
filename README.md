# GraphQL learning 



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

do this: 

change 
```
// SQL
const sequelize = Sequelize('database', null, null, {
dialect: 'sqlite',
store: '/alien.sqlite',
});
```

to
```
// SQL
const sequelize = new Sequelize('database', null, null, {
dialect: 'sqlite',
store: '/alien.sqlite',
});
```
