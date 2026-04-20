# مكتب العيسى للمحاماة — الموقع الإلكتروني

## نشر الموقع على Railway

### الخطوة 1 — رفع الملفات على GitHub
1. اذهب إلى [github.com/new](https://github.com/new)
2. أنشئ مستودعاً جديداً باسم `aleissa-law-firm`
3. ارفع جميع الملفات (server.js, package.json, railway.toml, .gitignore, public/)

### الخطوة 2 — ربطه بـ Railway
1. اذهب إلى [railway.app](https://railway.app) وسجّل دخولك
2. اضغط **New Project** ثم **Deploy from GitHub repo**
3. اختر المستودع `aleissa-law-firm`
4. Railway سيكتشف Node.js تلقائياً وينشر المشروع

### الخطوة 3 — إضافة مفتاح Anthropic API (للشات بوت)
1. في Railway، اذهب إلى مشروعك → **Variables**
2. أضف متغيراً جديداً:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** مفتاحك من [console.anthropic.com](https://console.anthropic.com)
3. Railway سيعيد النشر تلقائياً

### الخطوة 4 — الحصول على الرابط
- في Railway → مشروعك → **Settings** → **Networking** → **Generate Domain**
- ستحصل على رابط مثل: `aleissa-law-firm.up.railway.app`

### الخطوة 5 (اختياري) — ربط دومين خاص
- في **Settings** → **Custom Domain** → أضف `aleissalawfirm.com`
- عدّل سجلات DNS عند مزود الدومين لتشير إلى Railway

## المتطلبات
- Node.js 18+
- مفتاح Anthropic API (للشات بوت فقط — الموقع يعمل بدونه)
