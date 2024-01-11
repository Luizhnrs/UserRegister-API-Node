import { ok } from "assert";
import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "./prisma/controller/CreateUserController";

export async function routes(fastify: FastifyInstance, option: FastifyPluginOptions) {

    fastify.get("/home", async (request: FastifyRequest, reply: FastifyReply) =>{
        return {ok: true}
    }) 

    fastify.post("/user",async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply);	
    })
}
