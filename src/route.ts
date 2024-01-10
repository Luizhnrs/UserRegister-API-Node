import { ok } from "assert";
import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

export async function routes(fastify: FastifyInstance, option: FastifyPluginOptions) {
    fastify.get("/home", async (request: FastifyRequest, reply: FastifyReply) =>{
        return {ok: true}
    })
}
