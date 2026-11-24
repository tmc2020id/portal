# Share image (Open Graph)

`public/og-ar.png` and `public/og-en.png` (1200x630) are the preview images WhatsApp, Facebook and X show when someone shares a tmcsmart.com link. `src/lib/seo.ts` points every page at them.

To change them, edit `og-ar.html` / `og-en.html` here, then render with Chrome:

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=10000 --screenshot="$PWD\public\og-ar.png" "file:///$($PWD -replace '\','/')/docs/share-image/og-ar.html"
```

Keep each file under 300 KB (WhatsApp skips bigger images), and bump `?v=` in `shareImage()` in `src/lib/seo.ts` so apps fetch the new image.
