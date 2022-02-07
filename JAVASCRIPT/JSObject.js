//Object(Nesne) Nedir? Nasıl Oluşturulur?
////////////////////////////////////////////////////////////////////////////////////////

//Object Literals
let countriesTalkSpanish = {
  continent: "south america",
  language: "spanish",
};
////////////////////////////////////////////////////////////////////////////////////////

//New Keyword ile Obje Oluşturmak
let countriesTalkFrench = new Object();
countriesTalkFrench.continent = "africa";
countriesTalkFrench.language = "french";

////////////////////////////////////////////////////////////////////////////////////////
// Javascript’te hemen her objenin bağlantılı olduğu ikinci bir obje vardır ve bu ikinci
// objelere prototype denir. Mevcut obje, ikinci objeden yani prototype’ından
// kalıtım(inheritence) alır. Object literal yöntemiyle oluşturulan her objenin prototipi
// aynıdır: object.prototype. New keyword'ü kullanılarak oluşturulan objelerin ise nereden
// kalıtım alacakları, function invocation’larına göre değişiklik gösterebilir. Örneğin
// new Date() objesi, hem object.prototype’ın kalıtımını alırken hem de date.prototype’dan
// kalıtım alır
////////////////////////////////////////////////////////////////////////////////////////

//Object.create
let noInheritence = Object.create(null); //herhangi bir kalıtım(inheritence) almaz.
// Herhangi bir yerden kalıtım almasını istemediğimiz bir obje oluşturmak istediğimizde null
// parametresini atamak yeterli olacaktır.

let standartObject = Object.create(Object.prototype); //standart obje kalıtımı alır.
// standartObject isimli obje örneği, object literal ve new object keyword ile oluşturulan
// objelerin prototiplerini parametre olarak aldığı için, onlar gibi çalışır.

let argentina = Object.create(countriesTalkSpanish);
// argentina isimli obje örneği ise daha önce oluşturduğumuz countriesTalkSpanish isimli object
// literal’dan kalıtım alacağı için onunla aynı property'lere sahip olur. Yani argentina objesi,
//  Güney Amerika kıtasında bulunduğunu ve İspanyolca konuşulduğunu, kalıtım yoluyla sahip
//  olduğu property'lerden belli eder.

argentina.capital = "buenos aires";
// objeye, ülkenin başkentini belirten yeni bir property atadık. Artık elimizde başkentini,
// konuşulan dili ve hangi kıtada yer aldığını bildiğimiz bir ülke var.

//örn:
let denemeObj = {
  deneme1: "ilk veri",
  deneme2: "ikinci veri",
}; // => obj literal

console.log(denemeObj);

let denemeObj2 = new Object();
denemeObj.deneme1 = "new obj ilk veri";
denemeObj.deneme2 = "new obj ikinci veri";

console.log(denemeObj);

let createDeneme1 = Object.create(null); // no inheritence
let createDeneme2 = Object.create(Object.prototype); // obj literal & new obj
let createDeneme3 = new Object(denemeObj);
console.log(createDeneme3);

createDeneme3.deneme3 = "üçüncü veri";
console.log(createDeneme3);
////////////////////////////////////////////////////////////////////////////////////////

//Nesnelere Nasıl Metot Ekleriz?
////////////////////////////////////////////////////////////////////////////////////////
var person = {
  name: "Rumeysa",
  surname: "Turgut",
  age: 23,
  city: "Istanbul",
  introduce: function () {
    return `My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`;
  },
};

console.log(person.introduce());
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
// BU KISMI HİÇ Mİ HİÇ ANLAMADIN !!!!
// https://app.patika.dev/moduller/javascript/nesnelere-nasil-metot-ekleriz
////////////////////////////////////////////////////////////////////////////////////////

//Object ve Array Destructuring Kullanımı
////////////////////////////////////////////////////////////////////////////////////////

//Destructuring nedir?
//Destructuring bir obje veya bir array içinden her bir elemanın alınıp bir değişken
//içine kaydedilmesi.

////////////////////////////////////////////////////////////////////////////////////////
const foo = { a: 123, b: true };
const foo = { a: 123, b: true };
const a = foo.a;
const b = foo.b;

// =>

const foo = { a: 123, b: true };
const { a, b } = foo;
////////////////////////////////////////////////////////////////////////////////////////
const cikarma = ({ sayi1, sayi2 }) => {
  // Bu satira dikkat
  return sayi1 - sayi2;
};
const sayilar = {
  sayi2: 3,
  sayi1: 5,
};
cikarma(sayilar);
// sonuc 2
////////////////////////////////////////////////////////////////////////////////////////

//Rest Operator ile diyebiliriz ki sayi1 ve sayi2'yi destructure yap. Bu sefer de diğer
//sayıları kaybederiz. Bu durumda spreading operator ile diyebiliriz ki tamam destructuring
//yap ama geri kalan diğer sayıları da bana ver.
const toplama = ({ sayi1, sayi2, ...args }) => {
  let sonuc = sayi1 + sayi2;
  for (let sayi in args) {
    sonuc += args[sayi];
  }
  return sonuc;
};
const sayilar = {
  sayi1: 8,
  sayi2: 4,
  sayi3: 7,
  sayi4: 9,
  sayi5: 11,
};
toplama(sayilar);
// 39 doner

// => burda kaldık: https://app.patika.dev/moduller/javascript/try-ve-catch-kullanimi
