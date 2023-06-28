const firstbttn = document.querySelector('#first-bttn');
const firstbttnh = document.querySelector('#first-button:hover');
const secndbttn = document.querySelector('#secnd-bttn');
const thirdbttn = document.querySelector('#third-bttn');
const fourthbttn = document.querySelector('#fourth-bttn');
const fifthbttn = document.querySelector('#fifth-bttn');

firstbttn.addEventListener('click', e => {

    firstbttn.style.backgroundColor = 'hsl(25, 97%, 53%)';
});

firstbttn.addEventListener('dblclick', e => {
    firstbttn.style.backgroundColor = firstbttnh;
    
});

/*firstbttn.addEventListener('mouseEnter', e => {

    
    firstbttn.style.backgroundColor = 'rgba(236, 232, 232,.6)';
    firstbttn.style.color = 'blue';
    
});

firstbttn.addEventListener('mouseLeave', e => {
    firstbttn.style.backgroundColor = 'rgba(47, 57, 70,.5)';
});*/










secndbttn.addEventListener('click', e => {

    secndbttn.style.backgroundColor = 'hsl(25, 97%, 53%)';
});

thirdbttn.addEventListener('click', e => {

    thirdbttn.style.backgroundColor = 'hsl(25, 97%, 53%)';
});

fourthbttn.addEventListener('click', e => {

    fourthbttn.style.backgroundColor = 'hsl(25, 97%, 53%)';
});

fifthbttn.addEventListener('click', e => {

    fifthbttn.style.backgroundColor = 'hsl(25, 97%, 53%)';
    
});

