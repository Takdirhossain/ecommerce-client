import "./flashsale.css";
import watch1 from "../../assets/4113c4244f6c03abe5d20e5316dff387.jpg"
import Countdown from "react-countdown";

const Flashsale = () => {

  return (
    <div>
      <div className="flashsalewrapper">
      <h2 className="flashsaletiitle">Flash Sale</h2>
        <div className="flasesaleinfo">
          <div className="flashsalecounter">
            <h2 className="ordernow">Order Now</h2>
           <h2 className="ordernow" > End in <Countdown date={Date.now() + 96780000} /></h2>
          </div>
          <div>
            <button className="seemorebtn">See More</button>
          </div>
        </div>
        <hr />
        <div className="flashsale">
            <div className="flashsaleproductinfo">
                <img src={watch1} alt="" />
                <h4>Man best beautiful watch in low price</h4>
                <h3>105Tk</h3>
               <p> <s>205</s> -50%</p>
            </div>
            <div className="flashsaleproductinfo">
                <img src={watch1} alt="" />
                <h4>Man best beautiful watch in low price</h4>
                <h3>105Tk</h3>
               <p> <s>205</s> -50%</p>
            </div>
            <div className="flashsaleproductinfo">
                <img src={watch1} alt="" />
                <h4>Man best beautiful watch in low price</h4>
                <h3>105Tk</h3>
               <p> <s>205</s> -50%</p>
            </div>
            <div className="flashsaleproductinfo">
                <img src={watch1} alt="" />
                <h4>Man best beautiful watch in low price</h4>
                <h3>105Tk</h3>
               <p> <s>205</s> -50%</p>
            </div>
            <div className="flashsaleproductinfo">
                <img src={watch1} alt="" />
                <h4>Man best beautiful watch in low price</h4>
                <h3>105Tk</h3>
               <p> <s>205</s> -50%</p>
            </div>
            <div className="flashsaleproductinfo">
                <img src={watch1} alt="" />
                <h4>Man best beautiful watch in low price</h4>
                <h3>105Tk</h3>
               <p> <s>205</s> -50%</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Flashsale;