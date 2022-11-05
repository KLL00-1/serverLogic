const sendData = async (url, data) => {
  const responce = await fetch(url, {
    method: "POST",
    body: data,
  });
};
if (!responce.ok) {
  throw new Error(`ошибка по адресу ${url}, статус ${responce}`);
  return await responce.json();
}

const sendCart = () => {
  const cartForm = document.getElementById("form");
};
cartForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(cartForm);
  const cartList = JSON.stringify(data);

  sendData("https://jsonplaceholder.typicode.com/posts", formData);
});

sendCart();
