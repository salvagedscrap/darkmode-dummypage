document.querySelector('.darkside').addEventListener('click', toggleDark)

function toggleDark(){
    document.querySelector('body').classList.toggle('darkmodeBody');

    document.querySelector('.cta-button').classList.toggle('darkmodeCta')


    document.querySelector('nav').classList.toggle('darkNav')
    document.querySelector('.darkside').classList.toggle('darksideDark')
}