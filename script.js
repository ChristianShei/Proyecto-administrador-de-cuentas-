console.log("hola capoo, titaan")

const formulario = document.getElementById("form-gastos")
const listaDeMovimientos = document.getElementById("lista-movimientos")

const movimientos = []
function mostrarMovimientos (){
       
    listaDeMovimientos.innerHTML = ""
    movimientos.forEach((movimiento) =>{
    const nuevoMovimiento = document.createElement("div")
    console.log(nuevoMovimiento)

    nuevoMovimiento.innerHTML=`
    <h3>${movimiento.descripcion}</h3>
    <p>${movimiento.monto}</p>
    <div id="prueba">
        <p>${movimiento.categoria}</p> 
        <p>|</p> 
        <p>${movimiento.tipo}</p>
    </div>
    `
  listaDeMovimientos.appendChild(nuevoMovimiento)
 formulario.reset()
      
    })


}
formulario.addEventListener("submit",(event)=>{
    event.preventDefault();
    const descripcion = document.getElementById("descripcion").value;
    const monto = document.getElementById("monto").value;
    const categoria = document.getElementById("categoria").value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
  
    const movimiento = {
        descripcion,
        monto,
        categoria,
        tipo
    }
    movimientos.push(movimiento)
    mostrarMovimientos()
   

    

 

    
})

