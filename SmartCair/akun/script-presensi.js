// tombol submit test di tekan
document.getElementById('submit-test').addEventListener('click', () => {
    let check = document.getElementById('snk')
    let check2 = document.getElementById('snk2')
    let check3 = document.getElementById('snk3')
    let check4 = document.getElementById('snk4')
    let check5 = document.getElementById('snk5')
    let check6 = document.getElementById('snk6')
    let check7 = document.getElementById('snk7')
    let check8 = document.getElementById('snk8')

    
    function sukses(){
        Swal.fire({
            html: "Silahkan melakukan presensi !",
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

    // cek apakah pertanyaan sudah dijawab
    if (check.checked === true) {
        return sukses();
    } else if (check2.checked === true) {
        return sukses();
    } else if (check3.checked === true) {
        return sukses();
    }else if (check4.checked === true) {
        return sukses();
    }else if (check5.checked === true) {
        return sukses();
    }else if (check6.checked === true) {
        return sukses();
    }else if (check7.checked === true) {
        return sukses();
    }else if (check8.checked === true) {
        return sukses();
    } else {
        // jika belum memilih jawaban
        Swal.fire({
            title: 'Pertanyaan belum dijawab',
            text: "mohon jawab terlebih dahulu, untuk melakukan presensi",
            icon: 'warning',
            confirmButtonText: 'OK'
        })
    }

})