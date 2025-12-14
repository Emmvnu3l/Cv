document.getElementById('print-btn').addEventListener('click', function() {
  window.print();
});

document.querySelectorAll('.position-link[data-url]').forEach(function(el) {
  el.addEventListener('click', function(e) {
    var url = el.getAttribute('data-url');
    if (url) {
      e.preventDefault();
      window.open(url, '_blank', 'noopener');
    }
  });
});
