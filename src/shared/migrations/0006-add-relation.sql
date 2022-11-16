CREATE TABLE IF NOT EXISTS "relation" (
  "id" VARCHAR(255) PRIMARY KEY,

  "product_id" VARCHAR(255) NOT NULL UNIQUE,
  "request_id" VARCHAR(255) NOT NULL UNIQUE,

  "created_at" VARCHAR(255) NOT NULL,
  "updated_at" VARCHAR(255) NOT NULL,

  CONSTRAINT "fk_relation_product"
    FOREIGN KEY ("product_id")
    REFERENCES "product"("id"),

  CONSTRAINT "fk_relation_request"
    FOREIGN KEY ("request_id")
    REFERENCES "request"("id")
);

