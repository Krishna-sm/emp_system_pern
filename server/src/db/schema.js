const { pgTable, text, varchar } = require("drizzle-orm/pg-core");

const TestTable = pgTable("test",{
    name:varchar("name",{length:20}).notNull()
})

module.exports ={
    TestTable
}