class Carro {

    marca;
    modelo;
    color;

    constructor( marca, modelo, color ){

        this.marca  = marca;
        this.modelo = modelo;
        this.color  = color;

    }

    encenderMotor(){

        console.log( "Encendido!" );

    }

    apagarMotor(){

        console.log( "Encendido!" );

    }

}

let miCarro  = new Carro( "Ford", "F750", "Negro" );
let miCarro2 = new Carro( "BMW", "320i", "Negro" );