import Product from "../models/product.js";
// https://www.restapitutorial.com/httpstatuscodes.html

// gets all the products from product table
export const getProducts = async (req, res) =>  {
    try {
        const products = await Product.find();
        
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// gets one product from the product table
export const getProduct = async (req, res) =>  {
    const part = req.body;
    try {
        const product = await Product.findOne({part_number: part.part_number});
        
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// creates a new product and adds it to product table
// also outputs added product as json.
export const createProduct = async (req, res) => {
    const part = req.body;

    const newProduct = Product(part);

    try {
        await newProduct.save();
        
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// deletes an existing product from the product table
export const deleteProduct = async (req, res) => {
    const partNum = req.body.part_number;

    try {
        const partID = await Product.findOneAndDelete({part_number: partNum});
        
        res.status(200).json(partID._id + " was deleted");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// updates an existing product in the product table
// DO NOT USE YET
export const editProduct = async (req, res) => {
    const part = req.body;

    try {
        const partID = await Product.updateOne({part_number: partNum});
        
        res.status(200).json(partID._id + " was deleted");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}