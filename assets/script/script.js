// const form = document.getElementById("formulario");
// const campos = document.querySelectorAll(".inputs");
// const span = document.querySelectorAll(".span-required");
// const emailregex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// //

// form.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     validarNome();
//     validarEmail();
//     validarSenha();
//     senhasIguais();
// })

// //

// function validarNome() {
//   if (campos[0].value.length < 5) {
//     verErro(0);
//   } else {
//     removerErro(0);
//   }
// }

// function verErro(index) {
//   campos[index].style.border = "2px solid #e63636";
//   span[index].style.display = "block";
// }
// function removerErro(index) {
//   campos[index].style.border = "";
//   span[index].style.display = "none";
// }

// //

// function validarEmail() {
//   if (emailregex.test(campos[1].value)) {
//     removerErro(1);
//   } else {
//     verErro(1);
//   }
// }

// function validarSenha() {
//   if (campos[2].value.length < 6) {
//     verErro(2);
//   } else {
//     removerErro(2);
//     senhasIguais();
//   }
// }

// function senhasIguais() {
//   if (campos[2].value == campos[3].value && campos[3].value.length >= 6) {
//     removerErro(3);
//   } else {
//     verErro(3);
//   }
// }



const form = document.getElementById("formulario");
const inputs = document.querySelectorAll(".inputs");
const errorSpans = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener("submit", event => {
  event.preventDefault();

  validateInput(0, "Nome", value => value.length >= 5);
  validateInput(1, "Email", value => emailRegex.test(value));
  validateInput(2, "Senha", value => value.length >= 6);
  validateInput(
    3,
    "Confirmar Senha",
    value => value === inputs[2].value && value.length >= 6
  );
});

function validateInput(index, label, validationFn) {
  const input = inputs[index];
  const errorSpan = errorSpans[index];

  if (validationFn(input.value)) {
    removeError(input, errorSpan);
  } else {
    showError(input, errorSpan, label);
  }
}

function showError(input, errorSpan, label) {
  input.style.border = "2px solid #e63636";
  errorSpan.textContent = `${label} inválido(a).`;
  errorSpan.style.display = "block";
}

function removeError(input, errorSpan) {
  input.style.border = "";
  errorSpan.style.display = "none";
}
