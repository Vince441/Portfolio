document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('change-language');
    const title = document.getElementById('profile-title');
    const description = document.getElementById('profile-description');
    const skills = document.getElementById('skills-title');
    const links = document.getElementById('Links')

    const translations = {
        fr: {
            title: "Bonjour !<br>Je m'appelle <strong style='color: #e5954c'>Vincent Louvart</strong><br><span>développeur web fullstack junior</span><br>",
            description: "Disponible maintenant pour : <br><span>Stage, Alternance, Projet, CDD, CDI.</span>",
            skills: "Compétences",
            links: "Lien",
        },
        en: {
            title: "Hello!<br>My name is <strong style='color: #e5954c'>Vincent Louvart</strong><br><span>junior fullstack web developer</span><br>",
            description: "Available now for: <br><span>Internship, Apprenticeship, Project, Fixed-term contract, Permanent contract.</span>",
            skills: "Skills",
            links: "Links",
        }
    };

    let currentLanguage = 'fr';

    const updateUI = () => {
        title.innerHTML = translations[currentLanguage].title;
        description.innerHTML = translations[currentLanguage].description;
        skills.innerHTML = translations[currentLanguage].skills;
        links.innerHTML = translations[currentLanguage].links
        button.textContent = currentLanguage === 'fr' ? 'ENG' : 'FR';
    };

    button.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
        updateUI();
    });

    updateUI();
});