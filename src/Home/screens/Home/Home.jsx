import React from "react";
import { Property } from "../../Property";
import "./final_adjusted_styles.css";
import { NavBar } from "../../../NavBar/NavBar";
import { NavBarBottom } from "../../../NavBar/NavBarBottom";
import { BookAnEventButton } from "../../../NavBar/BookAnEventButton";

function VisitUsCards() {
  return (
    <div className="overlap">
      <div className="text-wrapper">Visit Us</div>
      <img className="line" alt="Line" src={require("../../img/line-4.svg")} />
      <div className="rectangle-2" />
      <p className="whippletree-winery">
        Whippletree Winery 372 Turkey Street <br />
        Tamworth, NH 03886
      </p>
      <div className="frame">
        <div className="shop-now-button" onClick={() => {window.location.href = "/#/visit"}}>
          <div className="text-wrapper-2">MORE INFO</div>
        </div>
      </div>
      <img
        className="img"
        alt="Group"
        src={require("../../img/group-253.png")}
      />
      <img
        className="line-2"
        alt="Line"
        src={require("../../img/line-2-2.svg")}
      />
      <div className="rectangle-3" />
      <img
        className="rectangle-4"
        alt="Rectangle"
        src={require("../../img/rectangle-112.png")}
      />
      <img
        className="rectangle-5"
        alt="Rectangle"
        src={require("../../img/rectangle-118.png")}
      />
      <img
        className="rectangle-6"
        alt="Rectangle"
        src={require("../../img/rectangle-114.png")}
      />
      <img
        className="rectangle-7"
        alt="Rectangle"
        src={require("../../img/rectangle-115.png")}
      />
    </div>
  );
}

function LocalRoots() {
  return (
    <div className="overlap-group">
      <img
        className="group-2"
        alt="Group"
        src={require("../../img/group-1.png")}
      />
      <div className="rectangle-8" />
      <p className="p">From Local Roots To Global Heights</p>
      <p className="text-wrapper-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="shop-now-button-wrapper" onClick={() => {window.location.href = "/#/our-heritage"}}>
        <div className="shop-now-button">
          <div className="text-wrapper-2">OUR HERITAGE</div>
        </div>
      </div>
      <div className="constrain-images">
        <img
          className="image"
          alt="Image"
          src={require("../../img/image-4.png")}
        />
        <img
          className="layer"
          alt="Layer"
          src={require("../../img/layer-4.svg")}
        />
        <img
          className="layer-2"
          alt="Layer"
          src={require("../../img/layer-4-1.svg")}
        />
      </div>
    </div>
  );
}

function OverlapWrapper() {
  return (
    <div className="overlap-wrapper">
      <div className="overlap-3">
        <div className="rectangle-10" />
        <div className="frame-wrapper">
          <div className="contact-us-wrapper" onClick={() => {window.location.href='/#/book-an-event'}}>
            <div className="contact-us">CONTACT US</div>
          </div>
        </div>
        <p className="text-wrapper-4">
          Want to learn more about our wines? Call now and talk to an expert!
        </p>
        <img
          className="rectangle-11"
          alt="Rectangle"
          src={require("../../img/rectangle-116.svg")}
        />
      </div>
    </div>
  );
}

function GreenBottomSection() {
  return (
    <div>
      <div className="rectangle-12" />
      <div className="text-wrapper-5">Contact Us</div>
      <div className='group-3'>
        <NavBarBottom />
      </div>
      <img
        className="line-4"
        alt="Line"
        src={require("../../img/line-1.svg")}
      />
      <p className="element-info">
        <span className="text-wrapper-8">
          <br />
          <br />
        </span>
        <span className="text-wrapper-9">
          603-323-7119
          <br />
        </span>
        <a
          href="mailto:info@whippletreewinery.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-wrapper-10">info@whippletreewinery.com</span>
        </a>
      </p>
      <p className="text-wrapper-11">
        Copyright © 2023 Whippletree Winery | All Rights Reserved | Privacy
        Policy
      </p>
      <p className="whippletree-winery-2">
        Whippletree Winery <br />
        372 Turkey Street <br />
        Tamworth, NH 03886 <br />
        (860) 335-3667
      </p>
      <div className="text-wrapper-12">Hours</div>
      <p className="friday-sunday">
        Friday - Sunday: <br />
        12:00 - 6:00 PM
      </p>
      <div className="div-wrapper">
        <BookAnEventButton />
      </div>
      <div className="rectangle-15" />
      <img
        className="group-4"
        alt="Group"
        src={require("../../img/group-54-1.png")}
      />
    </div>
  );
}

function BottomSection() {
  return (
    <div className="overlap-2">
      <img
        className="rectangle-9"
        alt="Rectangle"
        src={require("../../img/rectangle-56.png")}
      />
      <OverlapWrapper></OverlapWrapper>
      <GreenBottomSection></GreenBottomSection>
    </div>
  );
}

