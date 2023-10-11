import axios from "axios";
import { Request, Response } from "express";
import {
  countriesQuery,
  arabEmiratesCountryQuery,
} from "../models/countryModel";

const graphqlEndpoint = "https://countries.trevorblades.com/graphql";
const headers = {
  "Content-Type": "application/json",
};

export const getAllCountries = async (req: Request, res: Response) => {
  try {
    // Get data from graphQL server
    const response = await axios({
      url: graphqlEndpoint,
      method: "post",
      headers: headers,
      data: JSON.stringify({ query: countriesQuery }),
    });

    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};

export const getArabEmiratesCountry = async (req: Request, res: Response) => {
  try {
    // Get data from graphQL server
    const response = await axios({
      url: graphqlEndpoint,
      method: "post",
      headers: headers,
      data: JSON.stringify({ query: arabEmiratesCountryQuery }),
    });

    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};
