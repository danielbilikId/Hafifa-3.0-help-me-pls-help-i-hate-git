import bodyParser from 'body-parser'; 
import helmet from 'helmet';
import close,{ Express } from 'express';
import router from '../routes/routes';
const server = router
const port = 3000
server.use(bodyParser);
server.use(helmet);  
server.listen(port, () => {
  console.log(`Server shitting on port ${port}`);
});