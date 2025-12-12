
window.alert("a continuacion debera ingresar 3 notas, para calcular el promedio por alumno. las ponderaciones de la notas seran consecutivas a 25%, 35% , 40%. ");
var cantidad=parseFloat(prompt("Ingrese cantidad de alumnos"));

let notascurso=0;

for (let i = 0; i < cantidad; i++){
    
    var numeroAlumno= i + 1

    //Pedir nombre del cada alumno
    var nombre = prompt("Nombre del alumno " + numeroAlumno + ":");

    //aquí pide las notas 
    var nota1=parseFloat(prompt("para alumno "+ numeroAlumno + ", ingrese Nota1:"));
    var nota2=parseFloat(prompt("para alumno "+ numeroAlumno + ", ingrese Nota2:"));
    var nota3=parseFloat(prompt("para alumno "+ numeroAlumno + ", ingrese Nota3:"));
    
    //esto calcula el promedio 
   var promedioalumno=nota1*0.25+nota2*0.35+nota3*0.40;
    
    notascurso += promedioalumno;
    
    //mostrar la información en la pagina 
    document.write("<p>Alumno N° "+ numeroAlumno + "</p>");
    document.write("nota1 (25%) " + nota1 + " nota2 (35%) " + nota2 + " nota3 (40%) " + nota3 + " promedio del alumno : " + promedioalumno.toFixed(1));

    //esto deberia mostar los datos en la consola
    console.log("alumno N° " + numeroAlumno + " (" + nombre + ") - Promedio:", promedioalumno.toFixed(1));
    console.log("-Notas alumnos ")
    console.log("nota1 (25%) " + nota1 + " nota2 (35%) " + nota2 + " nota3 (40%) " + nota3 );
} 

let promedioCurso=notascurso/cantidad;


//esto deberia mostar el promedio del curso, en la pagina
document.write("<p> el promedio del grupo curso es: </p>"+ promedioCurso.toFixed(1));




