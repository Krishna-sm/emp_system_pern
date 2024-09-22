DO $$ BEGIN
 CREATE TYPE "public"."type" AS ENUM('user_emp', 'user_admin');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
