import { PrismaClient } from "@prisma/client";
import prismaClient from "../prisma";

interface CreateUserProps{
    name: string;
    email: string;
}

class CreateUserService{
    async execute({name, email}: CreateUserProps){

        if(!name || !email){
            throw new Error("Fill in all fields correctly to continue")
        }

        const user = await prismaClient.user.create({
            data:{
                name,
                email,
                status: true
            }
        })

        return user;
    }
}

export {CreateUserService}