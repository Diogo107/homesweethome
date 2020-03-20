import { create as createPurchase } from './../../Services/purchase';
const user = req.user
const id = req.user._id
const today = Date.now()
let trial = new Date(now.setDate(now.getDate() + 60))
let blocked = req.user.blocked
function checkPayment() {
    if(user.payment === false && date.now < trial && user.paymentMethods === true){
       
       
        const find = async (id) => {  
          try{
            const cart = await Cart.findOne({user : id})
           const purchase = await createPurchase(cart.porducts)
          }
          catch{
              error
          }}


    }else if (user.payment === false && date.now < trial && user.paymentMethods === false){
        const cahnge = async (id) => {  
            try{
              const user = await User.findByIdAndUpdate(id, {blocked : true})
                         }
            catch{
                error
            }}
                      
    }


}

checkPayment();