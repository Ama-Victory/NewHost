import React, { useState } from 'react'
import Header from '../Header/Header'
import { HomeCom } from '../Home/Home'
import PostBox from '../Home/PostBox'
import "./holder.css"


const Holder = () => {
    const [showInput, setshowInput] = useState(false)
    const [posts, setposts] = useState([])
  return (
    <div>
      {/* <Header /> */}
      <HomeCom setshowInput={setshowInput} posts={posts} />
      {showInput ? (
        <PostBox setshowInput={setshowInput} setposts={setposts} posts={posts}/>
      ) : null}
    </div>
  );
}

export default Holder