window.addEventListener("load", function(){
  if (!localStorage.getItem("cookiesAccepted")) {
    const banner = document.createElement("div");
    banner.innerHTML = `
      <div style="position:fixed;bottom:0;left:0;width:100%;background:#000;color:#fff;padding:15px;text-align:center;z-index:9999;">
        Ta strona używa cookies.
        <button id="acceptCookies" style="margin-left:10px;">OK</button>
      </div>
    `;
    document.body.appendChild(banner);

    document.getElementById("acceptCookies").onclick = function() {
      localStorage.setItem("cookiesAccepted", "true");
      banner.remove();
    };
  }
});