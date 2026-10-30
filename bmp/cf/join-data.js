const JOINS = [
  {
    "dataSource": "DM_BMP (Data_BMP_demo)",
    "tables": [
      "DM_BMP",
      "Landuse_for_tableu.geojson"
    ],
    "leftField": "Kode_Blok",
    "operator": "=",
    "rightField": "NO_BLOK"
  }
];