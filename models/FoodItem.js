const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { 
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], required: true } // [longitude, latitude]
    }
});

// Index for geospatial queries
FoodItemSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('FoodItem', FoodItemSchema);