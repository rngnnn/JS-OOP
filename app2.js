//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================

const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");
const equalButtons = document.querySelector(".equal");
const ustEkranDiv = document.querySelector(".previous-display");

const altEkranDiv = document.querySelector(".current-display");

//?operator değişkenleri (*******bu şekil global tutmayıp sürekli textcontent te değişiklik yaparsak işlem girildikten sonra, if ile üst ekrana geçer ya sayılar, işlem sonrası bir daha altta sayı göremeyiz ve sürekli uzun uzun yazmamak için, ve işlem e diğer fonksiyonlardan erişemeyiz)
let ustEkranText = "";
let altEkranText = "";
 let islem = "";



//?*********** herhangi bir number a basılınca

numberButtons.forEach((number) => {
 

});

//!EKRANA HAZIRLIK

const ekranaHazirlik = (num) => {
  //todo kullanıcı 0 girerse, sonrasında 0 ve . dışında bir sayı girerse, ekranda sadece girilen yeni sayı (0 iptal olsun) gözüksün





  //todo kullanıcı herhangi bir yerde . girmişken, tekrar nokta girmeye kalkarsa giremesin



  //todo kullanıcı 10 haneden sonra girmesin


  //todo kullanıcı ilk başta 0 girer ardından tekrar 0 girerse, girilmesin, tek 0 döndürsün





  //?bütün şartları başarı ile geçtiyse basılan numaraları arka arkaya ekle


};

//!BURADA YAPILANLARI EKRANA BASTIR

const updateEkran = () => {


 

  //?işlem girilince

  

};
//?**************HERHANGİ BİR İŞLEME TIKLANDIĞINDA

operationButtons.forEach((op) => {
  op.onclick = () => {
    //?currentDisplay boşken, hiçbir şekilde sayı girişi yapılmamışsa, operatöre basılmasın. boş return yapmaya çalıştığınız işlemi yaptırmaz.
    



    //todo eşittire basılmadan arka arkaya işleme basılırsa (alt ve üst ekran doluyken işleme basılmaya devam edilirse)
    



  };
});
//?**************eşittir butonuna tıklandığında

equalButtons.onclick = () => {



};

//! HESAPLA FONKSİYONU

const hesapla = () => {
  switch (islem) {
    case "+":
      sonuc = +ustEkranText + Number(altEkranText);
      break;
    case "-":
      sonuc = ustEkranText - altEkranText;
      break;
    case "x":
      sonuc = ustEkranText * altEkranText;
      break;
    case "÷":
      sonuc = ustEkranText / altEkranText;
      break;
    default:
      break;
  }

};

//?AC butonuna basıldığında
document.querySelector(".ac").onclick=()=>{
islem=""
altEkranText=""
ustEkranText=""

updateEkran()

}


//? PM butonuna basıldığında
document.querySelector(".pm").onclick=()=>{

if(!altEkranText) return

  altEkranText=altEkranText*-1
  updateEkran()
}



//?percent % butonuna basıldığında
document.querySelector(".percent").onclick=()=>{

  altEkranText=altEkranText/100

  updateEkran()


altEkranText=""

}

