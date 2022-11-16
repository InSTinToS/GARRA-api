CREATE TABLE IF NOT EXISTS "user" (
  "id"          VARCHAR(255)  PRIMARY KEY,

  "updated_at"  TIMESTAMP     NOT NULL,
  "created_at"  TIMESTAMP     NOT NULL,
  "full_name"   VARCHAR(255)  NOT NULL,
  "password"    VARCHAR(255)  NOT NULL,
  "email"       VARCHAR(255)  NOT NULL  UNIQUE,

  "avatar"      BYTEA --Blob equivalent
);
