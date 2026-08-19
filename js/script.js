
// Missionary Apostolate — shared interactions

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav drawer ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var drawer = document.querySelector('.mobile-drawer');
  var backdrop = document.querySelector('.drawer-backdrop');
  var drawerClose = document.querySelector('.drawer-close');

  function openDrawer () {
    if (!drawer) return;
    drawer.classList.add('is-open');
    backdrop.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
  }
  function closeDrawer () {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
  if (navToggle) navToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  /* ---------- Accordion (Let Us Pray) ---------- */
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var item = trigger.closest('.accordion-item');
      var alreadyOpen = item.classList.contains('is-open');
      item.parentElement.querySelectorAll('.accordion-item').forEach(function (i) {
        i.classList.remove('is-open');
      });
      if (!alreadyOpen) item.classList.add('is-open');
    });
  });

  /* ---------- Blog category filter tabs ---------- */
  var tabs = document.querySelectorAll('.filter-tab');
  var posts = document.querySelectorAll('[data-category]');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('is-active'); });
      tab.classList.add('is-active');
      var cat = tab.getAttribute('data-filter');
      posts.forEach(function (post) {
        var show = cat === 'all' || post.getAttribute('data-category') === cat;
        post.style.display = show ? '' : 'none';
      });
    });
  });

  /* ---------- Donation amount selector ---------- */
  document.querySelectorAll('.amount-row').forEach(function (row) {
    var buttons = row.querySelectorAll('.amount-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        if (btn.dataset.amount === 'custom') {
          var val = window.prompt('Enter a custom donation amount (USD):', '');
          if (val) btn.textContent = '$' + val;
        }
      });
    });
  });

  /* ---------- Prevent-default form handlers ---------- */
  document.querySelectorAll('form[data-fake-submit]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.getAttribute('data-fake-submit');
      window.alert(msg || 'Thank you — your submission has been received.');
      form.reset();
    });
  });

  /* ---------- Newsletter subscribe (no form wrapper) ---------- */
  document.querySelectorAll('[data-subscribe]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var input = btn.parentElement.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        window.alert('Thank you for subscribing — spiritual reflections are on their way to ' + input.value.trim());
        input.value = '';
      } else if (input) {
        input.focus();
      }
    });
  });

  /* ---------- Play button placeholder ---------- */
  document.querySelectorAll('.play-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      window.alert('Playing sermon video…');
    });
  });

});
