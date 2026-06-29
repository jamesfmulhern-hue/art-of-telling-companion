const NAV_ITEMS = [
  { href: "index.html",         label: "Home" },
  { href: "unit-1-short-story.html", label: "Short Story" },
  { href: "unit-2-poetry.html",      label: "Poetry" },
  { href: "unit-3-memoir.html",      label: "Memoir" },
  { href: "craft.html",         label: "Craft" },
  { href: "reading.html",       label: "Reading" },
  { href: "glossary.html",      label: "Glossary" },
  { href: "submissions.html",   label: "Submissions" },
  { href: "books.html",         label: "Reading List" },
  { href: "future.html",        label: "Future Courses" },
];

function renderHeader() {
  const here = location.pathname.split("/").pop() || "index.html";
  const links = NAV_ITEMS.map(
    n => `<a href="${n.href}" class="${n.href === here ? 'active' : ''}">${n.label}</a>`
  ).join("");
  return `
  <header class="site-header">
    <div class="container">
      <a class="brand" href="index.html" aria-label="The Art of Telling — Companion">
        <svg class="brand-mark" viewBox="0 0 60 60" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="56" height="56" stroke="currentColor" stroke-width="1" fill="none"/>
          <rect x="6" y="6" width="48" height="48" stroke="#B8893A" stroke-width="0.5" fill="none"/>
          <path d="M30 12 L46 30 L30 48 L14 30 Z" stroke="#B8893A" stroke-width="1" fill="none"/>
          <path d="M30 18 L42 30 L30 42 L18 30 Z" stroke="#B8893A" stroke-width="0.7" fill="none"/>
          <circle cx="30" cy="30" r="3" fill="#B8893A"/>
          <line x1="30" y1="6" x2="30" y2="12" stroke="#B8893A" stroke-width="0.7"/>
          <line x1="30" y1="48" x2="30" y2="54" stroke="#B8893A" stroke-width="0.7"/>
          <line x1="6" y1="30" x2="12" y2="30" stroke="#B8893A" stroke-width="0.7"/>
          <line x1="48" y1="30" x2="54" y2="30" stroke="#B8893A" stroke-width="0.7"/>
        </svg>
        <span class="brand-text">The Art of Telling<small>Companion Volume</small></span>
      </a>
      <button class="nav-toggle" aria-label="Toggle navigation" onclick="document.querySelector('.nav').classList.toggle('open')">Menu</button>
      <nav class="nav" aria-label="Primary">${links}</nav>
    </div>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <h5>The Art of Telling</h5>
          <p style="font-family: var(--display); font-style: italic; color: rgba(245,239,224,0.85);">A free creative-writing salon for residents of 2601, led by James F. Mulhern. Three genres, ten Sundays, one shared room.</p>
        </div>
        <div>
          <h5>Course</h5>
          <ul>
            <li><a href="https://art-of-telling.com">art-of-telling.com</a></li>
            <li><a href="unit-1-short-story.html">Unit I — Short Story</a></li>
            <li><a href="unit-2-poetry.html">Unit II — Poetry</a></li>
            <li><a href="unit-3-memoir.html">Unit III — Memoir</a></li>
          </ul>
        </div>
        <div>
          <h5>Companion</h5>
          <ul>
            <li><a href="craft.html">Craft takeaways</a></li>
            <li><a href="reading.html">How to read &amp; analyze</a></li>
            <li><a href="glossary.html">Glossary</a></li>
            <li><a href="submissions.html">Submissions</a></li>
            <li><a href="books.html">Recommended reading</a></li>
            <li><a href="Because_There_Wasnt_Time_To_Tell_Everything.docx">Download the Booklet (Word)</a></li>
          </ul>
        </div>
        <div>
          <h5>Stay in touch</h5>
          <ul>
            <li><a href="future.html">Suggest a future course</a></li>
            <li><a href="mailto:jamesfmulhern@gmail.com">jamesfmulhern@gmail.com</a></li>
            <li>Silver Current Press</li>
            <li>2601 Literary Salon</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        ◆ &nbsp; With gratitude &mdash; James F. Mulhern &nbsp; ◆ &nbsp; Spring &amp; Summer 2026 &nbsp; ◆
      </div>
    </div>
  </footer>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.outerHTML = renderHeader();
  if (f) f.outerHTML = renderFooter();
});
