// Инициализация Telegram Web App
const tg = window.Telegram?.WebApp || {
    ready: () => {},
    expand: () => {},
    sendData: () => {},
    close: () => {},
    openLink: (url) => window.open(url, '_blank'),
    colorScheme: 'light'
};

if (window.Telegram?.WebApp) {
    tg.ready();
    tg.expand();
}

// Данные товаров
const products = {
    consultations: [
        {
            id: 1,
            title: "Индивидуальная консультация",
            description: "Персональная встреча для решения ваших вопросов. Длительность 60 минут.",
            price: "3000 ₽",
            duration: "60 мин",
            format: "Онлайн/Офлайн",
            category: "Консультации",
            image: null // Будет добавлено позже
        },
        {
            id: 2,
            title: "Консультация для пары",
            description: "Совместная работа над отношениями. Подходит для пар, которые хотят улучшить взаимопонимание.",
            price: "5000 ₽",
            duration: "90 мин",
            format: "Онлайн/Офлайн",
            category: "Консультации",
            image: null
        },
        {
            id: 3,
            title: "Семейная консультация",
            description: "Работа со всей семьей для решения семейных конфликтов и улучшения отношений.",
            price: "6000 ₽",
            duration: "90 мин",
            format: "Онлайн/Офлайн",
            category: "Консультации",
            image: null
        },
        {
            id: 4,
            title: "Экстренная консультация",
            description: "Срочная помощь в сложной ситуации. Доступна в течение 24 часов.",
            price: "4000 ₽",
            duration: "45 мин",
            format: "Онлайн",
            category: "Консультации",
            image: null
        },
        {
            id: 5,
            title: "Консультация для подростков",
            description: "Специализированная помощь для подростков в возрасте 14-18 лет.",
            price: "2500 ₽",
            duration: "50 мин",
            format: "Онлайн/Офлайн",
            category: "Консультации",
            image: null
        }
    ],
    courses: [
        {
            id: 6,
            title: "Курс: Управление стрессом",
            description: "Комплексная программа из 8 занятий по управлению стрессом и тревогой. Включает практические упражнения и техники.",
            price: "12000 ₽",
            duration: "8 занятий",
            format: "Онлайн",
            category: "Курсы",
            image: null
        },
        {
            id: 7,
            title: "Курс: Самооценка и уверенность",
            description: "6-недельный курс для повышения самооценки и развития уверенности в себе.",
            price: "15000 ₽",
            duration: "6 недель",
            format: "Онлайн",
            category: "Курсы",
            image: null
        },
        {
            id: 8,
            title: "Курс: Эмоциональный интеллект",
            description: "Научитесь понимать и управлять своими эмоциями. 10 практических занятий.",
            price: "18000 ₽",
            duration: "10 занятий",
            format: "Онлайн",
            category: "Курсы",
            image: null
        },
        {
            id: 9,
            title: "Курс: Здоровые отношения",
            description: "Программа для пар, желающих улучшить качество отношений. 5 совместных сессий.",
            price: "20000 ₽",
            duration: "5 сессий",
            format: "Онлайн",
            category: "Курсы",
            image: null
        },
        {
            id: 10,
            title: "Курс: Работа с тревогой",
            description: "Специализированный курс для тех, кто страдает от тревожных расстройств. 12 занятий.",
            price: "22000 ₽",
            duration: "12 занятий",
            format: "Онлайн",
            category: "Курсы",
            image: null
        }
    ],
    meditations: [
        {
            id: 11,
            title: "Медитация: Утренняя энергия",
            description: "15-минутная утренняя медитация для начала дня с позитивом и энергией.",
            price: "500 ₽",
            duration: "15 мин",
            format: "Аудио",
            category: "Медитации",
            image: null
        },
        {
            id: 12,
            title: "Медитация: Снятие стресса",
            description: "Глубокое расслабление и снятие напряжения после рабочего дня.",
            price: "500 ₽",
            duration: "20 мин",
            format: "Аудио",
            category: "Медитации",
            image: null
        },
        {
            id: 13,
            title: "Медитация: Здоровый сон",
            description: "Вечерняя медитация для улучшения качества сна и расслабления.",
            price: "500 ₽",
            duration: "25 мин",
            format: "Аудио",
            category: "Медитации",
            image: null
        },
        {
            id: 14,
            title: "Медитация: Работа с тревогой",
            description: "Специальная техника для снижения тревожности и панических атак.",
            price: "700 ₽",
            duration: "30 мин",
            format: "Аудио",
            category: "Медитации",
            image: null
        },
        {
            id: 15,
            title: "Пакет медитаций",
            description: "Полный набор из 10 медитаций для разных ситуаций. Лучшее предложение!",
            price: "3500 ₽",
            duration: "10 медитаций",
            format: "Аудио",
            category: "Медитации",
            image: null
        }
    ]
};

