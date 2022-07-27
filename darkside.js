document.querySelector('.darkside').addEventListener('click', toggleDark)

function toggleDark(){
    document.querySelector('body').classList.toggle('darkmodeBody');

    document.querySelector('.cta-button').classList.toggle('darkmodeCta')


    document.querySelector('nav').classList.toggle('darkNav')
    document.querySelector('.darkside').classList.toggle('darksideDark')
}

//here's a test comment for the sake of the pull request
