const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
    responses: [{ type: String, required: true }], // Store individual responses later it will be chaange to buffer of mutiple audio
    total_questions: { type: Number },
    score: { type: Number },
    time_taken: { type: Number },
    assessment: { type: Schema.Types.ObjectId, ref: 'Assessment' },
    candidate: { type: Schema.Types.ObjectId, ref: 'Candidate' },
},{timestamps: true});

module.exports = mongoose.model('Response', ResponseSchema);
