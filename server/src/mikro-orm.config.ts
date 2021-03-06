import { Post } from "./entities/posts";
import { __prod__ } from "./helpers/constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "xredit",
  user:'postgres',
  password:'password',
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];