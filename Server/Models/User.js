const mongoose=require('mongoose')
const CompletedSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		phone: { type: Number, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
	},
	{ collection: 'completed' }
)

CompletedSchema.index({email: 1}, { unique: true })

const model = mongoose.model('Completed', CompletedSchema)
module.exports=model