CREATE TABLE IF NOT EXISTS "user" (
	"name" varchar(20) NOT NULL,
	"email" varchar(40) NOT NULL,
	"password" text NOT NULL,
	"type" "type" DEFAULT 'user_emp',
	"avatar" json DEFAULT '{"image_uri":"https://www.pngall.com/wp-content/uploads/12/Avatar-No-Background.png","public_id":""}'::json,
	"isActive" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp
);
