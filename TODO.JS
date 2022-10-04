document.getElementById("agPen").addEventListener("mouseenter", cambiarColor);
document.getElementById("agPen").addEventListener("mouseleave", volverColor);


function cambiarColor() {
    document.getElementById("agPen").style.background = "purple";
    document.getElementById("agPen").style.color = "black";
 
} 

function volverColor() {
    document.getElementById("agPen").style.background = "rgb(247, 241, 247)";
    document.getElementById("agPen").style.color = "rgba(171, 107, 190, 0.733)";
    
} 

function AgregarTarea(evt){
  evt.preventDefault();
  var nuevatarea = "<p class='texto' >" + document.getElementById("list").value + "</p>";
  const h2 = document.getElementById("pend");
  let html = nuevatarea;
  h2.insertAdjacentHTML("beforeend", html);
  console.log(nuevatarea);
 
}