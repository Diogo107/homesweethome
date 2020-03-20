const user = req.user
const today = Date.now()
let trial = new Date(now.setDate(now.getDate() + 60))
let blocked = req.user.blocked
function checkPayment() {
    if(user.payment === false && date.now < trial && user.paymentMethods === true){

    }
    else if (user.payment === false && date.now < trial && user.paymentMethods === false){
        blocked === true
    }



}

checkPayment();