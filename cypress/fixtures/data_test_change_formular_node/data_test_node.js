module.exports = [
  {
    ID_dataflow: "204",
    ID_node: "f76ebad8-9fdd-4e12-9cf5-51d9be8e9699",
    Column_name: "dep",
    formula_before: "LAG(tb1_dsp_c3) over(PARTITION by tb1_dc)",
    formula_after: "lagInFrame(tb1_dsp_c3) over(PARTITION by tb1_dc)",
  },
  {
    ID_dataflow: "204",
    ID_node: "f76ebad8-9fdd-4e12-9cf5-51d9be8e9699",
    Column_name: "task_me2",
    formula_before: "concat(ky_kh,'-',ma_nha_may,'-',tb1_lo,'-',tb1_dc)",
    formula_after:
      "concat(toString(ky_kh),'-',ma_nha_may,'-',tb1_lo,'-',tb1_dc)",
  },
  {
    ID_dataflow: "204",
    ID_node: "55a5d13d-f777-4c5e-82d2-ffb702b2032c",
    Column_name: "id",
    formula_before: "concat(ky_kh,'-',ma_nha_may,'-',tb1_lo,'-',tb1_dc)",
    formula_after:
      "concat(toString(ky_kh),'-',ma_nha_may,'-',tb1_lo,'-',tb1_dc)",
  },
  {
    ID_dataflow: "204",
    ID_node: "55a5d13d-f777-4c5e-82d2-ffb702b2032c",
    Column_name: "parent_task",
    formula_before: "concat(ky_kh,'-',ma_nha_may)",
    formula_after: "concat(toString(ky_kh),'-',ma_nha_may)",
  },
  {
    ID_dataflow: "204",
    ID_node: "9aa9369a-7b33-4055-9256-a044c6abe5fc",
    Column_name: "id",
    formula_before: "concat(ky_kh,'-',ma_nha_may)",
    formula_after: "concat(toString(ky_kh),'-',ma_nha_may)",
  },
  {
    ID_dataflow: "207",
    ID_node: "492beeb3-5a24-4be3-86fb-f494e036a495",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb4_nbd]::date , [tb4_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb4_nbd])), toUInt32(assumeNotNull([tb4_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "207",
    ID_node: "cdf1900e-253b-4cf8-b13d-e2aaa16c5ae2",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb2_nbd]::date , [tb2_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb2_nbd])), toUInt32(assumeNotNull([tb2_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "207",
    ID_node: "20e97108-810b-49fc-bc83-227a617510ae",
    Column_name: "thang",
    formula_before: "to_char([ngay_ct_ke_hoach3__1__1]::date,'MM-YY')",
    formula_after: "formatDateTime([ngay_ct_ke_hoach3__1__1], '%m-%y')",
  },
  {
    ID_dataflow: "207",
    ID_node: "5b8fe75c-d86b-4c21-a85a-b8274b7630b1",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb4_nbd]::date , [tb4_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb4_nbd])), toUInt32(assumeNotNull([tb4_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "207",
    ID_node: "87205926-0dde-445a-aaef-2d0c15aa4c87",
    Column_name: "thang",
    formula_before: "to_char([ngay_ct_ke_hoach3__1]::date,'MM-YY')",
    formula_after: "formatDateTime([ngay_ct_ke_hoach3__1], '%m-%y')",
  },
  {
    ID_dataflow: "207",
    ID_node: "18e89021-d21e-4104-8342-728acaf0106e",
    Column_name: "thang",
    formula_before: "to_char([nct]::date,'MM-YY')",
    formula_after: "formatDateTime([nct], '%m-%y')",
  },
  {
    ID_dataflow: "207",
    ID_node: "8893b998-425a-4f4c-908d-184f88d3b455",
    Column_name: "thang",
    formula_before: "to_char([nct]::date,'MM-YY')",
    formula_after: "formatDateTime([nct], '%m-%y')",
  },
  {
    ID_dataflow: "207",
    ID_node: "a8342be2-5582-49a8-9345-ce30e6a7b77f",
    Column_name: "thang",
    formula_before: "to_char([ngay_chung_tu__1]::date,'MM-YY')",
    formula_after: "formatDateTime([ngay_chung_tu__1], '%m-%y')",
  },
  {
    ID_dataflow: "207",
    ID_node: "b7f644b2-a56e-40c9-a789-476f48c55f26",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb2_nbd]::date , [tb2_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb2_nbd])), toUInt32(assumeNotNull([tb2_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "207",
    ID_node: "7a313c09-fbf5-474e-8ea0-3b603e9ba9b2",
    Column_name: "thang",
    formula_before: "to_char([ngay_ct_ke_hoach3__1]::date,'MM-YY')",
    formula_after: "formatDateTime([ngay_ct_ke_hoach3__1], '%m-%y')",
  },
  {
    ID_dataflow: "207",
    ID_node: "cdbfaa43-2598-4258-9400-81678715ac6e",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb1_nbd]::date , [tb1_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb1_nbd])), toUInt32(assumeNotNull([tb1_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "207",
    ID_node: "a7b269b2-4bba-4b0d-825d-9a4ba1be1c68",
    Column_name: "thang",
    formula_before: "to_char([ngay_ct_ke_hoach3__1]::date,'MM-YY')",
    formula_after: "formatDateTime([ngay_ct_ke_hoach3__1], '%m-%y')",
  },
  {
    ID_dataflow: "207",
    ID_node: "dac8f051-9e3d-425f-986d-d48155548dbf",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb1_nbd]::date , [tb1_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb1_nbd])), toUInt32(assumeNotNull([tb1_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "207",
    ID_node: "08429e91-3c7f-4821-a6cf-f8c81594fd97",
    Column_name: "thang",
    formula_before: "to_char([nctkh]::date,'MM-YY')",
    formula_after: "formatDateTime([nctkh], '%m-%y')",
  },
  {
    ID_dataflow: "207",
    ID_node: "c4096f5e-b734-46f8-9202-9bf3887250c1",
    Column_name: "thang",
    formula_before: "to_char([nct]::date,'MM-YY')",
    formula_after: "formatDateTime([nct], '%m-%y')",
  },
  {
    ID_dataflow: "218",
    ID_node: "e6b1ab11-d10b-45e0-8294-845a2dd991b0",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb1_nbd]::date , [tb1_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb1_nbd])), toUInt32(assumeNotNull([tb1_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "218",
    ID_node: "8e4813c1-b055-43a9-8c26-77a6481eae0e",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb1_nbd]::date , [tb1_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb1_nbd])), toUInt32(assumeNotNull([tb1_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "218",
    ID_node: "14109e27-437a-4f49-876c-1937606c3b6e",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb1_nbd]::date , [tb1_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb1_nbd])), toUInt32(assumeNotNull([tb1_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "218",
    ID_node: "91ea4e05-b8f2-47f0-afe4-8d7ae5b80545",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb3_nbd]::date , [tb3_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb3_nbd])), toUInt32(assumeNotNull([tb3_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "218",
    ID_node: "b760be48-e298-4746-986a-a7555a26492b",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb5_nbd]::date , [tb5_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb5_nbd])), toUInt32(assumeNotNull([tb5_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "218",
    ID_node: "f0baf40f-520f-403c-86a0-8ab831bf065b",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb5_nbd]::date , [tb5_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb5_nbd])), toUInt32(assumeNotNull([tb5_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "218",
    ID_node: "0cccfaa8-8948-4a1b-b2bd-48f6d72515b8",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb2_nbd]::date , [tb2_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb2_nbd])), toUInt32(assumeNotNull([tb2_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "219",
    ID_node: "dac8f051-9e3d-425f-986d-d48155548dbf",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb1_nbd]::date , [tb1_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb1_nbd])), toUInt32(assumeNotNull([tb1_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "219",
    ID_node: "08429e91-3c7f-4821-a6cf-f8c81594fd97",
    Column_name: "thang",
    formula_before: "to_char([nctkh]::date,'MM-YY')",
    formula_after: "formatDateTime([nctkh], '%m-%y')",
  },
  {
    ID_dataflow: "219",
    ID_node: "c4096f5e-b734-46f8-9202-9bf3887250c1",
    Column_name: "thang",
    formula_before: "to_char([nct]::date,'MM-YY')",
    formula_after: "formatDateTime([nct], '%m-%y')",
  },
  {
    ID_dataflow: "219",
    ID_node: "cdbfaa43-2598-4258-9400-81678715ac6e",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb1_nbd]::date , [tb1_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb1_nbd])), toUInt32(assumeNotNull([tb1_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "219",
    ID_node: "a7b269b2-4bba-4b0d-825d-9a4ba1be1c68",
    Column_name: "thang",
    formula_before: "to_char([ngay_ct_ke_hoach3__1]::date,'MM-YY')",
    formula_after: "formatDateTime([ngay_ct_ke_hoach3__1], '%m-%y')",
  },
  {
    ID_dataflow: "219",
    ID_node: "b7f644b2-a56e-40c9-a789-476f48c55f26",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb2_nbd]::date , [tb2_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb2_nbd])), toUInt32(assumeNotNull([tb2_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "219",
    ID_node: "7a313c09-fbf5-474e-8ea0-3b603e9ba9b2",
    Column_name: "thang",
    formula_before: "to_char([ngay_ct_ke_hoach3__1]::date,'MM-YY')",
    formula_after: "formatDateTime([ngay_ct_ke_hoach3__1], '%m-%y')",
  },
  {
    ID_dataflow: "219",
    ID_node: "492beeb3-5a24-4be3-86fb-f494e036a495",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb4_nbd]::date , [tb4_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb4_nbd])), toUInt32(assumeNotNull([tb4_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "219",
    ID_node: "cdf1900e-253b-4cf8-b13d-e2aaa16c5ae2",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb2_nbd]::date , [tb2_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb2_nbd])), toUInt32(assumeNotNull([tb2_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "219",
    ID_node: "a8342be2-5582-49a8-9345-ce30e6a7b77f",
    Column_name: "thang",
    formula_before: "to_char([ngay_chung_tu__1]::date,'MM-YY')",
    formula_after: "formatDateTime([ngay_chung_tu__1], '%m-%y')",
  },
  {
    ID_dataflow: "219",
    ID_node: "20e97108-810b-49fc-bc83-227a617510ae",
    Column_name: "thang",
    formula_before: "to_char([ngay_ct_ke_hoach3__1__1]::date,'MM-YY')",
    formula_after: "formatDateTime([ngay_ct_ke_hoach3__1__1], '%m-%y')",
  },
  {
    ID_dataflow: "219",
    ID_node: "5b8fe75c-d86b-4c21-a85a-b8274b7630b1",
    Column_name: "nctkh",
    formula_before:
      "generate_series( [tb4_nbd]::date , [tb4_nkt]::DATE ,'1 day' )",
    formula_after:
      "arrayJoin(arrayMap(x -> toDate(x), range(toUInt32(assumeNotNull([tb4_nbd])), toUInt32(assumeNotNull([tb4_nkt])), 24 * 3600)))",
  },
  {
    ID_dataflow: "219",
    ID_node: "87205926-0dde-445a-aaef-2d0c15aa4c87",
    Column_name: "thang",
    formula_before: "to_char([ngay_ct_ke_hoach3__1]::date,'MM-YY')",
    formula_after: "formatDateTime([ngay_ct_ke_hoach3__1], '%m-%y')",
  },
  {
    ID_dataflow: "219",
    ID_node: "18e89021-d21e-4104-8342-728acaf0106e",
    Column_name: "thang",
    formula_before: "to_char([nct]::date,'MM-YY')",
    formula_after: "formatDateTime([nct], '%m-%y')",
  },
  {
    ID_dataflow: "219",
    ID_node: "8893b998-425a-4f4c-908d-184f88d3b455",
    Column_name: "thang",
    formula_before: "to_char([nct]::date,'MM-YY')",
    formula_after: "formatDateTime([nct], '%m-%y')",
  },
  {
    ID_dataflow: "242",
    ID_node: "2e8a58ce-f0c4-4abc-93a3-4f04650100cb",
    Column_name: "loc_mm",
    formula_before: "case [tb1_sl_mm] > 0 when TRUE then 'MM' end",
    formula_after: "case [tb1_sl_mm] > 0 when TRUE then 'MM' end is not null",
  },
  {
    ID_dataflow: "242",
    ID_node: "2e8a58ce-f0c4-4abc-93a3-4f04650100cb",
    Column_name: "loc_mc",
    formula_before: "case [tb1_sl_mc] > 0 when true then 'MC' END",
    formula_after: "case [tb1_sl_mc] > 0 when true then 'MC' END is not null",
  },
  {
    ID_dataflow: "248",
    ID_node: "637ee945-3571-4577-a882-b68e8fa15d43",
    Column_name: "tgbd_date",
    formula_before: "cast([tb1_tg_bd] as date)",
    formula_after: "toDate(tb1_tg_bd)",
  },
  {
    ID_dataflow: "253",
    ID_node: "ef7bc6a3-9283-469f-9f97-461e2308d648",
    Column_name: "fix_bug",
    formula_before:
      "(extract(julian from [ngay_hoan_thanh]::timestamptz) - extract(julian from [ngay_nct]::timestamptz))*24",
    formula_after:
      "(toUnixTimestamp(toDateTime([ngay_hoan_thanh])) - toUnixTimestamp(toDateTime([ngay_nct])))/86400",
  },
  {
    ID_dataflow: "227",
    ID_node: "61b92b46-f898-422d-8e58-8ce3067e8230",
    Column_name: "sl_ton_dau",
    formula_before:
      "case when [sl_xuat_m2] is null then [sl_ton_cuoi] - [sl_nhap_m2] else (select case when [sl_nhap_m2] is null then [sl_ton_cuoi] + [sl_xuat_m2] else [sl_ton_cuoi] - [sl_nhap_m2] + [sl_xuat_m2] end)  end",
    formula_after:
      "If([sl_xuat_m2] is null,[sl_ton_cuoi] - [sl_nhap_m2],if([sl_nhap_m2] is null,[sl_ton_cuoi] + [sl_xuat_m2],[sl_ton_cuoi] - [sl_nhap_m2] + [sl_xuat_m2]))",
  },
  {
    ID_dataflow: "227",
    ID_node: "d4f91fef-f333-4852-b4ad-23ab25035197",
    Column_name: "ton_dau",
    formula_before:
      "case when [sl_xuat_m2] is null then [sl_ton_cuoi] - [sl_nhap_m2] else (select case when [sl_nhap_m2] is null then [sl_ton_cuoi] + [sl_xuat_m2] else [sl_ton_cuoi] - [sl_nhap_m2] + [sl_xuat_m2] end)  end",
    formula_after:
      "If([sl_xuat_m2] is null,[sl_ton_cuoi] - [sl_nhap_m2],if([sl_nhap_m2] is null,[sl_ton_cuoi] + [sl_xuat_m2],[sl_ton_cuoi] - [sl_nhap_m2] + [sl_xuat_m2]))",
  },
  {
    ID_dataflow: "252",
    ID_node: "61b92b46-f898-422d-8e58-8ce3067e8230",
    Column_name: "sl_ton_dau",
    formula_before:
      "case when [sl_xuat_m2] is null then [sl_ton_cuoi] - [sl_nhap_m2] else (select case when [sl_nhap_m2] is null then [sl_ton_cuoi] + [sl_xuat_m2] else  sl_ton_cuoi] - [sl_nhap_m2] + [sl_xuat_m2] end)  end",
    formula_after:
      "If([sl_xuat_m2] is null,[sl_ton_cuoi] - [sl_nhap_m2],if([sl_nhap_m2] is null,[sl_ton_cuoi] + [sl_xuat_m2],[sl_ton_cuoi] - [sl_nhap_m2] + [sl_xuat_m2]))",
    field6: "trùng 227",
  },
  {
    ID_dataflow: "252",
    ID_node: "d4f91fef-f333-4852-b4ad-23ab25035197",
    Column_name: "ton_dau",
    formula_before:
      "case when [sl_xuat_m2] is null then [sl_ton_cuoi] - [sl_nhap_m2] else (select case when [sl_nhap_m2] is null then [sl_ton_cuoi] + [sl_xuat_m2] else  sl_ton_cuoi] - [sl_nhap_m2] + [sl_xuat_m2] end)  end",
    formula_after:
      "If([sl_xuat_m2] is null,[sl_ton_cuoi] - [sl_nhap_m2],if([sl_nhap_m2] is null,[sl_ton_cuoi] + [sl_xuat_m2],[sl_ton_cuoi] - [sl_nhap_m2] + [sl_xuat_m2]))",
  },
  {
    ID_dataflow: "254",
    ID_node: "06a6972a-dc3e-466f-a2e4-e53005c7867c",
    Column_name: "nha_may_sx",
    formula_before:
      "case [du_lieu_tu__1] when 'VVP' then SUBSTRING([ma_sp_c4_bravo__2],2,1) when 'VPL' then SUBSTRING([ma_sp_c4_bravo__2],2,1) when 'VTG' then SUBSTRING([ma_sp_c4_bravo__2],2,1) else SUBSTRING([ma_sp_c4_bravo__2],1,1)  end",
    formula_after:
      "multiIf([du_lieu_tu__1]='VVP',SUBSTRING([ma_sp_c4_bravo__2],2,1),[du_lieu_tu__1]='VPL',SUBSTRING([ma_sp_c4_bravo__2],2,1),[du_lieu_tu__1]='VTG',SUBSTRING([ma_sp_c4_bravo__2],2,1),SUBSTRING([ma_sp_c4_bravo__2],1,1))",
  },
  {
    ID_dataflow: "254",
    ID_node: "45205fca-f010-4e00-a1d2-bf0cb507dd9f",
    Column_name: "nmsx",
    formula_before:
      "case [nha_may_sx] when '4' then 'VHM' when '1' then 'VVP' when '2' then 'VPL' when '5' then 'NK' when '7' then 'NK' when '3' then 'CN' end",
    formula_after:
      "multiIf([nha_may_sx]='4','VHM',[nha_may_sx]='1','VVP',[nha_may_sx]='2','VPL',[nha_may_sx]='5','NK',[nha_may_sx]='7','NK',[nha_may_sx]='3','CN',NULL)",
  },
  {
    ID_dataflow: "258",
    ID_node: "f76ebad8-9fdd-4e12-9cf5-51d9be8e9699",
    Column_name: "dep",
    formula_before: "LAG(tb1_dsp_c3) over(PARTITION by tb1_dc)",
    formula_after: "lagInFrame(tb1_dsp_c3) over(PARTITION by tb1_dc)",
  },
  {
    ID_dataflow: "258",
    ID_node: "f76ebad8-9fdd-4e12-9cf5-51d9be8e9699",
    Column_name: "task_me",
    formula_before: "concat(ky_kh,'-',ma_nha_may,'-',tb1_lo,'-',tb1_dc)",
    formula_after:
      "concat(toString(ky_kh),'-',ma_nha_may,'-',tb1_lo,'-',tb1_dc)",
  },
  {
    ID_dataflow: "258",
    ID_node: "55a5d13d-f777-4c5e-82d2-ffb702b2032c",
    Column_name: "id",
    formula_before: "concat(ky_kh,'-',ma_nha_may,'-',tb1_lo,'-',tb1_dc)",
    formula_after:
      "concat(toString(ky_kh),'-',ma_nha_may,'-',tb1_lo,'-',tb1_dc)",
  },
  {
    ID_dataflow: "258",
    ID_node: "55a5d13d-f777-4c5e-82d2-ffb702b2032c",
    Column_name: "parent_task",
    formula_before: "concat(ky_kh,'-',ma_nha_may)",
    formula_after: "concat(toString(ky_kh),'-',ma_nha_may)",
  },
  {
    ID_dataflow: "258",
    ID_node: "9aa9369a-7b33-4055-9256-a044c6abe5fc",
    Column_name: "id",
    formula_before: "concat(ky_kh,'-',ma_nha_may)",
    formula_after: "concat(toString(ky_kh),'-',ma_nha_may)",
  },
];
