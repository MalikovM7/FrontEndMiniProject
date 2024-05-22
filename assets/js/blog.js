window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    const logo = this.document.querySelector(".logo > img");
  
  
    if (window.scrollY > 50) {
        header.style.height = '50px'
        logo.style.height ="60px"
    } else {
      header.style.height = '85px'
      logo.style.height ="80px"
    }
  });



  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search input');
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const categories = document.querySelectorAll('.categories ul li');
        categories.forEach(category => {
            if (category.textContent.toLowerCase().includes(searchTerm)) {
                category.style.display = '';
            } else {
                category.style.display = 'none';
            }
        });
    });
});







document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.play-button');
    playButton.addEventListener('click', () => {
        alert('Play video!');
    });
});