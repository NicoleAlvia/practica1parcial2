-- CreateTable
CREATE TABLE "Espacio_parqueo" (
    "Id" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Espacio_parqueo_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Parqueo" (
    "Id" TEXT NOT NULL,
    "Parqueo" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Parqueo_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Vehiculo" (
    "Id" TEXT NOT NULL,
    "IdEspacio_parqueo" TEXT NOT NULL,
    "IdParqueo" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Placa" TEXT,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Vehiculo_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "Vehiculo" ADD CONSTRAINT "Vehiculo_IdEspacio_parqueo_fkey" FOREIGN KEY ("IdEspacio_parqueo") REFERENCES "Estado_parqueo"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehiculo" ADD CONSTRAINT "Vehiculo_IdParqueo_fkey" FOREIGN KEY ("IdParqueo") REFERENCES "Parqueo"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
