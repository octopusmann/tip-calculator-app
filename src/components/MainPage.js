import { useState } from "react";

function MainPage() {

const [billAmount, setBillAmount] = useState();
const [tipPercentage, setTipPercentage] = useState();




const handleInputChange = (event) => {
  
  setBillAmount(event.target.value);
  
}

const handleTipPercentageChange = (percentage) => {
  
  setTipPercentage(percentage);

}

const calculateTip = () => {

  if(!billAmount || !tipPercentage)
       return 0;

  const tipAmount = (billAmount / 100) *tipPercentage;
  console.log(`Calculated tip: ${tipAmount}`);

      return tipAmount.toFixed(2);

}


  return (
    <div class="main-page">
      <header>
      <h1 id="app-name">
        SPL&#8544; <br /> TTER
      </h1>
      </header>
      
      <div className="main-box">
        <div className="wrapped-box">
          <div className="bill-price">
            <label id="bill-label">Bill</label>
            <br />

            <input className="bill-input" 
            type="text" placeholder="$"
            value={billAmount}
            onChange={handleInputChange}
            
            />
          </div>



        
        <label id="tip-selection-label"> Select Tip %</label>

          <div className="tip-selection">
            <div className="tip-5"  onClick={()=> handleTipPercentageChange(5)}>5%</div>
            <div className="tip-10" onClick={()=> handleTipPercentageChange(10)}>10%</div>
            <div className="tip-15" onClick={()=> handleTipPercentageChange(15)}>15%</div>
            <div className="tip-25" onClick={()=> handleTipPercentageChange(25)}>25%</div>
            <div className="tip-50" onClick={()=> handleTipPercentageChange(50)}>50%</div>
            <div className="tip-custom">
            <input
            type="text"
            value={tipPercentage}
            onChange={(event) => handleTipPercentageChange(event.target.value)}
          />
              
               </div>
          </div>

          <div className="people-amount">
            <label id="number-label">Number of People</label>
            <br/> 

          </div>
          <input className="amount-people-input" type="text"/>
          

          <div class="right-column">
            <div className="tip-result">
              <div className="tip-per-person">
                <label id="tip-person-label">Tip Amount <br/>/person</label>
                <input className="tip-person-input" type="text" placeholder="$0.00" readOnly></input>
              </div>
              <div className="total-amount">
                <label id="total-people-label">Total <br/>/person</label>
                <input
                  className="total-amount-input"
                  type="text"
                  placeholder="$0.00"
                  readOnly
                ></input>
              </div>
            
              <button className="reset-button"> RESET</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
