const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const Education = require('./education');
// const Work = require('./work');

const CandidateSchema = new Schema({
    name: { type: String },
    contact: { type: String },
    email: { type: String },
    education:  {type : String, default: "Btech"},
    work_experience: {type : String, default: "SDE"},
    domain: { type: String, enum: ['IT', 'Finance', 'Healthcare', 'Education', 'Other'] },
    resume: { type: String },
    links: [{ type: String }],
    tests_taken: [{ type: Schema.Types.ObjectId, ref: 'Assessment' }],
    invitationStatus: { type: String, default: 'pending' } // Default status is 'pending'
});

module.exports = mongoose.model('Candidate', CandidateSchema);
