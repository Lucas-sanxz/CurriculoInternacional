// Configurações globais
const ADMIN_USERNAME = 'fabio';
const ADMIN_PASSWORD = '1407';
let isAdmin = false;
let currentLanguage = 'pt';

// Dados do currículo (estrutura editável) - separado por idioma
let profileData = {
    pt: {
        name: 'Fabio Bittencourt Daniel',
        professional_title: 'Profissional de Relacionamento & Recursos Humanos',
        hero_description: 'Ao longo da minha trajetória em Recursos Humanos, desenvolvi habilidades essenciais para lidar com pessoas, construir conexões significativas e entender as necessidades dos colaboradores e da empresa. Agora, trago essa experiência para a área de Relacionamento, onde sigo focada em proporcionar interações de alto valor, fortalecer laços e impulsionar a satisfação e fidelização.',
        about_text: 'Profissional experiente em Recursos Humanos com transição estratégica para área de Relacionamento. Especializada em gestão de pessoas, desenvolvimento de equipes e construção de relacionamentos duradouros.',
        experience: [
            {
                period: '2020 - Presente',
                position: 'Gerente de Relacionamento',
                company: 'FBD Global Business Strategy',
                description: 'Liderança de equipes de relacionamento, desenvolvimento de estratégias de fidelização e gestão de projetos de alto impacto.'
            },
            {
                period: '2018 - 2020',
                position: 'Coordenadora de RH',
                company: 'Empresa Anterior',
                description: 'Gestão de processos de RH, recrutamento e seleção, desenvolvimento organizacional.'
            }
        ],
        skills: {
            soft: ['Liderança de Equipes', 'Comunicação Eficaz', 'Gestão de Conflitos', 'Desenvolvimento de Pessoas'],
            technical: ['Gestão de Projetos', 'Análise de Dados', 'Sistemas de RH', 'Estratégias de Relacionamento']
        },
        portfolio: [
            {
                title: 'Projeto de Fidelização',
                description: 'Desenvolvimento de estratégia que aumentou a retenção de clientes em 40%.'
            },
            {
                title: 'Reestruturação de Equipe',
                description: 'Liderança de processo que otimizou a produtividade em 35%.'
            }
        ],
        contact: {
            email: 'fabio.bittencourt@fbdglobal.com',
            phone: '+55 (11) 99999-9999',
            location: 'São Paulo, SP - Brasil'
        }
    },
    en: {
        name: 'Fabio Bittencourt Daniel',
        professional_title: 'Relationship & Human Resources Professional',
        hero_description: 'Throughout my career in Human Resources, I have developed essential skills for dealing with people, building meaningful connections, and understanding the needs of employees and the company. Now, I bring this experience to the Relationship area, where I continue focused on providing high-value interactions, strengthening bonds, and driving satisfaction and loyalty.',
        about_text: 'Experienced Human Resources professional with strategic transition to Relationship area. Specialized in people management, team development, and building lasting relationships.',
        experience: [
            {
                period: '2020 - Present',
                position: 'Relationship Manager',
                company: 'FBD Global Business Strategy',
                description: 'Leadership of relationship teams, development of loyalty strategies, and management of high-impact projects.'
            },
            {
                period: '2018 - 2020',
                position: 'HR Coordinator',
                company: 'Previous Company',
                description: 'HR process management, recruitment and selection, organizational development.'
            }
        ],
        skills: {
            soft: ['Team Leadership', 'Effective Communication', 'Conflict Management', 'People Development'],
            technical: ['Project Management', 'Data Analysis', 'HR Systems', 'Relationship Strategies']
        },
        portfolio: [
            {
                title: 'Loyalty Project',
                description: 'Development of strategy that increased customer retention by 40%.'
            },
            {
                title: 'Team Restructuring',
                description: 'Leadership of process that optimized productivity by 35%.'
            }
        ],
        contact: {
            email: 'fabio.bittencourt@fbdglobal.com',
            phone: '+55 (11) 99999-9999',
            location: 'São Paulo, SP - Brazil'
        }
    },
    es: {
        name: 'Fabio Bittencourt Daniel',
        professional_title: 'Profesional de Relaciones & Recursos Humanos',
        hero_description: 'A lo largo de mi trayectoria en Recursos Humanos, he desarrollado habilidades esenciales para tratar con personas, construir conexiones significativas y entender las necesidades de los colaboradores y la empresa. Ahora, traigo esta experiencia al área de Relaciones, donde sigo enfocada en proporcionar interacciones de alto valor, fortalecer vínculos e impulsar la satisfacción y fidelización.',
        about_text: 'Profesional experimentada en Recursos Humanos con transición estratégica al área de Relaciones. Especializada en gestión de personas, desarrollo de equipos y construcción de relaciones duraderas.',
        experience: [
            {
                period: '2020 - Presente',
                position: 'Gerente de Relaciones',
                company: 'FBD Global Business Strategy',
                description: 'Liderazgo de equipos de relaciones, desarrollo de estrategias de fidelización y gestión de proyectos de alto impacto.'
            },
            {
                period: '2018 - 2020',
                position: 'Coordinadora de RRHH',
                company: 'Empresa Anterior',
                description: 'Gestión de procesos de RRHH, reclutamiento y selección, desarrollo organizacional.'
            }
        ],
        skills: {
            soft: ['Liderazgo de Equipos', 'Comunicación Efectiva', 'Gestión de Conflictos', 'Desarrollo de Personas'],
            technical: ['Gestión de Proyectos', 'Análisis de Datos', 'Sistemas de RRHH', 'Estrategias de Relaciones']
        },
        portfolio: [
            {
                title: 'Proyecto de Fidelización',
                description: 'Desarrollo de estrategia que aumentó la retención de clientes en 40%.'
            },
            {
                title: 'Reestructuración de Equipo',
                description: 'Liderazgo de proceso que optimizó la productividad en 35%.'
            }
        ],
        contact: {
            email: 'fabio.bittencourt@fbdglobal.com',
            phone: '+55 (11) 99999-9999',
            location: 'São Paulo, SP - Brasil'
        }
    }
};

