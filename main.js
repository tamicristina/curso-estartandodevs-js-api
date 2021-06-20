async function apiData() {
  try {
    const responseAsync = await fetch("https://reqres.in/api/users?page=1");
    const response = await responseAsync.json();
    return userData(response);
  } catch (error) {
    return "Erro" + error;
  }
}
apiData();

function userData(users) {
  let entradaImg = [];
  console.log(users.data);
  for (let user of users.data) {
    entradaImg.push(`<img src = ${user.avatar} />`);
  }
  document.querySelector("div.container").innerHTML = entradaImg;
}
userData();
