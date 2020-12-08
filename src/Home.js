import React from 'react'
import Corosil from './Corosil';
import "./Home.css"
import Product from "./Product"
import Footer from "./Footer.js"

 
function Home() {
    return (
        <div className="home">
            <div className="home_container">
<Corosil/>
            <div className="home_row">
            <Product
id="12345"
title="Iphone 12 Pro Max"
price={94900} 
image='https://m.media-amazon.com/images/I/71YlH-4MUQL._AC_UY218_.jpg'
rating={4} />




<Product
id="12346"
title="Iphone 11 Pro Max"
price={92000} 
image='https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY218_.jpg'
rating={5} />




<Product
id="12346"
title="Iphone 11 Dark Black"
price={64100} 
image='https://m.media-amazon.com/images/I/71i2XhHU3pL._AC_UY218_.jpg'
rating={4} />





<Product
id="12346"
title="Iphone X Black Edition"
price={42100} 
image='https://images-na.ssl-images-amazon.com/images/I/519KIlHA2wL._SL1024_.jpg'
rating={5} />





<Product
id="12346"
title="Iphone 11  Red Edition"
price={64100} 
image='https://m.media-amazon.com/images/I/71hh7cpWadL._AC_UY218_.jpg'
rating={5} />






</div>




<div className="home_row">
<Product
id="12347"
 title="ASUS-VivoBook/i7-10-gen/8gb/512ssd/Window 10/4gb-GTX-1650Ti"
 price={75800} 
 image='https://m.media-amazon.com/images/I/51c+NXm8zLL._AC_UY218_.jpg'
 rating={3} />

 

<Product
id="12348"
title="ASUS-ZenBook/i5-8-gen/8gb/512ssd/Window 10"
price={96200} 
image='https://m.media-amazon.com/images/I/71lT-zWEYkL._AC_UY218_.jpg'
rating={5} />



<Product
id="12349"
title="ASUS-VivoBook/i3-10-gen/8gb/256ssd/Window 10"
price={31500} 
image='https://m.media-amazon.com/images/I/71VaBJ6KWJL._AC_UY218_.jpg'
rating={4} />




<Product
id="12349"
title="ASUS-VivoBook/Ryzen-5 4500u/8gb/256ssd/Window 10"
price={55500} 
image='https://m.media-amazon.com/images/I/81mZ4eDWYkL._AC_UY218_.jpg'
rating={4} />



<Product
id="12349"
title="ASUS/Zephyrus/Window 10"
price={96500} 
image='https://m.media-amazon.com/images/I/91Oam4MucXL._AC_UY218_.jpg'
rating={5} />




<Product
id="12349"
title="ASUS TUF Gaming F15 Laptop 15.6 Ryzen 9 4900-H  "
price={96500} 
image='https://m.media-amazon.com/images/I/914o5xV1+8L._AC_UY218_.jpg'
rating={5} />


</div>



<div className="home_row">
<Product
id="12332"
title="ALEXA/ECO DOT (4th Gen)Bass Boosted"
price={9800} 
image='https://m.media-amazon.com/images/I/61KIy6gX-CL._AC_UY218_.jpg'
rating={2} />



<Product
id="12332"
title="Gizga Essentials G11 3rd Gen (Yello And White))"
price={3800} 
image='https://m.media-amazon.com/images/I/41ODBr4jpSL._AC_UL320_.jpg'

rating={1} />



<Product
id="12332"
title="Phone Holder"
price={800} 
image='https://m.media-amazon.com/images/I/519FYF2vLBL._AC_UL320_.jpg'
rating={2} />



<Product
id="12332"
title="iVoltaa 3.1A Dual Port Car Charger - Black"
price={1800} 
image='https://m.media-amazon.com/images/I/61wMHT0xwrL._AC_UL320_.jpg'
rating={2} />

<Product
id="12332"
title=" USB Car Charger for Apple & Android Devices"

price={9800} 
image='https://m.media-amazon.com/images/I/61SyZvT-lWL._AC_UL320_.jpg'
rating={2} />


<Product
id="12332"
title="GIZGA Multi-Angle Portable & Universal Stand 7-10  inches "

price={180} 
image='https://m.media-amazon.com/images/I/61zODtv7sfL._AC_UL320_.jpg
'
rating={2} />



</div>





<div className="home_row">
<Product
id="12332"
title="Hisense 507 L Frost-Free Multi-Door Refrigerator )"
price={48000} 
image='https://m.media-amazon.com/images/I/61Wj2ucDAsL._AC_UY218_.jpg'
rating={5} />



<Product
id="12332"
title="Haier 531 L Inverter Frost-Free Side-by-Side Refrigerato" 
price={78000} 
image='https://m.media-amazon.com/images/I/513Fzyfyn7L._AC_UY218_.jpg'

rating={5} />



<Product
id="12332"
title="LG 687 L Frost Free Side-by-Side Refrigerator"
price={80000} 
image='https://m.media-amazon.com/images/I/51OoCS1p7DL._AC_UY218_.jpg'
rating={4} />



<Product
id="12332"
title="Haier 565 L Inverter Frost-Free Side-By-Side Refrigerator (HRF-619SS, Silver)"
price={58000} 
image='https://m.media-amazon.com/images/I/815PMvtmzjL._AC_UY218_.jpg'
rating={2} />

<Product
id="12832"
title="Samsung 810 L Frost Free Side-by-Side Refrigerator"

price={259800} 
image='https://m.media-amazon.com/images/I/71O31clz6mL._AC_UY218_.jpg'
rating={5} />



<Product
id="12339"
title="Samsung 689 L Frost Free Side Inverter Technology Star Refrigerator"

price={59800} 
image='https://m.media-amazon.com/images/I/21xq087cPcL._AC_UY218_.jpg'
rating={4} />




</div>



<div className="home_row">
<Product
id="12332"
title="IFB 6 kg 5 Star Fully-Automatic Front Loading Washing Machine"
price={21000} 
image='https://m.media-amazon.com/images/I/611YswQRgfL._AC_UL320_.jpg'
rating={5} />



<Product
id="12332"
title="Bosch 7 kg Fully-Automatic Front Loading Washing Machine" 
price={28700} 
image='https://m.media-amazon.com/images/I/61JkCI7uuYL._AC_UL320_.jpg'

rating={4} />



<Product
id="12332"
title="Godrej 7 Kg 5 Star Fully-Automatic Top Loading Washing Machine"
price={13000} 
image='https://m.media-amazon.com/images/I/71rMjA79upL._AC_UL320_.jpg'
rating={4} />



<Product
id="12332"
title="Bosch 8 Kg Fully Automatic Front Load Washing Machine1 Loading Washing Machine"
price={38000} 
image='https://m.media-amazon.com/images/I/61NeYC+Pw6L._AC_UL320_.jpg'
rating={4} />

<Product
id="12832"
title="Samsung 8.0 Kg Inverter 5 star Fully-Automatic "

price={58000} 
image='https://m.media-amazon.com/images/I/81I4kwL0VUL._AC_UL320_.jpg'
rating={5} />



<Product
id="12339"
title="Samsung 8 kg Inverter Fully-Automatic Front "

price={32800} 
image='https://m.media-amazon.com/images/I/610etDXoL3L._AC_UL320_.jpg'
rating={4} />


</div>


<div className="foot"><p>This Is Made By Nikhil Boudh </p></div>

<Footer/>

</div>

        </div>
    )
}

export default Home;
