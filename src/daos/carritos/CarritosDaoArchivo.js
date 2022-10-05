import carritosModel from "../../models/carritos.model"

class CarritosDaoArchivo extends carritosModel {

    constructor() {
        super('carritos.model.json')
    }

    async guardar(carrito = { productos: [] }) {
        return super.guardar(carrito)
    }
}

export default CarritosDaoArchivo
