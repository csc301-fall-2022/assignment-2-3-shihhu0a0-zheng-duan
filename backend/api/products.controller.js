import ProductsDAO from "../dao/productsDAO.js"

export default class ProductsController {
  static async apiGetProducts(req, res, next) {
    const productsPerPage = req.query.productsPerPage ? parseInt(req.query.productsPerPage, 10) : 20
    const page = req.query.page ? parseInt(req.query.page, 10) : 0

    let filters = {}
    if (req.query.byStock) {
      filters.byStock = req.query.byStock
    } else if (req.query.byRating) {
      filters.byRating = req.query.byRating
    } else if (req.query.byName) {
      filters.byName = req.query.byName
    } else if (req.query.byFastDelivery) {
      filters.byFastDelivery = req.query.byFastDelivery
    } else if (req.query.byPrice) {
        filters.byPrice = req.query.byPrice
    }

    const { productsList, totalNumProducts } = await ProductsDAO.getProducts({
      filters,
      page,
      productsPerPage,
    })

    let response = {
      products: productsList,
      page: page,
      filters: filters,
      entries_per_page: productsPerPage,
      total_results: totalNumProducts,
    }
    res.json(response)
  }

  static async apiGetProductById(req, res, next) {
    try {
      let id = req.params.id || {}
      let product = await ProductsDAO.getProductByID(id)
      if (!product) {
        res.status(404).json({ error: "Not found" })
        return
      }
      res.json(product)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }

  static async apiGetProductTypes(req, res, next) {
    try {
      let types = await ProductsDAO.getTypes()
      res.json(types)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }
}