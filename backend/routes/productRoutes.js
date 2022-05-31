import express from 'express'
const router = express.Router()
import {
  getProductsById,
  getProducts,
  getProductsLimit,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts)
router.route('/limit').get(getProductsLimit)
router.route('/').post(protect, admin, createProduct)
router.route('/:id').get(getProductsById)
router.route('/:id').delete(protect, admin, deleteProduct)
router.route('/:id').put(protect, admin, updateProduct)

router.route('/:id/reviews').post(protect, createProductReview)
router.route('/top/:top').get(getTopProducts)

export default router
