function manipulateDom() {
    const quotes = document.querySelectorAll('.quote');
    quotes.forEach(item => {
        item.style.borderColor = 'blue';
        item.style.background = 'lightblue';
        item.style.fontStyle = 'italic';
    })
};

export {
    manipulateDom
};