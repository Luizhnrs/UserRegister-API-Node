import { PrismaClient } from "@prisma/client";
import prismaClient from "..";

interface CreateUserProps{
    name: string;
    email: string;
}

class CreateUserService{
    async execute({name, email}: CreateUserProps){

        if(!name || !email){
            throw new Error("Fill in all fields correctly to continue")
        }

        const person = await prismaClient.user.create({
            data:{
                name,
                email,
                status: true
            }
        })

        return person;
    }
}

export {CreateUserService}