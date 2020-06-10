const clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'yourApiKey'
});

const handleApiCall = (req , res) => {
 const { input } = req.body;	
app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
.then(data => {
	res.json(data)
})
.catch(err => res.status(400).json('unable to work with api'))
}

const handleImage =  (req , res , db ) => {
	const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries' , 1)
  .returning('entries')
  .then(entries => {
    entries.length ?  res.json(entries[0]) : res.status(400).json('no such a user')
  })
  .catch(err => res.status(400).json('Not found'))
}

module.exports = {
	handleImage ,
	handleApiCall
};