# MiniTasker-Bots-
Frontend
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PEPE Mining App</title>
    <style>
        body { background: #0e1621; color: white; font-family: sans-serif; text-align: center; padding: 20px; direction: rtl; }
        .card { background: #17212b; border-radius: 20px; padding: 25px; border: 1px solid #2b5278; box-shadow: 0 5px 15px rgba(0,0,0,0.3); }
        .balance { font-size: 32px; color: #00ff7f; margin: 15px 0; font-family: monospace; }
        .btn { display: block; width: 100%; padding: 15px; margin-top: 15px; border-radius: 12px; border: none; font-weight: bold; cursor: pointer; font-size: 16px; }
        .btn-blue { background: #2481cc; color: white; }
        .btn-orange { background: #f39c12; color: white; }
        .status { color: #8abae0; font-size: 14px; margin-bottom: 20px; }
    </style>
</head>
<body>
    <div class="card">
        <h2>⛏️ محاكي التعدين السحابي</h2>
        <p class="status">الحالة: متصل 🟢 (سرعة 1.5x)</p>
        <div class="balance" id="counter">0.00000000</div>
        
        <button class="btn btn-blue" onclick="goDeposit()">🚀 استثمر 1000 PEPE الآن</button>
        
        <button class="btn btn-orange" onclick="watchAd()">📺 شاهد إعلان PTC لشحن الطاقة</button>
    </div>

    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <script>
        let tg = window.Telegram.WebApp;
        tg.expand();

        let count = 0;
        setInterval(() => {
            count += 0.00000185; // زيادة وهمية للتعدين
            document.getElementById('counter').innerText = count.toFixed(8);
        }, 1000);

        function watchAd() {
            // ضع هنا رابطك الإعلاني من Monetag أو Adsterra
            window.open("https://your-ad-link.com");
        }

        function goDeposit() {
            tg.close(); // يغلق التطبيق ويعيد المستخدم للبوت ليقوم بالإيداع
        }
    </script>
</body>
</html>
