# Project - Blog-website


# About

This project is basis of blog website. I am created the two fearture of  project first  is user and second is post.
In this project basically i am created the user register and login page for the purpose of the authentication and authorisation.
After login user can see diffrence type of blogs present in website and also user can filter the blogs by the given categories.




# Statement

(i)   Create the user & Blog APIs.
(ii)   Test the all  the APIs.
(iii)  create the frontend or backend by the help of nodeJS , mysql, javascript, reactJS, express,html , css.
(iv)   After created  both  the technologies connect to each others or run on the server.
(v)    Used the mysql database for storing the data of user and post.


User APIs

 POST /api/auth/register
Create a user - atleast 5 users
Create a user document from request body.
Return HTTP status 201 on a succesful user creation. Also return the user document. The response should be a JSON object like this
Return HTTP status 400 if no params or invalid params received in request body. The response should be a JSON object like this



POST  /api/auth/login
Allow an user to login with their email and password.
On a successful login attempt return a JWT token contatining the userId, . The response should be a JSON object like this
If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this

POST /api/auth/logout
Allow an user to logout the website and provide the login option.


