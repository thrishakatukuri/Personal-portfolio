// const list = document.querySelector('.skills-list');
// const container = document.querySelector('.skills-container'); // add this wrapper around the list
// const leftBtn = document.querySelector('.arrow.left');
// const rightBtn = document.querySelector('.arrow.right');

// let scrollPosition = 0;
// const scrollAmount = 300;

// function updateButtons() {
//     const maxScroll = list.scrollWidth - container.offsetWidth;

//     leftBtn.disabled = scrollPosition >= 0;
//     rightBtn.disabled = Math.abs(scrollPosition) >= maxScroll;
// }

// rightBtn.addEventListener('click', () => {
//     const maxScroll = list.scrollWidth - container.offsetWidth;

//     scrollPosition -= scrollAmount;
//     if (Math.abs(scrollPosition) > maxScroll) {
//         scrollPosition = -maxScroll;
//     }

//     list.style.transform = `translateX(${scrollPosition}px)`;
//     updateButtons();
// });

// leftBtn.addEventListener('click', () => {
//     scrollPosition += scrollAmount;
//     if (scrollPosition > 0) {
//         scrollPosition = 0;
//     }

//     list.style.transform = `translateX(${scrollPosition}px)`;
//     updateButtons();
// });

// updateButtons();
