
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

$('.codeIcon').on('click', () => {
  $('.code').addClass('showCode');
  $('.blockerCode').addClass('showBlockerCode');
  $('body').css('overflow', 'hidden');
})
$('.blockerCode').on('click', () => {
  $('.code').removeClass('showCode');
  $('.blockerCode').removeClass('showBlockerCode');
   $('body').css('overflow', 'auto');
});
$('.closeCode').on('click', () => {
  $('.code').removeClass('showCode');
  $('.blockerCode').removeClass('showBlockerCode');
   $('body').css('overflow', 'auto');
});

$('.compBtn').on('click', () => {
  // console.log("helo");
  $('#compBox').addClass('showComp');
});
$('.close').on('click', () => {
  $('#compBox').removeClass('showComp');
});

var component = document.querySelectorAll(".component");
var frame = document.querySelector("section");
for (var i = 0; i < component.length; i++) {
  component[i].setAttribute('draggable', 'true');
  component[i].setAttribute('id', "drag"+i);
  component[i].addEventListener("dragstart", (ev) => {
    ev.dataTransfer.setData("component", ev.target.id); 
  });
}

var htmlCode = document.querySelector(".htmlCode");
function updateCookie() {
  localStorage.setItem("html", htmlCode.innerText);
}


var frameDiv = document.querySelectorAll('section div');

frame.addEventListener("drop", (ev) => {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("component");
  var nodeCopy = document.getElementById(data).cloneNode(true);
  ev.target.appendChild(nodeCopy);
  
  for (i = 0; i < frameDiv.length; i++) {
    frameDiv[i].setAttribute("id", "component"+i);
  }
  htmlCode.innerText ="<section>"+ frame.innerHTML + "</section>";
  updateCookie();

});

frame.addEventListener("dragover", (ev) => {
  ev.preventDefault();
  
  $('#compBox').removeClass('showComp');
});

frame.innerHTML = localStorage.getItem('html');
htmlCode.innerText = frame.innerHTML;