const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userLogInSchema = new mongoose.Schema({
	userId: {
        type: Schema.Types.ObjectId,
        ref: 'userDetailModel',
        required: true,
    },
	userLogDate: {
		type: Date
	},
	userLogOutDate: {
		type: Date
	},
	userAuthToken: {
		type: String,
		required: true
	}
});

mongoose.model('userLogInModel', userLogInSchema);