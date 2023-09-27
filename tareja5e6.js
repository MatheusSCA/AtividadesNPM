
const listaDeCompras = ["Maçãs", "Bananas", "Uvas", "Laranjas", "Pêssegos"];

function ItemLista(item) {
  return new Promise((resolve, reject) => {
    if (!item) {
      reject("Item não fornecido.");
      return;
    }

    if (listaDeCompras.includes(item)) {
      resolve(`${item} foi encontrado na lista de compras.`);
    } else {
      resolve(`${item} não foi encontrado na lista de compras.`);
    }
  });
}
function FrutasComM() {
    return new Promise((resolve, reject) => {
      if (!listaDeCompras || listaDeCompras.length === 0) {
        reject("A lista de frutas está vazia ou indisponível.");
        return;
      }
  
      const frutasComM = listaDeCompras.filter(listaDeCompras => listaDeCompras.toLowerCase().startsWith("m"));
  
      if (frutasComM.length > 0) {
        resolve("A lista contém pelo menos uma fruta que começa com 'm'.");
      } else {
        resolve("A lista não contém frutas que começam com 'm'.");
      }
    });
  }