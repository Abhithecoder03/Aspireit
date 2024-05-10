import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const assessmentSchema = new mongoose.Schema({
   
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    domain: { type: String, enum: ['IT', 'Finance', 'Healthcare', 'Education', 'Other'] },
    attempts: { type: Number },
    duration: { type: Number },
    candidate: { type: Schema.Types.ObjectId, ref: 'Candidate' },
    responses: [{ type: Schema.Types.ObjectId, ref: 'Response' }],
},{timestamps: true});

export default mongoose.model('Assessment', assessmentSchema);
