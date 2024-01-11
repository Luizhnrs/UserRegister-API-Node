import { FastifyRequest, FastifyReply } from "fastify";
import prismaClient from "../prisma";
import { ListUserService } from "../services/ListUserService";

class ListUserController{
    async handle (request: FastifyRequest, reply:FastifyReply){
        const listUserService = new ListUserService();
        const user = await listUserService.execute();

        reply.send(user);
    }
    }

export {ListUserController}