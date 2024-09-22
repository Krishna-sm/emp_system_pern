const { eq } = require("drizzle-orm")
const db = require("../config/db.config")
const { UserTable } = require("../db/schema")

class AuthController{
    static RegisterUser=async(req,res)=>{
        // logic

        const [chk_user] = await db.select().from(UserTable).where(eq(UserTable.email,req.body.email));
                if(chk_user){
                    return res.json({
                        error:'user alredy exist'
                    })
                }

            const user=   await db.insert(UserTable).values({
                    email:req.body.email,
                    name:req.body.name,
                    password:req.body.password
                }).returning()
        

        return res.json({
            user
        })
    }
}


module.exports = AuthController