let overlay = document.getElementById('overlay')
let thankYouBtn = document.getElementById('thank-you')
let closeModal = document.getElementById('subscribe-btn')
let beFirst = document.getElementById('be-first')

overlay.style.display = 'none';

//open modal

let openModal = document.getElementById('open-modal')
openModal.addEventListener('click', function(){
    overlay.style.display = 'block';
})

//close modal - thank you


closeModal.addEventListener('click', function() {
    overlay.style.display = 'none';
    beFirst.style.display = 'none';
    thankYouBtn.style.display = 'block';
})




