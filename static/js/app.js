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
jQuery(document).ready(function($){
  $("#header").load("../components/header.html");
  $("#footer").load("../components/footer.html");
  });
// -------------------------

// ----- resume tooltip -----
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
// -------------------------


// content appears

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