// Traduções
const translations = {
    pt: {
        admin_login: 'Login Administrativo',
        login: 'Entrar',
        admin_panel: 'Painel Administrativo',
        logout: 'Sair',
        edit_profile: 'Editar Perfil',
        save_changes: 'Salvar Alterações',
        cancel: 'Cancelar',
        name: 'Fabio Bittencourt Daniel',
        professional_title: 'Profissional de Relacionamento & Recursos Humanos',
        hero_description: 'Ao longo da minha trajetória em Recursos Humanos, desenvolvi habilidades essenciais para lidar com pessoas, construir conexões significativas e entender as necessidades dos colaboradores e da empresa. Agora, trago essa experiência para a área de Relacionamento, onde sigo focada em proporcionar interações de alto valor, fortalecer laços e impulsionar a satisfação e fidelização.',
        innovation: 'Inovação',
        innovation_desc: 'Sempre à frente das tendências',
        leadership: 'Liderança',
        leadership_desc: 'Gestão de equipes de alta performance',
        results: 'Resultados',
        results_desc: 'Foco em entregas de valor',
        contact_me: 'Entre em Contato',
        learn_more: 'Saiba Mais',
        nav_home: 'Início',
        nav_about: 'Sobre',
        nav_experience: 'Experiência',
        nav_skills: 'Habilidades',
        nav_portfolio: 'Portfólio',
        nav_contact: 'Contato',
        about_title: 'Sobre Mim',
        about_text: 'Profissional experiente em Recursos Humanos com transição estratégica para área de Relacionamento. Especializada em gestão de pessoas, desenvolvimento de equipes e construção de relacionamentos duradouros.',
        experience_title: 'Experiência Profissional',
        current_position: 'Gerente de Relacionamento',
        current_company: 'FBD Global Business Strategy',
        current_description: 'Liderança de equipes de relacionamento, desenvolvimento de estratégias de fidelização e gestão de projetos de alto impacto.',
        previous_position: 'Coordenadora de RH',
        previous_company: 'Empresa Anterior',
        previous_description: 'Gestão de processos de RH, recrutamento e seleção, desenvolvimento organizacional.',
        skills_title: 'Habilidades',
        soft_skills: 'Habilidades Interpessoais',
        technical_skills: 'Habilidades Técnicas',
        skill_1: 'Liderança de Equipes',
        skill_2: 'Comunicação Eficaz',
        skill_3: 'Gestão de Conflitos',
        skill_4: 'Desenvolvimento de Pessoas',
        tech_skill_1: 'Gestão de Projetos',
        tech_skill_2: 'Análise de Dados',
        tech_skill_3: 'Sistemas de RH',
        tech_skill_4: 'Estratégias de Relacionamento',
        portfolio_title: 'Portfólio',
        project_1_title: 'Projeto de Fidelização',
        project_1_desc: 'Desenvolvimento de estratégia que aumentou a retenção de clientes em 40%.',
        project_2_title: 'Reestruturação de Equipe',
        project_2_desc: 'Liderança de processo que otimizou a produtividade em 35%.',
        contact_title: 'Contato',
        email: 'celia.cunha@fbdglobal.com',
        phone: '+55 (11) 99999-9999',
        location: 'São Paulo, SP - Brasil'
    },
    en: {
        admin_login: 'Administrative Login',
        login: 'Login',
        admin_panel: 'Administrative Panel',
        logout: 'Logout',
        edit_profile: 'Edit Profile',
        save_changes: 'Save Changes',
        cancel: 'Cancel',
        name: 'Fabio Bittencourt Daniel',
        professional_title: 'Relationship & Human Resources Professional',
        hero_description: 'Throughout my career in Human Resources, I have developed essential skills for dealing with people, building meaningful connections, and understanding the needs of employees and the company. Now, I bring this experience to the Relationship area, where I continue focused on providing high-value interactions, strengthening bonds, and driving satisfaction and loyalty.',
        innovation: 'Innovation',
        innovation_desc: 'Always ahead of trends',
        leadership: 'Leadership',
        leadership_desc: 'High-performance team management',
        results: 'Results',
        results_desc: 'Focus on value delivery',
        contact_me: 'Contact Me',
        learn_more: 'Learn More',
        nav_home: 'Home',
        nav_about: 'About',
        nav_experience: 'Experience',
        nav_skills: 'Skills',
        nav_portfolio: 'Portfolio',
        nav_contact: 'Contact',
        about_title: 'About Me',
        about_text: 'Experienced Human Resources professional with strategic transition to Relationship area. Specialized in people management, team development, and building lasting relationships.',
        experience_title: 'Professional Experience',
        current_position: 'Relationship Manager',
        current_company: 'FBD Global Business Strategy',
        current_description: 'Leadership of relationship teams, development of loyalty strategies, and management of high-impact projects.',
        previous_position: 'HR Coordinator',
        previous_company: 'Previous Company',
        previous_description: 'HR process management, recruitment and selection, organizational development.',
        skills_title: 'Skills',
        soft_skills: 'Interpersonal Skills',
        technical_skills: 'Technical Skills',
        skill_1: 'Team Leadership',
        skill_2: 'Effective Communication',
        skill_3: 'Conflict Management',
        skill_4: 'People Development',
        tech_skill_1: 'Project Management',
        tech_skill_2: 'Data Analysis',
        tech_skill_3: 'HR Systems',
        tech_skill_4: 'Relationship Strategies',
        portfolio_title: 'Portfolio',
        project_1_title: 'Loyalty Project',
        project_1_desc: 'Development of strategy that increased customer retention by 40%.',
        project_2_title: 'Team Restructuring',
        project_2_desc: 'Leadership of process that optimized productivity by 35%.',
        contact_title: 'Contact',
        email: 'celia.cunha@fbdglobal.com',
        phone: '+55 (11) 99999-9999',
        location: 'São Paulo, SP - Brazil'
    },
    es: {
        admin_login: 'Inicio de Sesión Administrativo',
        login: 'Iniciar Sesión',
        admin_panel: 'Panel Administrativo',
        logout: 'Cerrar Sesión',
        edit_profile: 'Editar Perfil',
        save_changes: 'Guardar Cambios',
        cancel: 'Cancelar',
        name: 'Fabio Bittencourt Daniel',
        professional_title: 'Profesional de Relaciones & Recursos Humanos',
        hero_description: 'A lo largo de mi trayectoria en Recursos Humanos, he desarrollado habilidades esenciales para tratar con personas, construir conexiones significativas y entender las necesidades de los colaboradores y la empresa. Ahora, traigo esta experiencia al área de Relaciones, donde sigo enfocada en proporcionar interacciones de alto valor, fortalecer vínculos e impulsar la satisfacción y fidelización.',
        innovation: 'Innovación',
        innovation_desc: 'Siempre a la vanguardia de las tendencias',
        leadership: 'Liderazgo',
        leadership_desc: 'Gestión de equipos de alto rendimiento',
        results: 'Resultados',
        results_desc: 'Enfoque en entregas de valor',
        contact_me: 'Contáctame',
        learn_more: 'Saber Más',
        nav_home: 'Inicio',
        nav_about: 'Acerca de',
        nav_experience: 'Experiencia',
        nav_skills: 'Habilidades',
        nav_portfolio: 'Portafolio',
        nav_contact: 'Contacto',
        about_title: 'Acerca de Mí',
        about_text: 'Profesional experimentada en Recursos Humanos con transición estratégica al área de Relaciones. Especializada en gestión de personas, desarrollo de equipos y construcción de relaciones duraderas.',
        experience_title: 'Experiencia Profesional',
        current_position: 'Gerente de Relaciones',
        current_company: 'FBD Global Business Strategy',
        current_description: 'Liderazgo de equipos de relaciones, desarrollo de estrategias de fidelización y gestión de proyectos de alto impacto.',
        previous_position: 'Coordinadora de RRHH',
        previous_company: 'Empresa Anterior',
        previous_description: 'Gestión de procesos de RRHH, reclutamiento y selección, desarrollo organizacional.',
        skills_title: 'Habilidades',
        soft_skills: 'Habilidades Interpersonales',
        technical_skills: 'Habilidades Técnicas',
        skill_1: 'Liderazgo de Equipos',
        skill_2: 'Comunicación Efectiva',
        skill_3: 'Gestión de Conflictos',
        skill_4: 'Desarrollo de Personas',
        tech_skill_1: 'Gestión de Proyectos',
        tech_skill_2: 'Análisis de Datos',
        tech_skill_3: 'Sistemas de RRHH',
        tech_skill_4: 'Estrategias de Relaciones',
        portfolio_title: 'Portafolio',
        project_1_title: 'Proyecto de Fidelización',
        project_1_desc: 'Desarrollo de estrategia que aumentó la retención de clientes en 40%.',
        project_2_title: 'Reestructuración de Equipo',
        project_2_desc: 'Liderazgo de proceso que optimizó la productividad en 35%.',
        contact_title: 'Contacto',
        email: 'celia.cunha@fbdglobal.com',
        phone: '+55 (11) 99999-9999',
        location: 'São Paulo, SP - Brasil'
    }
};

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadProfileData();
    updateLanguage();
    setupEventListeners();
});

