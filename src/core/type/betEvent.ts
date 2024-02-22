type BetEvent = {
  C: string; // Kod
  N: string; // Takım ve Maç Adı
  TYPE: string; // Tür
  NID: string; // Takım ID
  D: string; // Tarih
  T: string; // Saat
  DAY: string; // Gün
  S: string; // Durum
  LN: string; // Lig Adı
  IMF: boolean; // IMF
  OCG: {
    [key: string]: {
      ID: string; // Seçenek ID
      N: string; // Seçenek Adı
      MBS: string; // MBS
      SO: number; // SO
      OC: {
        [key: string]: {
          ID: string; // Oran ID
          O: string; // Oran
          N: string; // Oran Türü (1, X, 1-X, vs.)
          MBS: string; // MBS
          G: string; // G
          OD: number; // OD
          IMF: boolean; // IMF
        };
      };
    };
  };
  HEC: boolean; // HEC
};
