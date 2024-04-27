import React, { useState } from "react";
import "./TikTokComponentResults.scss";
import playResults from "../../asstes/images/playResults.png";
import save from "../../asstes/images/save.png";

import resultsHeart from "../../asstes/images/resultsHeart.png";
import comments from "../../asstes/images/comments.png";
import video from "../../asstes/images/ssstik.io_1705837693230.mp4";
import video2 from "../../asstes/images/video2.mp4";
import video3 from "../../asstes/images/video3.mp4";
import video4 from "../../asstes/images/video4.mp4";
import rock from "../../asstes/images/rock.png";

const TikTokComponentResults = () => {
  return  <div className="home-page-results">
  <div className="home-page-results-title">
    <img src={rock}></img>
    <h1>TIKTOK</h1>
    <h3>РЕЗУЛТАТИ</h3>
  </div>
  <div className="video-container">
    <div>
      <div className="result-min-container">
      <div>
          <img className="play" src={playResults} />
          <span>576K</span>
        </div>
        <div>
          <img src={resultsHeart} />
          <span>37.8К</span>
        </div>
        <div>
        <img src={comments} />
          <span>366</span>
        </div>
        
      </div>
      <video
        className="home-page-results-video"
        playsInline
        autoplay="autoplay"
        loop
        muted
      >
        <source src={video4} type="video/mp4" />
      </video>
    </div>
    <div>
    <div className="result-min-container">
      <div>
          <img className="play" src={playResults} />
          <span>411K</span>
        </div>
        <div>
          <img src={comments} />
          <span>11.2К</span>
        </div>
        <div>
          <img src={save} />
          <span>1123</span>
        </div>
        
      </div>
      <video
        className="home-page-results-video"
        playsInline
        autoplay="autoplay"
        loop
        muted
      >
        <source src={video2} type="video/mp4" />
      </video>
    </div>
    <div>
    <div className="result-min-container">
      <div>
          <img className="play" src={playResults} />
          <span>386K</span>
        </div>
        <div>
          <img src={resultsHeart} />
          <span>19.8К</span>
        </div>
        <div>
          <img src={save} />
          <span>3809</span>
        </div>
        
      </div>
      <video
        className="home-page-results-video"
        playsInline
        autoplay="autoplay"
        loop
        muted
      >
        <source src={video3} type="video/mp4" />
      </video>
    </div>
    <div>
    <div className="result-min-container">
      <div>
          <img className="play" src={playResults} />
          <span>1M</span>
        </div>
        <div>
          <img src={comments} />
          <span>18.4К</span>
        </div>
        <div>
          <img src={comments} />
          <span>146</span>
        </div>
        
      </div>
      <video
        className="home-page-results-video"
        playsInline
        autoplay="autoplay"
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  </div>
</div>;
};

export default TikTokComponentResults;
