/*let screen = document.getElementById("display");
//The querySelectorAll () method is a JavaScript method from the DOM API that allows you to retrieve all elements that match the query parameter passed to the method.
buttons = document.querySelectorAll("button");
let screenValue="";
for(items of buttons){
    item.addEventListener("click",(e)=>{
        button Text = e.target.innerText;
        if(button Text =="X"){
            button Text = "*"
        }

    })
}*/


let screen = document.getElementById("display");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      var result;
      try {
        result = eval(screenValue);
      } catch (error) {
        result = "Expression error";
      }
      screen.value = result;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}