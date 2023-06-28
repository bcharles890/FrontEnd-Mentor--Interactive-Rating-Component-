const firstbttn = document.querySelector('#first-bttn');
const firstbttnh = document.querySelector('#first-button:hover');
const secndbttn = document.querySelector('#secnd-bttn');
const secndbttnh = document.querySelector('#secnd-bttn:hover');
const thirdbttn = document.querySelector('#third-bttn');
const thirdbttnh = document.querySelector('third-bttn:hover');
const fourthbttn = document.querySelector('#fourth-bttn');
const fourthbttnh = document.querySelector('#fourth-bttn:hover');
const fifthbttn = document.querySelector('#fifth-bttn');
const fifthbttnh = document.querySelector('#fifth-bttn:hover');

firstbttn.addEventListener('click', e => {

    firstbttn.style.backgroundColor = 'hsl(25, 97%, 53%)';
});

firstbttn.addEventListener('dblclick', e => {
    firstbttn.style.backgroundColor = firstbttnh;
    
});



secndbttn.addEventListener('click', e => {

    secndbttn.style.backgroundColor = 'hsl(25, 97%, 53%)';
});


secndbttn.addEventListener('dblclick', e => {
    secndbttn.style.backgroundColor = secndbttnh;
    
});



thirdbttn.addEventListener('click', e => {

    thirdbttn.style.backgroundColor = 'hsl(25, 97%, 53%)';
});

thirdbttn.addEventListener('dblclick', e => {
    thirdbttn.style.backgroundColor = thirdbttnh;
    
});

fourthbttn.addEventListener('click', e => {

    fourthbttn.style.backgroundColor = 'hsl(25, 97%, 53%)';
});

fourthbttn.addEventListener('dblclick', e => {
    fourthbttn.style.backgroundColor = fourthbttnh;
    
});

fifthbttn.addEventListener('click', e => {

    fifthbttn.style.backgroundColor = 'hsl(25, 97%, 53%)';
    
});

fifthbttn.addEventListener('dblclick', e => {
    fifthbttn.style.backgroundColor = fifthbttnh;
    
});

