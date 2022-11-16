CREATE TABLE IF NOT EXISTS "request" (
  "id"  VARCHAR(255)  PRIMARY KEY,

  "description" TEXT         NOT NULL,
  "user_id"     VARCHAR(255) NOT NULL,
  "created_at"  VARCHAR(255) NOT NULL,
  "updated_at"  VARCHAR(255) NOT NULL,


  CONSTRAINT "fk_request_user"
  FOREIGN KEY ("user_id")
  REFERENCES "user" ("id")
);
