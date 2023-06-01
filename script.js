const lists = document.querySelectorAll(".lists");
const hide = document.querySelectorAll(".hide");
for(let i of lists) {
    i.addEventListener('click', (event) => {
        const target = event.currentTarget.nextElementSibling;
        const targetImg = event.target;
        if (target.style.display === 'block') {
            target.style.display = 'none';
            targetImg.style.fontWeight = '400';
            targetImg.nextElementSibling.style.transform = "rotate(0)";
            return;
          }
            target.style.display = 'block';
            targetImg.style.fontWeight = '700';
            targetImg.nextElementSibling.style.transform = "rotate(180deg)";
    })
};