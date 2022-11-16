CREATE TABLE IF NOT EXISTS "barcode" (
  "code"       VARCHAR(255) PRIMARY KEY,

  "product_id" VARCHAR(255) NOT NULL,

  CONSTRAINT "fk_barcode_product"
  FOREIGN KEY ("product_id")
  REFERENCES "product"("id")
);
