// function sukses() {
//     alert("Terima Kasih. Silahkan melakukan presensi")
//     location.href = "http://www.w3schools.com";
// }

// // tombol submit test di tekan
// document.getElementById('submit-test').addEventListener('click', () => {
// // function cekJawaban() {

//     // Set life (kesempatan) ke localstorage buat nyimpen angka kesempatan
//     localStorage.setItem("life", 3)
//     do {
//         // var jawaban yg bener
//         let check = document.getElementById('snk')
//         let check8 = document.getElementById('snk8')

//         // cek jawaban
//         if (check.checked == true && check8.checked == true) {
//             // kalo bener ke alert betul trus redirect ke page lain
//             return sukses();
//         } else {
//             // kalau salah disuruh jawab lagi sampe kemempatan habis
//             alert("jawaban salah, coba lagi. kesempatan = " + localStorage.getItem("life"))
//         }

//         localStorage.life = Number(localStorage.life) - 1;
//     } while (localStorage.life > 0);

//     // kalau kesempatan habis muncul jawbaannya
//     alert("Jawaban a = 1, b = 2").then((result) => {
//         if(result.isConfirmed) {
//             localStorage.clear
//         }
//     })
// })


function sukses(){
    Swal.fire({
        html: "Terima Kasih. Silahkan melakukan presensi ",
        iconHtml: '<ion-icon name="log-in-outline"></ion-icon>',
        iconColor: '#4e9a06',
        confirmButtonText: "Check-In",
        confirmButtonColor: '#4e9a06',
        allowOutsideClick: false
    }).then((result) => {
        // jika mengklik tombol presensi
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Check-In Berhasil',
                icon: 'success',
                confirmButtonColor: '#4e9a06',
                allowOutsideClick: false
            }).then((result) => {
                // jika mengklik tombol ok, set local storage and redirect to file akun.html
                if (result.isConfirmed) {
                    localStorage.setItem("presensi", true)
                    window.location = "akun.html";
                }
            })
        }
    })
}

function blmTepat() {
    Swal.fire({
        text: "Jawaban anda belum tepat, silahkan coba isi kembali",
        icon: 'warning',
        confirmButtonText: 'OK'
    })
}

// tombol submit test di tekan
document.getElementById('submit-test').addEventListener('click', () => {
    var coba = 1;
    do {
        let check = document.getElementById('snk')
        let check8 = document.getElementById('snk8')

        if (check.checked == true && check8.checked == true) {
            return sukses();
        } 
        else {
            // alert("Jawaban Salah !!! Ulangi lagi.");
            return blmTepat();
            // history.go(-1);
        }
        if (coba === 3){
            Swal.fire({
                text: "Jawaban a = 1, b = 2",
                icon: 'warning',
                confirmButtonText: 'OK'
            });
        }
        // history.go(-1);
        coba++;
    } while (coba <= 3);
})
