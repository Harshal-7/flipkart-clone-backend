import express from "express";
import {
  getProductByCategory,
  getProductInfoById,
  getProductsListBySearch,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/product/productInfo/:id", getProductInfoById);
productRouter.get("/product/searchProduct/:name", getProductsListBySearch);
productRouter.get("/product/category/:id", getProductByCategory);

export default productRouter;
