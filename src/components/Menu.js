import React from "react";
import Itemcard from "./Itemcard";
import data from "../data";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Cart";



const Menu = () => {
 
     return (
       <>
    
    
       <h1 className="text-center mt-3">Create your order</h1>
       <section className="py-4 container">
         <div className="row justify-content-center">
           {data.productData.map((item, index) => {
             return(

              <Itemcard img={item.img}
               title={item.title} 
               desc={item.desc}
                price={item.price}
                 item={item}
                  key={index}
                  />
          
             )

           })}

           

         </div>
       </section>
        <Cart/>
       </>
       
      );
     };

export default Menu;