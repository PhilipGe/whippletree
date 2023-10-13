import React from "react";
import "./style.css";
import { NavBar } from "../../../NavBar/NavBar";

function Group() {
  return (
    <div className="group">
      <div className="overlap-group">
        <div className="frame">
          <div className="text-wrapper">Search Wines</div>
          <img
            className="carbon-search"
            alt="Carbon search"
            src={require("../../img/carbon-search-1.svg")}
          />
        </div>
        <div className="rectangle-4" />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="group-2">
      <p className="online-wine-store">
        <span className="span">
          Online Wine Store
          <br />
          Wine club
          <br />
          Our Heritage
          <br />
        </span>
        <span className="text-wrapper-4">
          Visit
          <br />
        </span>
      </p>
      <div className="text-wrapper-5">Menu</div>
      <div className="rectangle-6" />
      <div className="rectangle-7" />
    </div>
  );
}

function FrameWrapper() {
  return (
    <div className="frame-wrapper">
      <div className="book-an-event-wrapper">
        <div className="book-an-event">BOOK AN EVENT</div>
      </div>
    </div>
  );
}

// function NavBar() {
//   return (
//     <div className="navbar">
//       <div className="text-wrapper-11">Home</div>
//       <div className="text-wrapper-12">Online Wine Store</div>
//       <div className="text-wrapper-12">Wine club</div>
//       <div className="text-wrapper-12">Visit</div>
//       <div className="text-wrapper-13">Our Heritage</div>
//       <div className="text-2">{""}</div>
//     </div>
//   );
// }

function ImageCollection() {
  return (
    <div>
      <img
        className="rectangle"
        alt="Rectangle"
        src={require("../../img/rectangle-106.svg")}
      />
      <img
        className="img"
        alt="Rectangle"
        src={require("../../img/rectangle-108-1.svg")}
      />
      {/* <img
        className="rectangle-2"
        alt="Rectangle"
        src={require("../../img/rectangle-107-3.svg")}
      /> */}
      <div className="rectangle-3" />
      <div className="text">{""}</div>
      <img
        className="ant-design-user"
        alt="Ant design user"
        src={require("../../img/ant-design-user-outlined.svg")}
      />
      <img
        className="bytesize-location"
        alt="Bytesize location"
        src={require("../../img/bytesize-location-1.svg")}
      />
      <img
        className="line"
        alt="Line"
        src={require("../../img/line-2.svg")}
      />
    </div>
  );
}

function ImageCollection2() {
  return (
    <div>
      <img
        className="frame-2"
        alt="Frame"
        src={require("../../img/frame-890-5.svg")}
      />
      <p className="p">Centuries of New Hampshire Heritage</p>
      <p className="text-wrapper-2">The Winery In The Woods:</p>
      <img
        className="layer-2"
        alt="Layer"
        src={require("../../img/layer-4-3.svg")}
      />
      <img
        className="layer-3"
        alt="Layer"
        src={require("../../img/layer-4-4.svg")}
      />
    </div>
  );
}

function ParagraphCollection() {
  return (
    <div>
      <p className="element-info">
        <span className="text-wrapper-6">
          <br />
          <br />
        </span>
        <span className="text-wrapper-7">
          603-323-7119
          <br />
        </span>
        <a
          href="mailto:info@whippletreewinery.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-wrapper-8">info@whippletreewinery.com</span>
        </a>
      </p>
      <p className="text-wrapper-9">
        Copyright © 2023 Whippletree Winery | All Rights Reserved | Privacy
        Policy
      </p>
      <p className="whippletree-winery">
        Whippletree Winery <br />
        372 Turkey Street <br />
        Tamworth, NH 03886 <br />
        (860) 335-3667
      </p>
      <div className="text-wrapper-10">Hours</div>
      <p className="friday-sunday">
        Friday - Sunday: <br />
        12:00 - 6:00 PM
      </p>
    </div>
  );
}

function ImageCollection3() {
  return (
    <div>
      <img
        className="group-3"
        alt="Group"
        src={require("../../img/group-54-3.png")}
      />
      <img
        className="mask-group"
        alt="Mask group"
        src={require("../../img/mask-group-1.png")}
      />
    </div>
  );
}

function ParagraphCollection2() {
  return (
    <div>
      <p className="who-doesn-t-enjoy">
        Who doesn’t enjoy being in places that have experienced years of
        history? Our grounds are covered with relics and artifacts from New
        Hampshire’s storied past. You can feel the deep-seated connection in
        every square inch. Our centuries old building seems to have absorbed the
        events it has witnessed. Wee have found that In effect, it allows our
        visitors to sink into a far greater comfort than other wineries allow.
        <br />
        <br />
        We offer a relaxed atmosphere with a wide range of award winning,
        premium wines. These fine wines are handcrafted with minimal processing
        for maximum flavor, made the old country way.
        <br />
        We look forward to meeting you and sharing our unique, handcrafted
        wines! Cheers,
      </p>
      <p className="lauren-barrett-owner">
        <span className="text-wrapper-14">
          Lauren Barrett
          <br />
        </span>
        <span className="text-wrapper-15">Owner /Wine Maker</span>
      </p>
    </div>
  );
}

function Rectangle5() {
  return <div className="rectangle-5" />;
}

function TextWrapper3() {
  return <div className="text-wrapper-3">Contact Us</div>;
}

function Rectangle8() {
  return <div className="rectangle-8" />;
}

function Overlap() {
  return (
    <div className="overlap">
      <ImageCollection></ImageCollection>
      <Group></Group>
      <ImageCollection2></ImageCollection2>
      <Rectangle5></Rectangle5>
      <TextWrapper3></TextWrapper3>
      <Group2></Group2>
      <ParagraphCollection></ParagraphCollection>
      <FrameWrapper></FrameWrapper>
      <Rectangle8></Rectangle8>
      <ImageCollection3></ImageCollection3>
      <NavBar></NavBar>
      <ParagraphCollection2></ParagraphCollection2>
    </div>
  );
}

export const OurHeritage = () => {
  return (
    <div className="our-heritage">
      <div className="div">
        <Overlap></Overlap>
        <div className="image" />
      </div>
    </div>
  );
};
