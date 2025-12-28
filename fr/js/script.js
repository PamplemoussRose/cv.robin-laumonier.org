document.addEventListener('DOMContentLoaded', function() {
    // Pour la page Formations
    const educationListItems = document.querySelectorAll('.education-list ul li');
    const educationDetailItems = document.querySelectorAll('.education-detail .detail-item');

    educationListItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-education');
            educationDetailItems.forEach(detail => {
                if (detail.id === targetId) {
                    detail.style.display = 'block';
                } else {
                    detail.style.display = 'none';
                }
            });
        });
    });

    // Pour la page Expériences
    const experienceListItems = document.querySelectorAll('.experience-list ul li');
    const experienceDetailItems = document.querySelectorAll('.experience-detail .detail-item');

    experienceListItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-experience');
            experienceDetailItems.forEach(detail => {
                if (detail.id === targetId) {
                    detail.style.display = 'block';
                } else {
                    detail.style.display = 'none';
                }
            });
        });
    });

    // Pour la page Projets
    const projetListItems = document.querySelectorAll('.projet-list ul li');
    const projetDetailItems = document.querySelectorAll('.projet-detail .detail-item');

    projetListItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-projet');
            projetDetailItems.forEach(detail => {
                if (detail.id === targetId) {
                    detail.style.display = 'block';
                } else {
                    detail.style.display = 'none';
                }
            });
        });
    });
});

window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}