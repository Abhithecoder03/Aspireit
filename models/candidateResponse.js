const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
    total_questions: { type: Number },
    score: { type: Number },
    time_taken: { type: Number },
    assessment: { type: Schema.Types.ObjectId, ref: 'Assessment' },
    candidate: { type: Schema.Types.ObjectId, ref: 'Candidate' },
});

module.exports = mongoose.model('Response', ResponseSchema);
