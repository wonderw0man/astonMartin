const TypeWriter = function(txtElement, words, wait=3000) {
    this.txtElement=txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type method
TypeWriter.prototype.type = function(){
//    current index of word
    const current = this.wordIndex % this.words.length;

    // Get full text of cuuretn words
    const fullTxt = this.words[current];
    
    //check if deleting
    if(this.isDeleting){
        //remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);

    } else{
        //add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // insert txt into element
    this.txtElement.innerHTML = '<span class = "txt">${this.txt}</span>'
    //type speed
    let typeSpeed = 300;
    if(this.isDeleting){
        typeSpeed /=2;
    }

    //check the workd is comeplete
    if(!this.isDelteing && this.txt === fullTxt){
        //Make pause at the end
        typeSpeed = this.wait;
        //Set delete to true
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        //move to next word
        this.wordIndex++;
        //Pause before start typing
        typeSpeed = 300;
    }
  
    setTimeout(() => this.type(), 500)
}

// Init On Dom Load
document.addEventListener('DOMContentLoaded', init);

// Init App 
function init(){
    const txtElement=document.querySelector('.animate');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
}

// Init Typewriter
new TypeWriter(txtElement, words, wait);




// NAVIGATION 


const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector(".nav-links a");

    // Toggle nav



    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');

          // Animate links
        navLinks.forEach(link, index) => {
            if (link.style.animation){
                link.style.animation = ''
            } else{
                link.style.animation= navLinkFade 0.5s ease forwards ${index / 7+1.
            }  
        });

        // BURGER ANIMATION

        burger.classList.toggle('toggle');
    });

  
}

navSlide();

