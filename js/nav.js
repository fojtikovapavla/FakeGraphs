// Podtrhne aktivní odkaz v navigaci podle aktuální stránky
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === page) a.classList.add('active');
  });
})();
