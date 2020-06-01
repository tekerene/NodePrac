const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const hashPassword = require('./utils/crytoHash');
const crypto = require('crypto');
const app = express();


//To  Sopport URL-encoded bodies
app.use(bodyParser.urlencoded({ extended:true }));

// To parse cookies from the HTTP  Request
app.use(cookieParser());

app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

const users = [ 
    {
        firstName: 'john',
        lastName: 'doe',
        email: 'johndoe@gmail.com',
        password: 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=',
    }
];

//Our request hadlers will be implemented here

app.get('/', (req,res)=>{
    res.render("home");
});
app.get("/register", (req, res)=>{
    res.render("register")
});
app.post('/register', (req, res)=>{
    const {firstName, lastName, email ,password, confirmPassword } = req.body;
    //check if the password and confirm password field match
    
    if (password === confirmPassword){
        //check if users with the same email is also registered
        if( users.find(user => user.email === email)){
          res.render("register", {
              message: 'User already existed',
              messageClass: 'alert-danger'
          });  
          return;
        }
    
    
    const hashPass = hashPassword.getHashPassword(password);
    //store user into the database if you are using one
    console.log(password);
    users.push({
        firstName, lastName, email, password: hashPass    
    });

   
    res.render('login', {
        message: 'Registration Complete. Please login to continue.',
        messageClass: 'alert-success'
    });
} else {
    res.render('register', {
        message: 'Password does not match',
        messageClass: 'alert-danger'
    });
}
});
const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}
//this will hold the users and authtoken related to users
const authTokens = {};


app.get('/login', (req, res)=>{
    res.render('login')
});
app.post('/login', (req, res)=>{
    const { email, password } = req.body;
    const hashPass = hashPassword.getHashPassword(password);
    console.log(hashPass);
    const user = users.find(u => {
        return u.email === email && hashPass === u.password
    });
    if (user){
        const authToken = generateAuthToken();

        //store authentification token
        authTokens[authToken] = user;

        //setting the auth token in cokies
        res.cookie('AuthToken', authToken);

        //redirect user to the protected page
        res.redirect('/protected');
    } else {
        res.render('login', {
            message: 'Invalid username or password',
            messageClass: 'alert-dander'
        });
    }
});
app.use((req, res, next)=> {
    //get auth token from the  cookies
    const authToken = req.cookies['AuthToken'];

    //inject the user to the request
    req.user = authTokens[authToken];
    next();
});
app.get('/protected', (req, res)=>{
    if(req.user){
        res.render('protected');
    }else {
        res.render('login', {
            message: 'please login to continue',
            messageClass: 'alert-danger'
        });
    }
});

const requireAuth = (req, res, next)=> {
    if(req.user){
        next();
    } else {
        res.render('login', {
            message: 'Please login to continue',
            messageClass: 'alert-danger'
        });
    }
};
app.get('/protected', requireAuth, (req, res)=>{
    res.render('protected');
});



app.listen(3000, (req,res)=>{
    console.log("server started at port 3000");
});