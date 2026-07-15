const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(btn){
    // console.log(btn)
    btn.addEventListener('click',function(e){
        // console.log(e); - what event is happening (here it is mouse click)
        // console.log(e.target); - target area where it is happening (span buttons)

        if (e.target.id == 'purple') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'brown') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'blue') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'white') {
            body.style.backgroundColor = e.target.id
        }
    });
});