// Inicialização da aplicação
function initializeApp() {
    // Verificar se há dados salvos no localStorage
    const savedData = localStorage.getItem('profileData');
    if (savedData) {
        profileData = JSON.parse(savedData);
    }
    
    // Verificar se o usuário já está logado
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === 'true') {
        isAdmin = true;
        showAdminPanel();
    }
}

// Carregar dados do perfil
function loadProfileData() {
    const currentData = profileData[currentLanguage];
    
    // Atualizar elementos com os dados do perfil
    updateElementContent('.hero-name', currentData.name);
    updateElementContent('.hero-title', currentData.professional_title);
    updateElementContent('.hero-description', currentData.hero_description);
    updateElementContent('.about-text p', currentData.about_text);
    
    // Atualizar experiência
    updateExperience();
    
    // Atualizar habilidades
    updateSkills();
    
    // Atualizar portfólio
    updatePortfolio();
    
    // Atualizar contato
    updateContact();
}

// Atualizar conteúdo de elementos
function updateElementContent(selector, content) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = content;
    }
}

// Atualizar seção de experiência
function updateExperience() {
    const timeline = document.querySelector('.experience-timeline');
    if (!timeline) return;
    
    timeline.innerHTML = '';
    
    const currentData = profileData[currentLanguage];
    currentData.experience.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-date">${exp.period}</div>
            <div class="timeline-content">
                <h3>${exp.position}</h3>
                <p>${exp.company}</p>
                <p>${exp.description}</p>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Atualizar seção de habilidades
function updateSkills() {
    const softSkillsList = document.querySelector('.skill-category:first-child ul');
    const techSkillsList = document.querySelector('.skill-category:last-child ul');
    
    const currentData = profileData[currentLanguage];
    
    if (softSkillsList) {
        softSkillsList.innerHTML = '';
        currentData.skills.soft.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            softSkillsList.appendChild(li);
        });
    }
    
    if (techSkillsList) {
        techSkillsList.innerHTML = '';
        currentData.skills.technical.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            techSkillsList.appendChild(li);
        });
    }
}

