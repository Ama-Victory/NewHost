import React, { useState } from 'react'
// import "./home.css"
import "./post.css"
import { FaRegImage } from 'react-icons/fa';

const PostBox = ({ setshowInput, setposts, posts }) => {
  const [myPostImg, setMyPosting] = useState();
  const [userText, setuserText] = useState();

  const imgShow = (e) => {
    const file = e.target.files[0];
    const Myimg = URL.createObjectURL(file);
    setMyPosting(Myimg);
    //  console.log(Myimg)
  };

  const addpost = () => {
    setshowInput(false);
    setposts([...posts, { text: userText, victory: myPostImg }]);
  };
  return (
    <div className="postBoxHolder">
      <div className="postBox1">
        <div className="postBoxinner">
          <div></div>
          <span onClick={() => setshowInput(false)}>X</span>
        </div>
        <textarea
          name=""
          id=""
          onChange={(e) => setuserText(e.target.value)}
          placeholder="what is on your mind"
          className="textarea"
        />
        <div className="postimg">
          <img className="imagepost" src={myPostImg} alt="" />
        </div>
        <div className="postFunc">
          <input type="file" id="e" hidden onChange={imgShow} />
          <label htmlFor="e">
            <FaRegImage size={25} className='mediaIcon' />
          </label>
          <button className="postNow" onClick={addpost}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostBox