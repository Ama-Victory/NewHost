import React, { useState } from 'react'
import "./home.css"
import { AiOutlineLike, AiTwotoneGift } from "react-icons/ai";
import { MdBookmark } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import Nail from "../assets/BabyGirl.jpg"
import { GoBookmark, GoFileMedia } from "react-icons/go";
import { BsCalendar3Event } from "react-icons/bs";
import { GrArticle } from "react-icons/gr";
import Boy from "../assets/Nailss.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { BiWorld } from "react-icons/bi";
import { FaRegBookmark, FaRegComment, FaShare } from 'react-icons/fa';
import Header from '../Header/Header';






export const HomeCom = ({ setshowInput, posts }) => {
  // const [myPostImg, setMyPosting]= useState()

  // const imgshow =()=>{
  //   const file =e.target.files [0]
  //   const Myimg =URL.createObjectURL(file)
  //   setMyPosting(Myimg)
  //   console.log(Myimg)
  // }
  return (
    <>
    <Header/>
      <div className="HomeContainer">
        <div className="HomeContainerInner">
          <div className="FirstContainer">
            <div className="FirstInnerContainer1">
              <div className="ProfileContainer"></div>
              <div className="ProFileContainerCircle"></div>

              <div className="TextContainer">
                <h1 className="H1Tage">Ama-Victory</h1>
                <p className="H3Tage">
                  Full-Stack Developer | React | Redux | Node | Ruby | PHP |
                  JavaScript | SQL | Java | Ruby on Rails{" "}
                </p>
              </div>
              <div className="ProfileTextContainer">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Profile viewers</p>
                  <h5>39</h5>
                </div>
                <p>View all analytics</p>
              </div>

              <div className="AmountContainer">
                <p>Achieve your goals with Premium</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <AiTwotoneGift />
                  <h4>Retry Premium for ngn0</h4>
                </div>
              </div>

              <div className="SavedItems-Container">
                <MdBookmark size={20} />
                <p>Saved Items</p>
              </div>
            </div>

            <div className="FirstInnerContainer2">
              <div className="firstContainerIner1">
                <div className="allBlueTextContainer">
                  <p>Groups</p>
                  <p>Events</p>
                  <p>Follows</p>
                </div>
                <div className="DiscoverText">
                  <p>Discover more</p>
                </div>
              </div>
            </div>
          </div>

          <div className="SecondContainer">
            <div className="CenterContainer">
              <div className="CenterInnerContainer">
                <div className="PremiumContainer">
                  <h2>Get ahead with Premium</h2>
                  <MdOutlineCancel size={25} />
                </div>

                <div className="ContainerImageS">
                  <div className="ContainerImageSInner"></div>
                  <p className="Ptage1">Looking for your next role?</p>
                  <p className="Ptage2">
                    premiunm members are 2.6x more likely to get hired on
                    average
                  </p>

                  <button className="PremiumButton">Get Premium now</button>
                </div>
              </div>
            </div>
            <div className="secondPart">
              <div className="secondPartInner">
                <div className="ImgAndInput">
                  <img src={Nail} alt="" className="imgFirst" />
                  <button
                    className="inputText"
                    onClick={() => setshowInput(true)}
                  >
                    Start a post, try writting with Ai
                  </button>
                </div>

                <div className="All-Icons">
                  <div className="allIconStyle">
                    <GoFileMedia style={{ color: "blue" }} size={30} />
                    <p>Media</p>
                  </div>

                  <div className="allIconStyle">
                    <BsCalendar3Event size={30} />
                    <p>Event</p>
                  </div>

                  <div className="allIconStyle">
                    <GrArticle size={30} />
                    <p>Write Articles</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="line">
              <div className="lineDiv">
                <hr />
              </div>
              <div className="TextOfLineDiv">
                <p>sort by:</p>
                <p>Top</p>

                <IoMdArrowDropdown size={25} />
              </div>
            </div>

            {posts.map((e, i) => (
              <div className="sectionThree" key={i}>
                <div className="sectionThreeInner">
                  <div className="sectionThreeContents">
                    <div className="upSection">
                      <div className="firstUpSection">
                        {/* <div className="FirstUpImg">
                        <img src={Nail} alt="" className="FirstPic" />
                        <p>Anabel commented on this</p> 
                      </div>
                      <div className="dottedIcons">
                        <BiDotsHorizontalRounded size={25} />
                        <RxCross2 size={25} />
                      </div> */}
                      </div>

                      <div className="UpsectionTwo">
                        <div className="FirstupSection2">
                          <div className="NamePicDiv">
                            <div className="PictureDiv">
                              <img src={Nail} alt="" className="Picture" />
                              <h3>Amasiatu Victory. 2nd</h3>
                            </div>
                            <h4 className="followText">Follow</h4>
                          </div>
                          <div className="virtualAssistantDiv">
                            {/* <h4>
                            Virtual Assistant||Graphic Designer||Generative Ai
                            Enthusi...
                          </h4> */}
                          </div>
                          <div className="SixDays">
                            <h4
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: "15px",
                              }}
                            >
                              6d.
                            </h4>
                            <BiWorld size={20} />
                          </div>
                        </div>
                        <div className="SecondUpSection2">
                          <p>
                            {/* Mastering the act of being a deep Child of God, When God
                        comes to your aid, protocols are broken */}
                            {e.text}
                          </p>
                          {/* <p>
                        Dear Brethren, you can never go wrong with serving God,
                        He is God for a reason you can never more....
                      </p> */}
                        </div>
                      </div>
                    </div>
                    <div
                      className="sectionDown"
                      style={{ alignItems: "center" }}
                    >
                      <img
                        src={e.victory}
                        alt=""
                        style={{
                          width: "100%",
                          height: "400px",
                          objectFit: "contain",
                        }}
                      />
                      <div className="CommentsSections">
                        <div className="likes">
                          <AiOutlineLike size={20} />
                          Like
                        </div>
                        <div className="likes">
                          <FaRegComment size={20} />
                          Comment
                        </div>
                        <div className="likes">
                          <FaShare size={20} />
                          Share
                        </div>
                        <div className="likes">
                          <FaRegBookmark size={20} />
                          Save
                        </div>
                      </div>

                      {/* <div className="firstPicPart"></div>
                  <div className="sectionDownBox">
                    <div className="secondPicPart"></div>
                    <div className="ThirdPicPart"></div>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ThirdContainer">
            <div className="thirdContainer1">
              <div className="addFeed-Container">
                <p>Add to your feed</p>
                <MdOutlineCancel size={25} />
              </div>
              <div className="allImgSection">
                <div className="firstImgDiv">
                  <img src={Nail} alt="" className="image" />
                </div>
                <div className="AboutText">
                  <h4>Amasiatu Victory</h4>
                  <p>Helping you start a CyberSecurity career </p>
                  <button className="btnFollow">+ Follow</button>
                </div>
              </div>

              <div className="allImgSection">
                <div className="firstImgDiv">
                  <img src={Nail} alt="" className="image" />
                </div>
                <div className="AboutText">
                  <h4>Chibuike Okoye</h4>
                  <p>#TheTalentBuilder|Head of Hr|</p>
                  <button className="btnFollow">+ Follow</button>
                </div>
              </div>

              <div className="allImgSection">
                <div className="firstImgDiv">
                  <img src={Boy} alt="" className="image" />
                </div>
                <div className="AboutText">
                  <h4>Chibuike Okoye</h4>
                  <p>#TheTalentBuilder|Head of Hr|</p>
                  <button className="btnFollow">+ Follow</button>
                </div>
              </div>
              <div className="lastPart">
                <p>View all recommendations</p>
              </div>
            </div>
            <div className="thirdContainer2">
              <div className="thrCon1">
                <div>thrCon2</div>
              </div>

              <div className="thrCon2">
                <div className="potential">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </div>
                <h3 className="logo2">in</h3>
                <div>See who viewed your profile in the last 90days</div>
                <button className="trialBtn">Try For Free</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
