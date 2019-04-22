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
