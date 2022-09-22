const { Router } = require('express')
const { carritosRouter } = require('./carritos.route.js')
const { productosRouter } = require('./productos.route.js')
const apiRouter = Router()

apiRouter.use("/productos", productosRouter)
apiRouter.use("/carritos", carritosRouter)

module.exports = {
    apiRouter
}