// ----- contact form -----
console.log('It works')
$(document).ready(function () {
  $('.submit').click(function (event {
    console.log('Clicked button')

    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('.form-status')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }

    if(subject.length >= 2) {
      statusElm.append('<div>Submit is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }

    if(message.length >= 10) {
      statusElm.append('<div>Message is valid</div>')
    } else {
      statusElm.append('<div>Message is not valid</div>')
    }
  }))
})
// -------------------------

// ----- my info cards -----
function myInfoCard(res) {
  let html = '';
  for (let i in res) {
    html += `
      <div class="row">
        <div class="col-md-6 title-card">
          <h2>${res[i].title}</h2>
        </div>
        <div class="col-md-6 desc-card">
          <h5>${res[i].contents}</h5>
        </div>
      </div>
    `;
  }
  $('#myinfo').html(html);
}
$.get('../../info_card.json', myInfoCard)
// -------------------------

// ----- header&footer -----
// $(document).ready(function($){
//   $("#header").load("../components/header.html");
//   $("#footer").load("../components/footer.html");
//   });
// -------------------------

// ----- resume tooltip -----
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
// -------------------------


// content appears




// ----- modal posted-pic -----
function enlargeImage() {
  document.getElementById("img01").src = this.src;
  document.getElementById('myModal').style.display = "block";
}
(function() {
  var images = document.getElementsByClassName("modal-pic");
  for (i = 0; i < images.length; i++) {
    images[i].onclick = enlargeImage;
  }
})();
// -------------------------------
//
// var TxtRotate = function(el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 10) || 2000;
//   this.txt = '';
//   this.tick();
//   this.isDeleting = false;
// };
//
// TxtRotate.prototype.tick = function() {
//   var i = this.loopNum % this.toRotate.length;
//   var fullTxt = this.toRotate[i];
//
//   if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }
//
//   this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
//
//   var that = this;
//   var delta = 300 - Math.random() * 100;
//
//   if (this.isDeleting) { delta /= 2; }
//
//   if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//   }
//
//   setTimeout(function() {
//     that.tick();
//   }, delta);
// };
//
// window.onload = function() {
//   var elements = document.getElementsByClassName('txt-rotate');
//   for (var i=0; i<elements.length; i++) {
//     var toRotate = elements[i].getAttribute('data-rotate');
//     var period = elements[i].getAttribute('data-period');
//     if (toRotate) {
//       new TxtRotate(elements[i], JSON.parse(toRotate), period);
//     }
//   }
//   // INJECT CSS
//   var css = document.createElement("style");
//   css.type = "text/css";
//   css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
//   document.body.appendChild(css);
// };
