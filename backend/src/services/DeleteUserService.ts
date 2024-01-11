import { PrismaClient } from "@prisma/client";
import prismaClient from "../prisma";

interface DeleteUserProps{
    id: string;
}
class DeleteUserService{
    async execute({ id }: DeleteUserProps){
        if(!id){
            throw new Error("invalid request")
        }

        const findUser = await prismaClient.user.findFirst({
            where:{
                id: id
            }
        })

        if(!findUser){
            throw new Error("Unregistered person")
        }

        await prismaClient.user.delete({
            where:{
                id: findUser.id
            }
        })

        return ("Record deleted successfully!")
    }
}

export {DeleteUserService}