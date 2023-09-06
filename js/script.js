let amount = 0;
let dep = document.querySelector('.Deposit');
let bal = document.querySelector('.Balance');
let wit = document.querySelector('.Withdrawal');
let amo = document.querySelector('.Amount');
let amoWit = 'Withdraw'
let amoDep = 'Deposit'

dep.onclick = function(event){
    amount += 1000;
    alert('You Deposit 1000$ into you account');
    console.log('You Deposit 1000$ into you account');
    console.log('Now You Have:', amount + '$');
};

wit.onclick = function(event){
    if(amount >= 1000){
        amount -= 1000;
        alert('You Withdraw 1000$ from your account.' , 'Avaliable now:'+ amount)
        console.log('Balance:', amount+'$')

    }else{
        alert('Not enough funds')

    }
};

bal.onclick = function(event){
    console.log('You Have', amount , '$');
    alert(amount + '$');
    
};

amo.onclick = function(event){

    let userAnth = prompt('*Withdraw or Deposit*');
    if(userAnth == amoWit){
       let userAoWith = prompt('Whith Amount to Withdraw?');

       if(userAoWith <= amount){
        amount -= userAoWith;
        alert("All good");
        console.log('Balance:',amount + '$');

       }else{
        alert("Not enough funds");
       }
        

    }if(userAnth == amoDep){
        let userAoDep = prompt('Whith Amount to Deposit?');

        if(userAnth = Number){
            userAoDep = userAoDep * 1;
            amount += userAoDep;
            alert('All good')
            console.log('Balance:',amount + '$');
        }

    }
    
    else{
        alert('Error - try againe !!!')
    }

}





// let password =  '0000' ;
// let id = '1488' ;
// let userpassword = prompt('Enter password')

// if(userpassword == password){
//     console.log('password is correct')
//     let userID = prompt('Enter Bank ID')

//     if(userID == id ){
//         console.log('Congrats youre in')

        




//     }else{
//         console.log('BAN')
//     }
// }else{
//     console.log('Try again')
    
// }
