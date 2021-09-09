
var section = document.querySelector("section");

let inputLast = document.querySelector("input.active");
let deviceLast = document.querySelector("div.activeDevice");
if (inputLast.checked) {
 section.style.width = '1250px';
}

let divs = document.querySelectorAll(".device div");
for (const div of divs) {
 div.addEventListener("click", (e) => {
  
  // Store the event target in a const
  const et = e.target;

  // select active class
  const active = document.querySelector(".show");

  /* when a button is clicked, remove the active class 
from the button that has it */
  if (active) {
   active.classList.remove("show");
  }

  // Add active class to the clicked element
  et.classList.add("show");

  let input = document.querySelectorAll(".deviceCheckbox");

  for (let check of input) {
   if (check.getAttribute("data-number") === div.getAttribute("data-number")) {
    
    section.style.width = div.getAttribute("data-width");
    check.setAttribute("checked", "checked");
   }
   else {
    check.removeAttribute("checked");
   }
  }
 });
}

$('.bars').on('click', () => {
 $('.mobileOptions ul').addClass('showMenu');
 $('.blocker').addClass('showBlocker');
 $('body').css('overflow', 'hidden');
})

$('.blocker').on('click', () => {
 $('.mobileOptions ul').removeClass('showMenu');
 $('.blocker').removeClass('showBlocker');
 $('body').css('overflow', 'auto');
});

$('.compBtn').on('click', () => {
  // console.log("helo");
  $('#compBox').addClass('showComp');
});
$('.close').on('click', () => {
  $('#compBox').removeClass('showComp');
});


function allowDrop(ev) {
  ev.preventDefault();
  $('#compBox').removeClass('showComp');
}

function drag(ev) {
  ev.dataTransfer.setData("text/html", ev.target.id) ;
}

function drop(ev) {
  ev.preventDefault(); 
  var data = ev.dataTransfer.getData("text/html");
  /* If you use DOM manipulation functions, their default behaviour it not to 
  copy but to alter and move elements. By appending a ".cloneNode(true)", 
  you will not move the original element, but create a copy. */
  var nodeCopy = document.getElementById(data).cloneNode(true);
  nodeCopy.id = "newComponent"; /* We cannot use the same ID */
  ev.target.appendChild(nodeCopy);
  var div1 = document.querySelector("section");
  console.log(div1);
}

