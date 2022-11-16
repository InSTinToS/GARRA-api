CREATE TABLE IF NOT EXISTS "product" (
  "id"          VARCHAR(255)  PRIMARY KEY,

  "name"        VARCHAR(255)  NOT NULL,
  "created_by"  VARCHAR(255)  NOT NULL,
  "sector_id"   VARCHAR(255)  NOT NULL,
  "created_at"  VARCHAR(255)  NOT NULL,
  "updated_at"  VARCHAR(255)  NOT NULL,

  CONSTRAINT "fk_product_admin"
  FOREIGN KEY ("created_by")
  REFERENCES "admin"("user_id")
);
