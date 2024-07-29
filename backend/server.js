import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const db = mysql.createConnection({
    host: "localhost",
    user: "David",
    password: "12345678",
    database: "basecrud"
});

app.use(cors());
app.use(express.json()); 

app.get("/productos", (req, res) => {
    const query = "SELECT * FROM productos";
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/facturas", (req, res) => {
    const query = "SELECT * FROM facturas";
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/facturas", (req, res) => {
    const { cliente, cantidad, id_producto } = req.body;

    if (!cliente || !cantidad || !id_producto) {
        return res.status(400).json({ error: "Faltan datos de cliente, cantidad o id_producto" });
    }

    const insertFactura = "INSERT INTO facturas (cliente, cantidad, N_Producto) VALUES (?, ?, ?)";
    db.query(insertFactura, [cliente, cantidad, id_producto], (err, result) => {
        if (err) {
            console.error(err);
            return res.json(err);
        }

        const updateStock = "UPDATE productos SET cantidad = cantidad - ? WHERE Nombre = ?";
        db.query(updateStock, [cantidad, id_producto], (err, result) => {
            if (err) {
                console.error(err);
                return res.json(err);
            }
            return res.json("Factura creada y stock actualizado");
        });
    });
});

app.get("/estatus", (req, res) => {
    res.json("este es el estatus");
});

app.listen(4001, () => {
    console.log('Server XD');
});
