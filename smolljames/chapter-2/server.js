import express from "express"
const app =  express();

const PORT = 3001;

app.get('/', (req, res) => {
  res.send('<h1>this is html code</h1>')
})

app.get('/test', (req, res) => {
  res.send('heyyyy i am test');
  
})
app.listen(PORT, () => {
  console.log(`port is listening to ${PORT}`);
})