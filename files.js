const fs = require('fs');

/*fs.writeFile('./post/get.txt' , 'klani 9elbi nas khedamin' , ()=>
{
    console.log("written");
});

fs.readFile('./post/post.txt' , (err , data)=>
{
  if(err)
  {
  console.log(err);
  }
  console.log(data.toString());
});

console.log('samir');*/
if(!fs.existsSync('./backend'))
{
fs.mkdir('./backend' , (err)=>{
  if(err)
  {
      console.log(err);
  }
});
}
else
{
    fs.rmdir('./backend' , (err)=>
    {
         if(err)
         {
             console.log(err);
         }
         console.log('directory removed');
    });
}

if(fs.existsSync('./post/get.txt'))
{
    fs.unlink('./post/get.txt' , (err)=>
    {
        if(err)
        {
            console.log(err);
        }
        console.log('deleted file');
    });
}