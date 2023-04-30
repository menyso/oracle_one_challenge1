function encriptar() {
    let bandera=true;
    oracion = document.getElementById("texto").value;
    resultado="";

    for (let i=0;i<oracion.length;i++){
        for(let j=0;j<letras.length;j++){
            if(oracion.charAt(i) == letras[j]){
                resultado=resultado+modLetras[j];
                bandera = false;
                break;
            }
        }
        if(bandera){
            resultado=resultado+oracion.charAt(i);
        }
        bandera = true;
    }   
    salida.innerText=resultado;
}
function desencriptar() {
    oracion = document.getElementById("texto").value;
    let i=0;
    let contador=0;
    let letra="";
    let cadena="";
    let bandera=false;
    resultado="";

    while(i<=oracion.length){//posicionamiento de letras de la oracion
        letra=oracion.charAt(i);
        bandera =false;
        for(let a=0;a<letras.length;a++){//verificar letra
            if(letra==letras[a]){//vemos si la letra es igual
              for(let j=i;j<oracion.length;j++){
                contador++;
                cadena=cadena+oracion.charAt(j);
                if(cadena==modLetras[a]){
                    resultado=resultado+letra;
                    bandera=true;
                    cadena="";
                    break;
                }
              }
            }else{
                if(bandera==false && a==4){
                    resultado=resultado+letra;
                }
                
            } 
        }
        if(contador>0){
            i=i+contador;
            contador=0;
            
        }else{
            i++
        } 
    }
    
    salida.innerText=resultado;
}
var letras =    ["a",  "e",    "i",   "o",   "u"  ];
var modLetras = ["ai","enter","imes","ober","ufat"];
var oracion;
var resultado;
var salida=document.getElementById("textArt");
var texoValue=document.getElementById("texto");
texoValue.onclick=texoValue.innerHTML="";
document.getElementById("btnE").onclick = encriptar;
document.getElementById("btnD").onclick = desencriptar;
