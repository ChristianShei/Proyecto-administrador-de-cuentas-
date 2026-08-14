console.log("hola capoo, titaan")

const formulario = document.getElementById("form-gastos")
const listaDeMovimientos = document.getElementById("lista-movimientos")
const saldo = document.getElementById("saldo")
const ingresos = document.getElementById("ingresos")
const gastos = document.getElementById("gastos")


const movimientos = []



function actualizarResumen(){
    let totalDeIngresos = 0
    let totalDeGastos = 0

    movimientos.forEach((resumen)=>{
        if(resumen.tipo === "ingresos"){
            totalDeIngresos += Number(resumen.monto)
        }else {
            totalDeGastos += Number(resumen.monto)
        }
         
    })
    ingresos.textContent = `$${totalDeIngresos}`
    gastos.textContent = `$${totalDeGastos}`
    saldo.textContent =`$${totalDeIngresos - totalDeGastos}`
   
    
}

function mostrarMovimientos (){
       
    listaDeMovimientos.innerHTML = ""
    movimientos.forEach((movimiento, indice) =>{
    
    const nuevoMovimiento = document.createElement("div")
    nuevoMovimiento.classList.add("movimiento")
    const botonEliminar = document.createElement("button")
    botonEliminar.textContent = "Eliminar"
    
    botonEliminar.addEventListener("click", ()=>{
        movimientos.splice(indice,1)
           console.log("Después:", movimientos);
    guardarMovimientos()
    mostrarMovimientos();
    actualizarResumen();

    
        
    })

    if (movimiento.tipo === "gastos"){
        nuevoMovimiento.classList.add("gasto")
    } else {
        nuevoMovimiento.classList.add("ingreso")
    }
    console.log(indice, movimientos)
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
  nuevoMovimiento.appendChild(botonEliminar)
 
      
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
    guardarMovimientos()
    mostrarMovimientos()
    actualizarResumen()
    formulario.reset()
   
})

function guardarMovimientos (){
    localStorage.setItem("movimientos", JSON.stringify(movimientos))
}
function cargarMovimientos (){
    const datos = localStorage.getItem("movimientos")
    if(datos){
        const movimientosGurdados = JSON.parse(datos)
        movimientos.push(...movimientosGurdados)
    }
}
cargarMovimientos();
mostrarMovimientos();
actualizarResumen();
