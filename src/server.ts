import express, { Request, Response } from "express";
import CountryRoutes from "./routes/countryRouter";

const app = express();
const port = 5000;

// Testing API
app.get("/", (req: Request, res: Response) => {
  res.send(
    "Boby Maulana Subagja <br><br> Nolimit Indonesia backend recruitment."
  );
});

// Country Router
app.use(CountryRoutes);

// Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
