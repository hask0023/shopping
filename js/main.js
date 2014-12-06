var myList = [];



document.addEventListener("DOMContentLoaded", function(ev){
  //this runs when the page loads
   localStorage.clear();


  if(localStorage.getItem("grocery-hask0023")){
    myList = JSON.parse(localStorage.getItem("grocery-hask0023"));

    //convert from String to Array
  }

  showList();

  document.querySelector("#btnAdd").addEventListener("click", function(ev){
    ev.preventDefault();
    var newItem = document.querySelector("#item").value;
    myList.push( newItem );
    localStorage.setItem("grocery-hask0023", JSON.stringify(myList) );
    document.querySelector("#item").value= '';
    //convert from Array to String.
    showList();
    return false;
  });


  //document.myForm.addEventListener("submit", function(ev){});
});

function doneItem(ev){
   var txt = ev.currentTarget.firstChild.nodeValue;
  for(var i=0;i<myList.length;i++){
  	if(myList[i] == txt){
      //found the match
        var testVar = [];
        testVar = JSON.parse(localStorage.getItem("grocery-hask0023"));
    var brandNewItem = (testVar[i]);
      // var newItem = testVar[i]);
      myList.splice(i, 1, "<strike>" + brandNewItem + "</strike>");
    }
  }
  localStorage.setItem("grocery-hask0023", JSON.stringify(myList) );
  showList();
}


function removeItem(ev){
  //this.firstChild.nodeValue
  //ev.currentTarget.firstChild - the textNode inside the paragraph
  //ev.currentTarget.firstChild.nodeValue - the text inside the textNode
  var txt = ev.currentTarget.firstChild.nodeValue;
    console.log (txt);

  for(var i=0;i<myList.length;i++){
      if(myList[i] === "<strike>" + txt + "</strike>"){
//  	if(myList[i] == txt){
      //found the match
      myList.splice(i, 1);
    }
      else if(myList[i] === txt) {
       myList.splice(i, 1);
      }
  }
  localStorage.setItem("grocery-hask0023", JSON.stringify(myList) );
  showList();
}

function showList(){
  var output = document.querySelector(".output");
  output.innerHTML = "";
  for(var i=0;i<myList.length;i++){
      var p = document.createElement("li");
     $ (p).addClass("ui-li-static ui-body-inherit");
//    var p = document.createElement("p");

    p.innerHTML = myList[i];

    output.appendChild(p);

      $ ("li").one("swiperight", doneItem);

//      $ ("p").dblclick(removeItem);
//      $ ("strike").dblclick(removeItem);
      $ ("li").on("swipeleft", removeItem);
      $ ("strike").on("swipeleft", removeItem);
   // p.addEventListener("click", removeItem);

  }
}
