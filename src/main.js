import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const u = (id, w = 1200, h) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=85`

const LINKS = {
  callPrimary: 'tel:+916202963474',
  callSecondary: 'tel:+919288179057',
  whatsapp:
    'https://wa.me/916202963474?text=' +
    encodeURIComponent('Hello Biryani Dwar, I would like to place an order.'),
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('9G8V+MQP Basti, Bihar 803110'),
  reviews:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Biryani Dwar Harnaut Bihar'),
  mapEmbed:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('9G8V+MQP Basti, Bihar 803110') +
    '&output=embed',
  facebook: 'https://www.facebook.com/nikhil.arya.1690',
  instagram: 'https://www.instagram.com/biryani_dwar_1707',
  youtube: 'https://youtube.com/@nikskevlogs2202',
}

const CONTACT = {
  primaryDisplay: '62029 63474',
  secondaryDisplay: '92881 79057',
  findDisplay: '092881 79057',
  plusCode: '9G8V+MQP, Basti, Bihar 803110',
  landmark: 'Near Railway Station Quarters, Harnaut',
}

const IMAGES = {
  hero: u('photo-1589302168068-964664d93dc0', 2000),
  menuArch: '/assets/biryani-2.jpg',
  finalCta: '/assets/biryani-3.jpg',
  owner: '/assets/owner.jpeg',
}

const NAV = [
  { label: 'Home', id: '#top' },
  { label: 'Menu', id: '#menu' },
  { label: 'Our Story', id: '#story' },
  { label: 'Reviews', id: '#reviews' },
  { label: 'Contact', id: '#contact' },
]

const MENU_GROUPS = [
  {
    name: 'Chicken Biryani',
    items: [
      { name: 'Half Chicken Biryani', desc: '1 Chicken Piece', price: 80 },
      { name: 'Full Chicken Biryani', desc: '2 Chicken Pieces', price: 120 },
    ],
  },
  {
    name: 'Chicken Egg Biryani',
    items: [
      { name: 'Half Chicken Egg Biryani', desc: '1 Chicken Piece + 1 Egg', price: 90 },
      { name: 'Full Chicken Egg Biryani', desc: '2 Chicken Pieces + 1 Egg', price: 130 },
    ],
  },
  {
    name: 'Egg Biryani',
    items: [{ name: 'Egg Biryani', desc: '2 Eggs', price: 80 }],
  },
  {
    name: 'Aloo Biryani',
    items: [{ name: 'Aloo Biryani', desc: 'Potato Biryani', price: 70 }],
  },
]

const EXTRAS = [
  { name: 'Extra Egg', price: 10 },
  { name: 'Extra Aloo', price: 10 },
  { name: 'Extra Chicken Piece', price: 40 },
]

const REASONS = [
  {
    title: 'Authentic Taste',
    text: 'Traditional cooking techniques create rich, aromatic and flavour-packed biryani.',
  },
  {
    title: 'Generous Portions',
    text: 'From half portions to full plates with satisfying quantities.',
  },
  {
    title: 'Quality Ingredients',
    text: 'Premium ingredients, fragrant rice and carefully blended spices.',
  },
  {
    title: 'Hygienic Preparation',
    text: 'Every serving is prepared with an emphasis on cleanliness and quality.',
  },
  {
    title: 'Family Friendly',
    text: 'A welcoming place for friends, families and biryani lovers.',
  },
]

const REVIEWS = [
  {
    text: "अगर आप असली ज़ायके के शौकीन हैं, तो 'बिरयानी द्वार' ज़रूर आइए! सिर्फ एक महीना हुआ है खुले, लेकिन यहाँ की भीड़ देखकर लगता है जैसे यह कोई बरसों पुरानी लेजेंड्री दुकान हो। स्वाद तो लाजवाब है ही, पर यहाँ की सर्विस और अपनापन दिल जीत लेता है। इतनी भीड़ के बावजूद ऑर्डर बहुत तेज़ी से टेबल पर आया और स्टाफ का बर्ताव बेहद विनम्र था। आज इस जगह की शुरुआत करने वाले फ़ूड ब्लॉगर निखिल से मिलकर बात की—उनका पैशन खाने और मेहमाननवाज़ी दोनों में साफ़ झलकता है। बिरयानी एकदम ऑथेंटिक, खुशबूदार और बैलेंस मसालों वाली है। जैसा नाम है, यह सच में आपके बिरयानी के सफर का सही 'द्वार' है!",
    name: 'Kumar Sandeep',
  },
  {
    text: 'I had an exceptional experience at Biryani Dwar! The food was delicious, the service was fantastic…',
    name: 'Akshay Kumar',
  },
  {
    text: 'Best in Harnaut.... taste is awesome. Kolkata biryani best biryani... service is good.',
    name: 'Gaurav Kumar',
  },
  {
    text: 'Chicken was very tender and juicy and properly cooked.',
    name: 'Anjali Yadav',
  },
  {
    text: 'Highly recommended. Best biriyani in Harnaut and nearby!',
    name: 'Aryan Raj',
  },
]

const SERVICES = [
  { icon: 'dine', label: 'Dine-in' },
  { icon: 'takeaway', label: 'Takeaway' },
  { icon: 'drive', label: 'Drive-through' },
  { icon: 'pickup', label: 'Kerbside Pickup' },
  { icon: 'pay', label: 'Google Pay' },
  { icon: 'access', label: 'Wheelchair Accessible' },
  { icon: 'restroom', label: 'Toilets Available' },
  { icon: 'family', label: 'Family Friendly' },
]

const PHRASES = [
  'Open the Dwar to Authentic Biryani',
  'Step Through the Dwar. Discover the Flavour',
  'Your Favourite Plate Is Just One Dwar Away',
  'Authentic · Aromatic · Flavour-Packed',
  'From ₹80',
  'Loved in Harnaut',
]

const icon = {
  phone: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/></svg>`,
  bowl: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 11h16v2c0 3.3-2.7 6-6 6h-4c-3.3 0-6-2.7-6-6v-2zm1-2 1.2-4.4C6.5 3.6 7.4 3 8.4 3h7.2c1 0 1.9.6 2.2 1.6L19 9H5z"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 7h16v1.5H4V7zm0 4.25h16v1.5H4v-1.5zM4 15.5h16V17H4v-1.5z"/></svg>`,
  close: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3 1.4 1.4z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m12 17.3-6.2 3.7 1.6-7.1L2 9.2l7.2-.6L12 2l2.8 6.6 7.2.6-5.4 4.7 1.6 7.1z"/></svg>`,
  dine: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2v9a2 2 0 0 0 2 2v9h2V2H7zm8.5 0c-1.4 0-2.5 2-2.5 4.5V13h2v9h2V2h-1.5z"/></svg>`,
  takeaway: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 7V5l5-3 5 3v2h3l-2 14H6L4 7h3zm2 0h6V5.7L12 4 9 5.7V7z"/></svg>`,
  drive: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 11 6.5 6h11L19 11h-1.2c-.4-1.2-1.5-2-2.8-2s-2.4.8-2.8 2h-1.4c-.4-1.2-1.5-2-2.8-2S6.6 9.8 6.2 11H5zm1.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm11 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM4 17h16v3H4v-3z"/></svg>`,
  pickup: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 8h16v12H4V8zm2 2v8h12v-8H6zm6-6 4 4h-2.5v2h-3V8H8l4-4z"/></svg>`,
  pay: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 6h18v12H3V6zm2 4h14v2H5v-2zm0 4h7v2H5v-2z"/></svg>`,
  access: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-1 5h2l1.2 4H18v2h-4.2l-.4 1.3A4.5 4.5 0 1 1 8 19.5 4.48 4.48 0 0 1 9.8 16L8 9.5V8h3v1zm-1.5 8.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0z"/></svg>`,
  restroom: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm10 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM4 10h6l-1 10H5L4 10zm10 0h6l-1.2 6h-1.3l.5 4h-2l.5-4h-1.3L14 10z"/></svg>`,
  family: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM4.5 11h7v9h-2v-5h-3v5h-2v-9zm8 2h7v7h-2v-4h-3v4h-2v-7z"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm.8 3v5.2l3.5 2.1-.8 1.4L11 13V7h1.8z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.6l.4-3H14V9z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zM17.2 7.3a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>`,
  google: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z"/><path fill="currentColor" d="M12 22c2.7 0 5-0.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z"/><path fill="currentColor" d="M6.4 13.9A6 6 0 0 1 6.1 12c0-.7.1-1.3.3-1.9V7.5H3.1A10 10 0 0 0 2 12c0 1.6.4 3.1 1.1 4.5l3.3-2.6z"/><path fill="currentColor" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8C16.9 2.9 14.7 2 12 2A10 10 0 0 0 3.1 7.5l3.3 2.6C7.2 7.7 9.4 5.9 12 5.9z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C18.5 5.4 12 5.4 12 5.4s-6.5 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 2.3.4 8.8.4 8.8.4s6.5 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.3 3.3-6.3 3.3z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.43-9.91 9.88 0 1.74.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.43 9.9-9.88C21.94 6.43 17.5 2 12.04 2zm5.79 14.16c-.24.68-1.41 1.25-1.95 1.33-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.26-4.79-4.2-4.93-4.39-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.36.26-.29.57-.36.76-.36h.55c.17 0 .41-.07.64.49.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.31.38-.44.51-.14.14-.29.29-.12.57.16.29.73 1.2 1.56 1.95 1.08.96 1.98 1.26 2.26 1.4.29.14.45.12.62-.07.17-.19.71-.83.9-1.11.19-.29.38-.24.64-.14.26.1 1.67.79 1.95.93.29.14.48.21.55.33.07.12.07.68-.17 1.36z"/></svg>`,
  fleuron: `<svg class="fleuron" viewBox="0 0 64 20" aria-hidden="true"><path fill="currentColor" d="M32 2c2.4 3.2 4.2 6.2 4.2 8s-1.8 4.8-4.2 8c-2.4-3.2-4.2-6.2-4.2-8S29.6 5.2 32 2zm-11 8c2.8 1.2 5.2 2.1 7 2.1s4.2-.9 7-2.1c-2.8-1.2-5.2-2.1-7-2.1s-4.2.9-7 2.1zM8 10.2l8.2-1.6c-2.4 1.2-4 2.5-4 4.1s1.6 2.9 4 4.1L8 15.2c1.5-.9 2.4-2 2.4-3.1S9.5 11.1 8 10.2zm48 0c-1.5.9-2.4 2-2.4 3.1s.9 2.2 2.4 3.1l-8.2 1.6c2.4-1.2 4-2.5 4-4.1s-1.6-2.9-4-4.1L56 10.2z"/></svg>`,
}

const pad = (n) => String(n).padStart(2, '0')

const stars = (count = 5) =>
  `<span class="stars" aria-hidden="true">${icon.star.repeat(count)}</span>`

const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const app = document.querySelector('#app')

app.innerHTML = `
  <a class="skip-link" href="#top">Skip to content</a>
  <div class="grain" aria-hidden="true"></div>

  <header class="site-header" id="site-header">
    <button class="logo" data-scroll="#top" type="button" aria-label="Biryani Dwar home">
      Biryani <em>Dwar</em>
    </button>
    <nav class="desktop-nav" aria-label="Primary">
      ${NAV.map((item) => `<button type="button" data-scroll="${item.id}">${item.label}</button>`).join('')}
    </nav>
    <a class="btn btn-gold header-order" href="${LINKS.whatsapp}" target="_blank" rel="noopener noreferrer">
      Order Now
    </a>
    <button class="icon-btn menu-toggle" id="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">
      ${icon.menu}
    </button>
  </header>

  <div class="mobile-nav" id="mobile-nav" hidden>
    <nav aria-label="Mobile">
      ${NAV.map((item) => `<button type="button" data-scroll="${item.id}">${item.label}</button>`).join('')}
    </nav>
    <a class="btn btn-gold" href="${LINKS.whatsapp}" target="_blank" rel="noopener noreferrer">Order on WhatsApp</a>
  </div>

  <main id="top">
    <section class="hero">
      <div class="hero-media" aria-hidden="true">
        <img src="${IMAGES.hero}" alt="" fetchpriority="high" />
        <div class="hero-shade"></div>
      </div>
      <div class="wrap hero-copy">
        <p class="kicker">Authentic · Aromatic · Flavour-Packed</p>
        <h1>
          <span class="line"><span class="line-inner">Biryani</span></span>
          <span class="line"><span class="line-inner italic">Dwar</span></span>
        </h1>
        <p class="tagline">Open the Dwar to Authentic Biryani.</p>
        <p class="lede">
          Freshly prepared chicken biryani made with fragrant basmati rice,
          carefully blended spices and traditional cooking techniques.
        </p>
        <dl class="hero-stats">
          <div>
            <dt>From</dt>
            <dd>₹80</dd>
          </div>
          <div>
            <dt>Google</dt>
            <dd>5.0</dd>
          </div>
          <div>
            <dt>Daily</dt>
            <dd>12 PM – 9 PM</dd>
          </div>
        </dl>
        <div class="hero-actions">
          <button class="btn btn-gold" type="button" data-scroll="#menu">${icon.bowl} View Menu</button>
          <a class="btn btn-chili" href="${LINKS.whatsapp}" target="_blank" rel="noopener noreferrer">${icon.chat} Order Now</a>
          <a class="btn btn-ghost" href="${LINKS.callPrimary}">${icon.phone} Call Now</a>
        </div>
        <p class="rating-line">
          ${stars()}
          5.0 Google Rating <span class="dot" aria-hidden="true"></span> 24+ Happy Reviews
        </p>
      </div>
      <p class="hero-locale" aria-hidden="true">Harnaut · Bihar</p>
    </section>

    <div class="marquee-wrap" aria-hidden="true">
      <div class="marquee">
        ${[...PHRASES, ...PHRASES]
          .map((phrase) => `<span>${phrase}</span><span class="sep">✦</span>`)
          .join('')}
      </div>
    </div>

    <section class="section menu-section" id="menu">
      <div class="wrap">
        <div class="section-head">
          <p class="section-index"><span>${pad(1)}</span> Menu</p>
          <h2>
            <span class="line"><span class="line-inner">Straight from</span></span>
            <span class="line"><span class="line-inner italic">the handi.</span></span>
          </h2>
          <p class="section-note">
            Freshly prepared. Generous portions. Honest prices — the way biryani should be.
          </p>
        </div>

        <div class="menu-layout">
          <figure class="menu-arch media-frame">
            <img src="${IMAGES.menuArch}" alt="Biryani served fresh from the handi" />
            <figcaption>Straight from the handi</figcaption>
          </figure>
          <div class="menu-board">
            ${MENU_GROUPS.map(
              (group) => `
              <article class="menu-group">
                <h3>${group.name}</h3>
                <ul>
                  ${group.items
                    .map(
                      (item) => `
                    <li>
                      <div class="menu-row">
                        <strong>${item.name}</strong>
                        <b>₹${item.price}</b>
                      </div>
                      <span class="menu-desc">${item.desc}</span>
                    </li>`,
                    )
                    .join('')}
                </ul>
              </article>`,
            ).join('')}
          </div>
        </div>

        <aside class="extras-panel">
          <div class="extras-intro">
            <p class="eyebrow">Additions</p>
            <h3>Build your plate</h3>
            <p>Choose your biryani, add your favourites and enjoy it your way.</p>
          </div>
          <ul class="extras-list">
            ${EXTRAS.map(
              (item) => `
              <li>
                <span>${item.name}</span>
                <b>₹${item.price}</b>
              </li>`,
            ).join('')}
          </ul>
        </aside>
      </div>
    </section>

    <section class="section why-section" id="why">
      <div class="wrap">
        <div class="section-head">
          <p class="section-index"><span>${pad(2)}</span> Why Biryani Dwar</p>
          <h2>
            <span class="line"><span class="line-inner">Five reasons.</span></span>
            <span class="line"><span class="line-inner italic">One Dwar.</span></span>
          </h2>
        </div>
        <div class="why-grid">
          ${REASONS.map(
            (item, i) => `
            <article class="why-item">
              <span class="why-num">${pad(i + 1)}</span>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </article>`,
          ).join('')}
        </div>
      </div>
    </section>

    <section class="section story-section" id="story">
      <div class="wrap">
        <div class="section-head">
          <p class="section-index"><span>${pad(3)}</span> Our Story</p>
          <h2>
            <span class="line"><span class="line-inner">Meet</span></span>
            <span class="line"><span class="line-inner italic">Nikhil Arya</span></span>
          </h2>
          <p class="story-sub">From a Biryani Lover to a Biryani Entrepreneur</p>
        </div>
        <div class="story-grid">
          <figure class="story-photo media-frame">
            <img src="${IMAGES.owner}" alt="Nikhil Arya, Founder of Biryani Dwar" />
            <figcaption>
              <strong>Nikhil Arya</strong>
              <span>Founder, Biryani Dwar</span>
            </figcaption>
          </figure>
          <div class="story-copy">
            <p>
              Born and brought up in Harnaut, Bihar, Nikhil Arya has always had one irresistible
              weakness — biryani.
            </p>
            <p>
              A true foodie and passionate biryani lover, his love for the perfect plate of biryani
              gradually became more than just a craving. It became a passion.
            </p>
            <p>
              He wanted to bring the taste, aroma and experience he loved to his own hometown.
              That passion eventually gave birth to Biryani Dwar.
            </p>
            <p>A place built around one simple belief:</p>
            <blockquote class="story-quote">
              <span class="quote-mark" aria-hidden="true">“</span>
              If you love biryani, you deserve to taste it the way it was meant to be.
            </blockquote>
            <p>
              Today, Biryani Dwar is Nikhil's endeavour to turn his personal love for biryani into
              an experience for everyone in Harnaut and beyond.
            </p>
            <p class="story-pillars">
              <span>One Passion.</span>
              <span>One Hometown.</span>
              <span>One Plate at a Time.</span>
            </p>
            <p class="story-close">
              Welcome to Biryani Dwar.
              <strong>Where a Biryani Lover's Passion Became Your Favourite Plate.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section reviews-section" id="reviews">
      <div class="wrap">
        <div class="section-head">
          <p class="section-index"><span>${pad(4)}</span> Reviews</p>
          <h2>
            <span class="line"><span class="line-inner">5.0 on Google.</span></span>
            <span class="line"><span class="line-inner italic">24 times over.</span></span>
          </h2>
        </div>
        <div class="reviews-grid">
          ${REVIEWS.map(
            (review) => `
            <blockquote class="review-card">
              ${stars()}
              <p>${review.text}</p>
              <footer>${review.name}</footer>
            </blockquote>`,
          ).join('')}
        </div>
        <a class="text-link" href="${LINKS.reviews}" target="_blank" rel="noopener noreferrer">
          Read all Google reviews
        </a>
      </div>
    </section>

    <section class="section contact-section" id="contact">
      <div class="wrap">
        <div class="section-head">
          <p class="section-index"><span>${pad(5)}</span> Find Us</p>
          <h2>
            <span class="line"><span class="line-inner">One Dwar away</span></span>
            <span class="line"><span class="line-inner italic">in Harnaut</span></span>
          </h2>
        </div>
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-block">
              <p class="eyebrow">Location</p>
              <h3>Biryani Dwar</h3>
              <p class="address">${CONTACT.plusCode}</p>
              <p class="landmark">${CONTACT.landmark}</p>
            </div>

            <div class="contact-block">
              <p class="eyebrow">Hours</p>
              <p class="hours-lead">Open daily</p>
              <p class="hours-time">${icon.clock} 12:00 PM – 9:00 PM</p>
              <p class="hours-note">Monday through Sunday</p>
            </div>

            <div class="contact-actions">
              <a class="btn btn-gold" href="${LINKS.callSecondary}">${icon.phone} ${CONTACT.findDisplay}</a>
              <a class="btn btn-ghost" href="${LINKS.directions}" target="_blank" rel="noopener noreferrer">
                ${icon.pin} Get Directions
              </a>
            </div>

            <div class="contact-block">
              <p class="eyebrow">Services</p>
              <ul class="service-list">
                ${SERVICES.map(
                  (item) => `<li>${icon[item.icon]}<span>${item.label}</span></li>`,
                ).join('')}
              </ul>
            </div>
          </div>
          <div class="map-frame">
            <iframe title="Biryani Dwar location" src="${LINKS.mapEmbed}" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>

    <section class="section order-section" id="order">
      <div class="wrap">
        <div class="order-frame">
          <span class="order-mark" aria-hidden="true">B</span>
          <span class="order-corner order-corner-tl" aria-hidden="true"></span>
          <span class="order-corner order-corner-tr" aria-hidden="true"></span>
          <span class="order-corner order-corner-bl" aria-hidden="true"></span>
          <span class="order-corner order-corner-br" aria-hidden="true"></span>
          <span class="order-ornament order-ornament-t" aria-hidden="true">${icon.fleuron}</span>
          <span class="order-ornament order-ornament-b" aria-hidden="true">${icon.fleuron}</span>
          <span class="order-ornament order-ornament-l" aria-hidden="true">${icon.fleuron}</span>
          <span class="order-ornament order-ornament-r" aria-hidden="true">${icon.fleuron}</span>

          <div class="order-layout">
            <div class="order-copy">
              <p class="order-kicker">Hungry already?</p>
              <h2>
                <span class="line"><span class="line-inner">Order your</span></span>
                <span class="line"><span class="line-inner script">Biryani</span></span>
              </h2>
              <div class="order-rule" aria-hidden="true">${icon.fleuron}</div>
              <p class="order-note">Freshly prepared. Packed with flavour. Ready for you.</p>
            </div>

            <div class="order-panel order-call">
              <span class="order-icon" aria-hidden="true">${icon.phone}</span>
              <p class="order-label">Call to Order</p>
              <div class="order-numbers">
                <a href="${LINKS.callPrimary}">${CONTACT.primaryDisplay}</a>
                <a href="${LINKS.callSecondary}">${CONTACT.secondaryDisplay}</a>
              </div>
              <a class="btn btn-order" href="${LINKS.callPrimary}">
                ${icon.phone} Call Now
              </a>
            </div>

            <div class="order-panel order-wa">
              <span class="order-icon" aria-hidden="true">${icon.whatsapp}</span>
              <p class="order-label">WhatsApp Orders</p>
              <div class="order-numbers">
                <a href="${LINKS.whatsapp}" target="_blank" rel="noopener noreferrer">${CONTACT.primaryDisplay}</a>
              </div>
              <div class="order-mini-rule" aria-hidden="true"></div>
              <a class="btn btn-order" href="${LINKS.whatsapp}" target="_blank" rel="noopener noreferrer">
                ${icon.whatsapp} Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="final-cta">
      <div class="final-media" aria-hidden="true">
        <img src="${IMAGES.finalCta}" alt="" />
        <div class="final-shade"></div>
      </div>
      <div class="wrap final-copy">
        <p class="eyebrow">From ₹80</p>
        <h2>
          <span class="line"><span class="line-inner">Your Biryani</span></span>
          <span class="line"><span class="line-inner italic">Is Waiting.</span></span>
        </h2>
        <p>Open the Dwar. Taste the Difference.</p>
        <div class="final-actions">
          <a class="btn btn-gold" href="${LINKS.whatsapp}" target="_blank" rel="noopener noreferrer">
            ${icon.bowl} Order Now
          </a>
          <a class="btn btn-ghost" href="${LINKS.callPrimary}">${icon.phone} Call Us</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="wrap footer-grid">
      <div class="footer-brand">
        <button class="logo" type="button" data-scroll="#top">Biryani <em>Dwar</em></button>
        <p>Where a Biryani Lover's Passion Became Your Favourite Plate.</p>
        <div class="footer-social" aria-label="Social links">
          <a
            href="${LINKS.facebook}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            ${icon.facebook}
          </a>
          <a
            href="${LINKS.instagram}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            ${icon.instagram}
          </a>
          <a
            href="${LINKS.reviews}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Check us out on Google"
          >
            ${icon.google}
          </a>
          <a
            href="${LINKS.youtube}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            ${icon.youtube}
          </a>
        </div>
      </div>
      <nav class="footer-nav" aria-label="Footer">
        ${NAV.filter((item) => item.id !== '#top')
          .map((item) => `<button type="button" data-scroll="${item.id}">${item.label}</button>`)
          .join('')}
      </nav>
      <div class="footer-meta">
        <p>Harnaut, Bihar</p>
        <p>Open Daily 12 PM – 9 PM</p>
        <p class="copyright">© ${new Date().getFullYear()} Biryani Dwar</p>
      </div>
    </div>
  </footer>

  <nav class="mobile-bar" aria-label="Quick actions">
    <a href="${LINKS.callPrimary}">${icon.phone}<span>Call</span></a>
    <button type="button" data-scroll="#menu">${icon.bowl}<span>Menu</span></button>
    <a class="order" href="${LINKS.whatsapp}" target="_blank" rel="noopener noreferrer">${icon.chat}<span>WhatsApp</span></a>
    <a href="${LINKS.directions}" target="_blank" rel="noopener noreferrer">${icon.pin}<span>Directions</span></a>
  </nav>
