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

  const table = (rows) => `<table>
    <thead><tr><th>Услуга</th><th class="r">Цена, сом.</th></tr></thead>
    <tbody>${rows.map(([name, pre, v, suf]) => {
      const val = pre === '+' ? `+${v ?? '00–00'}% к стоимости` : `${pre ? pre + ' ' : ''}${fmt(v)}${suf ? ' ' + suf : ''}`;
      return `<tr><td>${name}</td><td class="r nw">${val}</td></tr>`;
    }).join('')}</tbody></table>`;
  $('#addons').innerHTML = table(addons.content) + table(addons.features);
})();
