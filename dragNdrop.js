function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    console.log("id:: ",ev.target.id);
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drop(ev,id) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id");
    console.log(data,id);
    document.getElementById(data).cloneNode(true)
    
    
    document.getElementById(ev.target.id).innerHTML = "<div  id='"+id+"' class='"+"small"+data+"'></div>"
  }