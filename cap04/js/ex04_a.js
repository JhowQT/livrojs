const frm = document.querySelector("form");
const resp = document.querySelector("#inResposta")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    const par_ou_impar = numero % 2 == 0 ? "número e par" : "número e impar";

    resp.innerText = `O ${par_ou_impar}`
})