var noBtn = document.getElementById("noBtn");
var yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", function () {
  var x = Math.random() * 200 - 100;
  var y = Math.random() * 100 - 50;
  noBtn.style.transform = "translate(" + x + "px, " + y + "px)";
});

yesBtn.addEventListener("click", function () {
  document.body.innerHTML = `
    <div style="text-align:center; margin-top:100px;">
      <h1 style="color:#ff4d6d;">Yaaay!!! 💕🥰</h1>
      <p>You made my day ❤️</p>
    </div>
  `;
});