// Atualizar seção de portfólio
function updatePortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = '';
    
    const currentData = profileData[currentLanguage];
    currentData.portfolio.forEach(project => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        
        portfolioItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Atualizar seção de contato
function updateContact() {
    const contactItems = document.querySelectorAll('.contact-item span');
    if (contactItems.length >= 3) {
        const currentData = profileData[currentLanguage];
        contactItems[0].textContent = currentData.contact.email;
        contactItems[1].textContent = currentData.contact.phone;
        contactItems[2].textContent = currentData.contact.location;
    }
}

// Configurar event listeners
function setupEventListeners() {
    // Modal de admin
    const adminModal = document.getElementById('adminModal');
    const adminForm = document.getElementById('adminForm');
    const closeModal = document.querySelector('.close');
    
    // Mostrar modal de admin (duplo clique no logo)
    const brandName = document.querySelector('.brand-name');
    brandName.addEventListener('dblclick', showAdminModal);
    
    // Fechar modal
    closeModal.addEventListener('click', hideAdminModal);
    window.addEventListener('click', function(event) {
        if (event.target === adminModal) {
            hideAdminModal();
        }
    });
    
    // Login admin
    adminForm.addEventListener('submit', handleAdminLogin);
    
    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', handleLogout);
    
    // Editar perfil
    const editBtn = document.getElementById('editBtn');
    editBtn.addEventListener('click', toggleEditMode);
    
    // Salvar alterações
    const saveBtn = document.getElementById('saveBtn');
    saveBtn.addEventListener('click', saveChanges);
    
    // Cancelar edição
    const cancelBtn = document.getElementById('cancelBtn');
    cancelBtn.addEventListener('click', cancelEdit);
    
    // Seletor de idioma
    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', function() {
        currentLanguage = this.value;
        updateLanguage();
        localStorage.setItem('currentLanguage', currentLanguage);
    });
    
    // Navegação suave
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Botões de ação
    const contactBtn = document.querySelector('.btn-primary');
    const learnMoreBtn = document.querySelector('.btn-secondary');
    
    contactBtn.addEventListener('click', function() {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
    
    learnMoreBtn.addEventListener('click', function() {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Efeito de scroll na navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Carregar idioma salvo
    const savedLanguage = localStorage.getItem('currentLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        languageSelect.value = currentLanguage;
    }
}

// Mostrar modal de admin
function showAdminModal() {
    const modal = document.getElementById('adminModal');
    modal.style.display = 'block';
    document.getElementById('adminUsername').focus();
}

// Esconder modal de admin
function hideAdminModal() {
    const modal = document.getElementById('adminModal');
    modal.style.display = 'none';
    document.getElementById('adminUsername').value = '';
    document.getElementById('adminPassword').value = '';
}

// Lidar com login admin
function handleAdminLogin(e) {
    e.preventDefault();
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        isAdmin = true;
        localStorage.setItem('isAdmin', 'true');
        showAdminPanel();
        hideAdminModal();
    } else {
        alert('Usuário ou senha incorretos!');
    }
}

// Mostrar painel admin
function showAdminPanel() {
    const adminPanel = document.getElementById('adminPanel');
    adminPanel.classList.remove('hidden');
}

// Lidar com logout
function handleLogout() {
    isAdmin = false;
    localStorage.removeItem('isAdmin');
    const adminPanel = document.getElementById('adminPanel');
    adminPanel.classList.add('hidden');
    exitEditMode();
}

// Alternar modo de edição
function toggleEditMode() {
    if (isAdmin) {
        enterEditMode();
    }
}

// Entrar no modo de edição
function enterEditMode() {
    // Mostrar campos de edição
    showEditFields();
    
    // Mostrar botões de salvar/cancelar
    document.getElementById('editBtn').classList.add('hidden');
    document.getElementById('saveBtn').classList.remove('hidden');
    document.getElementById('cancelBtn').classList.remove('hidden');
}

// Sair do modo de edição
function exitEditMode() {
    // Esconder campos de edição
    hideEditFields();
    
    // Mostrar botão de editar
    document.getElementById('editBtn').classList.remove('hidden');
    document.getElementById('saveBtn').classList.add('hidden');
    document.getElementById('cancelBtn').classList.add('hidden');
}

// Mostrar campos de edição
function showEditFields() {
    // Converter elementos em campos de edição
    convertToEditable('.hero-name', 'name');
    convertToEditable('.hero-title', 'professional_title');
    convertToEditable('.hero-description', 'hero_description');
    convertToEditable('.about-text p', 'about_text');
    
    // Adicionar campos de edição para experiência, habilidades, etc.
    addExperienceEditFields();
    addSkillsEditFields();
    addPortfolioEditFields();
    addContactEditFields();
}

// Esconder campos de edição
function hideEditFields() {
    // Remover todos os campos de edição
    const editFields = document.querySelectorAll('.edit-field');
    editFields.forEach(field => field.remove());
    
    // Restaurar elementos originais
    loadProfileData();
}

// Converter elemento em editável
function convertToEditable(selector, dataKey) {
    const element = document.querySelector(selector);
    if (!element) return;
    
    const currentData = profileData[currentLanguage];
    const originalContent = getNestedProperty(currentData, dataKey) || element.textContent;
    element.innerHTML = `<input type="text" class="edit-field" value="${originalContent}" data-key="${dataKey}">`;
}

// Adicionar campos de edição para experiência
function addExperienceEditFields() {
    const timeline = document.querySelector('.experience-timeline');
    if (!timeline) return;
    
    const editSection = document.createElement('div');
    editSection.className = 'edit-section';
    editSection.innerHTML = `
        <h3>Editar Experiência</h3>
        <div id="experience-edit-fields"></div>
        <button type="button" onclick="addExperienceItem()">Adicionar Experiência</button>
    `;
    
    timeline.appendChild(editSection);
    
    // Adicionar campos para cada experiência existente
    profileData.experience.forEach((exp, index) => {
        addExperienceEditField(index, exp);
    });
}

// Adicionar campo de edição para uma experiência
function addExperienceEditField(index, exp) {
    const container = document.getElementById('experience-edit-fields');
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'edit-field-group';
    fieldDiv.innerHTML = `
        <input type="text" class="edit-field" value="${exp.period}" data-key="${currentLanguage}.experience.${index}.period" placeholder="Período">
        <input type="text" class="edit-field" value="${exp.position}" data-key="${currentLanguage}.experience.${index}.position" placeholder="Cargo">
        <input type="text" class="edit-field" value="${exp.company}" data-key="${currentLanguage}.experience.${index}.company" placeholder="Empresa">
        <textarea class="edit-field" data-key="${currentLanguage}.experience.${index}.description" placeholder="Descrição">${exp.description}</textarea>
        <button type="button" onclick="removeExperienceItem(${index})">Remover</button>
    `;
    container.appendChild(fieldDiv);
}

// Adicionar nova experiência
function addExperienceItem() {
    const newExp = {
        period: '',
        position: '',
        company: '',
        description: ''
    };
    
    profileData[currentLanguage].experience.push(newExp);
    addExperienceEditField(profileData[currentLanguage].experience.length - 1, newExp);
}

// Remover experiência
function removeExperienceItem(index) {
    profileData[currentLanguage].experience.splice(index, 1);
    updateExperienceEditFields();
}

// Atualizar campos de edição de experiência
function updateExperienceEditFields() {
    const container = document.getElementById('experience-edit-fields');
    container.innerHTML = '';
    
    profileData[currentLanguage].experience.forEach((exp, index) => {
        addExperienceEditField(index, exp);
    });
}

// Adicionar campos de edição para habilidades
function addSkillsEditFields() {
    const skillsSection = document.querySelector('#skills .container');
    if (!skillsSection) return;
    
    const editSection = document.createElement('div');
    editSection.className = 'edit-section';
    editSection.innerHTML = `
        <h3>Editar Habilidades</h3>
        <div class="skills-edit">
            <div>
                <h4>Habilidades Interpessoais</h4>
                <div id="soft-skills-edit"></div>
                <button type="button" onclick="addSkill('soft')">Adicionar</button>
            </div>
            <div>
                <h4>Habilidades Técnicas</h4>
                <div id="tech-skills-edit"></div>
                <button type="button" onclick="addSkill('technical')">Adicionar</button>
            </div>
        </div>
    `;
    
    skillsSection.appendChild(editSection);
    
    // Adicionar campos para habilidades existentes
    updateSkillsEditFields();
}

// Atualizar campos de edição de habilidades
function updateSkillsEditFields() {
    const softContainer = document.getElementById('soft-skills-edit');
    const techContainer = document.getElementById('tech-skills-edit');
    
    const currentData = profileData[currentLanguage];
    
    if (softContainer) {
        softContainer.innerHTML = '';
        currentData.skills.soft.forEach((skill, index) => {
            const fieldDiv = document.createElement('div');
            fieldDiv.className = 'edit-field-group';
            fieldDiv.innerHTML = `
                <input type="text" class="edit-field" value="${skill}" data-key="${currentLanguage}.skills.soft.${index}">
                <button type="button" onclick="removeSkill('soft', ${index})">Remover</button>
            `;
            softContainer.appendChild(fieldDiv);
        });
    }
    
    if (techContainer) {
        techContainer.innerHTML = '';
        currentData.skills.technical.forEach((skill, index) => {
            const fieldDiv = document.createElement('div');
            fieldDiv.className = 'edit-field-group';
            fieldDiv.innerHTML = `
                <input type="text" class="edit-field" value="${skill}" data-key="${currentLanguage}.skills.technical.${index}">
                <button type="button" onclick="removeSkill('technical', ${index})">Remover</button>
            `;
            techContainer.appendChild(fieldDiv);
        });
    }
}

// Adicionar habilidade
function addSkill(type) {
    profileData[currentLanguage].skills[type].push('');
    updateSkillsEditFields();
}

// Remover habilidade
function removeSkill(type, index) {
    profileData[currentLanguage].skills[type].splice(index, 1);
    updateSkillsEditFields();
}

// Adicionar campos de edição para portfólio
function addPortfolioEditFields() {
    const portfolioSection = document.querySelector('#portfolio .container');
    if (!portfolioSection) return;
    
    const editSection = document.createElement('div');
    editSection.className = 'edit-section';
    editSection.innerHTML = `
        <h3>Editar Portfólio</h3>
        <div id="portfolio-edit-fields"></div>
        <button type="button" onclick="addPortfolioItem()">Adicionar Projeto</button>
    `;
    
    portfolioSection.appendChild(editSection);
    
    // Adicionar campos para projetos existentes
    updatePortfolioEditFields();
}

// Atualizar campos de edição de portfólio
function updatePortfolioEditFields() {
    const container = document.getElementById('portfolio-edit-fields');
    if (!container) return;
    
    container.innerHTML = '';
    
    const currentData = profileData[currentLanguage];
    currentData.portfolio.forEach((project, index) => {
        const fieldDiv = document.createElement('div');
        fieldDiv.className = 'edit-field-group';
        fieldDiv.innerHTML = `
            <input type="text" class="edit-field" value="${project.title}" data-key="${currentLanguage}.portfolio.${index}.title" placeholder="Título do Projeto">
            <textarea class="edit-field" data-key="${currentLanguage}.portfolio.${index}.description" placeholder="Descrição do Projeto">${project.description}</textarea>
            <button type="button" onclick="removePortfolioItem(${index})">Remover</button>
        `;
        container.appendChild(fieldDiv);
    });
}

// Adicionar novo projeto
function addPortfolioItem() {
    const newProject = {
        title: '',
        description: ''
    };
    
    profileData[currentLanguage].portfolio.push(newProject);
    updatePortfolioEditFields();
}

// Remover projeto
function removePortfolioItem(index) {
    profileData[currentLanguage].portfolio.splice(index, 1);
    updatePortfolioEditFields();
}

// Adicionar campos de edição para contato
function addContactEditFields() {
    const contactSection = document.querySelector('#contact .container');
    if (!contactSection) return;
    
    const currentData = profileData[currentLanguage];
    const editSection = document.createElement('div');
    editSection.className = 'edit-section';
    editSection.innerHTML = `
        <h3>Editar Contato</h3>
        <div class="contact-edit">
            <input type="email" class="edit-field" value="${currentData.contact.email}" data-key="${currentLanguage}.contact.email" placeholder="Email">
            <input type="tel" class="edit-field" value="${currentData.contact.phone}" data-key="${currentLanguage}.contact.phone" placeholder="Telefone">
            <input type="text" class="edit-field" value="${currentData.contact.location}" data-key="${currentLanguage}.contact.location" placeholder="Localização">
        </div>
    `;
    
    contactSection.appendChild(editSection);
}

// Salvar alterações
function saveChanges() {
    // Coletar dados dos campos de edição
    const editFields = document.querySelectorAll('.edit-field');
    
    editFields.forEach(field => {
        const key = field.getAttribute('data-key');
        const value = field.value;
        
        if (key) {
            setNestedProperty(profileData, key, value);
        }
    });
    
    // Salvar no localStorage
    localStorage.setItem('profileData', JSON.stringify(profileData));
    
    // Atualizar interface
    loadProfileData();
    exitEditMode();
    
    alert('Alterações salvas com sucesso!');
}

// Cancelar edição
function cancelEdit() {
    exitEditMode();
    loadProfileData();
}

// Obter propriedade aninhada
function getNestedProperty(obj, path) {
    const keys = path.split('.');
    let current = obj;
    
    for (let i = 0; i < keys.length; i++) {
        if (current && typeof current === 'object' && keys[i] in current) {
            current = current[keys[i]];
        } else {
            return undefined;
        }
    }
    
    return current;
}

// Definir propriedade aninhada
function setNestedProperty(obj, path, value) {
    const keys = path.split('.');
    let current = obj;
    
    for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
            current[keys[i]] = {};
        }
        current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
}

// Atualizar idioma
function updateLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[currentLanguage][key];
        
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Atualizar atributo lang do HTML
    document.documentElement.lang = currentLanguage;
    
    // Recarregar dados do perfil com o idioma atual
    loadProfileData();
}

// Funções globais para uso nos botões
window.addExperienceItem = addExperienceItem;
window.removeExperienceItem = removeExperienceItem;
window.addSkill = addSkill;
window.removeSkill = removeSkill;
window.addPortfolioItem = addPortfolioItem;
window.removePortfolioItem = removePortfolioItem;
