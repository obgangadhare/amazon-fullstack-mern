const shirtslist = require('../Model/shirts');

exports.getAllShirts = (req, res) => {
    shirtslist.find()
        .then(result => {
            res.status(200).json({
                message: "Shirt items fetched successfully",
                shirts: result
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error fetching shirt items from the database",
                error: error
            });
        });
};

exports.shirtsByType = (req, res) => {
    const shirtsType = req.params.type.toLowerCase();
    

    shirtslist.find({ type: shirtsType })
        .then(shirtItems => {
            if (shirtItems.length > 0) {
                res.status(200).json({
                    message: "Shirt items fetched successfully by type",
                    shirts: shirtItems
                });
            } else {
                res.status(404).json({
                    message: "No shirt items found for the specified type"
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Error fetching shirt items by type from the database",
                error: error
            });
        });
};
