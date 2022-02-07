// Array (Dizi) Metotlarının Kullanımı ve Array içinde Array Oluşturma

let alisverisListem = ["elma", "ekmek", "süt", "bal", "yumurta", "şeker"];

////////////////////////////////////////////////////////////////////////////////////////
// push() - eleman ekler
alisverisListem.push("reçel");
console.log(alisverisListem);
// alisverisListem = ['elma', 'ekmek','süt', 'bal','yumurta', 'şeker', 'reçel']
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
// pop() - son elemanı siler / parantez içine parametre almaz
alisverisListem.pop();
console.log(alisverisListem);
//alisverisListem = [ 'elma', 'ekmek', 'süt', 'bal', 'yumurta', 'şeker' ]
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
// includes() - eleman dizide var mı yok mu / true veya false döner
console.log(alisverisListem.includes("yumurta"));
//true
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
// slice() - dizinin bir kısmıyla başka dizi oluşturur / yeni dizi başka değişkene atanır.
const newArr = alisverisListem.slice(0, 2);
console.log(newArr);
//[ 'elma', 'ekmek' ] - 0,1 (2 dahil değil)
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
// join() - diziyi string yazdırır / parametre vermezsek eleman aralarına virgül ekler.
const strArr = alisverisListem.join();
console.log(strArr);
//elma,ekmek,süt,bal,yumurta,şeker
const strArr2 = alisverisListem.join("---");
console.log(strArr2);
//elma---ekmek---süt---bal---yumurta---şeker
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
// concat() - farklı dizileri birleştirip tek dizi yapar
const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];
console.log(arr1.concat(arr2));
//[ 1, 2, 3, 'a', 'b', 'c' ]
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
// forEach()
// kullanım şekli:
// dizi.forEach(function(diziElemanınınKendisi, diziElemanınınIndeksi, dizininKendisi) {
// ..code..
// });
const malzemeler = ["yumurta", "un", "şeker"];
malzemeler.forEach(function (malzeme, malzemeIndex) {
  console.log(malzeme, malzemeIndex);
});
//output:
//yumurta 0
//un 1
//şeker 2
console.log(malzemeler);
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
// map() - orjinal diziyi bozmaz / işlemi her elemanına uygular.
let sayilar = [1, 2, 3, 4];
let sayilarx5 = sayilar.map(function (sayi) {
  //buradaki sayi, item yazmak gibi bir şey.
  return sayi * 5;
});
console.log(sayilarx5); //[ 5, 10, 15, 20 ]
console.log(sayilar); //[ 1, 2, 3, 4 ]
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
// some()
const ornArr = [0, 1, 2, 3, 4];
const sonuc = ornArr.some(function (sayi) {
  return sayi > 5;
});
console.log(sonuc);
//false (5'ten büyük eleman yok)
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
// every() - some'dan farkı true dönmesi için tüm elemanların koşula uyması gerekli.
const everyArr = [3, 4, 5];
const sonucEvery = everyArr.every(function (sayi) {
  return sayi > 3;
});
console.log(sonucEvery);
//false (3, 3ten büyük değil. 4 ve 5 olsa da hepsi koşulu sağlamadı)
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
// filter() - koşulu sağlayan elemanlarla yeni dizi oluşturur (filtreleme)
const filterSayilar = [1, 2, 3, 4, 5];

const filtrelenmisSayilar = filterSayilar.filter(function (sayi) {
  return sayi > 3;
});
console.log(filtrelenmisSayilar);
// [4, 5]
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
// find() - koşulu sağlayan elemanı bulur (yoksa undefined, varsa elemanı, birden fazla
// ise ilk bulduğu elemanı döner.)
const findSayilar = [4, 5, 6, 7];

const bulunacakEleman1 = findSayilar.find(function (sayi) {
  return sayi === 5;
});
console.log(bulunacakEleman1);
//5
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
// sort() - elemanları sıralar, orjinal diziyi değiştirir.
const list = [5, 3, 8, 12, 1, 2];
list.sort();
console.log(list);
//[ 1, 12, 2, 3, 5, 8 ] (Sayıların string halleri UTF-16 değerlerine göre sıralanır)
list.sort(function (a, b) {
  return b - a; //büyükten küçüğe
});
console.log(list);
//[ 12, 8, 5, 3, 2, 1 ]
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
// Örnek Sorular
// 1.
let dizi = [2, 5, 8, 11, 15, 17]; // Uygun dizi metotlarını kullanarak  yukarıda verilen
//dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni
// bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)

const bigger10Arr = dizi.filter(function (sayi) {
  return sayi > 10;
});
const x5Arr = bigger10Arr.map(function (sayi) {
  return sayi * 5;
});
console.log(x5Arr); //[ 55, 75, 85 ]
////////////////////////////////////////////////////////////////////////////////////////