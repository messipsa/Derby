const express = require('express');

const app = express();

// register view engine 

app.set('view engine' , 'ejs');

app.listen(3000);

app.get('/' , (req , res)=>
{
    //res.send('<p>Salim</p>');
   
   
    // res.sendFile('./views/index.html',{root:__dirname});
   
   const blogs = [
       {title : "Jsk" , snippet : "LDC CAF 2010"},
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