import React from 'react';

// Bu bileşenin dışarıdan alacağı 'props'ları (verileri) tanımlıyoruz
type Props = {
  percent: number; // Yüzde kaçı dolu (0-100)
};

const STROKE_WIDTH = 12; // İstem 2: 12-14px kalınlık
const RADIUS = 130; // Halkanın yarıçapı
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // Halkanın çevresi

export const CircularProgress: React.FC<Props> = ({ percent }) => {
  
  // Yüzdeye göre çubuğun ne kadarının "boş" kalacağını hesapla
  // stroke-dashoffset: Halkanın ne kadarının gizleneceğini belirler.
  const offset = CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;

  return (
    <svg 
      className="progress-ring" 
      width="300" 
      height="300" 
      viewBox="0 0 300 300"
    >
      {/* Tüm SVG'yi merkeze almak ve 90 derece döndürmek için
        (Çizgi tepeden başlasın diye)
      */}
      <g transform="rotate(-90 150 150)">
        
        {/* 1. Arka Plan Halkası (Gri) */}
        <circle
          className="progress-ring__track"
          cx="150"
          cy="150"
          r={RADIUS}
          fill="transparent"
          strokeWidth={STROKE_WIDTH}
        />
        
        {/* 2. İlerleme Halkası (Yeşil/Vurgu Rengi) */}
        <circle
          className="progress-ring__bar"
          cx="150"
          cy="150"
          r={RADIUS}
          fill="transparent"
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset} // Kalan süreyi buradan ayarlıyoruz
          strokeLinecap="round" // Çizgi uçları yuvarlak
        />
      </g>
    </svg>
  );
};