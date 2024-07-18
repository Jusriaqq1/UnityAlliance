document.getElementById('toggleMode').addEventListener('click', function() {
    var body = document.body;
    var toggleMode = document.getElementById('toggleMode');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleMode.textContent = '☀️';
        toggleMode.style.backgroundColor = 'rgba(200, 200, 200, 0.692)';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleMode.textContent = '🔴';
        toggleMode.style.backgroundColor = 'rgba(14, 14, 14, 0.692)';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('acceptModal');
    const closeModal = document.getElementById('closeModal');
    const acceptButton = document.getElementById('acceptButton');
    const wrapper = document.querySelector('.wrapper');
    const typingDemo = document.querySelector('.typing-demo');

    // Función para cerrar el modal y comenzar la animación
    function closeAndStartAnimation() {
        modal.style.display = 'none';
        wrapper.classList.remove('hidden');

        // Iniciar la animación de escritura
        typingDemo.style.animation = 'typing 4s steps(22), blink .5s step-end infinite alternate';
    }

    // Verificar si los términos ya han sido aceptados
    if (localStorage.getItem('acceptedTerms') === 'true') {
        modal.style.display = 'none';
        wrapper.classList.remove('hidden');
        typingDemo.style.animation = 'typing 4s steps(22), blink .5s step-end infinite alternate';
    } else {
        // Mostrar modal al cargar la página
        modal.style.display = 'block';
    }

    // Evento para cerrar modal al hacer clic en "Aceptar y cerrar"
    acceptButton.addEventListener('click', function() {
        closeAndStartAnimation();
        // Guardar en localStorage para que no aparezca de nuevo
        localStorage.setItem('acceptedTerms', 'true');
    });

    // Evento para cerrar modal al hacer clic en "x"
    closeModal.addEventListener('click', function() {
        closeAndStartAnimation();
    });

    // Función para inicializar los tooltips
    function initializeTooltips() {
        var aboutUsItem = document.querySelector('.menu-item.about-us');
        var tooltip = aboutUsItem.querySelector('.tooltip');

        // Añadir evento para mostrar el tooltip al hacer hover
        aboutUsItem.addEventListener('mouseenter', function() {
            tooltip.classList.add('show-tooltip');
        });

        aboutUsItem.addEventListener('mouseleave', function() {
            tooltip.classList.remove('show-tooltip');
        });
    }

    // Llamar a la función para inicializar los tooltips al cargar la página
    initializeTooltips();

    // Función para cambiar el idioma y actualizar los elementos
    document.getElementById('toggleLanguage').addEventListener('click', function() {
        var html = document.documentElement;
        var toggleLanguage = document.getElementById('toggleLanguage');
        var homeItem = document.getElementById('home');
        var aboutUsItem = document.querySelector('.menu-item.about-us');
        var contributionsItem = document.getElementById('contributions');

        if (html.lang === 'es') {
            html.lang = 'en';
            toggleLanguage.textContent = 'English';
            homeItem.innerHTML = '<i class="fas fa-home"></i> Home';
            aboutUsItem.innerHTML = '<i class="fas fa-book"></i> About Us';
            contributionsItem.innerHTML = '<i class="fas fa-hand-holding-heart"></i> Contributions';
            // Añadir el contenido del tooltip en inglés
            aboutUsItem.innerHTML += `
                <div class="tooltip">
                    <p>We are a group dedicated to making a positive difference<br>in our community.<br>With the collaboration of our members and allies,<br>we work tirelessly to provide support<br>to those who need it most. We are proud to be a bridge<br>that connects resources and volunteers with important causes,<br>from food and education programs<br>to health and wellness initiatives.</p>
                    <br><br>
                    <div><i class="fab fa-tiktok"></i> @USER</div><br>
                    <div><i class="fab fa-instagram"></i> @USER</div>
                </div>
            `;
        } else {
            html.lang = 'es';
            toggleLanguage.textContent = 'Spanish';
            homeItem.innerHTML = '<i class="fas fa-home"></i> Casa';
            aboutUsItem.innerHTML = '<i class="fas fa-book"></i> Sobre Nosotros';
            contributionsItem.innerHTML = '<i class="fas fa-hand-holding-heart"></i> Contribuciones';
            // Añadir el contenido del tooltip en español
            aboutUsItem.innerHTML += `
                <div class="tooltip">
                    <p>Somos  un grupo dedicado a hacer una diferencia<br>positiva en nuestra comunidad.<br>Con la colaboración de nuestros miembros y aliados,<br>trabajamos incansablemente para brindar apoyo<br>a quienes más lo necesitan. Nos enorgullece ser un puente<br>que conecta recursos y voluntarios con causas<br>importantes, desde programas de alimentación<br>y educación hasta iniciativas de salud y bienestar.</p>
                    <br><br>
                    <div><i class="fab fa-tiktok"></i> @USUARIO</div><br>
                    <div><i class="fab fa-instagram"></i> @USUARIO</div>
                </div>
            `;
        }

        // Reiniciar los tooltips después de cambiar el idioma
        initializeTooltips();
    });
});

document.getElementById('infoButton').addEventListener('click', function() {
    window.location.href = 'info.html';
});