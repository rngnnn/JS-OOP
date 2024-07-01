const num=document.querySelectorAll(".num")
const operator=document.querySelectorAll(".operator")
const previous=document.querySelector(".previous-display")
const current=document.querySelector(".current-display")
const equal=document.querySelector(".equal")
const ac=document.querySelector(".ac")
const percent=document.querySelector(".percent")
const pm=document.querySelector(".pm")

let altekranText=""
let ustekranText=""
let islem=""



num.forEach((number)=>{
    number.onclick=()=>{
        
        
    //    altekranText=number.textContent
    //    current.textContent=altekranText
    // yukarıdaki işlem fonksiyonda yapılamsı için bu şekilde kullanıldı
    ekranaHazirlik(number.textContent)
    }

})

//!EKRANA HAZIRLIK İŞLEMLERİ
const ekranaHazirlik=(num)=>{ 
    // ? kullanıcı 0 girerse, sonrasında 0 ve . dışında bir sayı girerse, ekranda sadece girilen yeni sayı (0 iptal olsun) gözüksün
    if (altekranText==="0" && num !=="0" && num!=="."){        
        altekranText=num
        updateEkran()
        return;
        
    }
 
    //? kullanıcı ilk başta 0 girer ardından tekrar 0 girerse, girilmesin, tek 0 döndürsün
    if (altekranText=="0" && num=="0") return

    //? kullanıcı herhangi bir yerde . girmişken, tekrar nokta girmeye kalkarsa giremesin

    if (num==="." && altekranText.includes(".")) return

    //? kullanıcı 10 haneden sonra girmesin
    // if (altekranText.length>9) return

    //? kullanıcı 10dan fazla girerse exponential olarak bir gösterim yapsın
    // const deger=(altekranText.length>10) ? altekranText.length.toExponential() : altekranText
    // altekranText=deger

    //  const deger=(altekranText.length>10) ? altekranText="error" : altekranText
    // altekranText=deger

    if (altekranText===".") {altekranText="0."}

    altekranText +=num
    updateEkran()

}


  //!EKRANDA GÖSTERME İŞLEMLERİ
const updateEkran=()=>{
    current.textContent=altekranText
    if (islem){
          previous.textContent=`${ustekranText} ${islem}`
    }
    else{
        previous.textContent=""
    }

}

operator.forEach((op)=>{
    op.onclick=()=>{

        if (altekranText==="") return

        if (altekranText && ustekranText) hesapla()

        islem=op.textContent

        ustekranText=altekranText
        altekranText=""
        updateEkran()
    }
})



equal.onclick=()=>{
    hesapla()    
    updateEkran()
    altekranText=""
}

const hesapla=()=>{
    switch (islem){
        case "+":
            sonuc=Number(ustekranText) + Number(altekranText);
        break;
        case "-":
            sonuc=ustekranText - altekranText;
        break;
        case "x":
            sonuc=ustekranText * altekranText;
        break;
        case "÷":
            sonuc=ustekranText / altekranText;
        break;
        case "%":
            sonuc=(ustekranText /100) *altekranText;
        break;
        default:
            break;
    }
    altekranText=sonuc;
    ustekranText=""
    islem="";
}

ac.onclick=()=>{
    islem=""
    altekranText=""
    ustekranText=""
    updateEkran()
}

// percent.onclick=()=>{
//     altekranText= altekranText/100
//     updateEkran()
// }

pm.onclick=()=>{
    altekranText=altekranText*-1
    updateEkran()
}
