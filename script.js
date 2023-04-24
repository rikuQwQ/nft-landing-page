// const circles = document.querySelectorAll('.circle');
// const circles2 = document.querySelectorAll('.circle--2');
// const circles3 = document.querySelectorAll('.circle--3');
// $(document).ready(circle())

// function circle(){
//     let tI = 1000;
//     circles.forEach((circ) => {
//         setTimeout(function(){
//             circ.classList.remove('disappear');
//             circ.classList.add('open');
//             setTimeout(function(){
//                 setTimeout(circ.classList.add('disappear'), 2000)
//                 circ.classList.remove('open');
//             }, 1500)
//         }, tI);
//         tI += 1000;
//     });
//     setTimeout(circle, 5000)
// }

document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab__content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

const accordion = document.querySelectorAll(".accordion__button");

for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } 
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    })
}






































// const circles = document.querySelectorAll('.round');
// $(document).ready(circle())

// function circle(){
// //     
// }

// let timeInterval = 1000;
//     let timeInterval2 = 2500;
    
//     setTimeout(function(){
//         $('div.round#c1').removeClass('disappear');
//         $('div.round#c1').addClass('open');
//     }, timeInterval);
//     timeInterval += 400;
//     timeInterval2 += 400;


//     setTimeout(function(){
//         $('div.round#c1').removeClass('open');
//     }, timeInterval2)
//     setTimeout(function(){
//         $('div.round#c1').addClass('disappear');
//     }, timeInterval2)
//     timeInterval += 400;
//     timeInterval2 += 400;


//     setTimeout(function(){
//         $('div.round#c2').addClass('open');
//         $('div.round#c2').removeClass('disappear');
//     }, timeInterval);
//     setTimeout(function(){
//         $('div.round#c2').removeClass('open');
//     }, timeInterval2)
//     timeInterval += 400;
//     timeInterval2 += 400;


//     setTimeout(function(){
//         $('div.round#c3').addClass('open');
//         $('div.round#c3').removeClass('disappear');
//     }, timeInterval);
//     setTimeout(function(){
//         $('div.round#c3').removeClass('open');
//     }, timeInterval2)
//     timeInterval += 400;
//     timeInterval2 += 400;


//     setTimeout(function(){
//         $('div.round#c4').addClass('open');
//         $('div.round#c4').removeClass('disappear');
//     }, timeInterval);
//     setTimeout(function(){
//         $('div.round#c4').removeClass('open');
//     }, timeInterval2)
//     timeInterval += 400;
//     timeInterval2 += 400;
    
//     setTimeout(function(){
//         $('div.round#c5').addClass('open');
//         $('div.round#c5').removeClass('disappear');
//     }, timeInterval);
//     setTimeout(function(){
//         $('div.round#c5').removeClass('open');
//     }, timeInterval2)
//     // setTimeout(function(){
//     //     circles.forEach((circ) => {
//     //         circ.classList.add('disappear')
//     //     });
//     // }, 4800);
    
//     setTimeout(circle, 5000);
// }
// function open(){
//     circles.forEach((circ) => {
//         circ.classList.add('disappear')
//         circ.classList.remove('open')
//     });