`

const header = document.querySelector('#site-header')
const toggle = document.querySelector('#menu-toggle')
const mobileNav = document.querySelector('#mobile-nav')
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const setNavOpen = (open) => {
  toggle.setAttribute('aria-expanded', String(open))
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  toggle.innerHTML = open ? icon.close : icon.menu
  document.body.classList.toggle('nav-open', open)

  if (reduced) {
    mobileNav.hidden = !open
    return
  }

  if (open) {
    mobileNav.hidden = false
    const items = mobileNav.querySelectorAll('button, a')
    gsap.fromTo(mobileNav, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35, ease: 'power2.out' })
    gsap.fromTo(
      items,
      { y: 18, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05, delay: 0.06, ease: 'power3.out' },
    )
  } else {
    gsap.to(mobileNav, {
      autoAlpha: 0,
      duration: 0.22,
      ease: 'power2.in',
      onComplete: () => {
        mobileNav.hidden = true
      },
    })
  }
}

toggle.addEventListener('click', () => setNavOpen(mobileNav.hidden))

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-scroll]')
  if (!trigger) return
  event.preventDefault()
  setNavOpen(false)
  const target = trigger.dataset.scroll
  if (sectionIds.includes(target)) setActiveNav(target)
  scrollTo(target)
})

window.addEventListener(
  'scroll',
  () => header.classList.toggle('is-scrolled', window.scrollY > 20),
  { passive: true },
)

const navLinks = [
  ...document.querySelectorAll('.desktop-nav [data-scroll], .mobile-nav [data-scroll]'),
]

const sectionIds = NAV.map((item) => item.id)

const setActiveNav = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.dataset.scroll === id)
  })
}

const updateActiveNav = () => {
  const marker = window.scrollY + Math.max(header.offsetHeight + 48, window.innerHeight * 0.22)
  let current = '#top'

  sectionIds.forEach((id) => {
    const section = document.querySelector(id)
    if (!section) return
    const top = section.getBoundingClientRect().top + window.scrollY
    if (top <= marker) current = id
  })

  setActiveNav(current)
}

updateActiveNav()
window.addEventListener('scroll', updateActiveNav, { passive: true })
window.addEventListener('resize', updateActiveNav)

const initMotion = () => {
  if (reduced) return

  const heroBits = gsap.utils.toArray(
    '.kicker, .tagline, .lede, .hero-stats, .hero-actions .btn, .rating-line, .hero-locale, .site-header',
  )

  gsap.set(heroBits, { autoAlpha: 0, y: 18 })
  gsap.set('.hero h1 .line-inner', { yPercent: 110 })
  gsap.set('.hero-media img', { scale: 1.12 })
  gsap.set('.hero-actions .btn', { y: 14 })
  gsap.set('.site-header', { y: -24 })

  const intro = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: () => {
      gsap.set(heroBits, { clearProps: 'opacity,visibility,transform' })
      gsap.set('.hero h1 .line-inner', { clearProps: 'transform' })
    },
  })

  // Fallback if intro is interrupted (HMR / tab backgrounding)
  window.setTimeout(() => {
    gsap.set(heroBits, { autoAlpha: 1, y: 0 })
    gsap.set('.hero h1 .line-inner', { yPercent: 0 })
  }, 2800)

  intro
    .to('.hero-media img', { scale: 1, duration: 2.4, ease: 'power2.out' }, 0)
    .to('.site-header', { y: 0, autoAlpha: 1, duration: 0.8 }, 0.15)
    .to('.kicker', { y: 0, autoAlpha: 1, duration: 0.7 }, 0.28)
    .to('.hero h1 .line-inner', { yPercent: 0, duration: 1.15, stagger: 0.12, ease: 'power4.out' }, 0.35)
    .to('.tagline', { y: 0, autoAlpha: 1, duration: 0.8 }, 0.72)
    .to('.lede', { y: 0, autoAlpha: 1, duration: 0.8 }, 0.82)
    .to('.hero-stats', { y: 0, autoAlpha: 1, duration: 0.7 }, 0.92)
    .to('.hero-actions .btn', { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.08 }, 1.02)
    .to('.rating-line', { y: 0, autoAlpha: 1, duration: 0.6 }, 1.18)
    .to('.hero-locale', { autoAlpha: 1, duration: 0.8 }, 1.1)

  gsap.to('.hero-media img', {
    yPercent: 16,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })

  gsap.to('.final-media img', {
    yPercent: 12,
    ease: 'none',
    scrollTrigger: {
      trigger: '.final-cta',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })

  document.querySelectorAll('.section-head').forEach((head) => {
    const lines = head.querySelectorAll('h2 .line-inner')
    const rest = head.querySelectorAll('.section-index, .section-note, .story-sub')
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: head,
        start: 'top 82%',
        once: true,
      },
    })
    tl.from(rest, { y: 18, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out' })
    if (lines.length) {
      tl.from(lines, { yPercent: 110, duration: 1, stagger: 0.1, ease: 'power4.out' }, 0.1)
    }
  })

  const batchIn = (selector, vars = {}) => {
    const els = gsap.utils.toArray(selector)
    if (!els.length) return
    gsap.set(els, { y: vars.y ?? 36, autoAlpha: 0 })
    ScrollTrigger.batch(els, {
      start: 'top 88%',
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          y: 0,
          autoAlpha: 1,
          duration: vars.duration ?? 0.9,
          stagger: vars.stagger ?? 0.1,
          ease: 'power3.out',
          overwrite: true,
        })
      },
    })
  }

  batchIn('.menu-group')
  batchIn('.extras-panel > *', { y: 24, stagger: 0.08 })
  batchIn('.why-item', { y: 28, stagger: 0.08 })
  batchIn('.review-card', { y: 30, stagger: 0.1 })
  batchIn('.service-list li', { y: 12, stagger: 0.04, duration: 0.55 })

  gsap.from('.menu-arch', {
    clipPath: 'inset(8% 8% 8% 8%)',
    autoAlpha: 0,
    duration: 1.2,
    ease: 'power3.out',
    clearProps: 'clipPath,opacity,visibility',
    scrollTrigger: { trigger: '.menu-arch', start: 'top 80%', once: true },
  })

  gsap.from('.story-photo', {
    y: 40,
    autoAlpha: 0,
    duration: 1.1,
    ease: 'power3.out',
    clearProps: 'all',
    scrollTrigger: { trigger: '.story-photo', start: 'top 80%', once: true },
  })

  gsap.from('.story-copy > *', {
    y: 22,
    autoAlpha: 0,
    duration: 0.75,
    stagger: 0.07,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.story-copy', start: 'top 78%', once: true },
  })

  gsap.from('.contact-card > *', {
    y: 22,
    autoAlpha: 0,
    duration: 0.7,
    stagger: 0.08,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.contact-card', start: 'top 80%', once: true },
  })

  gsap.from('.map-frame', {
    autoAlpha: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: { trigger: '.map-frame', start: 'top 82%', once: true },
  })

  gsap.from('.order-frame', {
    y: 28,
    autoAlpha: 0,
    duration: 0.95,
    ease: 'power3.out',
    clearProps: 'all',
    scrollTrigger: { trigger: '.order-section', start: 'top 80%', once: true },
  })

  gsap.from('.order-copy > *, .order-panel', {
    y: 18,
    autoAlpha: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power3.out',
    clearProps: 'all',
    scrollTrigger: { trigger: '.order-section', start: 'top 75%', once: true },
  })

  gsap.from('.final-copy > *', {
    y: 28,
    autoAlpha: 0,
    duration: 0.85,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.final-copy', start: 'top 78%', once: true },
  })

  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { y: -2, duration: 0.28, ease: 'power2.out' })
    })
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { y: 0, duration: 0.28, ease: 'power2.out' })
    })
  })

  window.addEventListener('load', () => ScrollTrigger.refresh())
}

initMotion()
