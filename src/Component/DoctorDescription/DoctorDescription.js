import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Collapse, Progress } from "antd";
import "./DoctorDescription.css";
import whitebackarrow from "../../Images/whitebackarrow.svg";
import whiteSettings from "../../Images/whiteSettings.svg";
import location from "../../Images/location.svg";
import doctor from "../../Images/doctor.svg";
import doctorimg from "../../Images/doctorimg.svg";
import Star from "../../Images/Star.svg";
import user from "../../Images/user.svg";
import Calendar from "../../Images/Calendar.svg";
import nurse from "../../Images/nurse.svg";
import implant from "../../Images/implant.svg";
import braces from "../../Images/braces.svg";
import root from "../../Images/root.svg";
import extraction from "../../Images/extraction.svg";
import Best from "../../Images/Best.svg";
import reviewuser from "../../Images/reviewuser.svg";
import Quotes from "../../Images/Quotes.svg";
import Blackstar from "../../Images/Blackstar.svg";

const { Panel } = Collapse;
const DoctorDescriptionScreen = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="doctor-screen">
      <div className="container-fluid doctorscreen">
        <div className="dflex">
          <div className=" head-style">
            <img src={whitebackarrow} />
          </div>
          <div className="doc-div">
            <Collapse
              expandIconPosition="right"
              defaultActiveKey={["1"]}
              onChange={onChange}
            >
              <Panel header="Delhi" key="1">
                <div className="dflex clinic">
                  <div className="dflex">
                    <div className="icon-style">
                      <img src={location} />
                    </div>
                    <div>
                      <div className="clinic-count">50</div>
                      <div className="clinic-name">Cities</div>
                    </div>
                  </div>
                  <div className="dflex">
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
            <img src={whiteSettings} />
          </div>
        </div>
        <div className="dflex doc-detil">
          <div className="doctor-name">
            <span className="doc-span-name">Dr Johnathan Gray</span>
            <span className="doc-crse">(BDS, MDS)</span>
            <div className="doc-spe">Dental Specialist</div>
          </div>

          <div>
            <img src={doctorimg} className="doc-img" />
          </div>
        </div>

        <div className="dflex doc-detil">
          <div className="rating-card dflex">
            <div>
              <img src={Star} />
            </div>
            <div className="rate-value">4.5 out of 5.0</div>
          </div>
          <div className="pat-rating-card dflex">
            <div>
              <img src={user} />
            </div>
            <div className="rate-value">577</div>
            <div className="review-count">Patients Review</div>
          </div>
        </div>
        <div className="about">
          <h6>About</h6>
          <h1>Doctor</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>

        <div className="dflex">
          <div className="doccards">
            <img src={Calendar} />
            <div className="exp-no">6+</div>
            <div className="exp-title">Years Exp</div>
          </div>
          <div className="doccards">
            <img src={nurse} />
            <div className="exp-no">8K+</div>
            <div className="exp-title">Patients</div>
          </div>
          <div className="doccards">
            <img src={Best} />
            <div className="exp-no">20+</div>
            <div className="exp-title">Awards</div>
          </div>
        </div>
      </div>
      <div className="container-fluid specialitycreen">
        <div className="speciality-name">Doctors</div>
        <div className="dflex ">
          <div className="speciality-title">Speciality</div>
          <Progress
            strokeColor={{
              from: "#AD37E0",
              to: "#EE2B3B ",
            }}
            percent={50}
            showInfo={false}
            status="active"
          />
        </div>
        <div className="specard dflex">
          <div className="speciality-cards ">
            <div className="spec-border">
              <div className="speciality-div">
                <img src={implant} />
              </div>
            </div>
          </div>
          <div className="speciality-cards ">
            <div className="spec-border">
              <div className="speciality-div">
                <img src={braces} />
              </div>
            </div>
          </div>
          <div className="speciality-cards">
            <div className="spec-border">
              <div className="speciality-div">
                <img src={root} />
              </div>
            </div>
          </div>
          <div className="speciality-cards ">
            <div className="spec-border">
              <div className="speciality-div">
                <img src={extraction} />
              </div>
            </div>
          </div>
        </div>

        <div className="dflex spectite">
          <div>Implant</div>
          <div>Implant</div>
          <div>Implant</div>
          <div>Implant</div>
        </div>
      </div>
      <div className="container-fluid reviewscreen">
        <div className="speciality-name">Read Patients</div>
        <div className="dflex ">
          <div className="speciality-title">Review</div>
          <Progress
            strokeColor={{
              from: "#AD37E0",
              to: "#EE2B3B ",
            }}
            percent={50}
            showInfo={false}
            status="active"
          />
        </div>
        <div className="reviewcard">
          {/* <div className="reviewborder"> */}
          <div className="dflex ">
            <img src={reviewuser} className="reviewuser" />
            <div className="reviw-name">
              <div>Ruth Frazier</div>
              <div className="d-flex ratecard">
                <img src={Blackstar} />
                <div>4.5</div>
              </div>
            </div>
            <img src={Quotes} className="quotes" />
          </div>
          <div className="review-desc">
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default DoctorDescriptionScreen;
