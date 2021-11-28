import Stage from "../models/stage.js";
// https://www.restapitutorial.com/httpstatuscodes.html
// https://docs.mongodb.com/mongodb-shell/crud/

// gets all the stages from stage collection, returns as json.
export const getStages = async (req, res) =>  {
    try {
        const stages = await Stage.find();
        
        res.status(200).json(stages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// creates a new stage and adds it to stage collection
// also outputs added stage as json.
export const createStage = async (req, res) => {
    // inStage is the stage given as input, to be added to database.
    const inStage = req.body;

    const newStage = Stage(inStage);

    try {
        await newStage.save();
        
        res.status(201).json(newStage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// deletes an existing stage from the stage collection
export const deleteStage = async (req, res) => {
    const inStage = req.body.order;

    try {
        const stageID = await Stage.findOneAndDelete({order: inStage});
        
        res.status(200).json(stageID._id + " was deleted");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// updates an existing stage in the stage collection
// DO NOT USE YET
export const editStage = async (req, res) => {
    const part = req.body;

    try {
        const partID = await Stage.updateOne({part_number: partNum});
        
        res.status(200).json(partID._id + " was deleted");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}