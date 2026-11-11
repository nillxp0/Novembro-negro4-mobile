function makeWorks(works){return works.map(([title,desc])=>`<p><strong>${title}.</strong> ${desc}</p>`).join("")}
function renderFeatured(){
 const target=document.querySelector("#featured-black");
 target.innerHTML=blackAuthors.slice(0,2).map((a,i)=>`<article class="feature-card reveal"><div class="feature-top"><span>DESTAQUE 0${i+1}</span><span>LITERATURA NEGRA</span></div><div class="portrait-placeholder" aria-label="Espaço reservado para retrato autorizado de ${a.name}"><span class="portrait-initials">${a.initials}</span></div><div class="feature-copy"><h3>${a.name}</h3><span class="role">${a.role}</span><p>${a.bio}</p><p>${a.importance}</p><p class="works">OBRAS: ${a.works.map(w=>w[0]).join(" · ")}</p><a class="text-link" href="${a.source}" target="_blank" rel="noopener">Fonte biográfica ↗</a></div></article>`).join("");
}
function renderBlack(){
 const target=document.querySelector("#black-authors");
 target.innerHTML=blackAuthors.slice(2).map((a,i)=>`<article class="author-card reveal"><span class="card-index">0${i+3} / AUTORIA</span><div class="mini-portrait" aria-label="Espaço reservado para retrato autorizado de ${a.name}"><span>${a.initials}</span></div><h3>${a.name}</h3><span class="role">${a.role}</span><p>${a.bio}</p><details><summary>Conheça trajetória e obras +</summary><p>${a.importance}</p>${makeWorks(a.works)}<p><a class="text-link" href="${a.source}" target="_blank" rel="noopener">Consultar fonte ↗</a></p></details></article>`).join("");
}
function renderIndigenous(){
 const target=document.querySelector("#indigenous-authors");
 target.innerHTML=indigenousAuthors.map((a,i)=>`<article class="indigenous-card reveal"><span class="number">0${i+1}</span><div><h3>${a.name}</h3><span class="people">${a.people}</span></div><p>${a.bio}</p><details><summary>Produção e contribuição +</summary><p>${a.importance}</p>${makeWorks(a.works)}<p><a class="text-link" href="${a.source}" target="_blank" rel="noopener">Consultar fonte ↗</a></p></details></article>`).join("");
}
function renderSources(){document.querySelector("#source-links").innerHTML=sources.map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`).join("")}
renderFeatured();renderBlack();renderIndigenous();renderSources();
