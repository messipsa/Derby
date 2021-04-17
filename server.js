
const  http = require('http');

const fs = require('fs');

const _ = require('lodash');

const server = http.createServer((req , res)=>
{
   // console.log(req.url, req.method  );

   //lodash
   const num = _.random(0,10);
   console.log(num);

   const sayBonjour = _.once(()=>
{
    console.log('salim');
})

sayBonjour();
sayBonjour();
    
    res.setHeader('Content-Type' , 'text/html');

    let path = './views';

    /*res.write('<p>Raul Gonzalez</p>');
    res.write('<p>Raul is the best</p>');*/
    
      switch (req.url)
      {
          case  '/' : 
                path += '/index.html';
                res.statusCode= 200;
                break ;
           case '/about' : 
                  path += '/about.html';
                  res.statusCode = 200;
                  break;
            case '/aboutme' : 
                  path += '/about.html';
                  res.statusCode = 301;
                  res.setHeader('Location' , '/about');
                  res.end();
                  break;
           default : 
                   path += '/404.html';
                   res.statusCode=404;
                   break;     
      }

     fs.readFile(path , (err , data)=>
     {
         path='./views';
         if(err)
         {
             console.log(err);
             res.end();
         }
         else
         {
             res.write(data);
             res.write(data);
             res.end(data);
         }
     })

   
});

server.listen(3000,'localhost',()=>
{
    console.log('listning for requests on port 3000');
});