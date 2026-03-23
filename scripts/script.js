<script>
const form = document.getElementById("form-contato");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // 1. Validação simples
  if (!nome || !email || !mensagem) {
    alert("Preencha todos os campos.");
    return;
  }

  // 2. Validação de email (regex simples)
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValido.test(email)) {
    alert("E-mail inválido.");
    return;
  }

  // 3. Simulação de envio
  form.reset();

  feedback.style.display = "block";
  feedback.textContent = "Mensagem enviada com sucesso!";
});
</script>