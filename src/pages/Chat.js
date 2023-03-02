import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GrGroup,
  FaExpand,
  BiMessageDetail,
  BiDotsVerticalRounded,
  IoArrowBack,
  HiPencil,
  BiFilter,
  MdOutlineSearch,
  MdNotificationsOff,
  MdOutlineClose,
  MdKeyboardArrowRight,
  //
  MdOutlineArrowBackIos,
  IoSearch,
  BiPhoneCall,
  MdOutlineMoreVert,
  FaLock,
  MdAttachFile,
  BsEmojiSmile,
  RiSendPlaneFill,
} from "../middlewares/icons";

const Chat = () => {
  const [nav, setNav] = useState(0);
  const [isHint, setIsHint] = useState(true);

  const getNav = (val) => setNav(val);
  const backNav = () => setNav(0);
  const goChat = () => setIsHint(false);
  const backChat = () => setIsHint(true);

  return (
    <div className="chat">
      <div className="navigation">
        {nav === 0 && (
          <div className="nav-item nav-item-1">
            <div className="head">
              <img
                src={process.env.PUBLIC_URL + "/user.png"}
                className="img"
                onClick={() => getNav(1)}
              />
              <div className="options">
                <button onClick={() => getNav(2)}>
                  <GrGroup />
                </button>
                <button onClick={() => getNav(3)}>
                  <FaExpand />
                </button>
                <button onClick={() => getNav(4)}>
                  <BiMessageDetail />
                </button>
                <button>
                  <BiDotsVerticalRounded />
                </button>
              </div>
            </div>
            <div className="filter">
              <MdOutlineSearch className="icon" />
              <input
                type="text"
                name="filter"
                placeholder="Recherche ou démarrer une nouvelle discussion"
              />
              <button>
                <BiFilter />
              </button>
            </div>
            <div className="notification">
              <div className="icon">
                <MdNotificationsOff />
              </div>
              <div className="desc">
                <h3 className="title t-2">
                  Être averti.e en cas de nouveaux messages
                </h3>
                <Link to="" className="link">
                  Activer les notifications sur le bureau{" "}
                  <MdKeyboardArrowRight />
                </Link>
              </div>
              <button className="close">
                <MdOutlineClose />
              </button>
            </div>
            <div className="discussions">
              <div className="message" onClick={goChat}>
                <img
                  src={process.env.PUBLIC_URL + "/user.png"}
                  className="img"
                />
                <div className="desc">
                  <div className="top">
                    <h2 className="title t-2">Flutter Dev</h2>
                    <span className="color-green">11:02</span>
                  </div>
                  <div className="bottom">
                    <p className="title t-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <div className="count">
                      <span>999</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {nav === 1 && (
          <div className="nav-item nav-item-2">
            <div className="head">
              <IoArrowBack className="icon" onClick={backNav} />
              <span className="title">Profil</span>
            </div>
            <div className="avatar">
              <img src={process.env.PUBLIC_URL + "/user.png"} />
            </div>
            <div className="item">
              <h3 className="title">Votre nom</h3>
              <div className="desc">
                <h4>@fik_Foundation &#128522;&#128187;</h4>
                <button>
                  <HiPencil />
                </button>
              </div>
            </div>
            <div className="more">
              Ce n'est pas votre nom d'utilisateur-ice ni votre code PIN. Ce nom
              sera visible par vos contacts WhatsApp.
            </div>
            <div className="item">
              <h3 className="title">Actu</h3>
              <div className="desc">
                <h4>Vivre pleinement sa vie</h4>
                <button>
                  <HiPencil />
                </button>
              </div>
            </div>
          </div>
        )}
        {nav === 2 && <div className="nav-item nav-item-3"></div>}
      </div>
      <div className="container">
        {isHint ? (
          <div className="hint">Hint</div>
        ) : (
          <div className="center">
            <div className="full">
              <div className="top">
                <div className="top-head display-flex justify-content-space-between align-items-center">
                  <div className="head-left display-flex align-items-center">
                    <MdOutlineArrowBackIos
                      className="icon"
                      onClick={backChat}
                    />
                    <img src={process.env.PUBLIC_URL + "/user.png"} />
                    <div className="">
                      <h3 className="title t-1">Afik Foundation</h3>
                      <p className="title t-2">en ligne hier à 20:31</p>
                    </div>
                  </div>
                  <div className="head-right">
                    <div className="head-right-item">
                      <IoSearch className="icon" />
                    </div>
                    <div className="head-right-item">
                      <BiPhoneCall className="icon" />
                    </div>
                    <div className="head-right-item">
                      <MdOutlineMoreVert className="icon" />
                    </div>
                  </div>
                </div>
                <div className="top-body">
                  <div className="notice">
                    <p className="title t-3">
                      <FaLock />
                      &nbsp; Les messages sont chiffrés de bout en bout. Aucun
                      tiers, pas même Shirika, ne peut les lire.
                    </p>
                  </div>
                  <div className="time">9 janvier 2023</div>
                  <div className="msg-left-side">
                    <div className="display-flex">
                      <h3 className="title t-2">+243816194942</h3>&nbsp; ¬
                      &nbsp;
                      <span className="title t-3">afik21</span>
                    </div>
                    <p className="title t-2">message content</p>
                    <h3 className="title t-3">17:20</h3>
                  </div>
                  <div className="msg-right-side">
                    <div className="display-flex">
                      <h3 className="title t-2">+243816194942</h3>&nbsp; ¬
                      &nbsp;
                      <span className="title t-3">afik21</span>
                    </div>
                    <p className="title t-2">
                      message content fdgdgd dhdyfyhfjf djjfjfbff jffufhf
                      fnfhfyrhf jfjfurf fkfurjff fjhfyurhfnf
                    </p>
                    <h3 className="title t-3">17:20</h3>
                  </div>
                  <div className="msg-right-side">
                    <div className="display-flex">
                      <h3 className="title t-2">+243816194942</h3>&nbsp; ¬
                      &nbsp;
                      <span className="title t-3">afik21</span>
                    </div>
                    <p className="title t-2">
                      message content fdgdgd dhdyfyhfjf
                    </p>
                    <h3 className="title t-3">17:20</h3>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <form className="width">
                  <div className="attach">
                    <input type="file" id="input-file" className="input-file" />
                    <label htmlFor="input-file" className="label">
                      <MdAttachFile className="icon" />
                    </label>
                  </div>
                  <div className="emojis">
                    <BsEmojiSmile className="icon" />
                  </div>
                  <textarea
                    type="text"
                    placeholder="Type you message here..."
                    className="text-write"
                    cols="0"
                    rows="0"
                  ></textarea>
                  <button className="button">
                    <RiSendPlaneFill className="icon" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
