import { MikroORM } from "@mikro-orm/core";
import { __prod__,port } from "./helpers/constants";
import microConfig from "./mikro-orm.config";
import express from "express";


const main = async () => {
  const app = express();

  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  app.get('/',(_,res)=>{
    res.send('hello')
  })

  app.listen(port, () => console.log(`🚀 Server ready at 127.0.0.1:${port}`));
};

main().catch((err) => {
  console.error(err);
});
