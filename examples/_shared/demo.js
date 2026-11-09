// Общее для всех примеров: кнопка возврата к прайсу и формы-демонстрации
(function () {
  var base = document.currentScript.src;
  document.addEventListener('DOMContentLoaded', function () {
    if (window.self === window.top) {
      var a = document.createElement('a');
      a.href = new URL('../../index.html#packages', base).href;
      a.textContent = '← К прайсу';
      a.style.cssText = 'position:fixed;left:14px;bottom:14px;z-index:9999;background:#0C4450;color:#fff;padding:9px 14px;border-radius:8px;font:600 13px Onest,system-ui,sans-serif;text-decoration:none;box-shadow:0 2px 10px rgba(12,68,80,.35)';
      document.body.appendChild(a);
    }
  });
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f.hasAttribute('data-demo')) return;
    e.preventDefault();
    var m = f.querySelector('.demo-msg') || f.appendChild(Object.assign(document.createElement('p'), { className: 'demo-msg' }));
    m.setAttribute('role', 'status');
    m.textContent = 'Заявка принята. Это пример: на настоящем сайте она придёт вам в Telegram или на почту.';
    f.reset();
  });
})();
