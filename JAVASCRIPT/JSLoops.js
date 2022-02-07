// Loops

////////////////////////////////////////////////////////////////////////////////////////
// Örn 1: 20 ile 40 arasındaki tüm sayıları konsola yazdırın.
function örn1() {
  for (let i = 20; i < 40; i++) {
    console.log(i);
  }
}
örn1();
////////////////////////////////////////////////////////////////////////////////////////
// Örn 2: 0 ve 50 sayıları arasından çift olanları konsola yazdıralım.
function örn2() {
  for (let i = 0; i < 50; i++) {
    if (i % 2 == 0) {
      console.log("çift", i);
    } else {
      console.log("tek", i);
    }
  }
}
örn2();
////////////////////////////////////////////////////////////////////////////////////////

// Break - Continue
////////////////////////////////////////////////////////////////////////////////////////
// Break ve continue döngülerde sıklıkla kullandığımız önem arz eden ifadelerimizdendir.
// Döngüye müdahale etmemizi ve akışı kontrol etmemizi sağlarlar.

// Break:
// break ifadesi içinde bulunduğu döngüyü sonlandırmak diğer bir deyişle döngüden çıkılması
// hizmetini sunar. Bu hususta öneminin yeniden vurgulanması gereken nokta "break"
// ifadesinin sadece kendine en yakın yani içinde bulunduğu döngü içerisinde geçerli
// oluşudur.----> İç içe döngüler örneğinde daha net anlaşılacaktır.

// Etiketli Break:
// Etiketli break ifadeleri ise başına konulduğu döngü sistemini sonlandırır.

// Continue :
// Continue ifadesi ise bulunduğu döngü içinde o anki çalışacak olan devir işlemini pas
// geçerek bir sonraki devir işlemini başlatır. Yine burada da vurgulanması gereken nokta
// "continue" ifadesinin sadece kendine en yakın yani içerisinde bulunduğu döngü içinde
// geçerli oluşudur.

// Etiketli Continue:
// Etiketli continue ifadeleri ise başına konulduğu döngü sistemini etkiler.

// 1-) break için basit örnek
// normalde 1 den 10 a kadar yazdırması gerekirken 5 te break ile karşılaşıldığı
// için dögüden çıkıldı hemen orda döngü sonlandırıldı

function ornBreak() {
  for (var i = 0; i <= 10; i++) {
    if (i == 5) {
      break;
    }
    console.log("i:" + i);
  }
  console.log("Döngüden çıkıldı");
}
ornBreak();
// 2-) continue için basit örnek
// 1 den 10 a kadar yazıldı fakat 5 te continue ile karşılaşıldığı için o anki
// işlem olan 5 sayısı  pas geçilerek direk 6 ya geçildi
function ornContinue() {
  for (var i = 0; i <= 10; i++) {
    if (i == 5) {
      continue;
    }
    console.log("i:" + i);
  }
  console.log("Döngüden çıkıldı");
}
ornContinue();
// İç içe döngü örneği
// iç döngü de 3 değerinde break ifadesi çalışır ve o anda iç döngüden çıkılır yani
// iç döngü sonlanır.Fakat dış döngünün işleyişi aynen devam eder
function insideLoop() {
  for (var i = 0; i <= 10; i++) {
    console.log("dış döngü: " + i);
    for (var j = 0; j <= 5; j++) {
      if (j == 3) {
        break;
      }
      console.log("iç döngü" + j);
    }
  }
}
insideLoop();
// Etiketli break Örneği
// etiketli break ifadesi her ne kadar iç döngü içerisinde olsa dahi
// etiketin başına konulduğu döngü için etki eder.
// Böylece daha geniş çaplı bir dögüden çıkılmış oldu.
function tagBreak() {
  cikis_etiketi: for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 50; j++) {
      if (j == 9) {
        break cikis_etiketi;
      }
      console.log("iç döngüden j :" + j);
    }
  }
}
tagBreak();
// Etiketli Continue Örneği
function tagContinue() {
  gec_etiketi: for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 4; j++) {
      if (j == 2) {
        continue gec_etiketi;
      }
      console.log("iç döngüden j :" + j);
    }
  }
}
tagContinue();
////////////////////////////////////////////////////////////////////////////////////////
// While Loop
// While döngüsü oluşturabilmek için ilk olarak parametre olarak bir koşul vermemiz
// gerekmektedir verdiğimiz koşul sağlandığı sürece döngü devam eder.
function whileTest() {
  var i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}
whileTest();

function carBrands() {
  const brandArr = ["bmw", "mercedes", "suziki", "toyota", "hundai"];
  let i = 0;
  while (i < brandArr.length) {
    console.log(brandArr[i]);
    i++;
  }
}
carBrands();
////////////////////////////////////////////////////////////////////////////////////////
