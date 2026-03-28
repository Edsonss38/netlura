// Script para alternar entre dark e light mode

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verificar se há um tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  themeToggle.textContent = '☀️';
} else {
  themeToggle.textContent = '🌙';
}

// Função para alternar o tema
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLightMode = body.classList.contains('light-mode');
  themeToggle.textContent = isLightMode ? '☀️' : '🌙';
  localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
});

// Script para salvar perfil ativo
const profiles = document.querySelectorAll('.profile');

profiles.forEach((profile) => {
  profile.addEventListener('click', (e) => {
    const img = profile.querySelector('img');
    const figcaption = profile.querySelector('figcaption');

    if (img && figcaption) {
      localStorage.setItem('perfilAtivoImagem', img.src);
      localStorage.setItem('perfilAtivoNome', figcaption.textContent);
    }

    // Se o href for "#", redirecionar para catalogo.html
    if (profile.getAttribute('href') === '#') {
      e.preventDefault();
      window.location.href = 'catalogo/catalogo.html';
    }
  });
});
