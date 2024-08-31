import express from "express";
import asyncHandler from "express-async-handler";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
const HOST = process.env.HOST;

export const getProductInfoById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const options = {
    method: "GET",
    url: `${BASE_URL}/product-details`,
    params: {
      pid: `${id}`,
    },
    headers: {
      "x-rapidapi-key": `${API_KEY}`,
      "x-rapidapi-host": `${HOST}`,
    },
  };

  try {
    const response = await axios.request(options);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

export const getProductsListBySearch = asyncHandler(async (req, res) => {
  const name = req.params.name;

  const options = {
    method: "GET",
    params: {
      q: `${name}`,
      page: "1",
    },
    url: `${BASE_URL}/product-search`,
    headers: {
      "x-rapidapi-key": `${API_KEY}`,
      "x-rapidapi-host": `${HOST}`,
    },
  };

  try {
    const response = await axios.request(options);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

export const getProductByCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const options = {
    method: "GET",
    params: {
      category_id: `${id}`,
      page: "1",
    },
    url: `${BASE_URL}/products-by-category`,
    headers: {
      "x-rapidapi-key": `${API_KEY}`,
      "x-rapidapi-host": `${HOST}`,
    },
  };

  try {
    const response = await axios.request(options);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});
