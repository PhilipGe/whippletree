import React from "react";
import { Button } from "../../Button";
import { ArrowChevronDown1 } from "../../icons/ArrowChevronDown1";
import "./style.css";
import { Link } from "react-router-dom";
import { NavBar } from "../../../NavBar/NavBar";
import { NavBarBottom } from "../../../NavBar/NavBarBottom";
import { BookAnEventButton } from "../../../NavBar/BookAnEventButton";

function Group() {
  return (
    <div className="group">
      <NavBarBottom />
    </div>
  );
}

function BottomText() {
  return (
    <div>
      <p className="element-info">
        <span className="text-wrapper-5">
          <br />
          <br />
        </span>
        <span className="text-wrapper-6">
          603-323-7119
          <br />
        </span>
        <a
          href="mailto:info@whippletreewinery.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-wrapper-7">info@whippletreewinery.com</span>
        </a>
      </p>
      <p className="p">
        Copyright © 2023 Whippletree Winery | All Rights Reserved | Privacy
        Policy
      </p>
      <p className="whippletree-winery">
        Whippletree Winery <br />
        372 Turkey Street <br />
        Tamworth, NH 03886 <br />
        (860) 335-3667
      </p>
      <div className="text-wrapper-8">Hours</div>
      <p className="friday-sunday">
        Friday - Sunday: <br />
        12:00 - 6:00 PM
      </p>
    </div>
  );
}

function BookEventButton() {
  return (
    <div className="frame-wrapper">
      <BookAnEventButton />
    </div>
  );
}

function Form() {
  return (
    <div>
      <textarea className="container input-text" id='note-area'/>
      <div className="text-wrapper-11">Add Note</div>
      <input className="container-2 input-text" id='phone-number' />
      <div className="text-wrapper-12">Phone number</div>
      <input className="container-3 input-text" id='email-address' />
      <div className="text-wrapper-14">Email Address</div>
      <input className="container-6 input-text" id='number-of-persons'/>
      <div className="text-wrapper-18">Number of Person</div>
      <input className="container-7 input-text" id='your-name'/>
      <div className="text-wrapper-20">Your Name</div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="calendar">
      <div className="overlap-group">
        <div className="ellipse" />
        <div className="date">
          <div className="text-wrapper-21">September 2023</div>
          <img
            className="vector"
            alt="Vector"
            src={require("../../img/vector.svg")}
          />
          <img
            className="vector-2"
            alt="Vector"
            src={require("../../img/vector-1.svg")}
          />
          <div className="group-2">
            <div className="group-3">
              <div className="text-wrapper-22">S</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-23">2</div>
                  <div className="text-wrapper-24">9</div>
                  <div className="text-wrapper-25">16</div>
                  <div className="text-wrapper-26">23</div>
                  <div className="text-wrapper-27">30</div>
                </div>
              </div>
            </div>
            <div className="group-4">
              <div className="text-wrapper-28">M</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-23">3</div>
                  <div className="text-wrapper-29">10</div>
                  <div className="text-wrapper-25">17</div>
                  <div className="text-wrapper-26">24</div>
                  <div className="text-wrapper-27">31</div>
                </div>
              </div>
            </div>
            <div className="group-5">
              <div className="text-wrapper-30">T</div>
              <div className="div-wrapper">
                <div className="overlap-group-3">
                  <div className="text-wrapper-31">4</div>
                  <div className="text-wrapper-29">11</div>
                  <div className="text-wrapper-25">18</div>
                  <div className="text-wrapper-26">25</div>
                </div>
              </div>
            </div>
            <div className="group-6">
              <div className="text-wrapper-32">W</div>
              <div className="group-7">
                <div className="overlap-group-3">
                  <div className="text-wrapper-33">5</div>
                  <div className="text-wrapper-29">12</div>
                  <div className="text-wrapper-25">19</div>
                  <div className="text-wrapper-26">26</div>
                </div>
              </div>
            </div>
            <div className="group-8">
              <div className="text-wrapper-30">T</div>
              <div className="div-wrapper">
                <div className="overlap-group-3">
                  <div className="text-wrapper-31">6</div>
                  <div className="text-wrapper-29">13</div>
                  <div className="text-wrapper-25">20</div>
                  <div className="text-wrapper-26">27</div>
                </div>
              </div>
            </div>
            <div className="group-9">
              <div className="text-wrapper-34">F</div>
              <div className="div-wrapper">
                <div className="overlap-group-3">
                  <div className="text-wrapper-31">7</div>
                  <div className="text-wrapper-29">14</div>
                  <div className="text-wrapper-25">21</div>
                  <div className="text-wrapper-26">28</div>
                </div>
              </div>
            </div>
            <div className="group-10">
              <div className="text-wrapper-30">S</div>
              <div className="group-11">
                <div className="overlap-group-2">
                  <div className="text-wrapper-31">1</div>
                  <div className="text-wrapper-24">8</div>
                  <div className="text-wrapper-25">15</div>
                  <div className="text-wrapper-26">22</div>
                  <div className="text-wrapper-27">29</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="text-wrapper-35">19.00 PM</div>
              <img
                className="polygon"
                alt="Polygon"
                src={require("../../img/polygon-2.svg")}
              />
            </div>
          </div>
          <div className="text-wrapper-36">Select Time:</div>
        </div>
      </div>
    </div>
  );
}

