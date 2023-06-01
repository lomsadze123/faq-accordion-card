const lists = document.querySelectorAll(".lists");
for(let i of lists) {
    i.addEventListener('click', (event) => {
        const target = event.currentTarget.nextElementSibling;
        if (target.style.display === 'block') {
            target.style.display = 'none';
            i.childNodes[1].style.fontWeight = '400';
            i.childNodes[3].style.transform = "rotate(0)";
            return;
          }
            target.style.display = 'block';
            i.childNodes[1].style.fontWeight = '700';
            i.childNodes[3].style.transform = "rotate(180deg)";
    });
};