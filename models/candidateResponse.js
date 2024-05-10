import mongoose from 'mongoose';

const { Schema } = mongoose;

const ResponseSchema = new Schema({
  responses: [{ type: String, required: true }], // Store individual responses later it will be changed to buffer of multiple audio
  total_questions: { type: Number },
  score: { type: Number },
  time_taken: { type: Number },
  assessment: { type: Schema.Types.ObjectId, ref: 'Assessment' },
  candidate: { type: Schema.Types.ObjectId, ref: 'Candidate' },
}, { timestamps: true });

export default mongoose.model('Response', ResponseSchema);
