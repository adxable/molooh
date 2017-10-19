var offerItem = document.querySelectorAll('.offer-item');

for (i = 0; i < offerItem.length; i++) {    
    offerItem[i].addEventListener('click', function() {  
        this.classList.toggle('cont-active');       

    });

}