function Overlap4() {
  return (
    <div className="overlap-4">
      <div className="overlap-5">
        <div className="text-wrapper-13">Our Wine Gallery</div>
        <p className="visit-our-wine">
          Visit Our Wine Gallery To See Our Award Winning Wines
        </p>
      </div>
      <img
        className="rectangle-16"
        alt="Rectangle"
        src={require("../../img/rectangle-59.png")}
      />
      <img
        className="rectangle-17"
        alt="Rectangle"
        src={require("../../img/rectangle-62.png")}
      />
      <img
        className="rectangle-18"
        alt="Rectangle"
        src={require("../../img/rectangle-63.png")}
      />
      <div className="frame-2">
        <img
          className="rectangle-19"
          alt="Rectangle"
          src={require("../../img/rectangle-60.png")}
        />
        <img
          className="rectangle-20"
          alt="Rectangle"
          src={require("../../img/rectangle-61-1.png")}
        />
      </div>
      <img
        className="rectangle-21"
        alt="Rectangle"
        src={require("../../img/rectangle-61.png")}
      />
      <img
        className="rectangle-22"
        alt="Rectangle"
        src={require("../../img/rectangle-109.png")}
      />
      <img
        className="rectangle-23"
        alt="Rectangle"
        src={require("../../img/rectangle-108.png")}
      />
      <img
        className="rectangle-24"
        alt="Rectangle"
        src={require("../../img/rectangle-107-1.png")}
      />
      <img
        className="rectangle-25"
        alt="Rectangle"
        src={require("../../img/rectangle-111.png")}
      />
    </div>
  );
}

// function NavBar() {
//   return (
//     <div className="navbar">
//       <div className="text-wrapper-14">Home</div>
//       <div className="text-wrapper-15">Online Wine Store</div>
//       <div className="text-wrapper-15">Wine club</div>
//       <div className="text-wrapper-15">Visit</div>
//       <div className="text-wrapper-16">Our Heritage</div>
//       <div className="text">{""}</div>
//     </div>
//   );
// }

function Overlap6() {
  return (
    <div className="overlap-6">
      <NavBar></NavBar>
      <img
        className="line-5"
        alt="Line"
        src={require("../../img/line-2.svg")}
      />
      <p className="text-wrapper-18">
        Experience the Magic of our Enchanting New Hampshire Winery
      </p>
      <div className="order-delicious">
        Order&nbsp;&nbsp;Delicious Homemade Wines Online!
      </div>
      <img
        className="frame-4"
        alt="Frame"
        src={require("../../img/frame-890-1.svg")}
      />
      <div className="text-2">{""}</div>
      <div className="frame-5">
        <img
          className="rectangle-28"
          alt="Rectangle"
          src={require("../../img/rectangle-1.svg")}
        />
        <div className="visit-OUR-WINERY my-button" onClick={() => {window.location.href = "/#/visit"}}>VISIT OUR WINERY</div>
      </div>
      <Property
        className="property-variant"
        rectangle={require("../../img/rectangle-2-1.png")}
        rectangleClassName="property-1-variant2"
      />
    </div>
  );
}

function Overlap7() {
  return (
    <div className="overlap-7">
      <div className="text-wrapper-19">Our Wines</div>
      <img
        className="line-6"
        alt="Line"
        src={require("../../img/line-3.svg")}
      />
    </div>
  );
}

function WineImages() {
  return (
    <div>
      <img
        className="rectangle-29"
        alt="Rectangle"
        src={require("../../img/rectangle-4.svg")}
      />
      <img
        className="rectangle-30"
        alt="Rectangle"
        src={require("../../img/rectangle-35.svg")}
      />
      <img
        className="rectangle-31"
        alt="Rectangle"
        src={require("../../img/rectangle-41.svg")}
      />
      <img
        className="rectangle-32"
        alt="Rectangle"
        src={require("../../img/rectangle-47.svg")}
      />
      <img
        className="rectangle-33"
        alt="Rectangle"
        src={require("../../img/rectangle-22.svg")}
      />
      <img
        className="rectangle-34"
        alt="Rectangle"
        src={require("../../img/rectangle-36.svg")}
      />
      <img
        className="rectangle-35"
        alt="Rectangle"
        src={require("../../img/rectangle-42.svg")}
      />
      <img
        className="rectangle-36"
        alt="Rectangle"
        src={require("../../img/rectangle-48.svg")}
      />
      <img
        className="rectangle-37"
        alt="Rectangle"
        src={require("../../img/rectangle-57.svg")}
      />
      <img
        className="rectangle-38"
        alt="Rectangle"
        src={require("../../img/rectangle-30.svg")}
      />
      <img
        className="rectangle-39"
        alt="Rectangle"
        src={require("../../img/rectangle-37.svg")}
      />
      <img
        className="rectangle-40"
        alt="Rectangle"
        src={require("../../img/rectangle-43.svg")}
      />
    </div>
  );
}

