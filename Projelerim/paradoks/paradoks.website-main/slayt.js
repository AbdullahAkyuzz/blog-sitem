var models = [
  {
    name: "Çamlıca Kulesi",
    image: "img/camlicakulesi.jpg",
    link: "üsküdar.html",
  },
  {
    name: "Galata Köprüsü",
    image: "img/galatakopru.jpg",
    link: "eminönü.html",
  },
  {
    name: "Galata Kulesi",
    image: "img/galatakulesi.jpg",
    link: "beyoğlu.html",
  },
  {
    name: "Kız Kulesi",
    image: "img/kizkulesi.jpg",
    link: "üsküdar.html",
  },
  {
    name: "Kuzguncuk",
    image: "img/kuzguncuk.jpg",
    link: "üsküdar.html",
  },
  {
    name: "İstiklal Caddesi",
    image: "img/istiklalcaddesi.jpg",
    link: "beyoğlu.html",
  },
  {
    name: "Mısır Çarşısı",
    image: "img/misircarsi.jpg",
    link: "eminönü.html",
  },
  {
    name: "Yerebatan Sarnıcı",
    image: "img/yerebatansarnic.jpg",
    link: "#",
  },
  {
    name: "Taksim Meydan",
    image: "img/taksimmeydan.jpg",
    link: "beyoğlu.html",
  },
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings = {
  duration: "2000",
  random: false,
};

init(settings);

document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

function init(settings) {
  var prev;
  interval = setInterval(function () {
    if (settings.random) {
      // random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
      // artan index
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }

  document.querySelector(".card-title").textContent = models[index].name;

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".card-link").setAttribute("href", models[index].link);
}

//setintorvel slaytı durdurmadan devam edeer
//seltimeout ise tek seferliğine devam ettririr

grup = document.querySelectorAll("#card");
grup.forEach(function (item) {
  item.style.background = "#c7f1effd";
});

let doc = document.querySelector("h5");
doc.style.color = "#706e66";

let etiket = document.getElementById("etiket");
etiket.style.color = "black";
arkaplan = document.querySelectorAll("body");
arkaplan.forEach(function (item) {
  item.style.background = "beige";
});
ikon = document.getElementById("ikon");
ikon.style.color = "#706e66";

ikon2 = document.getElementById("ikon2");
ikon2.style.color = "#706e66";
