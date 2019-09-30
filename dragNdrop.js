let rowColors = [
  "white","white","white","white"
];

let cols = ["one", "two", "three", "four"];

let colors = ["blue","orange","red","violet","pink","yellow","black","green"];

let codeColors = [];

function codeGenerator(){
  while(codeColors.length < 4){
      var r = Math.floor(Math.random()*7);
      console.log(r);
      if(codeColors.indexOf(r) === -1) codeColors.push(r);
  }
}
codeGenerator();

function colorReplacer(data, row){
  for (i = 0, len = rowColors.length; i < len; i++){
    if(data===rowColors[i]){
      rowColors[i]="white";
      let id = row+"_"+cols[i];
      //console.log(id);
      document.getElementById(id).innerHTML = "<div  id='"+id+"' class='white'></div>"
      break;
    }
  }
}
function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
   // console.log("id:: ",ev.target.id);
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drop(ev,id) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id");
    //console.log(data,id,);
    document.getElementById(data).cloneNode(true)
    
   let position = id.split("_");
  // console.log(position[1]);
   switch (position[1]){
     case "one":
      colorReplacer(data,position[0]);
      rowColors[0]=data;
       break;
    case "two":
        colorReplacer(data, position[0]);
        rowColors[1]=data;
      break;
    case "three":
        colorReplacer(data, position[0]);
        rowColors[2]=data;
        break;
    case "four":
        colorReplacer(data, position[0]);
        rowColors[3]=data;
        break;
    default:
           console.log("else");
   } 
   //console.log(rowColors);
    document.getElementById(ev.target.id).innerHTML = "<div  id='"+id+"' class='"+"small"+data+"'></div>"
  }