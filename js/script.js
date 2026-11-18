const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const nome = data.get('nome').trim();
  const empresa = data.get('empresa').trim() || 'Não informado';
  const email = data.get('email').trim() || 'Não informado';
  const servico = data.get('servico');
  const mensagem = data.get('mensagem').trim() || 'Não informado';

  const texto = [
    'Olá! Vim pelo site da CRF Solutions e gostaria de solicitar um orçamento.',
    '',
    `*Nome:* ${nome}`,
    `*Empresa:* ${empresa}`,
    `*E-mail:* ${email}`,
    `*Serviço de interesse:* ${servico}`,
    `*Detalhes:* ${mensagem}`
  ].join('\n');

  const whatsappUrl = `https://wa.me/5531971066831?text=${encodeURIComponent(texto)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});
