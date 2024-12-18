const mobilelist = require('../Model/mobiles');

exports.getAllMobiles = (req, res) => {
    mobilelist.find()
        .then(result => {
            res.status(200).json({
                message: "Mobile items fetched successfully",
                mobiles: result
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error fetching mobile items from the database",
                error: error
            });
        });
};

exports.mobileByType = (req, res) => {
    const mobilesType = req.params.type.toLowerCase();
    
   
    mobilelist.find({ type: mobilesType })
        .then(mobileItems => {
            if (mobileItems.length > 0) {
                res.status(200).json({
                    message: "Mobile items fetched successfully by type",
                    mobiles: mobileItems
                });
            } else {
                res.status(404).json({
                    message: "No mobile items found for the specified type"
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Error fetching mobile items by type from the database",
                error: error
            });
        });
};
