import React from "react";
import "./style.css";
import { NavBar } from "../../../NavBar/NavBar";

function FirstInfoSlide() {
  return (
    <div className="overlap">
      <div className="rectangle" />
      <div className="text-wrapper">Overview</div>
      <p className="we-pride-ourselves">
        We pride ourselves in having a wine for everyone and every palate. It is
        our love for finding your perfect drink that drives our success. Sit and
        sip in our comfy cottage or outdoor patio area.
      </p>
      <p className="p">
        A Guided Journey Unveiling The Wine Enthusiast Within Everyone
      </p>
      <img className="line" alt="Line" src={require("../../img/line-5.svg")} />
      <img
        className="mask-group"
        alt="Mask group"
        src={require("../../img/mask-group.png")}
      />
    </div>
  );
}

// function NavBar() {
//   return (
//     <div className="navbar">
//       <div className="text-wrapper-2">Home</div>
//       <div className="text-wrapper-3">Online Wine Store</div>
//       <div className="text-wrapper-3">Wine club</div>
//       <div className="text-wrapper-4">Visit</div>
//       <div className="text-wrapper-5">Our Heritage</div>
//       <div className="text-2">{""}</div>
//     </div>
//   );
// }

function HeaderImage() {
  return (
    <div className="overlap-group">
      {/* <img className="img" alt="Image" src={require("../../img/image-2.png")} /> */}
      <div className="rectangle-2" />
      <div className="text">{""}</div>
      <img
        className="ant-design-user"
        alt="Ant design user"
        src={require("../../img/ant-design-user-outlined-3.svg")}
      />
      <img
        className="bytesize-location"
        alt="Bytesize location"
        src={require("../../img/bytesize-location-3.svg")}
      />
      <NavBar></NavBar>
      <img
        className="line-2"
        alt="Line"
        src={require("../../img/line-2.svg")}
      />
      <div className="group">
        <div className="overlap-group-2">
          <div className="frame">
            <div className="text-wrapper-6">Search Wines</div>
            <img
              className="carbon-search"
              alt="Carbon search"
              src={require("../../img/carbon-search-1.svg")}
            />
          </div>
          <div className="rectangle-3" />
        </div>
      </div>
      <img
        className="frame-2"
        alt="Frame"
        src={require("../../img/frame-890-3.svg")}
      />
      <div className="overlap-wrapper">
        <div className="see-menu-wrapper">
          <div className="see-menu">SEE MENU</div>
        </div>
      </div>
      <p className="text-wrapper-7">
        A winery rooted in local tradition and the natural beauty of the lakes
        region
      </p>
    </div>
  );
}

function Overlap2() {
  return (
    <div className="overlap-2">
      <p className="whippletree-winery">
        <span className="span">
          Whippletree Winery
          <br />
        </span>
        <span className="text-wrapper-8">
          372 Turkey Street, Tamworth, N.H. 03886
          <br />
        </span>
        <a href="tel:8603353667" rel="noopener noreferrer" target="_blank">
          <span className="text-wrapper-9">(860) 335-3667</span>
        </a>
        <span className="text-wrapper-8"> or </span>
        <a href="tel:6033237119" rel="noopener noreferrer" target="_blank">
          <span className="text-wrapper-9">
            (603) 323-7119
            <br />
            <br />
          </span>
        </a>
        <span className="span">
          Hours
          <br />
        </span>
        <span className="text-wrapper-8">
          Tasting Room
          <br />
          Memorial Day - July 4th
          <br />
          Sat. Sun., 12:00 - 6:00
          <br />
        </span>
      </p>
      <div className="shop-now-button-wrapper">
        <div className="shop-now-button">
          <div className="text-wrapper-10">GET DIRECTION</div>
        </div>
      </div>
    </div>
  );
}

function BottomSection() {
  return (
    <div className="overlap-3">
      <div className="rectangle-4" />
      <div className="text-wrapper-11">Contact Us</div>
      <div className="group-2">
        <p className="online-wine-store">
          <span className="text-wrapper-12">
            Online Wine Store
            <br />
            Wine club
            <br />
            Our Heritage
            <br />
          </span>
          <span className="text-wrapper-13">
            Visit
            <br />
          </span>
        </p>
        <div className="text-wrapper-14">Menu</div>
        <div className="rectangle-5" />
        <div className="rectangle-6" />
      </div>
      <img
        className="line-4"
        alt="Line"
        src={require("../../img/line-1.svg")}
      />
      <p className="element-info">
        <span className="text-wrapper-15">
          <br />
          <br />
        </span>
        <span className="text-wrapper-16">
          603-323-7119
          <br />
        </span>
        <a
          href="mailto:info@whippletreewinery.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-wrapper-17">info@whippletreewinery.com</span>
        </a>
      </p>
      <p className="text-wrapper-18">
        Copyright © 2023 Whippletree Winery | All Rights Reserved | Privacy
        Policy
      </p>
      <p className="whippletree-winery-2">
        Whippletree Winery <br />
        372 Turkey Street <br />
        Tamworth, NH 03886 <br />
        (860) 335-3667
      </p>
      <div className="text-wrapper-19">Hours</div>
      <p className="friday-sunday">
        Friday - Sunday: <br />
        12:00 - 6:00 PM
      </p>
      <div className="frame-wrapper">
        <div className="book-an-event-wrapper">
          <div className="book-an-event">BOOK AN EVENT</div>
        </div>
      </div>
      <div className="rectangle-7" />
      <img
        className="group-3"
        alt="Group"
        src={require("../../img/group-54-3.png")}
      />
    </div>
  );
}

function Map() {
  return (
    <div className="map">
      <div className="map-pattern-black-wrapper">
        <div className="map-pattern-black">
          <div className="overlap-group-3">
            <div className="group-4">
              <div className="img-wrapper">
                <img
                  className="img-2"
                  alt="Img"
                  src={require("../../img/image.svg")}
                />
              </div>
              <div className="group-5">
                <img
                  className="img-3"
                  alt="Img"
                  src={require("../../img/1.svg")}
                />
              </div>
            </div>
            <div className="overlap-4">
              <div className="ellipse" />
              <img
                className="vector"
                alt="Vector"
                src={require("../../img/vector-2.svg")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Visit = () => {
  return (
    <div className="visit">
      <div className="div">
        <div className="image" />
        <FirstInfoSlide></FirstInfoSlide>
        <HeaderImage></HeaderImage>
        <Overlap2></Overlap2>
        <img
          className="line-3"
          alt="Line"
          src={require("../../img/line-6.svg")}
        />
        <BottomSection></BottomSection>
        {/* ASK IF THIS IS <Map></Map> */}
      </div>
    </div>
  );
};
