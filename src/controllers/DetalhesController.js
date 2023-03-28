
const DetalhesController = {
menos: document.getElementById("minus"),
mais:  document.getElementById("plus"),
quantidadeInput = document.getElementById("quant"),

menos.addEventListener("click", () => {
  let quantidade = parseInt(quantidadeInput.value);
  if (quantidade > 1) {
    quantidade--;
  }
  quantidadeInput.value = quantidade;
});

mais.addEventListener("click", () => {
  let quantidade = parseInt(quantidadeInput.value);
  quantidade++;
  quantidadeInput.value = quantidade;
});
}

module.exports = DetalhesController 