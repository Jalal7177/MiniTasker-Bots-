// التأكد من تهيئة Telegram WebApp
if (window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();
    // إخفاء الزر السفلي الافتراضي لإغلاق التطبيق إذا لم تكن بحاجته
    window.Telegram.WebApp.MainButton.hide(); 
}

document.getElementById('startTaskButton').addEventListener('click', function() {
    
    document.getElementById('statusMessage').textContent = 'جاري طلب مهمة الكابتشا...';

    // هذه دالة وهمية لمحاكاة إكمال المهمة وإرسال البيانات للبوت
    setTimeout(() => {
        // يمكنك هنا عرض نافذة الكابتشا للمستخدم

        const resultData = {
            task_type: 'captcha',
            user_action: 'completed',
            reward_amount: 50 // نقاط وهمية
        };

        // ****** الخطوة الحاسمة: إرسال البيانات إلى البوت الخلفي ******
        // يتم إرسال البيانات كـ 'query_id' مشفرة لضمان الأمان
        if (window.Telegram.WebApp) {
            window.Telegram.WebApp.sendData(JSON.stringify(resultData));
            
            document.getElementById('statusMessage').textContent = '✅ تم إكمال المهمة وإرسال البيانات بنجاح.';
        } else {
             document.getElementById('statusMessage').textContent = '❌ لا يمكن الاتصال بـ Telegram WebApp.';
        }

    }, 2000); // محاكاة عملية انتظار لمدة ثانيتين
});
