const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssessmentSchema = new Schema({
   
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    domain: { type: String, enum: ['IT', 'Finance', 'Healthcare', 'Education', 'Other'] },
    attempts: { type: Number },
    duration: { type: Number },
    candidate: { type: Schema.Types.ObjectId, ref: 'Candidate' },
    responses: [{ type: Schema.Types.ObjectId, ref: 'Response' }],
});

module.exports = mongoose.model('Assessment', AssessmentSchema);
