let pop_msg=document.createElement("div");
let pop_btn=document.createElement("button");
const body=document.querySelector("body");

// function close_pop(){
//     close_btn.remove();
// }
    setTimeout(()=>{
        body.prepend(pop_msg);
        pop_msg.innerHTML=
        `<div>
        <button class="pop_msg_btn" onclick="close_pop()">X</button>
        <h2 style="color:darkgoldenrod;">Get Your's Now !</h2>
        <p id="msg_para" style="letter-spacing:0.1rem">You can just get your's portfolio in Hand.<br>
        Portfolio will be Ready ASAP.<br>
        We provide the Best of the market Services.<br>
        for </p><h3>FREE..!</h3>
        <button id="yes_btn">Try now</button>
        </div>
        <div>
        </div>`;
        pop_msg.classList.add("pop_msg");
        // pop_btn.classList.add("pop_msg_btn");
        // pop_msg.innerText="Would You like to have Your's PortFolio Now!!";
        // pop_btn.innerText="X";

    },200000)

    function close_pop(){
        pop_msg.remove();
    }

    const testimonials=document.querySelector("review_box_parent");

    $(document).ready(function(){
        $('.carousel').carousel({
            padding:200
        });
        autoplay();
        function autoplay() {
            $(".carousel").carousel("next");
            setTimeout(autoplay,4500);
        }
      });
