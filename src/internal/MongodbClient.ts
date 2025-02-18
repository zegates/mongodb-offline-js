// const { MongoClient, ServerApiVersion } = require('mongodb');

import { MongoClient, ServerApiVersion } from "mongodb";
import { Config } from "./Config";

class MongodbClient {
  public client: MongoClient = null;

  public connect() {
    if (this.client === null) {
      this.client = new MongoClient(Config.MONGODB_URL, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });
    }
  }

  public async query(params: any) {
    try {
      this.connect();

      // perform query
    } finally {
    }
  }
}

export default MongodbClient;
