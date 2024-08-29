import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main(){
    const post = await prisma.post.create({
        data:{
            title : 'my first post',
            body : 'my first post body'
        }
    })
    console.log(post)
}
main()