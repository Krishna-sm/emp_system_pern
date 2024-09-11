require("dotenv").config({
    path:'.env'
})
// import { defineConfig } from 'drizzle-kit'

const {defineConfig} = require('drizzle-kit')
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.js",
  out: "./src/db/migrations",
  dbCredentials:{
    url:process.env.POSTGRES_URL
  },
  strict:true,
  verbose:true
})