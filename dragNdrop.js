let rowColors = [
  "white","blue","pink","black"
];
function colorReplacer(data){
  for (i = 0, len = rowColors.length; i < len; i++){
    if(data===rowColors[i]){
      rowColors[i]="white";
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
    console.log(data,id,);
    document.getElementById(data).cloneNode(true)
    
   let position = id.split("_");
  // console.log(position[1]);
   switch (position[1]){
     case "one":
      colorReplacer(data);
      rowColors[0]=data;
       break;
    case "two":
        colorReplacer(data);
        rowColors[1]=data;
      break;
    case "three":
        colorReplacer(data);
        rowColors[2]=data;
        break;
    case "four":
        colorReplacer(data);
        rowColors[3]=data;
        break;
    default:
           console.log("else");
   } 
    document.getElementById(ev.target.id).innerHTML = "<div  id='"+id+"' class='"+"small"+data+"'></div>"
  }