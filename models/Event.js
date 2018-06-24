const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  currency: {
    type: String,
    required: true,
    default: "USD"
  },
  members: [{
    type: String
  }],
  created_by: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
});

mongoose.model('events', EventSchema);