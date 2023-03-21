# Project - Blog-website


# About

This project is basis of blog website. I am created the two fearture of  project first  is user and second is post.
In this project basically i am created the user register and login page for the purpose of the authentication and authorisation.
After login user can create blog , get blog, and delete blog. Differnt type of blogs present in website , also user can filter the blogs by the given categories.


# Statement

(i)   Create the user & Blog APIs.
(ii)   Test the all  the APIs.
(iii)  create the frontend or backend by the help of nodeJS , mysql, javascript, reactJS, express,html , css.
(iv)   After created  both  the technologies connect to each others or run on the server.
(v)    Used the mysql database for storing the data of user and post.



 # Tables

 - User  Table
```yaml
|Field|Type|Null|Key|Default|Extra |
|---|---|---|---|---|---|
| 'id' | 'int' | 'NO' |'PRI' | NULL|'auto_increment'|
|'email'    |'varchar(100)'| 'NO'  | '' | NULL  | ''|
|'username' | 'varchar(25)'| 'NO'  | '' | NULL  | ''|
|'password' |'varchar(100)'| 'NO'  | '' | NULL  | ''|
|'img'      |'varchar(300)'| 'YES' | '' | NULL  | ''|
```


 - Posts Table
 
 ```yaml
 | Field  | Type  | Null   |  Key  | Default | Extra |
 |---|---|---|---|---|---|
 |'id' |'int' | 'NO' |'PRI' | NULL |'auto_increment'|
 |'title' |'varchar(255)' | 'NO' | '' | NULL|  ''   |
 |'descp' |'varchar(1000)'| 'NO' | '' | NULL|  ''   |
 |'img'   |varchar(255)' |'NO'   | '' | NULL|  ''   |
 |'date'  |  'datetime'  | 'YES' | '' | NULL|  ''   |
 |'uid'   |    'int'     | 'NO'  |'MUL'|NULL|  ''   |
 |'cat'   |'varchar(255)'| 'YES' | '' | NULL|  ''   |
 ```



# User APIs


>POST  /api/auth/register

1.Create a user - atleast 5 users
2.Create a user document from request body.
3.Return HTTP status 201 on a succesful user creation. Also return the user document. The response should be a JSON object like this
4.Return HTTP status 400 if no params or invalid params received in request body. The response should be a JSON object like this



>POST  /api/auth/login
1.Allow an user to login with their email and password.
2.On a successful login attempt return a JWT token contatining the userId, . The response should be a JSON object like this
3.If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this

>POST /api/auth/logout
Allow an user to logout the website and provide the login option.


## Testing 
- To test thes apis create a new collection in postman named Blog website 
- Each api should have a new request in this collection
- Each request in the collection should be rightly named. Eg  Create user , Create post, get post etc
 
## Response

### Successful Response structure
```yaml
{
  status: true,
  message: 'Success',
  data: {

  }
}
```
### Error Response structure
```yaml
{
  status: false,
  message: ""
}
```
##  MYSQL  Databse Collections
## user
```yaml
|id|email|username|password|img|
|---|---|---|---|---|
|'8'| 'bhu42@gmail.com'| 'Bhupendra-Namdev'|'$2a$10$UJdmE0d1R9bRG.jGF82sJeBU9b0TL33/peLohIe.XCsI37/sPtetS'| NULL|

```



