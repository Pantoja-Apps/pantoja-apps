function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

const mobileBtn = document.getElementById('mobile-menu-btn');
if(mobileBtn) {
    mobileBtn.addEventListener('click', toggleMobileMenu);
}

// Función para abrir modal con Mockups Interactivos Reales (UI Completa)
function openModal(title, description, tags, mockups, mockupTitles) {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    if(!modal) return;

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = description;
    
    const modalTags = document.getElementById('modal-tags');
    modalTags.innerHTML = '';
    tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium';
        span.innerText = tag;
        modalTags.appendChild(span);
    });

    const mockupsGrid = document.getElementById('modal-mockups-grid');
    mockupsGrid.innerHTML = '';
    
    mockups.forEach((imgUrl, index) => {
        const viewTitle = mockupTitles && mockupTitles[index] ? mockupTitles[index] : `Vista 0${index + 1}`;
        const container = document.createElement('div');
        container.className = 'w-full max-w-[240px] h-[440px] bg-slate-950 rounded-[38px] border-[6px] border-slate-700 mx-auto p-2 relative shadow-2xl overflow-hidden flex flex-col justify-between';
        
        container.innerHTML = `
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-800 rounded-b-xl z-30 flex items-center justify-center">
                <div class="w-3 h-3 rounded-full bg-slate-950"></div>
            </div>
            <div class="w-full h-full rounded-[28px] overflow-hidden relative flex flex-col justify-between pt-6">
                <div class="absolute inset-0 z-0">
                    <img src="${imgUrl}" alt="${viewTitle}" class="w-full h-full object-cover opacity-60">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30"></div>
                </div>
                <div class="relative z-10 px-4 py-2 flex items-center justify-between bg-slate-900/60 backdrop-blur-md border-b border-slate-800/80">
                    <div class="flex items-center gap-1.5">
                        <i class="fa-solid fa-bars text-emerald-400 text-xs"></i>
                        <span class="text-[11px] font-bold text-white tracking-wide">${title}</span>
                    </div>
                    <div class="flex items-center gap-1.5 text-slate-300 text-[10px]">
                        <i class="fa-solid fa-wifi"></i>
                        <i class="fa-solid fa-battery-full text-emerald-400"></i>
                    </div>
                </div>
                <div class="relative z-10 p-4 space-y-3 my-auto">
                    <div class="bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-slate-700/60 space-y-1 shadow-lg">
                        <div class="flex items-center justify-between">
                            <span class="text-[10px] uppercase font-extrabold text-emerald-400 tracking-wider">${viewTitle}</span>
                            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        </div>
                        <p class="text-[11px] text-slate-200 font-medium">Componente nativo interactivo con Jetpack Compose y estado reactivo.</p>
                    </div>
                    <div class="w-full py-2 bg-emerald-500 text-slate-950 font-extrabold text-[11px] rounded-xl text-center shadow-md flex items-center justify-center gap-1.5">
                        <i class="fa-solid fa-circle-play text-[10px]"></i> Acción Activa
                    </div>
                </div>
                <div class="relative z-10 py-2 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 flex items-center justify-around text-slate-400 text-xs">
                    <i class="fa-solid fa-arrow-left hover:text-white cursor-pointer"></i>
                    <i class="fa-solid fa-house hover:text-white cursor-pointer"></i>
                    <i class="fa-solid fa-square hover:text-white cursor-pointer"></i>
                </div>
            </div>
        `;
        mockupsGrid.appendChild(container);
    });

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    if(!modal) return;
    modal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

window.addEventListener('click', (e) => {
    const modal = document.getElementById('project-modal');
    if (e.target === modal) closeModal();
});

function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;
    if(!name) { document.getElementById('name').nextElementSibling.classList.remove('hidden'); isValid = false; }
    else { document.getElementById('name').nextElementSibling.classList.add('hidden'); }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email || !emailRegex.test(email)) { document.getElementById('email').nextElementSibling.classList.remove('hidden'); isValid = false; }
    else { document.getElementById('email').nextElementSibling.classList.add('hidden'); }

    if(!subject) { document.getElementById('subject').nextElementSibling.classList.remove('hidden'); isValid = false; }
    else { document.getElementById('subject').nextElementSibling.classList.add('hidden'); }

    if(!message) { document.getElementById('message').nextElementSibling.classList.remove('hidden'); isValid = false; }
    else { document.getElementById('message').nextElementSibling.classList.add('hidden'); }

    if(isValid) {
        const btn = document.getElementById('submit-btn');
        btn.innerHTML = '<i class="fa-solid fa-spinner animate-spin"></i> Enviando...';
        btn.disabled = true;
        setTimeout(() => {
            document.getElementById('success-alert').classList.remove('hidden');
            btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Enviar a Pantoja Apps';
            btn.disabled = false;
        }, 1000);
    }
}

function resetForm() {
    document.getElementById('contact-form').reset();
    document.getElementById('success-alert').classList.add('hidden');
}
