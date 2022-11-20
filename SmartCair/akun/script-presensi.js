

function sukses() {
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
            text: "Jawaban 1 = a, 2 = d",
            icon: 'warning',
            confirmButtonText: 'OK'
        });
    }
    
    coba++
})
