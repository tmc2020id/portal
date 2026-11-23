# إحصاءات زوار tmcsmart.com و erp.tmcsmart.com

الهدف: نعرف من وين بيجي الزائر، شو بيتصفح، شو بيدوّر، وشو بيهمه، ونربط هالشي لاحقاً بالمبيعات (واتساب وفواتير Odoo) عن طريق رقم الهاتف.

نشغّل أداتين على الموقعين:

| الأداة | وين بيانتها | الكوكيز | متى تشتغل |
|---|---|---|---|
| **Umami 3.5** (عندنا) | سيرفر Oracle، قاعدة `umami-db` | ما في كوكيز، وما بتخزّن الـ IP | دائماً |
| **Google Analytics 4** `G-DXDM819BV0` | Google | `_ga`, `_ga_*` على `.tmcsmart.com` | الموقع: بعد «موافق» بالشريط. المتجر: بعد «I agree» بشريط Odoo |

الموقعين على نفس النطاق `tmcsmart.com`، فـ:
- GA4 بيشوف الزائر نفسه لما ينتقل من الموقع للمتجر (نفس كوكي `_ga`)، وما بيحتاج إعداد cross-domain.
- Umami فيه موقع واحد «TMC SMART» للنطاقين، فالجلسة بتكمل من الموقع للمتجر.

## العناوين

| العنوان | لشو | مين بيوصله |
|---|---|---|
| `https://stats.tmcsmart.com` | لوحة Umami | خلف Cloudflare Access (فريق TMC بس) |
| `https://t.tmcsmart.com/script.js` و `/api/send` | سكربت التتبع واستقبال الزيارات | عام، وكل شي غير هالمسارين بيرجع 404 |

أول دخول للوحة: المستخدم `admin` مع كلمة السر الافتراضية الموجودة بدليل Umami، والنظام بيجبرك تغيّرها فوراً.

## الأحداث

الصفحات بتنحسب تلقائياً بالأداتين، حتى التنقل جوّا الموقع بدون إعادة تحميل.

### الموقع tmcsmart.com (شغّال بهالفرع)

| الحدث | متى | البيانات |
|---|---|---|
| `whatsapp_click` | ضغط أي رابط واتساب (`wa.me`، `api.whatsapp.com`…) | `placement`, `number` |
| `phone_click` | ضغط رابط `tel:` | `placement`, `number` |
| `email_click` | ضغط رابط `mailto:` | `placement` |
| `store_click` | ضغط أي رابط للمتجر `erp.tmcsmart.com` | `placement`, `link_path` |
| `language_switch` | زر تبديل اللغة | `placement`, `from_lang`, `to_lang` |
| `special_order_request` | زر «تواصل معنا» بصفحة الطلبات الخاصة | `placement` |

`placement` بيقول وين كان الرابط: `floating` (زر الواتساب العائم)، `header`، `footer`، `hero`، `product_grid`، `main`، أو `id` القسم.

كل حدث بيروح للأداتين. Umami بيضيف «tag» بلغة الصفحة (`ar` أو `en`) حتى نفصل التقارير حسب اللغة.

إذا وصل الزائر من رابط فيه UTM وبعدين ضغط على رابط للمتجر، الموقع بيضيف نفس الـ UTM لرابط المتجر، فبيعرف Odoo من أي حملة إجا الطلب. هالشي بالذاكرة بس، ما بينخزن شي على الجهاز.

**إضافة حدث جديد:** زيد اسمه على `trackedEvents` بملف `src/lib/analytics.ts`، وحط على الرابط `data-track="الاسم"`. أي خاصية `data-track-xxx="..."` بتنبعت كبيانات مع الحدث باسم `xxx`.

### المتجر erp.tmcsmart.com

**شغّال هلأ:** Odoo بيبعت لـ GA4 أحداث التجارة لحاله (`view_item`، `add_to_cart`، `begin_checkout`، `purchase`…) مع consent mode (كل شي ممنوع لحتى يوافق الزائر).

**كود المتجر بملف [odoo-head.html](odoo-head.html)**، وبينضاف بآخر `custom_code_head` بإعدادات الموقع بـ Odoo:
- سكربت Umami.
- نسخ أحداث التجارة نفسها لـ Umami.
- `search` لـ Umami (الكلمة، عدد نتائج الصفحة الأولى، ومكان البحث `shop` أو `site`)، و `search_no_results` للأداتين: هيك بنعرف شو بيدوّروا الناس وما لقوه.
- `whatsapp_click` و `phone_click` و `email_click` و `language_switch` متل الموقع.
- `special_order_request` لما ينبعت فورم الطلبات الخاصة (Odoo بيحوّل لصفحة الشكر).

