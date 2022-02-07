// JavaScript'de forEach Nasıl Kullanılır?
////////////////////////////////////////////////////////////////////////////////////////
// JavaScript'te forEach , döngü oluşturmamızı ve bu döngüyü sırayla çalıştırmamızı
// sağlayan bir array metodudur.
// forEach fonksiyonu item, index, array olmak üzere 3 parametre alabilir.

// Orn1:
const animals = ["cat", "dog", "bird", "horse"];

animals.forEach((value, index, array) => {
  console.log("value: ", value);
  console.log("value parametresinin aldığı index :", index);
  console.log("array:", array);
});
//output:
// value:  cat
// value parametresinin aldığı index : 0
// array: [ 'cat', 'dog', 'bird', 'horse' ]
// value:  dog
// value parametresinin aldığı index : 1
// array: [ 'cat', 'dog', 'bird', 'horse' ]
// value:  bird
// value parametresinin aldığı index : 2
// array: [ 'cat', 'dog', 'bird', 'horse' ]
// value:  horse
// value parametresinin aldığı index : 3
// array: [ 'cat', 'dog', 'bird', 'horse' ]

// Orn2:
const animalsArr = ["cat", "dog", "bird", "horse"];
animals.forEach((animal) => console.log(animal));
//output:
// cat
// dog
// bird
// horse

// Orn3:
const numbers = [4, 11, 9];
const newArray = [];

numbers.forEach(function (numbers) {
  newArray.push(numbers * 3);
});
console.log(newArray);
//output:
// [ 12, 33, 27 ]

////////////////////////////////////////////////////////////////////////////////////////

// Filter Metodu:

const person = [
  {
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
  },
];

//Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük
//olan kişiyi getirin.

const userAge = person.filter((uAge) => uAge.age >= 30);
console.log(userAge[0].name);

//Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.

const knowJS = person.filter((e) => e.languages.includes("JavaScript"));
console.log(knowJS[0].name);
////////////////////////////////////////////////////////////////////////////////////////

//Map ile Array İçerisideki Yapının Değiştirilerek Yeni Liste Oluşturulması
//Örn 1: Bir dizinin tüm elemanlarını 2 ile çarpan fonksiyon;
const sayilarMap = [2, 3, 4, 5, 10];
function multiplication() {
  const newMapArr = sayilarMap.map(function (sayi) {
    return sayi * 2;
  });
  console.log(newMapArr);
}
multiplication();

// Örn 2: Maaş zam hesaplama; İşçilerin aldıkları maaşlara ait bir dizi olsun. Maaşı
// 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 zam yapan bir
// array map oluşturalım.
const maaslar = [1100, 13000, 2500, 4500, 1500, 25000, 2000];
function maas() {
  const zamArr = maaslar.map((maas) => {
    if (maas > 3000) {
      return maas * 1.15;
    } else {
      return maas * 1.25;
    }
  });
  console.log(zamArr);
}
maas();
