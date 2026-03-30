const motorcycles = [
    {
        id: 1,
        name: "Honda CRF 300L",
        category: "enduro",
        price: "1 960,00",
        year: 2025,
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800"
    },
    {
        id: 2,
        name: "Yamaha MT-07",
        category: "naked",
        price: "1 665,00",
        year: 2025,
        image: "https://nrmotoco.com/wp-content/uploads/2023/08/2017-Yamaha-MT07-HO-f45rs.jpg"
    },
    {
        id: 3,
        name: "BMW R 1300 GS",
        category: "adventure",
        price: "2 300,00",
        year: 2025,
        image: "https://images.bikeexif.com/2023/09/2024-bmw-r1300gs-news.jpg?v=1753769650"
    },
    {
        id: 4,
        name: "KTM 390 Duke",
        category: "naked",
        price: "2 350,00",
        year: 2025,
        image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=800"
    }
];

function createMotoCard(moto) {
    const card = document.createElement('div');

    card.className = `
        group cursor-pointer overflow-hidden
        rounded-[28px]
        bg-zinc-900
        border border-white/5

        shadow-[0_20px_50px_rgba(0,0,0,0.7)]
        hover:shadow-[0_30px_80px_rgba(16,185,129,0.25)]

        transition-all duration-300
        
    `;

    card.innerHTML = `
        <div class="relative h-64 overflow-hidden">
            
            <!-- IMAGE -->
            <img src="${moto.image}" 
                 alt="${moto.name}" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            
            <!-- DARK OVERLAY -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <!-- CATEGORY -->
            <div class="absolute top-4 right-4 bg-black/60 backdrop-blur-xl text-emerald-400 text-xs font-bold px-4 py-1.5 rounded-full border border-white/10">
                ${moto.category.toUpperCase()}
            </div>

        </div>
        
        <div class="p-6">
            
            <!-- TITLE -->
            <h3 class="text-2xl font-semibold leading-tight mb-2 group-hover:text-emerald-400 transition">
                ${moto.name}
            </h3>

            <!-- YEAR -->
            <p class="text-emerald-400/80 mb-6">${moto.year} рік</p>
            
            <!-- PRICE -->
            <div class="flex justify-between items-end mb-7">
                <div>
                    <p class="text-xs uppercase tracking-widest text-zinc-500 mb-1">Ціна</p>
                    <p class="text-white text-2xl font-bold">${moto.price} $</p>
                </div>
            </div>
            
            <!-- BUTTON -->
            <a href="detail.html?id=${moto.id}" 
               class="block w-full py-4 text-center rounded-2xl font-semibold
                      bg-gradient-to-r from-emerald-500 to-emerald-400
                      text-black
                      transition-all duration-300
                      hover:shadow-[0_10px_30px_rgba(16,185,129,0.5)]
                      hover:-translate-y-1
                      active:scale-95">
                ДЕТАЛЬНІШЕ →
            </a>

        </div>
    `;
    return card;
}
// Завантаження на головній (Popular Models)
function loadPopularModels() {
    const container = document.getElementById('popular-models');
    if (!container) return;
    container.innerHTML = '';
    motorcycles.slice(0, 3).forEach(moto => {
        container.appendChild(createMotoCard(moto));
    });
}

// Завантаження в каталозі
function loadCatalog(filtered = motorcycles) {
    const container = document.getElementById('catalog-grid');
    if (!container) return;
    container.innerHTML = '';
    filtered.forEach(moto => {
        container.appendChild(createMotoCard(moto));
    });
}

function filterCategory(cat) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');

    if (cat === 'all') {
        loadCatalog(motorcycles);
    } else {
        const filtered = motorcycles.filter(m => m.category === cat);
        loadCatalog(filtered);
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

// Ініціалізація
document.addEventListener('DOMContentLoaded', () => {
    loadPopularModels();
    if (document.getElementById('catalog-grid')) {
        loadCatalog();
    }
});