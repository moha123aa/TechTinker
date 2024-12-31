// تبديل الأوضاع الليلي والنهاري
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        themeToggle.textContent = '🌙';
    } else {
        themeToggle.textContent = '☀️';
    }
});

// تغيير اللغة
function changeLanguage(lang) {
    alert(`تم التغيير إلى اللغة: ${lang}`);
    // يمكنك هنا إضافة منطق لتغيير اللغة بشكل فعلي
}

// إرسال النموذج
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log('الاسم:', name);
    console.log('البريد الإلكتروني:', email);
    console.log('الرسالة:', message);
    alert('تم إرسال رسالتك بنجاح!');
    document.getElementById('contactForm').reset();
});