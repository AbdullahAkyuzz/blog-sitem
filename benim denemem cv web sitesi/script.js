document.addEventListener('DOMContentLoaded', () => {
    const temaButon = document.querySelector('.dark-mod'); // Dark mode butonuna erişim
    let tema = localStorage.getItem('tema') || 'koyu'; // Varsayılan tema "koyu"

    // Sayfa yüklendiğinde temayı uygula
    temaDegistir(tema);

    temaButon.addEventListener('click', () => {
        tema = tema === 'koyu' ? 'acik' : 'koyu'; // Tema değiştir
        localStorage.setItem('tema', tema); // Yeni temayı kaydet
        temaDegistir(tema);
    });
});

// Tema değiştirme fonksiyonu
function temaDegistir(tema) {
    const body = document.body;
    const profilYazi = document.querySelector('.sol span');
    const iletisimForm = document.querySelector('.iletisim-form');
    const iletisimBilgileri = document.querySelector('.iletisim-bilgileri');
    const cvIndir = document.querySelector('.cv-indir'); // CV bağlantısı

    if (tema === 'acik') {
        body.style.backgroundColor = '#f4f4f4'; // Açık arka plan
        body.style.color = '#000'; // Genel yazı rengi koyu
        profilYazi.style.color = '#000'; // Profil yazısı koyu
        iletisimForm.style.backgroundColor = 'rgb(140, 159, 175)'; // Çok açık mavi
        iletisimBilgileri.style.backgroundColor = 'rgb(140, 159, 175)'; // Çok açık mavi
        document.querySelector('.dark-mod').textContent = "Koyu Mod";

        // Açık mod için CV bağlantısı renkleri
        cvIndir.style.color = 'blue'; // Normal mavi
        cvIndir.addEventListener('mouseover', () => {
            cvIndir.style.color = 'darkblue'; // Koyu mavi (hover)
        });
        cvIndir.addEventListener('mouseout', () => {
            cvIndir.style.color = 'blue'; // Normal mavi
        });
    } else {
        body.style.backgroundColor = '#1a1a1a'; // Koyu arka plan
        body.style.color = '#f4f4f4'; // Genel yazı rengi açık
        profilYazi.style.color = '#fff'; // Profil yazısı beyaz
        iletisimForm.style.backgroundColor = 'rgba(75, 77, 78, 0.9)'; // Daha koyu gri
        iletisimBilgileri.style.backgroundColor = 'rgba(75, 77, 78, 0.9)'; // Daha koyu gri
        document.querySelector('.dark-mod').textContent = "Açık Mod";

        // Koyu mod için CV bağlantısı renkleri
        cvIndir.style.color = 'blue'; // Normal mavi
        cvIndir.addEventListener('mouseover', () => {
            cvIndir.style.color = 'darkblue'; // Koyu mavi (hover)
        });
        cvIndir.addEventListener('mouseout', () => {
            cvIndir.style.color = 'blue'; // Normal mavi
        });
    }
}

// Tema kontrolü ve sayfa yüklendiğinde doğru tema ayarlama
window.addEventListener('DOMContentLoaded', () => {
    const tema = localStorage.getItem("tema");
    if (tema === "koyu") {
        document.body.classList.add('koyu-mod');
        document.querySelector('.dark-mod').textContent = "Açık Mod"; // İlk başta "Açık Mod" yazsın
    } else {
        document.body.classList.add('acik-mod');
        document.querySelector('.dark-mod').textContent = "Koyu Mod"; // İlk başta "Koyu Mod" yazsın
    }
});

