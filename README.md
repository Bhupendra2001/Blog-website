# Project - Blog-website


# About

This project is basis of `Blog Website`. I am created the two Tables of  project first  is user and second is posts.
In this project basically i am created the user register and login page for the purpose of the authentication and authorisation.
After login user can create blog , get blog, and delete blog. Differnt type of blogs present in website , also user can filter the blogs by the given categories.


# Statement

-    Create the user & posts APIs.
-    Test the all  the APIs.
-    create the frontend or backend by the help of nodeJS , mysql, javascript, reactJS,  express,html , css.
-    After created  both  the technologies connect to each others or run on the server.
-    Used the mysql database for storing the data of user and post.



 # Tables

 - User  Table

|Field|Type|Null|Key|Default|Extra |
|---|---|---|---|---|---|
| 'id' | 'int' | 'NO' |'PRI' | NULL|'auto_increment'|
|'email'    |'varchar(100)'| 'NO'  | '' | NULL  | ''|
|'username' | 'varchar(25)'| 'NO'  | '' | NULL  | ''|
|'password' |'varchar(100)'| 'NO'  | '' | NULL  | ''|
|'img'      |'varchar(300)'| 'YES' | '' | NULL  | ''|



 - Posts Table
 
 
 | Field  | Type  | Null   |  Key  | Default | Extra |
 |---|---|---|---|---|---|
 |'id' |'int' | 'NO' |'PRI' | NULL |'auto_increment'|
 |'title' |'varchar(255)' | 'NO' | '' | NULL|  ''   |
 |'descp' |'varchar(1000)'| 'NO' | '' | NULL|  ''   |
 |'img'   |varchar(255)' |'NO'   | '' | NULL|  ''   |
 |'date'  |  'datetime'  | 'YES' | '' | NULL|  ''   |
 |'uid'   |    'int'     | 'NO'  |'MUL'|NULL|  ''   |
 |'cat'   |'varchar(255)'| 'YES' | '' | NULL|  ''   |
 



# User APIs


>POST  `/api/auth/register`

1.Create a user - atleast 5 users
2.Create a user document from request body.
3.Return HTTP status 201 on a succesful user creation. Also return the user document. The response should be a JSON object like this
4.Return HTTP status 400 if no params or invalid params received in request body. The response should be a JSON object like this



>POST  `/api/auth/login`

- Allow an user to login with their email and password.
- On a successful login attempt return a JWT token contatining the userId, . The response should be a JSON object like this
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this

>POST `/api/auth/logout`

Allow an user to logout the website and provide the login option.


# Blog APIs

>POST `/api/posts`
- Create a blog table from request body.Also store the userId in uid colum.
- Given the all details about the blog after create th blog data in mysql.
- Return HTTP status 201 on a successful blog creation.Also return the blog data.
- Create atleast 10 blogs for each user
- Return HTTP status 400 for an invalid request with a response body like [this](#Error Response structure)


>GET `/api/posts`
- Return all blogs in the MySQL posts table With status code 200 on successful fetch data 
like [this](#Response of postman)
- Also return blog data by different -different categories.
- If no data found in table return with status code 400 data not found like [this](#Error Response structure)

>Get `/api/posts/:id`
- Return blog data that matches the given id in path params with status code 201 on successful
fetch data.
-If any Errr so return Error message with status code 400 in response like [this](# Error Response structure)

>PUT `/api/posts/:id` 
- Return updated blog in MySQL database for successful updation but before updation check only which 
user are update blog that user are create post not any one.
- If any Error return with valid status code in response.

>DELETE `/api/posts/:id`
- Delete the blog in database by given id in path params also check before deletion that post
are matches the current user or not.
- After match return successfull deletion message in response.

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

|id|email|username|password|img|
|---|---|---|---|---|
|'8'| 'bhu42@gmail.com'| 'Bhupendra-Namdev'|'$2a$10$UJdmE0d1R9bRG.jGF82sJeBU9b0TL33/peLohIe.XCsI37/sPtetS'| NULL|

## blog

| id| title| descp| img| date| uid| cat|
|---|---|---|---|---|---|---|
|'1'| 'firste poste'| 'hello i am bhupendra'| 'https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766__340.jpg'| NULL| '8'| 'art'|


# Response of postman
```yaml
[
  {
    "id": 1,
    "title": "firste poste",
    "descp": "hello i am bhupendra",
    "img": "https://cdn.pixabay.com/photo/2022/12/16/01/41/balloons-7658766__340.jpg",
    "date": null,
    "uid": 8,
    "cat": "art"
  },
  {
    "id": 2,
    "title": "Second poste",
    "descp": "hello i am harsh",
    "img": "https://w0.peakpx.com/wallpaper/200/546/HD-wallpaper-stylish-sushant-is-wearing-white-shirt-in-black-background-sushant-singh-rajput-thumbnail.jpg",
    "date": null,
    "uid": 4,
    "cat": "cinema"
  },
  {
    "id": 3,
    "title": "third poste",
    "descp": "hello i am rahul ",
    "img": "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600",
    "date": null,
    "uid": 7,
    "cat": "science"
  },
  {
    "id": 4,
    "title": "forth poste",
    "descp": "hello i am shivam",
    "img": "https://images.pexels.com/photos/883757/pexels-photo-883757.jpeg?auto=compress&cs=tinysrgb&w=600",
    "date": null,
    "uid": 5,
    "cat": "design"
  },
  {
    "id": 5,
    "title": "fifth poste",
    "descp": "hello i am dellep",
    "img": "https://images.pexels.com/photos/1025804/pexels-photo-1025804.jpeg?auto=compress&cs=tinysrgb&w=600",
    "date": null,
    "uid": 12,
    "cat": "food"
  },
  {
    "id": 6,
    "title": "new food poste",
    "descp": "hello i am bhupendra",
    "img": "https://images.pexels.com/photos/3304057/pexels-photo-3304057.jpeg?auto=compress&cs=tinysrgb&w=600",
    "date": null,
    "uid": 8,
    "cat": "food"
  },
  {
    "id": 7,
    "title": "new art poste",
    "descp": "hello i am rahul",
    "img": "https://images.pexels.com/photos/39348/musician-trumpet-metal-snowman-39348.jpeg?auto=compress&cs=tinysrgb&w=600",
    "date": null,
    "uid": 7,
    "cat": "art"
  },
  {
    "id": 8,
    "title": "new design poste",
    "descp": "hello  i am dellep",
    "img": "https://cdn.pixabay.com/photo/2023/01/07/08/41/leaves-7702829__340.jpg",
    "date": null,
    "uid": 12,
    "cat": "design"
  },
  {
    "id": 9,
    "title": "new cinema poste",
    "descp": "hello i am rahul",
    "img": "https://media.gettyimages.com/id/499345857/photo/1999-portrait-of-akshay-kumar.jpg?s=612x612&w=0&k=20&c=tki4YfvSFzJ5pu1hprWxxl8tbAv8J3NKiKwGys2ni8k=",
    "date": null,
    "uid": 7,
    "cat": "cinema"
  },
  {
    "id": 10,
    "title": "new cinema pics",
    "descp": "hello i am shivam",
    "img": "https://media.gettyimages.com/id/526571308/photo/bollywood-actor-shraddha-kapoor-during-an-exclusive-interview-with-ht-cafe-for-an-upcoming.jpg?s=612x612&w=0&k=20&c=OCVET1RaNO9PXgZ_-WAfLJYPrVmYW5nnojNZN1768As=",
    "date": null,
    "uid": 5,
    "cat": "cinema"
  },

  
]
```


