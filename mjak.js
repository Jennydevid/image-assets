let month1, kon, qualities,badat, parents;
let month2, me, dream, crush, psnd, habit, choice; 
    //to input the birth month
function entrance(){ 
    month1 = prompt("Kab janme the??");
    if (month1 != null && month1 != ""){      
    month2 = month1.toLowerCase();
    document.getElementById('entrance').innerHTML = month2;
    document.getElementById('entrance').style.borderStyle = 'none';
    //setting birth month
    document.getElementById('btn2').innerHTML = month2;
    }
    else
    alert("Are you kidding me, enter the month 🙂!!"); 
}

function desclaimer(){
    document.getElementById('desclaim').style.display = "block";
}

function one(){
    if (month1 != null) {   
    kon = prompt("Aap hamare h kon??");
    document.getElementById('btn1').innerHTML = kon;
    document.getElementById('btn1').style.borderStyle = "none";
    document.getElementById('btn1').style.backgroundColor = "white";   
    }
    else
    alert("Are you kidding me, enter the month 🙂!!");
}
function two(){
    if(month1 != null){
        qualities = prompt("Here comes the chance to disclose your hidden qualities 😉!!");
        document.getElementById('btn3').innerHTML = qualities;
    }
    else
    alert("Are you kidding me, enter the month 🙂!!");
}
function three(){
    if (month1 != null){
        badat = prompt("Let us know what are you bad at 🙃??");
        document.getElementById('btn5').innerHTML = badat;
    }
    else
    alert("Are you kidding me, enter the month 🙂!!");
}
function four(){
    if (month1 != null){
        parents = prompt("Bata hi do tumhare parents kese h??");
        document.getElementById('btn6').innerHTML = parents;
    }
    else
    alert("Are you kidding me, enter the month 🙂!!");
}
function five(){
    if (month1 != null){
        me = prompt("What do you genuinely think of me??🙂");
        document.getElementById('btn7').innerHTML = me;
    }
    else
    alert("Are you kidding me, enter the month 🙂!!");
}
function six(){
    if (month1 != null){
        dream = prompt("Sapna kya hai tumhara??🙂");
        document.getElementById('btn8').innerHTML = dream;
    }
    else
    alert("Are you kidding me, enter the month 🙂!!");
}
function seven(){
    if (month1 != null){
        crush = prompt("Who has been in your wishlist ever??\n Naam Btao!!😉");
        document.getElementById('btn9').innerHTML = crush;
    }
    else
    alert("Are you kidding me, enter the month 🙂!!");
}
function eight(){
    if (month1 != null){
        psnd = prompt("Kon hai wo unlucky insan whom you dislike...mention the reason!!");
        document.getElementById('btn10').innerHTML = psnd;
    }
    else
    alert("Are you kidding me, enter the month 🙂!!");
}
function nine(){
    if (month1 != null){
        habit = prompt("Reveal this truth which must be known to you only!!");
        document.getElementById('btn11').innerHTML = habit;
    }
    else
    alert("Are you kidding me, enter the month 🙂!!");
}
function last(){
    if (month1 != null){
        let choice = confirm("Yes or No");
        if(choice){
        alert("You have agreed");
        alert("'A humble request'\nPlease be the way you can afford to be forever!!🙂")
        document.getElementById('btn12').style.display = "none";
        }
        else
        alert("You disagreed!!");
        document.getElementById('btn12').style.display = "none";
    }
else
alert("Are you kidding me, enter the month 🙂!!");
}
function tap_tap(){
    if (month1 != null){
    alert("Jyada jhut mat bolna 😆!!"); 
    }
    else
    alert("Are you kidding me, enter the month 🙂!!");
}
function footer(){
    if(month1 != null){
        document.getElementById('answers').innerHTML = "1.You are a "+kon+" of this mess creator!!.\n"+"\n2.You are a "+month1+" born person with"+qualities+"!!"+"\n3.You are bad at "+badat+"!!"+"\n4. You appreciate your parents as "+parents+"!!"+"\n5. You think I am "+me+"!!"+"\n6.You dream of "+dream+"!!"+"\n7. Your crush name is "+crush+" ,if you have mentioned!!"+"\n8.You dislike "+psnd+" !!"+"\n9.Your habits: "+habit+"!!"+"\nHope you Enjoyed!!😉\n Thankyou!!"
    }
    else
    alert("Are you kidding me, enter the month 🙂!!");
}