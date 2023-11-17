import {loadStripe } from "@stripe/react-stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Payment from "./Payment"


const PublicKey = 'pk_test_51O9TXmSBof8o3CvucVLuBWxDJ2FJq3RX0p6gUZVMQuWobtfTjTHQBZydApJVWJLPo5Fkw0Pq8PnbG6Tu7Gzgegp800ufyYI5jf'
    const Promise = loadStripe(PublicKey)

   

    export default function StripeContainer(){
        return (
            <Elements stripe={Promise}>
                <Payment/>
            </Elements>
        )
    }