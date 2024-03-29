import { ok } from "assert";
import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "./controller/CreateUserController";
import { ListUserController } from "./controller/ListUserController";
import { DeleteUserController } from "./controller/DeleteUserController";

export async function routes(fastify: FastifyInstance, option: FastifyPluginOptions) {

    fastify.get("/home", async (request: FastifyRequest, reply: FastifyReply) =>{
        return {ok: true}
    }) 

    fastify.post("/user",async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply);	
    })

    fastify.get("/users",async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUserController().handle(request, reply);	
    })

    fastify.delete("/user",async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUserController().handle(request, reply);	
    })
}

export default routes;
