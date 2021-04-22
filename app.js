const express = require('express');

const morgan = require('morgan');

const mongoose = require('mongoose');

const Blog = require('./models/blog');

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



/*app.get('/add-blog' , (req,res)=>
{
  const blog = new Blog({
      title : 'SSSA',
      snippet : "Le Doyen des clubs Amazighs",
      body : "Le SSSA basé à Sidi-Aich créé en 1928 est considéré comme le doyen des clubs Amazighs"
  });
  blog.save()
  .then(result=>
    {
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    });
});


app.get('/all-blogs' ,(req , res)=>
{
    Blog.find()
    .then(result=>
        {
            res.send(result);
        })
    .catch(err=>{
        console.log(err);
    });
});


app.get('/single-blog' , (req,res)=>
{
   Blog.findById('6081bd654376696df0e1d869')
   .then(result=>
    {
        res.send(result);
    })
    .catch(err=>
        {
            console.log(err);
        });
});*/

app.get('/' , (req , res)=>
{
    //res.send('<p>Salim</p>');
   
   
    // res.sendFile('./views/index.html',{root:__dirname});
   
  /* const blogs = [
       {title : "Jsk" , snippet : "LDC CAF 2010 était très proche pour la remporter sauf que le destin a choisi un autre sort .\n"+
       "La Jsk a deja éliminé le Club africain puis le Petro Atlético. Durant la phase de poules elle ecrase les deux Egyptiens Al Ahly et Al Ismailia ainsi que Hertland Fc avant de s'incliner face au Tp Mazembe."},
       {title : "FCB " , snippet : "sextuplé 2009"},
        {title : "Athletic Bilbao" , snippet : "Un Ogre Basque"},
   ];

    res.render('index', {title : 'Home' , blogs});*/

    res.redirect('/blogs');
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


app.get('/blogs' , (req,res)=>
{
    Blog.find()
    .then(result=>
        {
           res.render('index' , {title : 'All blogs' , blogs : result });
        })
        .catch(err=>
            {
                console.log(err);
            });
})

app.get('/blogs/create' , (req , res)=>
{
    res.render('create' , {title : 'Create a new Blog'});
})

app.use((req , res)=>{
    res.status(404).render('404' , {title : 'Not Found'});
});