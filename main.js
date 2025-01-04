"use strict"; //Hata yaptığımızda bizi uyarır

let secretNumber = parseInt(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);
  console.log(typeof secretNumber, secretNumber);

  // İNPUT EĞER BOŞ GİRİLİRSE
  if (!guess) {
    displayMessage("Bir Sayı Giriniz...");
  }

  //SAYILAR EŞLEŞİRSE
  else if (guess === secretNumber) {
    displayMessage("TEBRİKLER KAZANDINIZ...");
    document.querySelector(".number").textContent = secretNumber;
    document
      .querySelector("body")
      .style.setProperty("background-color", "green", "important");
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = "En yüksek Skor :" + score;
      document.querySelector(".label-highscore").textContent = highscore;
    }
  }

  // SAYILAR EŞLEŞMİYORSA
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "Daha Küçük Sayı Tahmin Etmelisin.."
          : "Daha Büyük Sayı Tahmin Etmelisin..."
      );
      document.querySelector(".label-score").textContent = "Score :" + score;
    } else {
      displayMessage("Oyunu Kaybettiniz");
      document.querySelector(".label-score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = parseInt(Math.random() * 20 + 1);

  displayMessage("Tahmin Ediliyor...");
  document.querySelector(".label-score").textContent = "Score :" + score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document
    .querySelector("body")
    .style.setProperty("background-color", "#222", "important");
  document.querySelector(".number").style.width = "15rem";
});
