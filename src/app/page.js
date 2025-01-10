'use client'
import { useState } from "react";
import Slider from "react-slick";
import { COMMON_SETTINGS } from "./config/constants";
import { dateArray, strategyArray } from "./config/data";

const tabSlider = COMMON_SETTINGS({
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow1024: 3,
  slidesToShow600: 2,

});

export default function Home() {
  const [selectedView, setSelectedView] = useState("Bullish");
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);
  const [activeSlide, setActiveSlide] = useState(0);

  const strategies = strategyArray.find((item) => item.View === selectedView)?.Value[selectedDate] || [];
  console.log("strategies",strategies)

  const views = strategyArray.map((view) => view.View)
  console.log("views",views)

  return (
    <section>
      <div className="container" >
        <div className="tab-container">
          <Slider
            {...tabSlider}
            beforeChange={(oldIndex, newIndex) => { setActiveSlide(newIndex); setSelectedView(views[newIndex]); }}
          >
            {views.map((view, index) => {
              console.log("newIndex =", activeSlide, " view =", view, " index =", index)
              return (
                <button
                  key={view}
                  onClick={() => { setSelectedView(view); setActiveSlide(index) }}
                  className={`${activeSlide === index ? "active" : ""} tabs`}
                >
                  {view}
                </button>
              )
            })}
          </Slider>
        </div>

        <div className="data-container">
          <div className="select-tab">
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              {dateArray.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>

          <div className="data-box custom-scrollbar">
            {strategies.length > 0 ? (
              [...new Set(strategies)].map((uniqueStrategy) => {
                const count = strategies.filter((s) => s === uniqueStrategy).length;
                return (
                  <div className="column" key={uniqueStrategy}>
                    <h4>{uniqueStrategy}</h4>
                    <p>
                      {count} {count === 1 ? "Strategy" : "Strategies"}
                    </p>
                  </div>
                );
              })
            ) : (
              <div className="default-box">
                <p>
                  There are no strategies for <br />
                  <strong>{selectedDate}</strong> <br />
                  in {selectedView}.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
