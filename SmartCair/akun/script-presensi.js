

function sukses() {
    Swal.fire({
        html: `<b>` + "Selamat!" + `</b>` + " Jawaban Anda tepat!" + `<br>` + "Silahkan saatnya melakukan presensi",
        iconHtml: '<ion-icon name="log-in-outline"></ion-icon>',
        iconColor: '#4e9a06',
        confirmButtonText: "Check-In",
        confirmButtonColor: '#4e9a06',
        allowOutsideClick: false
    }).then((result) => {
        // jika mengklik tombol presensi
        if (result.isConfirmed) {
            Swal.fire({
                html: "Check-In Berhasil, Terima Kasih.",
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
        html: `<b>` + "Jawaban Anda belum tepat." + `</b><br>` + "Silahkan jawab kembali dengan lebih teliti!",
        icon: 'warning',
        confirmButtonText: 'OK'
    })
}

let coba = 1;
document.getElementById('submit-test').addEventListener('click', () => {
    let check = document.getElementById('snk')
    let check8 = document.getElementById('snk8')

    if (check.checked == true && check8.checked == true) {
        return sukses();
    } else {
        blmTepat();
    }

    if (coba >= 3) {
        Swal.fire({
            html: `<b>` + "MAAF!" + `</b>` + " Jawaban Anda masih salah." + `<br>` + "Jawaban yang tepat adalah" + `<br>` + "1 = A" + `<br>` + "2 = D" + `<br>` + "Silahkan diperbaiki!",
            icon: 'warning',
            confirmButtonText: 'OK'
        });
    }
    
    coba++
})
