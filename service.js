var request = require('request');

var backendUrl="https://hotel-web-appi.herokuapp.com/";

function listerClients(callBackFn){

   request(backendUrl + "/clients?start=0&size=3",{json: true},
 function(err,res, listeDeClients){
    if (err) {callBackFn({
        error : err
    });
}else{
  callBackFn({
      data : listeDeClients
  });
}
});
}
exports.listerClients = listerClients;