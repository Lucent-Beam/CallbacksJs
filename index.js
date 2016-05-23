// $('#button_1').on('click',function(){
//   alert('Se clickeo un botón');
// });


// var zfighters = ['Goku', 'Vegeta', 'Gohan', 'Piccolo'];
//
// zfighters.forEach(function(name,index){
//   console.log(index + 1 +' ' + name);
// });

// var allUsers = [];
//
// function logStuff(data){
//   if ('string' == typeof data) return console.log(data);
//
//   if('object' == typeof data){
//     for (var key in data){
//         console.log(key + ': '+ data[key]);
//
//     }
//   }
// }
//
// function getInput(input,callback){
//   allUsers.push(input);
// ('function' ==  typeof callback) && callback(input);
// }
//
// getInput({user:'Luis', speciality:'Javascript'},logStuff);
// getInput('Charres','Luis');
// console.log(allUsers);

// var primeraFuncion = function(cb){
//   console.log("Yo soy la primera función");
//   cb("Yo soy la segunda función");
// };
//
// var segundaFuncion = function(text,cb){
//   console.log(text);
//   cb("se han mostrado las dos funciones");
// };
//
// primeraFuncion(function(text){
//   segundaFuncion(text,function(textoFinal){
//       console.log(textoFinal);
//
//   });
//
// });
function retorno(){
  return "Primero";
}


function vuelta(){
  console.log("Segundo");

}

//
$(document).on('ready',function(){
  var text = retorno();
  console.log(text);
  vuelta();
});
