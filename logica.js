let textarea = document.getElementById("texto")

let input = document.getElementById("miInput")

let encriptar = document.getElementById("encriptar")
encriptar.addEventListener("click", encriptador)

let desencriptar = document.getElementById("desencriptar")
desencriptar.addEventListener("click", desencriptador)

let copiar = document.getElementById("copiar")
copiar.addEventListener("click", copiarTexto)

function encriptador() {
    document.getElementById("blockText").style.display = "block";
    document.getElementById("card").style.display = "none";
    let texto = input.value.split("");
    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "a":
                texto[i] = "ai";
                break;
            case "e":
                texto[i] = "enter";
                break;
            case "i":
                texto[i] = "imes";
                break;
            case "o":
                texto[i] = "ober";
                break;
            case "u":
                texto[i] = "ufat";
                break;
            default:
                break;
        }
    }
    let encriptado = texto.join("")
    textarea.value = encriptado
}
function desencriptador() {
    let texto = input.value.split("");
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a" && texto[i + 1] === "i") {
            texto.splice(i, 2, "a")
        }
        if (texto[i] === "e" && texto[i + 1] === "n" && texto[i + 2] === "t" && texto[i + 3] === "e" && texto[i + 4] === "r") {
            texto.splice(i, 5, "e")
        }
        if (texto[i] === "i" && texto[i + 1] === "m" && texto[i + 2] === "e" && texto[i + 3] === "s") {
            texto.splice(i, 4, "i")
        }
        if (texto[i] === "o" && texto[i + 1] === "b" && texto[i + 2] === "e" && texto[i + 3] === "r") {
            texto.splice(i, 4, "o")
        }
        if (texto[i] === "u" && texto[i + 1] === "f" && texto[i + 2] === "a" && texto[i + 3] === "t") {
            texto.splice(i, 4, "u")
        }
    }
    let desencriptado = texto.join("");
    textarea.value = desencriptado;
}

function copiarTexto() {
  var texto = document.getElementById("texto");
  texto.select();
  texto.setSelectionRange(0, 99999); // Para dispositivos móviles
  document.execCommand("copy");
}
