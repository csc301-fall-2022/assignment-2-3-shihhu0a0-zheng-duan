import express from "express"
import cors from "cors"
import products from "./api/products.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/products", products)

var coefficient = {
    "人民币": 1,
    "新台幣": 4.45,
    "Canadian Dollar": 0.19
}
var tax = {
    "Ontario": 1.13,
    "BC": 1.12,
    "Alberta": 1.05
}

app.post("/api/v1/products/cal", async (req, res) => {
    const n = req.body.price;
    const r = req.body.region;
    const c = req.body.currency;
    res.json(coefficient[c]*n*tax[r]);
})

app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app