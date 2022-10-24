function Redirect() {
    window.location = "rencanaDetil.html"
  }

  const cariKendala = document.querySelector("#cari-nama")

  cariKendala.addEventListener("keyup", pencarianNama);

  function pencarianNama(e){
    const cariNama = e.target.value.toLowerCase();
    let itemNama = document.querySelectorAll(".item-nama");

    itemNama.forEach(item => {
        const isiItem = item.firstChild.textContent.toLowerCase();
        if(isiItem.indexOf(cariNama) != -1){
            item.setAttribute("style", "display:  block;");
        }else{
            item.setAttribute("style", "display: none !important");
        }
    });
}