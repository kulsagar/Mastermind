function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id");
    console.log(data);
    document.getElementById(data).cloneNode(true)
    
    
    document.getElementById(ev.target.id).innerHTML = "<div  id='one' class='"+"small"+data+"'></div>"
  }