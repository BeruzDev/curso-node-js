const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 1234

app.get('/', (req, res) => {
	res.send('<h1>¡Mi página!</h1>')
	//res.json({ message: '¡Mi página!' })//<-express detecta automaticamente el Content-Type
})

app.listen(PORT, () => {
	console.log(`server running on port http://localhost:${PORT}`);
})