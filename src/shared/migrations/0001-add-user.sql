CREATE TABLE IF NOT EXISTS "User" (
  "id"          VARCHAR(255)  PRIMARY KEY,

  "updated_at"  TIMESTAMP     NOT NULL,
  "created_at"  TIMESTAMP     NOT NULL,
  "password"    VARCHAR(255)  NOT NULL,
  "email"       VARCHAR(255)  NOT NULL  UNIQUE,

  "avatar"      BYTEA, --Blob equivalent
  "full_name"   VARCHAR(255)  NOT NULL
);
