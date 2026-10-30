const INITIAL_FIELDS = [
    {
        title: "Btn Metric Ach",
        formula: `"Achievement Rate"`
    },
    {
        title: "Btn Metric BMP",
        formula: `"BMP Scoring (Ranking)"`
    },
    {
        title: "Btn Metric Prod",
        formula: `"FFB Production"`
    },
    {
        title: "Btn Metric Yield",
        formula: `"FFB Yield"`
    },
    {
        title: "Cf Bmp Score",
        formula: `SUM(
    IF [Jenis Data] = 'AKTUAL_PEKERJAAN' THEN [Output Kerja] END
) 
/ 
SUM(
    IF [Jenis Data] = 'KANDIDAT_TARGET_BULANAN' THEN [Target Luas Bulanan Ha] END
)`
    },
    {
        title: "Cf Budget Ytd",
        formula: `SUM(
    IF [Jenis Data] = 'BUDGET' THEN [Output Kerja] ELSE 0 END
)`
    },
    {
        title: "Cf Dynamic Granularity",
        formula: `CASE [Parameters].[Prm Granularity Selector]
WHEN "Region" THEN [Cf Region]
WHEN "Area" THEN Str([Area])
WHEN "Estate" THEN [Nama Estate]
END`
    },
    {
        title: "Cf Dynamic Metric",
        formula: `CASE [Parameters].[Prm Metric Selector]
WHEN "BMP Scoring (Ranking)" THEN [Cf Bmp Score]
WHEN "FFB Production" THEN [Cf FFB Production Ytd]
WHEN "FFB Yield" THEN [Cf Yield Ytd]
WHEN "Achievement Rate" THEN [Cf Real Vs Budget]
END`
    },
    {
        title: "Cf Estate Score Card Color",
        formula: `IF [Cf Bmp Score] >= 0.80 THEN "High ≥ 80%"
ELSEIF [Cf Bmp Score] >= 0.75 THEN "Mid 75–80%"
ELSE "Low < 75%"
END`
    },
    {
        title: "Cf FFB Production Ytd",
        formula: `SUM(
    IF CONTAINS([Nama Aktivitas], "FFB") OR [Jenis Data] = 'AKTUAL_PEKERJAAN'
    THEN [Output Kerja]
    END
)`
    },
    {
        title: "Cf Is Active Metric",
        formula: `IF [Parameters].[Prm Metric Selector] = [Btn Metric BMP] THEN "Active" ELSE "Inactive" END`
    },
    {
        title: "Cf Is Metric Active",
        formula: `IF [Parameters].[Prm Metric Selector] = [Cf Metric Button Name] THEN "Active" ELSE "Inactive" END`
    },
    {
        title: "Cf Is Sumatra",
        formula: `[Cf Region] = "Sumatra"`
    },
    {
        title: "Cf Is Tbm Estate",
        formula: `[BMP Area Immature (ha)] > 0`
    },
    {
        title: "Cf Kalimantan MoM",
        formula: `ZN(([Cf Kalimantan Score])) - LOOKUP(ZN(([Cf Kalimantan Score])), -1)`
    },
    {
        title: "Cf Kalimantan Score",
        formula: `SUM(
    IF [Jenis Data] = 'AKTUAL_PEKERJAAN'
       AND [Cf Region] = 'Kalimantan'
    THEN [Output Kerja]
    END
)
/
SUM(
    IF [Jenis Data] = 'KANDIDAT_TARGET_BULANAN'
       AND [Cf Region] = 'Kalimantan'
    THEN [Target Luas Bulanan Ha]
    END
)`
    },
    {
        title: "Cf Metric Button Name",
        formula: `CASE [Parameters].[Prm Metric Selector]
WHEN 'BMP Scoring (Ranking)' THEN 'BMP Scoring (Ranking)'
WHEN 'FFB Production' THEN 'FFB Production'
WHEN 'FFB Yield' THEN 'FFB Yield'
WHEN 'Achievement Rate' THEN 'Achievement Rate'
END`
    },
    {
        title: "Cf Mom Overall",
        formula: `ZN(([Cf Bmp Score])) - LOOKUP(ZN(([Cf Bmp Score])), -1)`
    },
    {
        title: "Cf Real Vs Budget",
        formula: `[Cf Yield Ytd] / [Cf Budget Ytd]`
    },
    {
        title: "Cf Region",
        formula: `IF CONTAINS([Region], "KAL")
THEN "Kalimantan"
ELSE "Sumatra"
END`
    },
    {
        title: "Cf Status Flag",
        formula: `IF [Cf Real Vs Budget] >= 1.0 THEN "On Track"
ELSEIF [Cf Real Vs Budget] >= 0.85 THEN "At Risk"
ELSE "Below Budget"
END`
    },
    {
        title: "Cf Sumatra MoM",
        formula: `ZN(([Cf Sumatra Score])) - LOOKUP(ZN(([Cf Sumatra Score])), -1)`
    },
    {
        title: "Cf Sumatra Score",
        formula: `SUM(
    IF [Jenis Data] = 'AKTUAL_PEKERJAAN'
       AND [Cf Region] = 'Sumatra'
    THEN [Output Kerja]
    END
)
/
SUM(
    IF [Jenis Data] = 'KANDIDAT_TARGET_BULANAN'
       AND [Cf Region] = 'Sumatra'
    THEN [Target Luas Bulanan Ha]
    END
)`
    },
    {
        title: "Cf Target Yield",
        formula: `SUM(
    IF [Jenis Data] = 'TARGET' THEN [Output Kerja] ELSE 0 END
)`
    },
    {
        title: "Cf TBM Area",
        formula: `SUM(
[Target Luas Bulanan Ha]
)`
    },
    {
        title: "Cf Total Area Ha",
        formula: `SUM([Target Luas Bulanan Ha])`
    },
    {
        title: "Cf Vs Budget Pp",
        formula: `[Cf Real Vs Budget] - ZN(LOOKUP([Cf Real Vs Budget], -1))`
    },
    {
        title: "Cf Yield Ytd",
        formula: `SUM([Output Kerja]) / SUM([Target Luas Bulanan Ha])`
    },
    {
        title: "Prm Granularity Selector",
        formula: `"Estate"`
    },
    {
        title: "Prm Metric Selector",
        formula: `"FFB Production"`
    },
    {
        title: "Prm Report Month",
        formula: `"Aug 2026"`
    },
];
