#  PomodoroAura
> Focus, with breathing space.

![PomodoroAura Screenshot](https://i.imgur.com/example.png)
*(Projenin bir ekran görüntüsünü buraya ekleyin. Yukarıdaki link sadece bir yer tutucudur. Ekran görüntünüzü [imgur.com](https://imgur.com/) gibi bir siteye yükleyip linki buraya yapıştırabilirsiniz.)*

**PomodoroAura**, dikkatinizi dağıtmayan, sakin ve estetik bir arayüzle tasarlanmış minimalist bir Pomodoro® zamanlayıcı web uygulamasıdır. "Spa benzeri üretkenlik" felsefesiyle, kullanıcıların çalışma ve mola sürelerini, odağı bozmadan etkin bir şekilde yönetmelerine yardımcı olmak için geliştirilmiştir.

Uygulama, React, Vite ve TypeScript kullanılarak oluşturulmuş ve tüm kullanıcı ayarlarını, tema tercihlerini ve hatta zamanlayıcının mevcut durumunu tarayıcının `localStorage`'ında saklayarak kalıcı bir deneyim sunar.

---

## ✨ Features (Özellikler)

Proje, detaylı bir istem listesindeki tüm gereksinimleri karşılamak üzere geliştirilmiştir:

* **Tam Pomodoro Döngüsü:** Yapılandırılabilir Odaklanma (Focus), Kısa Mola (Short Break) ve Uzun Mola (Long Break) süreleri.
* **Kalıcı Durum (Persistent State):** Tarayıcınızı kapatsanız veya yenileseniz bile, zamanlayıcınızın kaldığı yeri (`kalan saniye`, `aktif mod`, `çalışma durumu`) hatırlar.
* **"Spa Benzeri" Arayüz:** Düşük kontrastlı, yumuşak renk paleti ve yumuşak animasyonlar.
* **Gelişmiş Tema Desteği:** Tek tıkla Açık (Light), Koyu (Dark) ve **Sistem (System)** teması arasında geçiş yapabilme.
* **Dairesel İlerleme Çubuğu:** Zaman aktıkça görsel olarak boşalan animasyonlu bir SVG halkası.
* **Kesintisiz Modallar:** Ayarlar ve İstatistikler, zamanlayıcıyı **sıfırlamadan veya durdurmadan** açılır pencerelerde (modal) görüntülenir.
* **Ses ve Masaüstü Bildirimleri:** Her seansın sonunda (eğer izin verilirse) yumuşak
