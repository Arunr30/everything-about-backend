import express from "express"
const app =  express();

const PORT = 3001;
let user = [];
app.use(express.json());

app.post('/new-data', (req, res) => {
  const name = req.body
  user.push(name);
})

app.get('/data', (req, res) => {
  res.send(user)
})

app.delete('/delete', (req, res) => {
  user.splice(0, 1);
})
app.get('/', (req, res) => {
  res.send('<h1>this is html code</h1>')
})

app.get('/test', (req, res) => {
  res.send('heyyyy i am test');
  
})
app.listen(PORT, () => {
  console.log(`port is listening to ${PORT}`);
})