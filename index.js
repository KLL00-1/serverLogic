const getResourse = async (url) => {
  const responce = await fetch(url);
  if (!responce.ok) {
    throw new Error(`ошибка по адресу ${url}, статус ${responce}`);
  }
  return await responce.json();
};
getResourse("https://jsonplaceholder.typicode.com/todos/1");
