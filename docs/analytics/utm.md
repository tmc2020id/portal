# دليل روابط الحملات (UTM)

أي رابط بننشره للموقع أو المتجر لازم يحمل UTM، وإلا الزيارة بتطلع «مباشرة» وما منعرف من وين إجت. هالشي مهم خصوصاً لواتساب: التطبيق ما بيقول للموقع إنه الزائر إجا منه.

## القواعد

- كل الكلمات **إنجليزي، أحرف صغيرة، بدون مسافات**. استعمل `_` بدل المسافة: `black_friday` مش `Black Friday`.
- نفس الاسم لنفس الشي دايماً: `facebook` مش مرة `fb` ومرة `Facebook`.
- لا تحط UTM على روابط بين صفحات موقعنا. بس على الروابط اللي بننشرها برا.

| المعامل | معناه | أمثلة |
|---|---|---|
| `utm_source` | المنصة أو المكان | `whatsapp`, `facebook`, `instagram`, `qr` |
| `utm_medium` | نوع النشر | `social`, `status`, `bio`, `paid_social`, `offline` |
| `utm_campaign` | الحملة أو المناسبة | `ramadan_2027`, `new_cameras`, `branch_sarmada` |
| `utm_content` | أي نسخة من الإعلان أو أي مكان بالفرع (اختياري) | `video1`, `story`, `counter`, `flyer` |

## الجاهز لكل قناة

| القناة | الرابط |
|---|---|
| حالة واتساب | `https://tmcsmart.com/?utm_source=whatsapp&utm_medium=status&utm_campaign=اسم_الحملة` |
| رسالة جماعية أو قناة واتساب | `...?utm_source=whatsapp&utm_medium=broadcast&utm_campaign=اسم_الحملة` |
| بروفايل واتساب بزنس | `https://tmcsmart.com/?utm_source=whatsapp&utm_medium=profile&utm_campaign=always_on` |
| منشور فيسبوك | `...?utm_source=facebook&utm_medium=social&utm_campaign=اسم_الحملة&utm_content=post` |
| إعلان فيسبوك/إنستغرام ممول | `...?utm_source=facebook&utm_medium=paid_social&utm_campaign=اسم_الحملة&utm_content=اسم_الإعلان` (أو `utm_source=instagram`) |
| رابط البايو بإنستغرام | `https://tmcsmart.com/?utm_source=instagram&utm_medium=bio&utm_campaign=always_on` |
| منشور أو ستوري إنستغرام | `...?utm_source=instagram&utm_medium=social&utm_campaign=اسم_الحملة&utm_content=story` |
| QR بالفرع | `https://tmcsmart.com/?utm_source=qr&utm_medium=offline&utm_campaign=branch_اسم_الفرع&utm_content=مكان_الـQR` |

الكلمات العربية بالروابط (`اسم_الحملة`، `اسم_الفرع`…) بتتبدل باسم إنجليزي حسب القواعد فوق. و`...` يعني نفس أول الرابط.

بدل `tmcsmart.com/` فيك تحط أي صفحة، مثلاً منتج بالمتجر:
`https://erp.tmcsmart.com/shop/اسم-المنتج?utm_source=facebook&utm_medium=social&utm_campaign=new_cameras`

إذا الرابط أصلاً فيه `?`، كمّل بـ `&` بدل `?`.

## Postiz

لما تجدول نفس المنشور على أكتر من منصة، خلي `utm_campaign` نفسه بكل المنصات وغيّر `utm_source` حسب المنصة (`facebook`، `instagram`…). هيك منقارن المنصات ببعض لنفس الحملة.

## QR الفروع

الـ QR بينطبع مرة وحدة وما بيتغير، فانتبه للرابط قبل الطباعة:

- حط `utm_content` بمكان الـ QR (`counter`، `window`، `flyer`، `invoice`) حتى نعرف أي واحد بينمسح أكتر.
- بديل أحسن: اعمل رابط قصير من تطبيق **Link Tracker** بـ Odoo للصفحة نفسها مع الحملة والمصدر والوسيط. Odoo بيعدّ الضغطات، وبيربط الحملة بالطلبات إذا اشترى الزائر من المتجر.

## وين بتشوف النتيجة

- **Umami** (`stats.tmcsmart.com`): قسم UTM بصفحة الموقع، وفيه المصدر والوسيط والحملة.
- **GA4:** Reports → Acquisition → Traffic acquisition، وغيّر العمود لـ «Session source / medium» أو «Session campaign».
- **Odoo:** الطلبات اللي إجت من حملة بيبين عليها الحملة والمصدر.

ملاحظة: GA4 ما بيعرف `qr` و `offline` بقنواته الجاهزة، فبيحطهم تحت «Unassigned». ما في مشكلة، بيظهروا صح بتقرير المصدر/الوسيط وب Umami.
