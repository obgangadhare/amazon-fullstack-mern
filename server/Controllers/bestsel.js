const bestsel = require('../Model/bestsel');

exports.getAllElectronics = (req, res) => {
    bestsel.find()
        .then(result => {
            res.status(200).json({
                message: "Electronics items fetched successfully",
                electronics: result
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error fetching electronic items from the database",
                error: error
            });
        });
};

exports.electronicsByType = (req, res) => {
    const electronicsType = req.params.type.toLowerCase();
    
    
    bestsel.find({ type: electronicsType })
        .then(electronicItems => {
            if (electronicItems.length > 0) {
                res.status(200).json({
                    message: "Electronics items fetched successfully by type",
                    electronics: electronicItems
                });
            } else {
                res.status(404).json({
                    message: "No electronics found for the specified type"
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Error fetching electronics by type from the database",
                error: error
            });
        });
};
