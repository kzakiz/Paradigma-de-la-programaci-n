class pizza {

    constructor(masa, tamano, ingredientes){
        this.masa = masa;
        this.tamano = tamano;
        this.ingredientes = ingredientes;
    }
// Constructor sirve para denominar la variable

    preparar(){
        console.log(`Preparando una pizza de tamaño ${this.tamano} con masa ${this.masa} y los siguientes ingredientes: ${this.ingredientes}.`);
            return this;
    }

    hornear(){
        console.log("La pizza esta en el horno...");
        return this;
    }

    Empacar(){
        console.log("Empacando la pizza...");
        return this;
    }
};

const pizzahawaiana = new pizza("delgada", "mediana", ["jamon", "piña", "queso"]);

console.log(pizzahawaiana.preparar());
console.log(pizzahawaiana.hornear());
console.log(pizzahawaiana.Empacar());

const pizzapeperoni = new pizza("Doble", "Grande", ["peperoni", "jamon"]);

console.log(pizzapeperoni.preparar().hornear().Empacar());

class combos extends pizza{
    constructor(combo, cantidad, masa, tamano, ingredientes, bebidas, postres) {
        super(masa, tamano, ingredientes);
        this.combo = combo;
        this.cantidad = cantidad;
        this.bebidas = bebidas;
        this.postres = postres;
    }

    elegirCombo(){
        this.preparar();
        this.hornear();
        this.Empacar();

        console.log(
            `Has elegido el combo ${this.combo} que incluye ${this.cantidad} pizzas de tamaño ${this.tamano} con una masa ${this.masa}
            y tiene los siguientes ingredientes ${this.ingredientes}. Además, incluye una bebida de ${this.bebidas} y un postre
            de ${this.postres}.`
        );
        return this;
    };

}

const combofamiliar = new combos("Familiar", 4, "grande", "delgada", ["Jamon", "piña", "queso"], "Coca-cola", "Brownie");
console.log(combofamiliar.elegirCombo());