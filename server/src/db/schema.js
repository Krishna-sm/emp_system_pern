const { pgTable, text, varchar, pgEnum, timestamp, json, boolean, serial } = require("drizzle-orm/pg-core");

const TestTable = pgTable("test",{
    name:varchar("name",{length:20}).notNull()
})


const userType =pgEnum("type",["user_emp","user_admin"])

const UserTable = pgTable("user",{
    id:serial("id").primaryKey(),
    name:varchar("name",{length:20}).notNull(),
    email:varchar("email",{length:40}).notNull(),
    password:text("password").notNull(),
    type:userType("type").default("user_emp"),
    avatar:json("avatar").default({
        image_uri:'https://www.pngall.com/wp-content/uploads/12/Avatar-No-Background.png',
        public_id:''
    }),
    isActive:boolean("isActive").default(true),
    created_at:timestamp("created_at").defaultNow(),
    updated_at:timestamp("updated_at").$onUpdateFn(()=>new Date())
})

module.exports ={
    TestTable,
    UserTable,
    userType
}