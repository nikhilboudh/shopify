import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal.js"
import Checkoutproduct from "./Checkoutproduct.js"
import { Carousel } from 'react-responsive-carousel';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return(
        <div className="checkout">
            <div className="checkout_left ">
            <div class="carousel-wrapper">
            <Carousel infiniteLoop autoPlay>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/31/marketing/prime/detail_page/early-access._CB485972705_.jpg" />
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Kitchen/XCM_Manual_1291819_1499443_IN_1489217_in_sa_cookingdays_hero2_in_en_3563168_1500x600_1X_en_IN._CB415777590_.jpg" />
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Wireless/Nov2020_BAU/OnePlus/24th_WO_bank_offer/D18734439_BAU_OnePlus_8T_Mob_Hero_1242x450._CB415883821_SY500_.jpg" />
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/17thNov/S10plus/D18789295_IN_WLME_Samsung-Galaxy_S10_Mobile_hero_1242x450._CB415363490_SY250_.jpg" />
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Avicii/November/3rdWeek/Revised/Set2/D18765160_IN_WLME_OP_Nord_Diwali_BAU_banner_Mob_Hero_1242x450._CB416263017_SY500_.jpg" />
                </div>
            </Carousel>
        </div>   
          
          <div>

  <h3>Hello,{user?.email}</h3>  

              <h2 className="checkout_title">
                  Your Shopping Cart 
              </h2>
              {basket.map(item =>(
               <Checkoutproduct
             id={item.id}
             title={item.title}
             image={item.image}
             price={item.price}
             rating={item.rating}
               />
               ) )}

 

          </div>
            </div>

            <div className="chekout_right">
                <Subtotal/>

            </div>
        </div>
    )
}

export default Checkout;
