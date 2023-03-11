// Error handlers
const errorHandler = (err, req, res, next) => {
    if (err.name == "ErrorNotFound") {
        res.status(404).json({
            message: "Not Found"
        })
    } else if (err.name == "EmptyData") {
        res.status(200).json({
            message: "Data is Empty"
        })
    } else if (err.name == "ErrorFillColumn") {
        res.status(403).json({
            message: "Please fill all fields"
        })
    } else if (err.name == "FileNotSelected") {
        res.status(403).json({
            message: "File not selected"
        })
    }
    else {
        res.status(500).json({
            message: err.message
        })
    }
}
module.exports = errorHandler;