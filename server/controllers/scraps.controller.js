import Scrap from "../models/scrap.js";
// https://www.restapitutorial.com/httpstatuscodes.html
// https://docs.mongodb.com/mongodb-shell/crud/

// gets all the scrap scraps from scrap collection, returns as json.
export const getScraps = async (req, res) =>  {
    try {
        const scraps = await Scrap.find();
        
        res.status(200).json(scraps);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// gets all the scraps with a specific order number from scrap collection, returns as json.
export const getOrderScraps = async (req, res) =>  {
    try {
        const orderNum = req.query.num;
        const scraps = await Scrap.find({ wo_number: orderNum });
        
        res.status(200).json(scraps);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// creates a scrap and adds it to scrap collection
// also outputs added scrap as json.
export const createScrap = async (req, res) => {
    // inScrap is the scrap info given as input, to be added to database.
    const inScrap = req.body;

    const newScrap = Scrap(inScrap);

    try {
        await newScrap.save();
        
        res.status(201).json(newScrap);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// deletes an existing scrap from the scrap collection
export const deleteScrap = async (req, res) => {
    // inScrap is the scrap to be deleted
    const inScrap = req.body;

    try {
        const scrap = await Scrap.findOneAndDelete({_id: inScrap._id});
        
        res.status(200).json(scrap._id + " was deleted");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}