Facebook Pixel بالمتجر صار يشتغل بس بعد «I agree» بشريط الكوكيز.

### فلترة البوتات

- Umami بيتجاهل البوتات المعروفة من الـ User-Agent (مكتبة isbot).
- GA4 بيستبعد البوتات المعروفة تلقائياً.
- زيارات الاختبار المحلي بتروح لموقع منفصل «TMC local test» بـ Umami، و GA4 لـ `G-TMCTEST000` (رقم وهمي ما بيوصل لشي).

## إعدادات GA4 (من analytics.google.com، بتعملها مرة وحدة)

1. **Admin → Data streams → الـ stream تبع الويب → Enhanced measurement:** تأكد إنه شغّال ومعه **Site search**. Odoo بيستعمل `?search=` وهاد من ضمن المعاملات الافتراضية، فما بدها تعديل.
2. **Admin → Custom definitions → Create custom dimension** (Scope: Event)، وحدة لكل وحدة من: `placement`، `link_path`، `from_lang`، `to_lang`. بدونها ما بتطلع هالقيم بالتقارير.
3. **Admin → Events:** علّم `whatsapp_click` و `phone_click` و `special_order_request` كـ **Key event** (بيظهروا بعد أول ما ينبعتوا من الموقع الحقيقي). `purchase` معلّم لحاله.
4. **Admin → Data retention:** خليها 14 شهر بدل شهرين.
5. **Admin → Google signals:** خليها مطفية (نحنا ما عم نستعمل إعلانات على الموقع).

## اختبار محلي

```bash
NEXT_PUBLIC_ANALYTICS_HOSTS=localhost \
NEXT_PUBLIC_GA_ID=G-TMCTEST000 \
NEXT_PUBLIC_UMAMI_SRC=http://localhost:3300/script.js \
NEXT_PUBLIC_UMAMI_WEBSITE_ID=74200b21-2dbb-4177-a059-3c583294da2d \
npx next build && npx next start -p 3100

# بنافذة ثانية: نفق لـ Umami على Oracle
ssh -N -L 3300:172.18.0.12:3000 tmc-oci
```

بدون هالمتغيرات، البناء بيستعمل القيم الحقيقية، والتتبع بيشتغل بس على `tmcsmart.com` و `www.tmcsmart.com`.

## ربط الزيارات بالمبيعات (لاحقاً)

- **Umami:** الجداول `session` (المتصفح، الجهاز، البلد)، `website_event` (الصفحة، المصدر، UTM، اسم الحدث)، `event_data` (بيانات الحدث). منقدر نسحبها بـ SQL مباشرة.
- **Odoo:** الطلبات عليها حملة ومصدر ووسيط (UTM) لما الزائر يجي من رابط فيه UTM. موديول Link Tracker مثبّت ومنقدر نعمل فيه روابط قصيرة بتعدّ الضغطات.
- **واتساب (Evolution):** الرسائل مع رقم الهاتف.

### المرحلة الجاية (اقتراح، ما انبنى): كود مرجعي برسالة الواتساب

الفكرة: زر الواتساب بالموقع بيفتح المحادثة برسالة جاهزة فيها كود قصير، مثلاً «مرحباً TMC… (رمز: K7Q2)».

1. الموقع بيولّد كود عشوائي من 4 أحرف لكل زيارة، وبيسجّله بـ Umami مع حدث `whatsapp_click` (عن طريق `umami.identify`).
2. الزبون بيبعت الرسالة، فبتوصل لـ Evolution ومعها الكود ورقم الهاتف.
3. سكربت صغير بيقرا الرسائل الجديدة من Evolution، بيلقط الكود، وبيكتب بجدول: الكود ← رقم الهاتف ← جلسة Umami.
4. هيك منعرف إنه هالرقم إجا من حملة فلانية وشاف المنتجات الفلانية، ومنربطه بفواتيره.

قبل ما نشغّلها لازم نضيف سطر لسياسة الخصوصية إنه الكود بيربط الزيارة بالمحادثة إذا بعتها الزائر بنفسه. الكود عشوائي وما فيه أي معلومة شخصية.

دليل روابط الحملات (UTM) للفريق: [utm.md](utm.md).
