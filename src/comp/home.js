import React, { useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";

let isInit = true;
let welcome1 = (
  <div class="sp-container">
    <div class="sp-content m-5">
      <div class="sp-globe"></div>
      <h2 class="frame-1">مرحبا بكم</h2>
      <h2 class="frame-2">في موقع</h2>
      <h2 class="frame-3 text-danger">الاقلاع عن التدخين</h2>
    </div>
  </div>
);
export default function Home() {
  const [welcome, setWelcome] = useState(welcome1);
  useEffect(() => {
    if (isInit) {
      setTimeout(() => {
        setWelcome();
        isInit = false;
      }, 8800);
    }
  });
  return (
    <div className="center text-center text-warning m-5">
      {welcome}
      <h1>أجعل من يوم عرفة يوم امتناعك عن التدخين</h1>
      {/* <Card className="bg-dark text-white mt-5 w-50">
      <Card.Img src="https://qph.cf2.quoracdn.net/main-qimg-a59730736f8a7b4074a494abfe9606e8-lq" alt="Card image" />
    </Card> */}
      <Carousel fade className="m-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://qph.cf2.quoracdn.net/main-qimg-a59730736f8a7b4074a494abfe9606e8-lq"
            alt="First slide"
            height={"700px"}
          />
          <Carousel.Caption>
            <h3 className="text-dark">ما أحلى العيد بلا تدخين</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2018/07/GettyImages-824302050-650x428.jpg"
            alt="Second slide"
            height={"700px"}
          />

          <Carousel.Caption>
            <h3 className="text-dark">لتكن أعيادنا خالية من التدخين</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://raed.academy/wp-content/uploads/2019/06/shutt_debate-tabaquismo-2019-06-dstNtc.jpg"
            alt="Third slide"
            height={"700px"}
          />

          <Carousel.Caption>
            <h3 className="text-dark">
              لتكن فرحتك بالعيد فرحتين…فرحة العيد و فرحة التوقف عن التدخين
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
