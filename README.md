# Burger Selection App
A restaurant app that lets users to virtually create and modify their favorite burgers.
``` ..................................................................................... ```

### NOTES: 
- **Check development phase screenshots in "Screenshots" folder.**
- **GitHub Repository Link: https://github.com/ssh1sharma/Burger**
- **Deployed to the Web Link: https://burger-app-sh.herokuapp.com/**
  
### Screenshot of the functional app in localhost! 

![Burger App Working Screenshot Image](https://github.com/ssh1sharma/Burger/blob/b9a082fbcac00f1aeac47b307533e0eed5f2ec96/Screenshots/WORKING-APP.JPG)

### Screenshot of the deployed app in Heroku! 

![Burger App Working Screenshot Image](https://github.com/ssh1sharma/Burger/blob/7e7ef1261cd669a497dbd4982b69591c648e9665/Screenshots/FUNCTIONAL-APP.JPG)

### Installation
- This app is already deployed to Heroku, so no installation is required to use. Click the link provided above.

### Usage
- Create/add a burger by entering a name in the text field.
- Move the created burger to tray to serve.
- Return the burger if you do not want it to be served.
- Dump a burger if you don't like.

### Credits
- Pixabay images by Julia Nowak and Mark Tolentino

### License
- No license information available at this time.

### Contributing
- No contribution needed.

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