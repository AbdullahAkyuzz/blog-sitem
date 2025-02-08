document.addEventListener('DOMContentLoaded', () => {
    const temaButon = document.querySelector('.dark-mod'); // Dark mode butonuna erişim
    let tema = localStorage.getItem('tema') || 'koyu'; // Varsayılan tema "koyu"

    // Sayfa dili kontrolü (tarayıcı dili veya sayfa içeriği)
    const dil = document.documentElement.lang || navigator.language || navigator.userLanguage;
    const ingilizceMi = dil.startsWith('en'); // Sayfa dili İngilizce mi?

    // Sayfa yüklendiğinde temayı uygula
    temaDegistir(tema);
    butonMetniGuncelle(tema, ingilizceMi);

    temaButon.addEventListener('click', () => {
        tema = tema === 'koyu' ? 'acik' : 'koyu'; // Tema değiştir
        localStorage.setItem('tema', tema); // Yeni temayı kaydet
        temaDegistir(tema);
        butonMetniGuncelle(tema, ingilizceMi);
    });
});

// Tema değiştirme fonksiyonu
function temaDegistir(tema) {
    const body = document.body;
    const profilYazi = document.querySelector('.sol span');
    const iletisimForm = document.querySelector('.iletisim-form');
    const iletisimBilgileri = document.querySelector('.iletisim-bilgileri');
    const ustBar = document.querySelector('.ust-bar');
    const cvIndir = document.querySelector('.cv-indir'); // CV bağlantısı

    if (tema === 'acik') {
        body.style.backgroundColor = '#f4f4f4'; // Açık arka plan
        body.style.color = '#000'; // Genel yazı rengi koyu
        profilYazi.style.color = '#000'; // Profil yazısı koyu
        iletisimForm.style.backgroundColor = '#e0f7fa'; // Çok açık mavi
        iletisimBilgileri.style.backgroundColor = '#e0f7fa'; // Çok açık mavi
        ustBar.style.backgroundColor = '#3b70bb'; // Çok açık mavi

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
        iletisimForm.style.backgroundColor = '#37474f'; // Daha koyu gri
        iletisimBilgileri.style.backgroundColor = '#37474f'; // Daha koyu gri
        ustBar.style.backgroundColor = '#3c4a5e'; // Çok açık mavi

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

// Buton metnini güncelleyen fonksiyon
function butonMetniGuncelle(tema, ingilizceMi) {
    const temaButon = document.querySelector('.dark-mod');
    if (!temaButon) return;

    const koyuModMetni = ingilizceMi ? "Dark Mode" : "Koyu Mod";
    const acikModMetni = ingilizceMi ? "Light Mode" : "Açık Mod";

    temaButon.textContent = tema === 'koyu' ? acikModMetni : koyuModMetni;
}

// Sayfa yüklendiğinde doğru buton metnini ayarla
window.addEventListener('DOMContentLoaded', () => {
    const tema = localStorage.getItem("tema") || "koyu";
    const dil = document.documentElement.lang || navigator.language || navigator.userLanguage;
    const ingilizceMi = dil.startsWith('en'); // Sayfa dili İngilizce mi?

    butonMetniGuncelle(tema, ingilizceMi);
});
