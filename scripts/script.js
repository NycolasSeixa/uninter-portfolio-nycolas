const form = document.getElementById("form-contato");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Preencha todos os campos.");
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(email)) {
    alert("E-mail inválido.");
    return;
  }

  form.reset();

  feedback.style.display = "block";
  feedback.textContent = "Mensagem enviada com sucesso!";

  console.log("Mensagem enviada com sucesso!");
});