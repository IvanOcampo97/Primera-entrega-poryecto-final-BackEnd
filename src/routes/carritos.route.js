const { Router } = require('express')
const { authValidator } = require('../middleware/auth.middleware')
const { carritosModel } = require('../models/carritos.model')
const { productosModel } = require('../models/productos.model')
const carritosRouter = Router()

const myCarts = new carritosModel()
const myProducts = new productosModel()

carritosRouter.get("/productos", async (req, res) => {
    res.json((await myCarts._readCarts()).map(c => c.id))
})

carritosRouter.post("/", async (req, res) => {
    const wasCreated = await myCarts.createNewCart()

    wasCreated
        ? res.json(wasCreated)
        : res.status(500).send("No se pudo crear nuevo carrito")
})

carritosRouter.post("/:id/productos", async (req, res) => {
    const cartId = parseInt(req.params.id)
    const { productId } = req.body

    if (!cartId || !productId) {
        return res.status(400).send("Faltan datos para completar la operacion")
    }
    const wasAdded = await myCarts.addProductToCart(cartId, productId)

    wasAdded
        ? res.json(wasAdded)
        : res.status(500).send("No se pudo agregar el producto")
})

carritosRouter.delete("/:id", async (req, res) => {
    res.json( await myProducts.deleteProduct(req.params.id))
})

carritosRouter.delete('/:id/productos/:id_prod', authValidator, async (req, res) => {
    const { id } = req.params
    const wasDeleted = await myCarts.deleteProduct(Number(id))

    wasDeleted
    ? res.send("Producto eliminado")
    : res.status(404).send("Producto inexistente")

})

module.exports = {
    carritosRouter
}