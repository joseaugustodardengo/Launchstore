const express = require('express')
const routes = express.Router()
const multer = require('../app/middlewares/multer')
const ProductController = require('../app/controllers/ProductController')
const SearchController = require('../app/controllers/SearchController')
const {onlyUsers} = require('../app/middlewares/session')
const ValidatorFields = require('../app/validators/fields')


//Search
routes.get('/search', SearchController.index)

//Products
routes.get('/create', onlyUsers, ProductController.create)
routes.get('/:id', ProductController.show)
routes.get('/:id/edit', onlyUsers, ProductController.edit)
routes.post('/', onlyUsers, multer.array("photos", 6), ValidatorFields.fields, ProductController.store)
routes.put('/', onlyUsers, multer.array("photos", 6), ValidatorFields.fields, ProductController.update)
routes.delete('/', onlyUsers, ProductController.destroy)

module.exports = routes