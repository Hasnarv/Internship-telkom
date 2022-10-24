function Redirect() {
    window.location = "index.html"
  }

  const cariKendala = document.querySelector("#cari-kendala")

  cariKendala.addEventListener("keyup", pencarianKendala);

  function pencarianKendala(e){
    const cariKendala = e.target.value.toLowerCase();
    let itemKendala = document.querySelectorAll(".item-kendala");

    itemKendala.forEach(item => {
        const isiItem = item.firstChild.textContent.toLowerCase();
        if(isiItem.indexOf(cariKendala) != -1){
            item.setAttribute("style", "display:  block;");
        }else{
            item.setAttribute("style", "display: none !important");
        }
    });
}