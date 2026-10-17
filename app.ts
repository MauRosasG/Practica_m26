function calcularEdad(fechaNacimiento: string): number{//Se especifica el valor que recibira la funcion y que tipo de valor regresara
    const fecha = new Date(fechaNacimiento);

    if (Number.isNaN(fecha.getTime())) {//Para validar si lo que se introdujo en la funcion en verdad es una fecha.
        throw new Error("La fecha de nacimiento no es válida");
    }

    const hoy = new Date();

    let edad = hoy.getFullYear() - fecha.getFullYear();

    const mesActual = hoy.getMonth();//Se obtienen valores de mes y dias para hacer una validacion ademas de usar solo año.
    const mesNacimiento = fecha.getMonth();

    const diaActual = hoy.getDate();
    const diaNacimiento = fecha.getDate();

    if (//Para saber si ya paso el dia de nacimiento de la persona, en caso que no, restarle 1 a la edad.
        mesActual < mesNacimiento ||
        (mesActual === mesNacimiento && diaActual < diaNacimiento)
    ) {
        edad--;
    }
    return edad; //Regresa la edad calculada

};

console.log(calcularEdad("2003-10-20"));
console.log(calcularEdad("2002-08-17"));
console.log(calcularEdad("2002-10-17"));
console.log(calcularEdad("hola mundo"));