const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question: { type: String },
    accepted_keywords: [{ type: String }],
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
    topic: { type: String },
    assessment: { type: Schema.Types.ObjectId, ref: 'Assessment' },
});

module.exports = mongoose.model('Question', QuestionSchema);
