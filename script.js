// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        try {
            const element = document.querySelector(this.getAttribute('href'));
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } catch (error) {
            console.error('Error scrolling to element:', error);
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
    } else {
        header.style.backgroundColor = '#2c3e50';
    }
});

// FAQ 交互
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.style.maxHeight;
        
        // 关闭其他所有回答
        document.querySelectorAll('.faq-answer').forEach(item => {
            item.style.maxHeight = null;
        });

        // 切换当前回答
        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// 添加微信按钮交互
document.getElementById('showWechat').addEventListener('click', function() {
    try {
        document.getElementById('wechatModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    } catch (error) {
        console.error('Error showing WeChat modal:', error);
    }
});

document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('wechatModal').classList.remove('active');
    document.body.style.overflow = '';
});

// 点击弹窗外部关闭
document.getElementById('wechatModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = '';
    }
}); 