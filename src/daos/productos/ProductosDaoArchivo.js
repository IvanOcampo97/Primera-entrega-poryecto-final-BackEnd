import productosModel from "../../models/productos.model"

class ProductosDaoArchivo extends productosModel {

    constructor() {
        super('productos.model.json')
    }
}

export default ProductosDaoArchivo
