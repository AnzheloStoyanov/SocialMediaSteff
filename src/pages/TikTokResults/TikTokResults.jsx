import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./TikTokResults.scss";
import TikTokComponentResults from "../../components/TikTokComponentResults/TikTokComponentResults";
import insaOil from "../../asstes/images/insaLogo.png";
import heart from "../../asstes/images/heart.png";
import play from "../../asstes/images/playImage.svg";
import followersBig from "../../asstes/images/followersBig.svg";
import insaVideo from "../../asstes/images/insa.mp4";
import lockerVideo from "../../asstes/images/locker.mp4";
import lockerLogo from "../../asstes/images/lockerLogo.png";
import coolClub from "../../asstes/images/coolClub.svg";
import coolClubVideo from "../../asstes/images/coolclub.mp4";
import vipNetVideo from "../../asstes/images/vipnet.mp4";
import vipNet from "../../asstes/images/vipnetlogo.png";
import chockoh from "../../asstes/images/chocoh.mp4";
import chokohLogo from "../../asstes/images/chocohLogo.png";


export default function TikTokResults() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);
  return (
    <div className="tik-tok-results-section">
      <TikTokComponentResults />
      <div className="single-brand">
        <div className="titles-and-stats">
          <div className="logoAndTitle">
            <div className="brand-wrapper brand-wrapper--insa">
              <img src={insaOil}></img>
            </div>
            <h1>Insa Oil</h1>
          </div>
          <div className="statistics_wrapper">
            <div className="single_stat">
              <img src={play} />
              <div>
                <h1>4M </h1>
                <span>гледания</span>
              </div>
            </div>
            <div className="single_stat single_stat--heart">
              <img src={heart} />
              <div>
                <h1>150K </h1>
                <span>харесвания</span>
              </div>
            </div>
            <div className="single_stat single_stat--heart">
              <img src={followersBig} />
              <div>
                <h1>+10K </h1>
                <span>последователи</span>
              </div>
            </div>
          </div>
        </div>
        <div className="video-of-clients">
          <video playsInline autoplay="autoplay" loop muted>
            <source src={insaVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="single-brand single-brand--reversed ">
        <div className="titles-and-stats">
          <div className="logoAndTitle">
            <div className="brand-wrapper">
              <img src={lockerLogo}></img>
            </div>
            <h1>Locker Room</h1>
          </div>
          <div className="statistics_wrapper">
            <div className="single_stat">
              <img src={play} />
              <div>
                <h1>18M </h1>
                <span>гледания</span>
              </div>
            </div>
            <div className="single_stat single_stat--heart">
              <img src={heart} />
              <div>
                <h1>387.2K </h1>
                <span>харесвания</span>
              </div>
            </div>
            <div className="single_stat single_stat--heart">
              <img src={followersBig} />
              <div>
                <h1>+70K </h1>
                <span>последователи</span>
              </div>
            </div>
          </div>
        </div>
        <div className="video-of-clients">
          <video playsInline autoplay="autoplay" loop muted>
            <source src={lockerVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="single-brand">
        <div className="titles-and-stats">
          <div className="logoAndTitle">
            <div className="brand-wrapper">
              <img src={coolClub}></img>
            </div>
            <h1>Cool Club</h1>
          </div>
          <div className="statistics_wrapper">
            <div className="single_stat">
              <img src={play} />
              <div>
                <h1>1.1M </h1>
                <span>гледания</span>
              </div>
            </div>
            <div className="single_stat single_stat--heart">
              <img src={heart} />
              <div>
                <h1>35K </h1>
                <span>харесвания</span>
              </div>
            </div>
            <div className="single_stat single_stat--heart">
              <img src={followersBig} />
              <div>
                <h1>+4.3K </h1>
                <span>последователи</span>
              </div>
            </div>
          </div>
        </div>
        <div className="video-of-clients">
          <video playsInline autoplay="autoplay" loop muted>
            <source src={coolClubVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="single-brand single-brand--reversed ">
        <div className="titles-and-stats">
          <div className="logoAndTitle">
            <div className="brand-wrapper">
              <img src={vipNet}></img>
            </div>
            <h1>VipNet</h1>
          </div>
          <div className="statistics_wrapper">
            <div className="single_stat">
              <img src={play} />
              <div>
                <h1>1.5M </h1>
                <span>гледания</span>
              </div>
            </div>
            <div className="single_stat single_stat--heart">
              <img src={heart} />
              <div>
                <h1>64.6K </h1>
                <span>харесвания</span>
              </div>
            </div>
            <div className="single_stat single_stat--heart">
              <img src={followersBig} />
              <div>
                <h1>+10.9K </h1>
                <span>последователи</span>
              </div>
            </div>
          </div>
        </div>
        <div className="video-of-clients">
          <video playsInline autoplay="autoplay" loop muted>
            <source src={vipNetVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="single-brand">
        <div className="titles-and-stats">
          <div className="logoAndTitle">
            <div className="brand-wrapper">
              <img src={chokohLogo}></img>
            </div>
            <h1>ChocOh!</h1>
          </div>
          <div className="statistics_wrapper">
            <div className="single_stat">
              <img src={play} />
              <div>
                <h1>2M </h1>
                <span>гледания</span>
              </div>
            </div>
            <div className="single_stat single_stat--heart">
              <img src={heart} />
              <div>
                <h1>21K </h1>
                <span>харесвания</span>
              </div>
            </div>
          </div>
        </div>
        <div className="video-of-clients">
          <video playsInline autoplay="autoplay" loop muted>
            <source src={chockoh} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
