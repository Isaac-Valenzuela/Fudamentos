//variables
let username = "Isaac Valenzuela" //string
const cedula = 1754210498 //int
let user = true
const mail = "isaac.valenzuela@epn.edu.ec" //string 

//tipo compuesto
let datosUser = {user1:"Isaac", estado: true} //objeto
let datosUserCompleto = ["Isaac Valenzuala",19,false] //array

let producto = "Logitec G920"//string
let precio = 299.94 //float
let cantidad = 10

// propiedades
console.log(mail.toLocaleLowerCase())

// Template strings
console.log(`El producto ${producto.toUpperCase()} tiene un precio de ${precio} y estan disponibles ${cantidad} en stock`)

let impuestos = 0.15
let precioString = "299.94"

// casting 
console.log(+precioString+(precio*impuestos))

//operador ternario
console.log(user ? "El usuario esta activo" : "El usuario esta inactivo")

//comparacion estricta
cupon = 12345
cupon === "1234" ? console.log("Descuento aplicado correctamente") : console.log("Error")

//lops
const dispositivosCompatibles = ["PS4", "PS5", "Xbox One", "Xbox xls", "PC", "Mac"]
dispositivosCompatibles.forEach((dispositivosCompatible) =>console.log(dispositivosCompatible))

//funcion anonima
//(function(){
//    console.log("ejecution de una funcion")
//})

//funcion declarada
function getAvatar(){
    console.log("Obteniendo avatar")
}

// funcion expresada
const descuentos = function(){
    console.log("Cupon aplicado con exito")
}

// argumentos 
const validarCredenciales = function(mail, password){
    console.log(`El usuario ${mail} ha ingresado con la contraseña ${password}`)
}
validarCredenciales("asd",123)

//retorno
function infoUser(){
    return{
        name: "Isaac",
        age: 19,
        username: "Isaac2024",
        id: 121212
    }
}

infoUser()


// funcion flecha
const descuentoAplicado = () =>{ console.log("Descuento aplicado")}
descuentoAplicado()

const codigos = (codigo) => {
    console.log("descuento aplicado") 
}
codigos("1231")

// objetos
const factura = {
    idd: 123,
    nommbre: "isaac",
    prooducto: "LOGITEC G920",
    precioo: 299.94,
    descuentoo: 10,

}
console.log(factura.descuentoo)

// destrucutacion
const {idd,nommbre,prooducto,precioo,descuento} = factura
console.log(nommbre)

//propiedades
factura.direccion = "San miguel de los bancos y madrid"
delete factura.descuentoo
console.log(factura)

Object.values(factura).includes("") ? console.log("Factura mal generada") : console.log("Factura guardada")

// operador spread

const productoVerificacion = {
    nombree: "Logitec g920", price: 299.94
}

const Enviar = {...factura,...productoVerificacion}
console.log(Enviar)

// nombres abreviados de propiedades
const product = "Logitec g920"
const price = 299.94
const info = {product, price}
console.log(info)