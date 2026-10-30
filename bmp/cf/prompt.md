# stack

* html
* tailwind cdn
* vue cdn
* data calculated-field using csv possible with format code?


# task

create a web so i can copy title or content about data i collect here:

### Part of Landuse_for_tableu.geojson 
```
{
"type": "FeatureCollection",
"name": "D:\\KERJA\\PAR\\01_Suport\\2026\\Oktober\\10022026_ExportGjson\\Landuse_for_tableu\\gjsn\\Landuse_for_tableu.geojson",
"features": [
{ "type": "Feature", "properties": { "REGION": "KALIMANTAN 2", "AREA": "KAL 4", "N_ESTATE": "GTE", "DIVISI": "GTE06", "NO_BLOK": "IE0010" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 109.593620869000063, 0.618563742000049, 0.0 ], [ 109.593619108000041, 0.618563057000074, 0.0 ], [ 109.593620551000072, 0.618565425000043, 0.0 ], [ 109.593620869000063, 0.618563742000049, 0.0 ] ] ] } },
```

### Data_BMP_demo.xlsx:
<class 'pandas.DataFrame'>
RangeIndex: 132317 entries, 0 to 132316
Data columns (total 38 columns):
 #   Column                  Non-Null Count   Dtype         
---  ------                  --------------   -----         
 0   Jenis_Data              132317 non-null  str           
 1   Tanggal                 39273 non-null   datetime64[us]
 2   Tahun                   132317 non-null  int64         
 3   Periode                 132317 non-null  int64         
 4   Kode_PT                 132317 non-null  str           
 5   Kode_Estate             132317 non-null  str           
 6   Nama_Estate             132317 non-null  str           
 7   Kode_Divisi             132317 non-null  str           
 8   Kode_Blok               132317 non-null  str           
 9   Kode_Area               132317 non-null  str           
 10  Status_Tanaman          39273 non-null   str           
 11  Nomor_Dokumen           39273 non-null   str           
 12  Nomor_Baris             132317 non-null  int64         
 13  Kode_Aktivitas          132317 non-null  str           
 14  Nama_Aktivitas          132317 non-null  str           
 15  UOMSCHDL_Aktivitas      132317 non-null  str           
 16  Satuan_Aktivitas        132317 non-null  str           
 17  Output_Kerja            34213 non-null   float64       
 18  HK                      34213 non-null   float64       
 19  HK_Spv                  34213 non-null   float64       
 20  Total_HK                34213 non-null   float64       
 21  Kode_Bahan              5060 non-null    str           
 22  Nama_Bahan              5060 non-null    str           
 23  Satuan_Bahan            5060 non-null    str           
 24  Quantity_Bahan          5060 non-null    float64       
 25  Qty_Base_Bahan          5060 non-null    float64       
 26  Qty_Trx_Bahan           5060 non-null    float64       
 27  Nomor_Urut_Bahan        5060 non-null    float64       
 28  Nomor_Sequence_Bahan    5060 non-null    float64       
 29  Kode_Budget             93044 non-null   str           
 30  Target_Luas_Bulanan_Ha  93044 non-null   float64       
 31  Budget_Bulanan_Amount   93044 non-null   float64       
 32  Flag_Void               39273 non-null   float64       
 33  Nomor_Revisi            39273 non-null   float64       
 34  Status_Data             132317 non-null  str           
 35  Sumber_Tabel            132317 non-null  str           
 36  Source_Row_ID           132317 non-null  int64         
 37  Source_Update_Date      132317 non-null  datetime64[us]
dtypes: datetime64[us](2), float64(13), int64(4), str(19)
memory usage: 38.4 MB
None
['Jenis_Data', 'Tanggal', 'Tahun', 'Periode', 'Kode_PT', 'Kode_Estate', 'Nama_Estate', 'Kode_Divisi', 'Kode_Blok', 'Kode_Area', 'Status_Tanaman', 'Nomor_Dokumen', 'Nomor_Baris', 'Kode_Aktivitas', 'Nama_Aktivitas', 'UOMSCHDL_Aktivitas', 'Satuan_Aktivitas', 'Output_Kerja', 'HK', 'HK_Spv', 'Total_HK', 'Kode_Bahan', 'Nama_Bahan', 'Satuan_Bahan', 'Quantity_Bahan', 'Qty_Base_Bahan', 'Qty_Trx_Bahan', 'Nomor_Urut_Bahan', 'Nomor_Sequence_Bahan', 'Kode_Budget', 'Target_Luas_Bulanan_Ha', 'Budget_Bulanan_Amount', 'Flag_Void', 'Nomor_Revisi', 'Status_Data', 'Sumber_Tabel', 'Source_Row_ID', 'Source_Update_Date']
         Jenis_Data    Tanggal  Tahun  Periode Kode_PT Kode_Estate    Nama_Estate  ...  Budget_Bulanan_Amount  Flag_Void  Nomor_Revisi    Status_Data          Sumber_Tabel  Source_Row_ID      Source_Update_Date
0  AKTUAL_PEKERJAAN 2026-08-01   2026        8     AET         EBL  BELIDA ESTATE  ...                    NaN        0.0           0.0  AKTUAL_SUMBER  STG_EST.dbo.PMSKW178         638472 2026-10-13 22:05:49.950
1  AKTUAL_PEKERJAAN 2026-08-01   2026        8     AET         EBL  BELIDA ESTATE  ...                    NaN        0.0           0.0  AKTUAL_SUMBER  STG_EST.dbo.PMSKW178         638473 2026-10-13 22:05:49.950
2  AKTUAL_PEKERJAAN 2026-08-01   2026        8     AET         EBL  BELIDA ESTATE  ...                    NaN        0.0           0.0  AKTUAL_SUMBER  STG_EST.dbo.PMSKW178         638474 2026-10-13 22:05:49.950

[3 rows x 38 columns]
<StringArray>
['AKTUAL_PEKERJAAN', 'AKTUAL_BAHAN', 'KANDIDAT_TARGET_BULANAN']
Length: 3, dtype: str
Jenis_Data
AKTUAL_BAHAN                5060
AKTUAL_PEKERJAAN           34213
KANDIDAT_TARGET_BULANAN    93044
dtype: int64
---

<StringArray>
[          'BELIDA ESTATE',           'MESUJI ESTATE',
      'KANTOR GRUP BELIDA',         'TRAINING CENTER',
          'PLASMA PKS AET',      'ESTATE GAHARU PALM',
     'ESTATE GUNUNG UTAMA',     'SUMBER SAWIT ESTATE',
   'ESTATE GUNUNG MENTARI',  'ESTATE GUNUNG KEDURANG',
      'BUKIT SUBUR ESTATE',     'BUKIT MAKMUR ESTATE',
       'BUKIT RAYA ESTATE',  'PERMATA BUNDA 1 ESTATE',
  'PERMATA BUNDA 2 ESTATE',     'TANJUNG SARI ESTATE',
      'MEGA TERANG ESTATE',          'PLASMA PKS MBJ',
      'GUNUNG ALAM ESTATE', 'GUNUNG SEJAHTERA ESTATE',
      'GADING JAYA ESTATE',          'SEPUCUK ESTATE',
          'PLASMA PKS SGR',       'NAWA SURYA ESTATE',
    'PUNCAK TERANG ESTATE',      'JAYA PERMAI ESTATE',
    'LIMAU KASTURI ESTATE',   'GUNUNG TENERAH ESTATE',
        'ULIN AGRO ESTATE',     'KERUING AGRO ESTATE',
     'MERANTI AGRO ESTATE',           'SAHARA ESTATE']
Length: 32, dtype: str