function copyToClipboard(element) {
    var copyText = $(element).attr('href');
    document.addEventListener('copy', function(e) {
      e.clipboardData.setData('text/plain', copyText);
      e.preventDefault();
    }, true);
    document.execCommand("copy");
}