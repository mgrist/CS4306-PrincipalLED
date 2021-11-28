import Operator from "../models/operator.js";
// https://www.restapitutorial.com/httpstatuscodes.html
// https://docs.mongodb.com/mongodb-shell/crud/

// gets all the operators from operator collection, returns as json.
export const getOperators = async (req, res) =>  {
    try {
        const operators = await Operator.find();
        
        res.status(200).json(operators);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// creates a new operator and adds it to operator collection
// also outputs added stage as json.
export const createOperator = async (req, res) => {
    // inOp is the operator info given as input, to be added to database.
    const inOp = req.body;

    const newOp = Operator(inOp);

    try {
        await newOp.save();
        
        res.status(201).json(newOp);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// deletes an existing operator from the operator collection
export const deleteOperator = async (req, res) => {
    // the operator info to be deleted
    const inOp = req.body;

    try {
        const opID = await Operator.findOneAndDelete({initials: inOp.initials});
        
        res.status(200).json(opID.first_name + " " + opID.last_name + " was deleted");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// updates an existing stage in the stage collection
// DO NOT USE YET
export const editOperator = async (req, res) => {
    const inOp = req.body;

    try {
        const op = await Operator.updateOne({initials: inOp.initials});
        
        res.status(200).json(op._id + " was edited");``
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}