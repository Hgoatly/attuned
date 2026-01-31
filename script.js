function setCopyrightDate() {
  const dateSpan = document.getElementById('copyright-date');
  const currentYear = new Date().getFullYear();
  dateSpan.textContent = currentYear;
}
setCopyrightDate();