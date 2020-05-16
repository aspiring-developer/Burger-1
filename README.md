# Burger Selection App
A restaurant app that lets users to virtually create and modify their favorite burgers.
``` ..................................................................................... ```
  
### Screenshot of the functional app in localhost! 

![Burger App Working Screenshot Image](https://github.com/ssh1sharma/Burger/blob/b9a082fbcac00f1aeac47b307533e0eed5f2ec96/Screenshots/WORKING-APP.JPG)

### Screenshot of the deployed app in Heroku! 

![Burger App Working Screenshot Image](https://github.com/ssh1sharma/Burger/blob/7e7ef1261cd669a497dbd4982b69591c648e9665/Screenshots/FUNCTIONAL-APP.JPG)


### NOTES: 
- **Check development phase screenshots in "Screenshots" folder.**
- **GitHub Repository Link: https://github.com/ssh1sharma/Burger**
- **Deployed to the Web Link: https://burger-app-ss.herokuapp.com/**
- Note: This herokuapp link is Heroku deployment test version. Original version link will be updated after code clean-up! 

### Directory Map:
```
Burger
├── config
│    |── connection.js
│    └── orm.js  
├── controllers
|    └── burgers_controller.js 
├── db
|    |── schema.sql
│    └── seeds.sql
├── models
|    └── burger.js
│── node_modules (.gitignore)  
|── public
|    └── assets
|         |── css
│         |    └── burger_style.css
|         |── img
│         |    |── double_roast.jpg
|         |    |── spicy_chicken.jpg
│         |    └── veggie_patties.jpg
│         └── js
|              └── burgers.js
|── Screenshots
|── views
|    |── layouts
|    |    └── main.handlebars
|    |── partials
|    |    └── burgers
|    |         └── burger-block.handlebars
|    └── index.handlebars
|── .gitignore
|── desktop.ini (.gitignore)
|── package-lock.json
|── package.json
|── README.md
└── server.js
```