function Frame6() {
  return (
    <div className="frame-6">
      <div className="frame-7">
        <p className="div-2">
          <span className="text-wrapper-20">LAUREN BARRETT </span>
          <span className="text-wrapper-21">~ Sauvignon Blanc</span>
        </p>
        <p className="unoaked-with-a"> Unoaked with a smooth bright finish</p>
      </div>
      <div className="frame-8" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="frame-9">
      <div className="frame-7">
        <p className="div-2">
          <span className="text-wrapper-20">BOSSY ~ </span>
          <span className="text-wrapper-22">Chardonnay</span>
        </p>
        <p className="text-wrapper-23">
          Full bodied, lightly oaked, smooth finish
        </p>
      </div>
      <div className="frame-8" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="frame-10">
      <div className="frame-7">
        <div className="div-2">ROSE GOLD</div>
        <p className="text-wrapper-24">
          French Provence style, refreshing, a classy rosé
        </p>
      </div>
      <div className="frame-8" />
    </div>
  );
}

function Overlap8() {
  return (
    <div className="overlap-8">
      <p className="text-wrapper-25">
        Apple, pear and blackberry, ultra refreshing
      </p>
      <div className="frame-11">
        <div className="frame-7">
          <div className="div-2">ORCHARD ROSÉ</div>
        </div>
        <div className="frame-8" />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="frame-12">
      <div className="frame-7">
        <div className="div-2">FIERCE</div>
        <p className="text-wrapper-26">
          Chilean blend, spicy finish... She creeps, she pounces and she bites
        </p>
      </div>
      <div className="frame-8" />
    </div>
  );
}

function Overlap9() {
  return (
    <div className="overlap-9">
      <p className="text-wrapper-27">
        Lucious pomegranate flavor, bright smooth finish
      </p>
      <div className="frame-13">
        <div className="frame-7">
          <div className="div-2">POME-GRANITE</div>
        </div>
        <div className="frame-8" />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="frame-14">
      <div className="frame-7">
        <div className="div-2">VILLA GRANDE</div>
        <p className="text-wrapper-23">Italian bold blend, well rounded</p>
      </div>
      <div className="frame-8" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="frame-15">
      <div className="frame-7">
        <div className="div-2">MOUNTAIN BEAR</div>
        <p className="text-wrapper-28">
          Whippletree’s #1 seller, SMOOTH black currant flavor
        </p>
      </div>
      <div className="frame-8" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="frame-16">
      <div className="frame-7">
        <div className="div-2">SUGAR PLUM</div>
        <div className="text-wrapper-23">Magical sweet blackberry</div>
      </div>
      <div className="frame-8" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="frame-17">
      <div className="frame-7">
        <div className="div-2">CHERRY ALMOND CAKE</div>
        <p className="text-wrapper-23">Sweet dessert in a glass</p>
      </div>
      <div className="frame-8" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="frame-18">
      <div className="frame-7">
        <div className="div-2">HARVEST SANGRIA</div>
        <p className="text-wrapper-29">
          Subtle orange sweetness, great mulling wine, enjoy chilled or warm
        </p>
      </div>
      <div className="frame-8" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="frame-19">
      <div className="frame-7">
        <div className="div-2">BLUEBERRY MUFFIN</div>
        <p className="text-wrapper-23">A unique treat for any time of day! !</p>
      </div>
      <div className="frame-8" />
    </div>
  );
}

function ButtonComp() {
  return (
    <button className="button">
      <button className="view-more-wrapper" onClick={() => {window.location.href = "/#/online-wine-store"}} >
        <div className="text-wrapper-2">VIEW MORE</div>
      </button>
    </button>
  );
}

export const Home = () => {
  return (
    <div className="home">
      <div className="my-div">
        <VisitUsCards></VisitUsCards>
        <LocalRoots></LocalRoots>
        <BottomSection></BottomSection>
        <Overlap4></Overlap4>
        <Overlap6></Overlap6>
        <div className="image-2" />
        <Overlap7></Overlap7>
        <WineImages></WineImages>
        <Frame6></Frame6>
        <Frame9></Frame9>
        <Frame10></Frame10>
        <Overlap8></Overlap8>
        <Frame12></Frame12>
        <Overlap9></Overlap9>
        <Frame14></Frame14>
        <Frame15></Frame15>
        <Frame16></Frame16>
        <Frame17></Frame17>
        <Frame18></Frame18>
        <Frame19></Frame19>
        <ButtonComp></ButtonComp>
        <div className="rectangle-41" />
        <div className="rectangle-42" />
        <div className="rectangle-43" />
        <div className="rectangle-44" />
        <div className="rectangle-45" />
        <div className="rectangle-46" />
        <div className="rectangle-47" />
        <div className="rectangle-48" />
        <div className="rectangle-49" />
        <div className="rectangle-50" />
        <div className="rectangle-51" />
        <div className="rectangle-52" />
      </div>
    </div>
  );
};
