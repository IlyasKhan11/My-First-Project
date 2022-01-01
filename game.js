'use strict';

//selectors
const playerChoiceDisplay=document.querySelector('.rps_player')
const rock_btn=document.querySelector('.rock_btn')
const paper_btn=document.querySelector('.paper_btn')
const sci_btn=document.querySelector('.sci_btn')
const game_btn=document.querySelectorAll('.game_btn')
const message=document.querySelector('.message')
//computer selcetors
const pcChoiceDisplay=document.querySelector('.pc_choice_display')

// console.log(game_btn.length);

let player_choice;
let pc_choice;

for (let i=0;i<game_btn.length;i++){
    //human logic--------------------------------------------
    game_btn[i].addEventListener('click',function(){


        // console.log(`pressed${game_btn[i].textContent}`);
        //if rock
        if (game_btn[i].textContent=='R'){
            console.log('Rock');
            player_choice='Rock'
            playerChoiceDisplay.src='./img/rock.png'
            console.log(player_choice);
        }
        //if paper
        else if(game_btn[i].textContent=='P'){
            player_choice='Paper'
            playerChoiceDisplay.src='./img/paper.png'
            console.log(player_choice);

        }
        //if scissors
        else if(game_btn[i].textContent=='S'){
            player_choice='scissors'
            playerChoiceDisplay.src='./img/scissors.png'
            console.log(player_choice);

        }


        console.log(game_btn[i].textContent);

        //computer Logic----------------------------------------------------
        let random_num=Math.round(Math.random()*2)
        // console.log(random_num);
        pcChoiceDisplay.src=`./img/move-${random_num}.png`
        
        if(random_num==0){
            pc_choice='paper'
        }
        else if(random_num==1){
            pc_choice='Rock'
        }
        else if(random_num==2){
            pc_choice='scissors'
        }

        // console.log(`pc choice:${pc_choice}`);

        //Logic of wining and losing the game for both player and pc
        if (player_choice=='Rock' && pc_choice=='paper'){
            message.textContent='Computer Won'
        }
        else if(player_choice=='Rock' && pc_choice=='scissors'){
            message.textContent='Player Won'
        }
        else if(player_choice=='Rock' && pc_choice=='Rock'){
            message.textContent='Its a Tie'
        }

        
        if(player_choice=='Paper' && pc_choice=='Rock'){
            message.textContent='Player Won'
            console.log('checked');
        }
        else if(player_choice=='Paper' && pc_choice=='paper'){
            message.textContent='Its a Tie'
            console.log('checked');

        }
        else if(player_choice=='Paper' && pc_choice=='scissors'){
            message.textContent='Computer Won'
            console.log('checked');
        }


        if(player_choice=='scissors' && pc_choice=='Rock'){
            message.textContent='Computer Won'
            console.log('checked');
        }
        else if(player_choice=='scissors' && pc_choice=='paper'){
            message.textContent='Player Won'
            console.log('checked');

        }
        else if(player_choice=='scissors' && pc_choice=='scissors'){
            message.textContent='Its a Tie'
            console.log('checked');
        }
        


        
        
    })
}

