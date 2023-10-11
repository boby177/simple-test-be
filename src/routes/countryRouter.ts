import express from "express";
import {
  getAllCountries,
  getArabEmiratesCountry,
} from "../controllers/countryController";

const CountryRoutes = express.Router();

// Config countries controller
CountryRoutes.get("/countries", getAllCountries);
CountryRoutes.get("/countries/:id", getArabEmiratesCountry);

export default CountryRoutes;
