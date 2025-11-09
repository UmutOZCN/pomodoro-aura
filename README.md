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
* **Ses ve Masaüstü Bildirimleri:** Her seansın sonunda (eğer izin verilirse) yumuşak bir zil sesi ve masaüstü bildirimi.
* **Duyarlı (Responsive) Tasarım:** Masaüstü, tablet ve 360px genişliğe kadar tüm mobil cihazlarda tam uyumlu çalışır.
* **İstatistik Takibi:** Tamamlanan seansları ve toplam odaklanma süresini "Bugün" ve "Toplam" olarak `localStorage`'da saklar ve gösterir.
* **Hızlı Ayarlar (Presets):** 25/5, 50/10 gibi yaygın zamanlamalar için tek tıkla ayar yapma.

---

## 🛠️ Tech Stack (Kullanılan Teknolojiler)

* **Framework:** React 18
* **Build Tool:** Vite
* **Dil:** TypeScript
* **Durum Yönetimi (State):** React Hooks (`useState`, `useEffect`, `useRef`)
* **Kalıcılık (Persistence):** `localStorage` üzerine kurulu özel bir `useLocalStorage` kancası (custom hook).
* **Stil:** Modern CSS (CSS Değişkenleri, Grid, Flexbox, Media Queries)
* **İkonlar:** Lucide React

---

## 🚀 Getting Started (Hızlı Başlangıç)

Bu projeyi yerel makinenizde çalıştırmak için:

1.  **Depoyu klonlayın (veya indirin):**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/pomodoro-aura.git](https://github.com/YOUR_USERNAME/pomodoro-aura.git)
    ```

2.  **Proje klasörüne gidin:**
    ```bash
    cd pomodoro-aura
    ```

3.  **Gerekli paketleri kurun:**
    ```bash
    npm install
    ```

4.  **Geliştirme sunucusunu başlatın:**
    Bu komut, projeyi `http://localhost:5173/` adresinde çalıştıracaktır.
    ```bash
    npm run dev
    ```

### 
### Üretim (Production) Paketi Oluşturma

Sitenizi Vercel, Netlify veya başka bir hosting sağlayıcısında yayınlamak için "üretim" paketini oluşturun:

```bash
npm run build
```
Bu komut, sitenizin yayınlanmaya hazır tüm statik dosyalarını içeren bir **`dist`** klasörü oluşturacaktır.

---

## 🏛️ Architecture (Mimari)

Bu proje, "Modal" tabanlı bir Tek Sayfalı Uygulama (SPA) olarak yapılandırılmıştır. Yönlendirme (`react-router-dom`) yerine, tüm çekirdek işlevler (`SettingsModal`, `StatsModal`) ana `App` bileşeni üzerinden koşullu olarak render edilir.

* **`App.tsx`**: Ana bileşen. Tüm state (durum) mantığını, `useEffect` kancalarını, zamanlayıcı çekirdeğini ve yardımcı fonksiyonları içerir.
* **`useLocalStorage.ts`**: Herhangi bir state'i tarayıcı hafızasına otomatik olarak kaydeden ve oradan okuyan, yeniden kullanılabilir özel bir React kancası.
* **`SettingsModal.tsx`**: Süreleri, temayı ve bildirim izinlerini yöneten modal bileşeni.
* **`StatsModal.tsx`**: `localStorage`'dan `sessionHistory`'yi okuyan ve istatistikleri hesaplayan modal bileşeni.
* **`types.ts`**: Proje genelinde kullanılan paylaşımlı TypeScript tipleri (`Settings`, `Theme` vb.).

---

## 🔑 License (Lisans)

Bu proje [MIT Lisansı](https://choosealicense.com/licenses/mit/) altındadır.
