// CatOS – The Shelf
// To add a project, add an entry to `projects`. Spine options:
//   color: c-sky | c-mint | c-deep | c-mist | c-navy
//   w: w1 | w2 | w3 (width)    h: h1 | h2 | h3 | h4 (height)
//   media: { type: 'youtube', id } or { type: 'image', src, alt } — leave out for a title tile
//   primaryHref: leave out to show a disabled "Coming soon" button
//   repo: leave out to hide the "View on GitHub" button

const projects = [
  {
    id: 'little-line', title: 'Little Line', full: 'Little Line', kind: 'My app',
    color: 'c-sky', w: 'w1', h: 'h1', isNew: true,
    tags: ['Focus timer', 'FastAPI', 'SQLite', 'JavaScript'],
    desc: 'A cosy focus timer where every session is a train trip. Pick somewhere to go and the ride takes about as long as the real train would, while you sit in the carriage with a cup of tea and Pip the cat conductor and watch the countryside go by. Earn miles, tickets and souvenirs, and spend them doing up your engine.',
    media: { type: 'image', src: 'Images/little-line.jpg', alt: 'Little Line: a cosy train carriage with Pip the cat conductor, a lamp and a cup of tea, waiting at London' },
    primary: 'Open Little Line', primaryHref: 'little-line/',
    // The repo is private, so no repo link. little-line/ is published by the little-line repo's release workflow.
  },
  {
    id: 'hand', title: 'Hand Tracking', full: 'Hand Tracking for Physiotherapy', kind: 'Undergraduate dissertation',
    color: 'c-mint', w: 'w2', h: 'h4', isNew: false,
    tags: ['Unity', 'OpenCV', 'Python'],
    desc: 'A more engaging way to do physiotherapy, using only a webcam. Your real hand moves an in-game hand that presses buttons and interacts with the world, and the game records your times so you can track your rehab. Still growing: it now tracks both hands at once.',
    media: { type: 'youtube', id: 'rWLn_2HwUj0', title: 'Hand tracking project demo' },
    primary: 'Watch the demo', primaryHref: 'https://www.youtube.com/watch?v=rWLn_2HwUj0',
    repo: 'https://github.com/cappleby1/undergraduate_dissertation'
  },
  {
    id: 'postgrad', title: 'Escape Room', full: 'Cognitive Bias Escape Room', kind: 'Postgraduate dissertation',
    color: 'c-navy', w: 'w1', h: 'h2', isNew: false,
    tags: ['Unreal Engine', 'Research'],
    desc: 'An escape room game built as a new way to run cognitive research, here on cognitive bias. Buttons don’t do what you expect (the red one opens the door, not the green one) while you race a timer. Includes menus, level restarts and some NPC AI.',
    media: { type: 'youtube', id: 'RGmRGNUNVC8', title: 'Escape room demo' },
    primary: 'Watch the demo', primaryHref: 'https://www.youtube.com/watch?v=RGmRGNUNVC8',
    repo: 'https://github.com/cappleby1/Postgraduate_Dissertation'
  },
  {
    id: 'godot', title: 'Godot Game', full: 'Godot Platformer', kind: 'Game',
    color: 'c-mist', w: 'w3', h: 'h3', isNew: false,
    tags: ['Godot', 'GDScript'],
    desc: 'A small platformer I made to learn Godot and own every part of a game. One full level with a timer, coins to collect and a dead zone that restarts you if you fall.',
    media: { type: 'image', src: 'Images/godot.gif', alt: 'Gameplay of the Godot platformer' },
    primary: 'See it on GitHub', primaryHref: 'https://github.com/cappleby1/Godot_Game',
    repo: 'https://github.com/cappleby1/Godot_Game'
  },
  {
    id: 'xr', title: 'XR App', full: 'XR Unity App', kind: 'Mobile XR',
    color: 'c-deep', w: 'w2', h: 'h2', isNew: false,
    tags: ['Unity', 'XR', 'Mobile'],
    desc: 'Scan a QR code with your phone camera to spawn a cube, then play with it using the on-screen buttons.',
    media: { type: 'image', src: 'Images/XRMobileApp.gif', alt: 'The XR app spawning a cube from a QR code' },
    primary: 'See it on GitHub', primaryHref: 'https://github.com/cappleby1/xr_mobile_app',
    repo: 'https://github.com/cappleby1/xr_mobile_app'
  }
];

const $ = (id) => document.getElementById(id);

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

// ---- Shelf ----
const spines = new Map();

function buildShelf() {
  const row = $('shelf-row');
  const firstFixed = row.firstElementChild; // keep the empty slot + plant at the end

  projects.forEach((p) => {
    const btn = el('button', `spine ${p.color} ${p.w} ${p.h}`);
    btn.type = 'button';
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-controls', 'book');
    btn.append(el('span', 'dot'), el('span', 'band'), el('span', 't', p.title), el('span', 'band'));
    btn.addEventListener('click', () => pick(p.id));
    row.insertBefore(btn, firstFixed);
    spines.set(p.id, btn);
  });
}

function renderMedia(media, title) {
  const box = $('book-media');
  box.replaceChildren();
  if (!media) {
    const tile = el('div', 'media-empty');
    tile.append(el('span', 'media-empty-name', title), el('span', 'label', 'Coming soon'));
    box.append(tile);
    return;
  }
  if (media.type === 'youtube') {
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${media.id}`;
    frame.title = media.title || 'Project video';
    frame.loading = 'lazy';
    frame.allow = 'accelerometer; encrypted-media; gyroscope; picture-in-picture';
    frame.allowFullscreen = true;
    box.append(frame);
  } else {
    const img = document.createElement('img');
    img.src = media.src;
    img.alt = media.alt || '';
    img.loading = 'lazy';
    box.append(img);
  }
}

function pick(id) {
  const p = projects.find((x) => x.id === id) || projects[0];

  spines.forEach((btn, key) => {
    const on = key === p.id;
    btn.classList.toggle('on', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  });

  $('book-kind').textContent = p.kind;
  $('book-title').textContent = p.full;
  $('book-desc').textContent = p.desc;

  const tags = $('book-tags');
  tags.replaceChildren();
  if (p.isNew) tags.append(el('span', 'chip chip-new', 'New'));
  p.tags.forEach((t) => tags.append(el('span', 'chip', t)));

  const primary = $('book-primary');
  const soon = $('book-soon');
  if (p.primaryHref) {
    primary.textContent = p.primary;
    primary.href = p.primaryHref;
    const external = /^https?:/.test(p.primaryHref);
    primary.target = external ? '_blank' : '';
    primary.rel = external ? 'noopener noreferrer' : '';
    primary.hidden = false;
    soon.hidden = true;
  } else {
    primary.hidden = true;
    soon.hidden = false;
  }

  const repo = $('book-repo');
  if (p.repo) repo.href = p.repo;
  repo.hidden = !p.repo;

  renderMedia(p.media, p.full);
}

// ---- High contrast ----
function setHighContrast(on) {
  document.documentElement.classList.toggle('hc', on);
  $('hc-toggle').setAttribute('aria-pressed', on ? 'true' : 'false');
  try { localStorage.setItem('catos-hc', on ? '1' : '0'); } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  buildShelf();
  pick(projects[0].id);

  const hcOn = document.documentElement.classList.contains('hc');
  $('hc-toggle').setAttribute('aria-pressed', hcOn ? 'true' : 'false');
  $('hc-toggle').addEventListener('click', () => {
    setHighContrast(!document.documentElement.classList.contains('hc'));
  });
});
