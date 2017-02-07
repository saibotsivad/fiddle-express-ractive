const fs = require('fs')
const Ractive = require('ractive')
const express = require('express')
const app = express()

app.engine('html', (filepath, data, cb) => {
	fs.readFile(filepath, (error, template) => {
		const ractive = new Ractive({
			data,
			template: template.toString()
		})
		cb(null, ractive.toHTML())
	})
})

app.set('views', './view')
app.set('view engine', 'html')

app.get('/', (req, res) => {
	res.render('index', {
		name: 'saibotsivad',
		url: 'http://saibotsivad.com'
	})
})

app.listen(3000, () => {
	console.log('App listening on port 3000')
})
