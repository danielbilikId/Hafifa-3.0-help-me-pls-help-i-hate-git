import bodyParser from 'body-parser';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import router from './routes/routes';
import logger from './logger';
import { connectToMongoDB } from './repository/mongoConnect';

dotenv.config();
const server = router;
const port = process.env.PORT;

server.use(bodyParser);
server.use(helmet);

server.listen(port, async () => {
  await connectToMongoDB();
  logger.info(`Server listening on port ${port}`);
});

export default server;
