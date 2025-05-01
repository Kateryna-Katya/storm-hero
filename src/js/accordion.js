document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');
        const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
        const svg = trigger.querySelector('svg');
        const isOpen = parentElement.classList.contains('open');

         const plusPath = `
            <path d="M3.27197 16.0004L15.9999 16.0004M15.9999 16.0004V28.7283M15.9999 16.0004L28.7278 16.0004M15.9999 16.0004V3.27246" 
            stroke="#0D0D0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        `;

           const closePath = `
            <path d="M7 7L16 16M16 16L7 25M16 16L25 25M16 16L25 7" 
            stroke="#0D0D0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        `;

        if (!isOpen) {
            parentElement.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
            svg.innerHTML = closePath;
        } else {
            parentElement.classList.remove('open');
            panel.style.maxHeight = '0';
            svg.innerHTML = plusPath;
        }
    });
});