document.addEventListener('DOMContentLoaded', () => {
    // เอฟเฟกต์พิมพ์ดีดสำหรับหัวข้อ h1
    const titles = document.querySelectorAll('h1');
    titles.forEach(el => {
        const originalText = el.innerText;
        el.innerText = '';
        let i = 0;
        const type = () => {
            if (i < originalText.length) {
                el.innerText += originalText.charAt(i);
                i++;
                setTimeout(type, 60);
            }
        };
        type();
    });
});

console.log("CodeHub Engine Active...");