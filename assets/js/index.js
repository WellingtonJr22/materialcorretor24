if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./assets/html/signin.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}!`;

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "./assets/html/signin.html";
}


document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('default-search');
  const itemList = document.getElementById('listaItens');
  const allItems = itemList.querySelectorAll('li');

  searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase();

      allItems.forEach(function (item) {
          const itemName = item.textContent.toLowerCase();

          if (itemName.includes(searchTerm)) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
  });
});
