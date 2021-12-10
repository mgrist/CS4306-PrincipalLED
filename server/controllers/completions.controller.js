import Completion from "../models/completion.js";
// https://www.restapitutorial.com/httpstatuscodes.html
// https://docs.mongodb.com/mongodb-shell/crud/

// gets all the completions from completion collection, returns as json.
export const getCompletions = async (req, res) =>  {
    try {
        const completions = await Completion.find();
        
        res.status(200).json(completions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// gets all completions belonging to a specific work order
export const getOrderCompletions = async (req, res) =>  {
    try {
        const orderNum = req.query.num;
        const completions = await Completion.find({ wo_number: orderNum });
        
        res.status(200).json(completions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// gets all completions belonging to a specific operator
export const getOpCompletions = async (req, res) =>  {
    try {
        const opInitials = req.query.initials;
        const completions = await Completion.find({ operator_initials: opInitials });
        
        res.status(200).json(completions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// creates a new completion and adds it to completion collection
// also outputs added stage as json.
export const createCompletion = async (req, res) => {
    // inComp is the completion info given as input, to be added to database.
    const inComp = req.body;

    const newComp = Completion(inComp);

    try {
        await newComp.save();
        
        res.status(201).json(newComp);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}