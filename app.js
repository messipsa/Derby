const express = require('express');

const morgan = require('morgan');

const mongoose = require('mongoose');

const app = express();

// connect to mongo db
const database = 'mongodb+srv://messipsa:272727@cluster0.od8qi.mongodb.net/node?retryWrites=true&w=majority';
mongoose.connect(database , { useNewUrlParser : true , useUnifiedTopology : true})
.then((result)=> app.listen(3000))
.catch((err)=> console.log(err));
// register view engine 

app.set('view engine' , 'ejs');



/*app.use((req,res ,next)=>
{
 console.log('new request :');
 console.log(req.hostname);
 console.log(req.path);
 console.log(req.method);
 next();
});*/

app.use(morgan('tiny'));

app.use(express.static('public'));

app.get('/' , (req , res)=>
{
    //res.send('<p>Salim</p>');
   
   
    // res.sendFile('./views/index.html',{root:__dirname});
   
   const blogs = [
       {title : "Jsk" , snippet : "LDC CAF 2010 était très proche pour la remporter sauf que le destin a choisi un autre sort .\n"+
       "La Jsk a deja éliminé le Club africain puis le Petro Atlético. Durant la phase de poules elle ecrase les deux Egyptiens Al Ahly et Al Ismailia ainsi que Hertland Fc avant de s'incliner face au Tp Mazembe."},
       {title : "FCB " , snippet : "sextuplé 2009"},
        {title : "Athletic Bilbao" , snippet : "Un Ogre Basque"},
   ];

    res.render('index', {title : 'Home' , blogs});
});


app.get('/about' , (req,res)=>
{
   // res.sendFile('./views/about.html' , {root : __dirname});
   res.render('about' , {title : 'About-us'} );
});

app.get('aboutus' , (req , res)=>
{
    res.redirect('/about');
});

app.get('/blogs/create' , (req , res)=>
{
    res.render('create' , {title : 'Create a new Blog'});
})

app.use((req , res)=>{
    res.status(404).render('404' , {title : 'Not Found'});
});