// Видео отзывы (пока заглушки, будут заменены на реальные)
const reviews = [
    {
        id: 1,
        name: "Анна К.",
        text: "Очень помогла разобраться в себе",
        videoUrl: null // Будет добавлено позже
    },
    {
        id: 2,
        name: "Михаил С.",
        text: "Профессиональный подход, рекомендую",
        videoUrl: null
    },
    {
        id: 3,
        name: "Елена В.",
        text: "Курс изменил мою жизнь",
        videoUrl: null
    }
];

// Текущая активная категория
let currentCategory = 'consultations';

// Инициализация приложения
function init() {
    renderProducts(currentCategory);
    renderReviews();
    setupEventListeners();
    
    // Настройка темы Telegram
    if (tg.colorScheme === 'dark') {
        document.documentElement.style.setProperty('--tg-theme-bg-color', '#212121');
        document.documentElement.style.setProperty('--tg-theme-text-color', '#ffffff');
        document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', '#181818');
    }
}

// Рендеринг товаров
function renderProducts(category) {
    const catalog = document.getElementById('catalog');
    const categoryProducts = products[category] || [];
    
    catalog.innerHTML = '';
    
    if (categoryProducts.length === 0) {
        catalog.innerHTML = '<p style="text-align: center; color: var(--tg-theme-hint-color); padding: 20px;">Товары не найдены</p>';
        return;
    }
    
    categoryProducts.forEach(product => {
        const card = createProductCard(product);
        catalog.appendChild(card);
    });
}

// Создание карточки товара
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openProductModal(product);
    
    const emoji = getEmojiForCategory(product.category);
    
    card.innerHTML = `
        <div class="product-image">
            ${product.image ? `<img src="${product.image}" alt="${product.title}">` : `<span>${emoji}</span>`}
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <div class="product-title">${product.title}</div>
            <div class="product-price">${product.price}</div>
        </div>
    `;
    
    return card;
}

// Получение эмодзи для категории
function getEmojiForCategory(category) {
    const emojis = {
        'Консультации': '💬',
        'Курсы': '📚',
        'Медитации': '🧘'
    };
    return emojis[category] || '✨';
}

// Открытие модального окна товара
function openProductModal(product) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    const emoji = getEmojiForCategory(product.category);
    
    modalBody.innerHTML = `
        <div class="modal-image">
            ${product.image ? `<img src="${product.image}" alt="${product.title}">` : `<span>${emoji}</span>`}
        </div>
        <h2 class="modal-title">${product.title}</h2>
        <p class="modal-description">${product.description}</p>
        <div class="modal-details">
            <div class="modal-detail-item">
                <span class="modal-detail-label">Цена:</span>
                <span class="modal-detail-value">${product.price}</span>
            </div>
            <div class="modal-detail-item">
                <span class="modal-detail-label">Длительность:</span>
                <span class="modal-detail-value">${product.duration}</span>
            </div>
            <div class="modal-detail-item">
                <span class="modal-detail-label">Формат:</span>
                <span class="modal-detail-value">${product.format}</span>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    
    // Обработчик кнопки заказа
    const orderBtn = document.getElementById('orderBtn');
    orderBtn.onclick = () => orderProduct(product);
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
}

// Заказ товара
function orderProduct(product) {
    // Отправка данных в Telegram бот
    const data = {
        title: product.title,
        price: product.price,
        category: product.category,
        desc: product.description,
        text: `Хочу записаться на: ${product.title}`
    };
    
    if (window.Telegram?.WebApp) {
        tg.sendData(JSON.stringify(data));
        tg.close();
    } else {
        // Если не в Telegram, просто показываем сообщение
        alert(`Заявка: ${product.title}\nЦена: ${product.price}\n\nСвяжитесь: https://t.me/andreyeva_olgaa`);
    }
}

// Рендеринг отзывов
function renderReviews() {
    const container = document.getElementById('reviewsContainer');
    container.innerHTML = '';
    
    reviews.forEach(review => {
        const card = createReviewCard(review);
        container.appendChild(card);
    });
}

// Создание карточки отзыва
function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';
    
    card.innerHTML = `
        <div class="review-video">
            ${review.videoUrl 
                ? `<video controls><source src="${review.videoUrl}" type="video/mp4"></video>`
                : `<div class="review-video-placeholder">🎥 Видео отзыв<br><small>Будет добавлено</small></div>`
            }
        </div>
        <div class="review-info">
            <div class="review-name">${review.name}</div>
            <div class="review-text">${review.text}</div>
        </div>
    `;
    
    return card;
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Переключение категорий
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Удаляем активный класс у всех кнопок
            tabButtons.forEach(b => b.classList.remove('active'));
            // Добавляем активный класс к нажатой кнопке
            btn.classList.add('active');
            // Обновляем категорию и рендерим товары
            currentCategory = btn.dataset.category;
            renderProducts(currentCategory);
        });
    });
    
    // Закрытие модального окна
    const modalClose = document.getElementById('modalClose');
    const modal = document.getElementById('productModal');
    
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Кнопка связи
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            tg.openLink('https://t.me/andreyeva_olgaa');
        });
    }
}

// Запуск приложения
document.addEventListener('DOMContentLoaded', init);

