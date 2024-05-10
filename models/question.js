import mongoose from 'mongoose';
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  question: { type: String },
  accepted_keywords: [{ type: String }],
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
  topic: { type: String },
  assessment: { type: Schema.Types.ObjectId, ref: 'Assessment' },
}, { timestamps: true });

export default mongoose.model('Question', QuestionSchema);
