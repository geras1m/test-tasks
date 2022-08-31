const btn = document.querySelector('.collapsible__button');
const hiddenTextBtn = document.querySelector('.collapsible__action--visible');
const visibleTextBtn = document.querySelector('.collapsible__action--hidden');
const content = document.querySelector('.collapsible__content');

let toggle = true;

visibleTextBtn.style.display = 'none';

function animateContent() {
    content.animate([
            {transform: 'translateX(10px)', opacity: '0'},
            {transition: 'all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)'},
            {transition: 'all .3s ease'},
        ],
        {
            duration: 800,
        }
    )
}

function animateBtn(){
    if(toggle){
        visibleTextBtn.animate([
                {transform: 'translateX(10px)', opacity: '0'},
                {transition: 'all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)'},
                {transition: 'all .3s ease'},
            ],
            {
                duration: 500,
            }
        )
    }else {
        hiddenTextBtn.animate([
                {transform: 'translateX(10px)', opacity: '0'},
                {transition: 'all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)'},
                {transition: 'all .3s ease'},
            ],
            {
                duration: 300,
            }
        )
    }
}

btn.addEventListener('click', () => {
    if (toggle) {
        animateBtn();
        hiddenTextBtn.style.display = 'none';
        visibleTextBtn.style.display = 'block';
        content.style.display = 'none';
    } else {
        animateBtn()
        animateContent();
        hiddenTextBtn.style.display = 'block';
        visibleTextBtn.style.display = 'none';
        content.style.display = 'block';
    }
    toggle = !toggle;
})

