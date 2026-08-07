console.log("hola capoo, titaan")

const formulario = document.getElementById("form-gastos")

formulario.addEventListener("submit",(event)=>{
    event.preventDefault();
    const descripcion = document.getElementById("descripcion").value;
    const monto = document.getElementById("monto").value;
    const categoria = document.getElementById("categoria").value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
  
    console.log(tipo)
    console.log(categoria)
    console.log(monto)
    console.log(descripcion)
    console.log("formulario enviado")
})

