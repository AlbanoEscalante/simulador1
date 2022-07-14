function promedio(){
    let apellido =prompt(`Ingresa tu apellido:`);
    apellido=apellido.toUpperCase()
    let nota1 =Number(prompt(`Ingresa Nota del primer parcial`));
    let nota2 =Number(prompt(`Ingresa Nota del segundo parcial`));
    let nota3 =Number(prompt(`Ingresa Nota del tercer parcial`));
    let notafinal =(nota1+nota2+nota3)/3;
   
     if(notafinal>=7)
     {
        alert(apellido +""+"PROMEDIO:"+""+ notafinal+""+ "APROBADO")
     }
     else if(notafinal<7)
     {
       alert(apellido +""+"PROMEDIO:"+""+ notafinal+""+ "DESAPROBADO")
     }
   
   }
   promedio()