// Собирает страницу из данных в data.js
(function () {
  const { company, intro, packages, addons, extras, terms } = window.PRICE;
  const $ = (s) => document.querySelector(s);
  const fmt = (v) => (v == null ? '0 000' : String(v).replace(/\B(?=(\d{3})+(?!\d))/g, ' '));

  if (company.logo) $('#logo').innerHTML = `<img class="logo" src="${company.logo}" alt="${company.name}">`;
  $('#lead').textContent = intro;
  $('#extras').textContent = extras;
  $('#terms').textContent = terms;

  $('#overview').innerHTML = packages.map((p) => `
    <tr><td>${p.overview || p.name}</td><td class="r hl">${p.price.replace(/(\d) (\d)/g, '$1 $2')}</td><td class="r hl">${p.shortTerm}</td></tr>`).join('');

  $('#details').innerHTML = packages.map((p, i) => `
    <article class="pkg">
      <header>
        <h3><span class="n">${i + 1}</span>${p.name}</h3>
        <div class="price">${p.price.replace(' сом.', ' <small>сом.</small>')}${p.priceNote ? `<span class="pnote">${p.priceNote}</span>` : ''}</div>
      </header>
      <p class="desc">${p.desc}</p>
      <ul>${p.items.map((t) => `<li>${t}</li>`).join('')}</ul>
      <p class="term"><b>Срок:</b> ${p.term}</p>
      <p class="note">${p.note}</p>
      <p class="example"><a href="${p.example}"${/^https?:/.test(p.example) ? ' target="_blank" rel="noopener"' : ''}>Посмотреть пример</a></p>
    </article>`).join('');

  // Допуслуги: общая таблица с группами, наценка за срочность — отдельной плашкой
  const isUrgent = (r) => r[1] === '+';
  const amount = ([, pre, v, suf]) => `${pre ? `<small>${pre}</small> ` : ''}${fmt(v)} <small>сом.${suf ? ' ' + suf : ''}</small>`;
  const group = (title, rows) => `<tbody>
    <tr class="grp"><th colspan="2" scope="colgroup">${title}</th></tr>
    ${rows.filter((r) => !isUrgent(r)).map((r) => `<tr><td>${r[0]}</td><td class="amt">${amount(r)}</td></tr>`).join('')}
  </tbody>`;
  const urgent = [...addons.content, ...addons.features].filter(isUrgent).map(([name, , v]) => {
    const [title, sub] = name.split(' (');
    return `<div class="urgent"><div><b>${title}</b>${sub ? `<span>${sub.replace(')', '')}</span>` : ''}</div><strong>+${v}% <small>к стоимости</small></strong></div>`;
  }).join('');
  $('#addons').innerHTML = `<div class="svc-wrap"><table class="svc">
    <thead><tr><th>Услуга</th><th class="r">Цена</th></tr></thead>
    ${group('Страницы и контент', addons.content)}
    ${group('Функции и интеграции', addons.features)}
  </table></div>${urgent}`;
})();
