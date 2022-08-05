const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const bodyParser = require('body-parser');
const connect = require('./mongo');
const { middleware } = require('./middleware/private');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 4000;
const { User } = require('./models/userSchema');

//connect to mongodb 
connect();

//route to appropriate folders
app.use('/api/authentication', require('./routes/authentication'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/market', require('./routes/market'));
app.use('/api/services', require('./routes/services'));
app.use('/api/favourites', require('./routes/favourites'));
app.use('/api/messenger', require('./routes/messengerRoute'));

// route to report folder:
app.use('/api/report', require('./routes/report'));

// route to follow folder:
app.use('/api/follow', require('./routes/follow'));
app.use('/api/conversations', require('./routes/conversations'));

app.get('/', (req, res) => {
	res.send('Welcome!');
});

app.post('/api/authorize', middleware, async (req, res, next) => {
	const { id } = req.body;
	try {
		let user = await User.findById(id);
		if (user) {
			return res.status(200).json({
				success: true,
				response: user,
			});
		} else {
			return res.status(401).json({
				success: false,
				response: 'User Not Found',
			});
		}
	} catch (e) {
		return res.status(500).json({
			success: false,
			response: 'Something went wrong',
		});
	}
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
