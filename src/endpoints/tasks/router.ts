import { Hono } from "hono";
import { fromHono } from "chanfana";
import { ProductList } from "./taskList";
import { ProductCreate } from "./taskCreate";
import { ProductRead } from "./taskRead";
import { ProductUpdate } from "./taskUpdate";
import { ProductDelete } from "./taskDelete";

export const productsRouter = fromHono(new Hono());

productsRouter.get("/", ProductList);
productsRouter.post("/", ProductCreate);
productsRouter.get("/:id", ProductRead);
productsRouter.put("/:id", ProductUpdate);
productsRouter.delete("/:id", ProductDelete);
