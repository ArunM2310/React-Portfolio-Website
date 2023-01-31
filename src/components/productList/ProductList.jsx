import "./productList.css";

import Page1 from "../../img/1.png";
import Page2 from "../../img/2.png";
import Page3 from "../../img/3.png";
import Page4 from "../../img/4.png";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Lama</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
     
      <div className="pl-list">
      <div className="p">
       <div className="p-browser">
         <div className="p-circle"></div>
         <div className="p-circle"></div>
         <div className="p-circle"></div>
       </div>
      <a href="f" target="_blank" rel="noreferrer">
        <img src={Page1} alt="hi" className="p-img" />
     </a>
   </div>
   <div className="p">
       <div className="p-browser">
         <div className="p-circle"></div>
         <div className="p-circle"></div>
         <div className="p-circle"></div>
       </div>
      <a href="f" target="_blank" rel="noreferrer">
        <img src={Page2} alt="hi" className="p-img" />
     </a>
   </div>
   <div className="p">
       <div className="p-browser">
         <div className="p-circle"></div>
         <div className="p-circle"></div>
         <div className="p-circle"></div>
       </div>
      <a href="f" target="_blank" rel="noreferrer">
        <img src={Page3} alt="hi" className="p-img" />
     </a>
   </div>
   <div className="p">
       <div className="p-browser">
         <div className="p-circle"></div>
         <div className="p-circle"></div>
         <div className="p-circle"></div>
       </div>
      <a href="f" target="_blank" rel="noreferrer">
        <img src={Page2} alt="hi" className="p-img" />
     </a>
   </div>
   <div className="p">
       <div className="p-browser">
         <div className="p-circle"></div>
         <div className="p-circle"></div>
         <div className="p-circle"></div>
       </div>
      <a href="f" target="_blank" rel="noreferrer">
        <img src={Page1} alt="hi" className="p-img" />
     </a>
   </div>
     <div className="p">
       <div className="p-browser">
         <div className="p-circle"></div>
         <div className="p-circle"></div>
         <div className="p-circle"></div>
       </div>
      <a href="f" target="_blank" rel="noreferrer">
        <img src={Page4} alt="hi" className="p-img" />
     </a>
   </div>
   
      </div>
      
    </div>
  );
};

export default ProductList;
