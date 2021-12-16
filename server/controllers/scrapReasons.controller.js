import ScrapReason from "../models/scrapReason.js";
// https://www.restapitutorial.com/httpstatuscodes.html
// https://docs.mongodb.com/mongodb-shell/crud/

// gets all the scrap reasons from scrap reason collection, returns as json.
export const getReasons = async (req, res) =>  {
    try {
        const reasons = await ScrapReason.find();
        
        res.status(200).json(reasons);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// gets the specified scrap reason based on an id passed in
export const getReasonId = async (req, res) =>  {
    try {
        const id = req.query.id;
        const reason = await ScrapReason.findById(id);
        
        res.status(200).json(reason);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// creates a new reason and adds it to scrap reason collection
// also outputs added reason as json.
export const createReason = async (req, res) => {
    // inReason is the scrap reason info given as input, to be added to database.
    const inReason = req.body;

    const newReason = ScrapReason(inReason);

    try {
        await newReason.save();
        
        res.status(201).json(newReason);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// deletes an existing scrap reason from the scrap reason collection
export const deleteReason = async (req, res) => {
    // inReason is the reason to be deleted
    const inReason = req.body.label;

    try {
        const reason = await ScrapReason.findOneAndDelete({label: inReason});
        
        res.status(200).json(reason._id + " was deleted");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}