import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Collapse } from "antd";
import "./PaymentScreen.css";
import backarrow from "../../Images/backarrow.svg";
import Settings from "../../Images/Settings.svg";
import Wifi from "../../Images/Wifi.svg";
import location from "../../Images/location.svg";
import doctor from "../../Images/doctor.svg";
import withdrawal from "../../Images/withdrawal.svg";
import googlepay from "../../Images/googlepay.svg";
import phonepay from "../../Images/phonepay.svg";
import paytm from "../../Images/paytm.svg";
import amazon from "../../Images/amazon.svg";
import freecharge from "../../Images/freecharge.svg";
import mobi from "../../Images/mobi.svg";
import Bank from "../../Images/Bank.svg";


const { Panel } = Collapse;
const PaymentScreen = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <div className="container-fluid container-color">
        <div className="d-flex row-width">
          <div className=" head-style">
            <img src={backarrow} />
          </div>
          <div className="cities-div">
            <Collapse
              expandIconPosition="right"
              defaultActiveKey={["1"]}
              onChange={onChange}
            >
              <Panel header="Delhi" key="1">
                <div className="d-flex clinic">
                  <div className="d-flex">
                    <div className="icon-style">
                      <img src={location} />
                    </div>
                    <div>
                      <div className="clinic-count">50</div>
                      <div className="clinic-name">Cities</div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="icon-style">
                      <img src={doctor} />
                    </div>
                    <div>
                      <div className="clinic-count">60</div>
                      <div className="clinic-name">Clinics</div>
                    </div>
                  </div>
                </div>
              </Panel>
            </Collapse>
          </div>
          <div className=" head-style">
            <img src={Settings} />
          </div>
        </div>
        <div className="card-design">
          <div className="card-div d-flex">
            <div className="cardname">Evelyn Tylor</div>
            <div>
              <img src={Wifi} />
            </div>
          </div>
          <div className="card-no">3215 6584 8468 5888</div>
          <div className="d-flex card-div">
            <div className=" card-details">
              <span>Expire</span>
              <p>12/24</p>
            </div>
            <div className=" card-details">
              <span>Cvv</span>
              <p>229</p>
            </div>
            <div className=" card-details">
              <div className="c-name">VISA</div>
            </div>
          </div>
        </div>
        <div className="choose-pay">Choose Payment</div>
        <div className="method">Method</div>
        <div className="selected-payment-method">
          <div className="selected-payment-name ">Pay Cash</div>
          <div className="payment-icons">
            <img src={withdrawal}/>
          </div>

        </div>
        <div className="payment-method">
          <div className="payment-name">UPI</div>
          <div className="payment-icons-amazon">
            <img src={amazon}/>
          </div>
          <div className="payment-icons-gpay">
            <img src={googlepay}/>
          </div>
          <div className="payment-icons-pay">
            <img src={phonepay}/>
          </div>
          <div className="payment-icons">
            <img src={paytm}/>
          </div>

        </div>
        <div className="payment-method">
          <div className="payment-name">Wallet</div>
          <div className="payment-icons-pay">
            <img src={freecharge}/>
          </div>
          <div className="payment-icons">
            <img src={mobi}/>
          </div>

        </div>
        <div className="payment-method">
          <div className="payment-name">Net Banking</div>
          <div className="payment-icons">
            <img src={Bank}/>
          </div>

        </div>

      </div>
    </>
  );
};

export default PaymentScreen;
