const verifTime =  (req, res, next)=> {
    let date =new Date();
    // let date = new Date('')
    console.log(date);
    let hour = date.getHours();
    console.log(hour)
    let day = date.getDay();
    console.log(day)
    if((hour>17 || hour<9)||(day==0 || day==6)){
      res.send('error')
    }
    next()
  };
  module.exports= verifTime