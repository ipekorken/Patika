// Try Ve Catch Kullanımı
////////////////////////////////////////////////////////////////////////////////////////
// try...catch ifadesini basitçe ifade edersek; Herhangi bir iş yaparken
// bir hatayla karşılaşılma durumunun ele alınması anlamına gelmektedir.
// try anahtar kelimesi kodları çalışma zamanında test etmek için
// kullanılırken, catch anahtar kelimesi ise çalışma zamanında hata çıkması
// durumunda bu hataları yakalamak için kullanılır.
////////////////////////////////////////////////////////////////////////////////////////
// örn kod bloğu:

try {
  //Çalıştırılacak kodlar
} catch (hata) {
  //Hata yakalandığında çalışacak kodlar
} finally {
  //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
}
////////////////////////////////////////////////////////////////////////////////////////
// catch bloğunda yazılmış olan hata değişkeni oluşacak istisnayı taşıyacak olan değişken
// adıdır. Buraya herhangi bir isim verilebilir fakat yaygın olarak exceptionın ilk harfi
// olan e, err gibi ifadelerle isimlendirilir. Bizde örneklerimizde bu yaygın
// isimlendirmelerden err yi kullanacağız.

try {
  hello();
} catch (err) {
  console.error(err);
  // beklenen çıktı: ReferenceError: hello is not defined
  // hata mesajları tarayıcıya göre değişiklik gösterecektir
}
////////////////////////////////////////////////////////////////////////////////////////
//throw ifadesi bize özel hatalarımızı oluşturmanıza olanak tanır. Teknik olarak throw
//ile bir istisna (hata) atılabilir.

{
  /* <input type="text" id="dogumTarihi" />
<button onclick="valid()">Gönder</button> */
}
function valid() {
  try {
    if (document.querySelector("#dogumTarihi").value == "") {
      throw "Doğum tarihini boş geçemezsiniz";
    }
  } catch (err) {
    alert(err);
  }
}
////////////////////////////////////////////////////////////////////////////////////////
