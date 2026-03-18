linkovi.forEach(link => {
  if ((trenutna).includes(link.dataset.name)) {
    link.classList.add('active');
  }
});
console.log(trenutna);