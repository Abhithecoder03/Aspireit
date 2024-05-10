import mongoose from 'mongoose';

const { Schema } = mongoose;

const CandidateSchema = new Schema({
  name: { type: String },
  contact: { type: String },
  email: { type: String },
  education: { type: String, default: 'Btech' },
  work_experience: { type: String, default: 'SDE' },
  domain: { type: String, enum: ['IT', 'Finance', 'Healthcare', 'Education', 'Other'] },
  resume: { type: String },
  links: [{ type: String }],
  tests_taken: [{ type: Schema.Types.ObjectId, ref: 'Assessment' }],
  invitationStatus: { type: String, default: 'pending' } // Default status is 'pending'
}, { timestamps: true });

export default mongoose.model('Candidate', CandidateSchema);
