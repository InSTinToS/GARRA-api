CREATE TABLE IF NOT EXISTS "admin" (
  "user_id"    VARCHAR(255) PRIMARY KEY,

  "created_at" VARCHAR(255) NOT NULL,
  "updated_at" VARCHAR(255) NOT NULL,
  "register"   VARCHAR(255) NOT NULL  UNIQUE,

  CONSTRAINT "fk_admin_user"
  FOREIGN KEY ("user_id")
  REFERENCES "user"("id")
);

