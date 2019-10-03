let rowColors = [
  "white","white","white","white"
];

let cols = ["one", "two", "three", "four"];

let colors = ["blue","orange","red","voilet","pink","yellow","black","green"];

let codeColors = [];

let playerColors = [];
function codeGenerator(){
  while(codeColors.length < 4){
      var r = Math.floor(Math.random()*7);
      //console.log(r);
      if(codeColors.indexOf(r) === -1){
        codeColors.push(r);
      }
  }
}
codeGenerator();
console.log("Code :",codeColors);

function checker(){
  let positionCount = 0;
  let colorCount = 0;

  for(j=0;j<4;j++){
    if(codeColors[j]===playerColors[j]){
      positionCount++;
    }
      if(codeColors.indexOf(playerColors[j])!= -1){
        colorCount++;
      }
  }
  console.log("Code :",codeColors);
  console.log("player :",playerColors);
  console.log("position :",positionCount);
  console.log("color:",colorCount-positionCount);
}
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
function searchStringInArray (str, strArray) {
  for (var j=0; j<strArray.length; j++) {
      if (strArray[j].match(str)) return j;
  }
  return -1;
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
    console.log(data,id,);
    document.getElementById(data).cloneNode(true)
    
    
    console.log(playerColors);


   let position = id.split("_");
   console.log(position[1]);
   switch (position[1]){
     case "one":
      colorReplacer(data,position[0]);
      rowColors[0]=data;
      playerColors[0]=searchStringInArray(data, colors);
       break;
    case "two":
        colorReplacer(data, position[0]);
        rowColors[1]=data;
        playerColors[1]=searchStringInArray(data, colors);
      break;
    case "three":
        colorReplacer(data, position[0]);
        rowColors[2]=data;
        playerColors[2]=searchStringInArray(data, colors);
        break;
    case "four":
        colorReplacer(data, position[0]);
        rowColors[3]=data;
        playerColors[3]=searchStringInArray(data, colors);
        break;
    default:
           console.log("else");
   } 
   console.log(playerColors);
   //console.log(rowColors);
    document.getElementById(ev.target.id).innerHTML = "<div  id='"+id+"' class='"+"small"+data+"'></div>"
  }