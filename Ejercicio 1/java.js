function  mirar() {
    var dato = document.getElementById("numero").Value;

    var tope = parseInt(dato);

    var resultado= "" ;

    var i = 1;

    while (i<= tope){
        resultado=resultado+i+"<br/>";
        i++;
    }
    
    document.getElementById("resultado").innerHTML= resultado;
}
  
