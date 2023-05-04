const mongoose = require("mongoose");

const alumniResponseSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    course: {
        type: String
    },
    skill: {
        type: String
    }
});
const alumniResponseModel = mongoose.model(
    "alumniResponseModel", alumniResponseSchema
)

module.exports = {alumniResponseModel}