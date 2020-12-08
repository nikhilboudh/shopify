import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



function Corosil() {
    return (
                    <div class="carousel-wrapper">
            <Carousel infiniteLoop autoPlay>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/Hdpns_Gw_1500x600._CB415716258_.jpg" />
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Cnnjpp/OnePlus/OnePlus_BAU/GW_week_48/NonHDfc/D18887026_IN_WLD_BAU_OnePlus_Family_DesktopHero_1500x600._CB414551624_.jpg" />
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Black_friday/GW/Updated/talhero_1500x600._CB414379446_.jpg" />
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/under1499store/english/Gateway/updated/V242338866_IN_CEPC_Under-1499_store_Graphics_1500x600._CB406499464_.jpg" />
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Shoes/November/SSW/GW/Super-saver-1500x600._CB415527061_.jpg" />
                </div>
            </Carousel>
        </div>
    )
}

export default Corosil;


