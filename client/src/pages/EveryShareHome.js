import React, { Component } from "react";
import "../lib/css/main.css";
import MainBanner from "../container/home/banner";
import CardItem from "../container/home/cardItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class EveryShareHome extends Component {
  render() {
    const style = {
      width: "1280px",
      margin: "0 auto",
    };

    const sectionStyle = {
      width: "100%",
      padding: "30px",
    };
    return (
      <div>
        <MainBanner />
        <section style={sectionStyle}>
          <div style={style}>
            <Carousel
              additionalTransfrom={0}
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 4,
                  partialVisibilityGutter: 20,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              
            </Carousel>
          </div>
        </section>
      </div>
    );
  }
}

export default EveryShareHome;