function ContactUs() {
  return (
    <div>
      <p className="element">
        <span className="text-wrapper-37">
          <br />
          <br />
        </span>
        <span className="text-wrapper-38">
          603-323-7119
          <br />
        </span>
      </p>
      <p className="text-wrapper-39">Call Us For Event Booking</p>
      <img
        className="material-symbols"
        alt="Material symbols"
        src={require("../../img/material-symbols-call-sharp.svg")}
      />
      <img
        className="mdi-email-edit"
        alt="Mdi email edit"
        src={require("../../img/mdi-email-edit-outline.svg")}
      />
    </div>
  );
}

function ContentAndFooter() {
  return (
    <div className="overlap">
      <div className="rectangle" />
      <div className="rectangle-2" />
      <div className="rectangle-3" />
      <div className="text-wrapper">info@whippletreewinery.com</div>
      <div className="rectangle-4" />
      <div className="text-wrapper-2">Contact Us</div>
      <Group></Group>
      <BottomText></BottomText>
      <BookEventButton></BookEventButton>
      <div className="rectangle-7" />
      <img
        className="img"
        alt="Group"
        src={require("../../img/group-54-1.png")}
      />
      <Button
        className="button-instance"
        divClassName="design-component-instance-node"
        icon={false}
        size="large"
        text="Make A Reservation"
        type="primary"
      />
      <Form></Form>
      <Calendar></Calendar>
      <ContactUs></ContactUs>
    </div>
  );
}

// function NavBar() {
//   return (
//     <div className="navbar">
//       {/* <div className="text-wrapper-41"> <Link to="/home">Home </Link></div>
//       <div className="text-wrapper-42"><Link to="/online-wine-store">Online Wine Store</Link></div>
//       <div className="text-wrapper-42"><Link to="/book-an-event">Wine club</Link></div>
//       <div className="text-wrapper-42"><Link to="/visit">Visit</Link></div>
//       <div className="text-wrapper-43"><Link to="/our-heritage">Our Heritage</Link></div>
//       <div className="text-2">{""}</div> */}

//       <div className="text-wrapper-41"> Home</div>
//       <div className="text-wrapper-42">Online Wine Store </div>
//       <div className="text-wrapper-42">Wine club</div>
//       <div className="text-wrapper-42">Visit</div>
//       <div className="text-wrapper-43">Our Heritage</div>
//       <div className="text-2">{""}</div>
//     </div>
//   );
// }

function HeaderImage() {
  return (
    <div className="overlap-3">
      <div className="rectangle-8" />
      <div className="text">{""}</div>
      <img
        className="ant-design-user"
        alt="Ant design user"
        src={require("../../img/ant-design-user-outlined.svg")}
      />
      <img
        className="bytesize-location"
        alt="Bytesize location"
        src={require("../../img/bytesize-location.svg")}
      />
      <img className="line" alt="Line" src={require("../../img/line-2.svg")} />
      <div className="group-12">
      </div>
      <img
        className="frame-3"
        alt="Frame"
        src={require("../../img/frame-890.svg")}
      />
      <NavBar></NavBar>
      <div className="text-wrapper-44">Book An Event</div>
    </div>
  );
}

export const BookAnEvent = () => {
  return (
    <div className="book-an-event">
      <div className="div-2">
        <ContentAndFooter></ContentAndFooter>
        <HeaderImage></HeaderImage>
        <div className="image" />
      </div>
    </div>
  );
};
