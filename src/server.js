import express from 'express'
const app = express();
import { PrismaClient } from '@prisma/client'

import routes from './routes'

async function server() {
  
app.get('/', (_req, res) => {
    res.send("Please take a look at our <a href='/api'>API</a>")
  })

  app.use('/api', routes)


app.listen(3000, function() {
    console.log("Server starting at http://localhost:3000");
  });

}