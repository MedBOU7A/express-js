
const express = require('express');
const app = express();
const port = 4000;


const verifTime =  (req, res, next)=> {
    let date =new Date();
    // let date = new Date('')
    console.log(date);
    let hour = date.getHours();
    console.log(hour)
    let day = date.getDay();
    console.log(day)
    if((hour>19 || hour<9)||(day==0 || day==6)){
      res.send('error')
    }
    next()
  };

app.use(verifTime)

app.use(express.static('componment'))

app.get('/home.html', function(req, res){
    res.send('Hello World');
});


app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});



