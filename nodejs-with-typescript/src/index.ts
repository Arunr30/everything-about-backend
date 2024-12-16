import express, {Express, Request, Response} from "express"
const app:  Express = express();

interface User {
  name: string,
  age: number
}
const users: User = {
  name: "arunvasu",
  age: 22
}

interface customRequest extends Request {

}


app.get('/user/:id', (req: Request<{id: string}>, res: Response) => {
  const {id} = req.params
  res.json({
    userId: id
  })
})
app.get('/', (req: Request, res: Response) => {
  console.log(users)
  res.json(users)
})

app.listen(3000, () => {
  console.log('port is listeninng to 3000')
})