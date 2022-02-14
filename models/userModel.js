const mongoose = require('mongoose');

const userModel = mongoose.model('user', {
    id:{
        type: Number,
        required:[true,'its unique']
            
    },
    brand: {
        type: String,
        maxLength: [50, 'Max 100 characters'],
        required: [true, 'brand name is required']
    },
    price: {
        type: Number,
        required: [true, 'price is required']
    },
    
    inStock: String,
    active: { type: Boolean, default: 1 },
    
    
   
    createdAt: Date,
    updatedAt: { type: Date, default: Date.now() }
});

module.exports = userModel;