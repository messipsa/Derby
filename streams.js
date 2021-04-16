const fs = require('fs');

const readStream = fs.createReadStream('./post/bzaf.txt' , {encoding: 'utf8'});

const writeStream = fs.createWriteStream('./post/scale.txt');

/*readStream.on('data' , (chunk)=>
{
   console.log('------NEWWWWWWWWW------');
   console.log(chunk);
   writeStream.write('\n RAUL THE BEST \n');
   writeStream.write(chunk);
});*/


// Piping
readStream.pipe(writeStream);
