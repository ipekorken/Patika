// Fetch Interfaces
////////////////////////////////////////////////////////////////////////////////////////
// *fetch(), bu yöntem bir kaynak almak için kullanılır.
// *Headers, response/request başlıklarını temsil ederek bunları sorgulamanıza ve
// sonuçlara bağlı olarak farklı eylemler gerçekleştirmenize olanak tanır.
// *Request , bir kaynak talebini temsil eder.
// *Response, bir isteğe verilen yanıtı temsil eder.
////////////////////////////////////////////////////////////////////////////////////////

//Temel Fetch Kullanımı
////////////////////////////////////////////////////////////////////////////////////////

//// GET İsteği
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json()) //parse json data
  .then(function (todos) {
    todos.forEach((todo) => {
      console.log(todo.title); //Başlıkları console' a yazdırma
    });
  });
////////////////////////////////////////////////////////////////////////////////////////

//POST isteği ile verimizi servera gönderelim
let payload = {
  title: "Blog Title",
  body: "lorem ipsum",
  userId: 1,
};
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(payload),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
////////////////////////////////////////////////////////////////////////////////////////
