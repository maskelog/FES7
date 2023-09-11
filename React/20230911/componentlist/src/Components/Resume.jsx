import { useState } from 'react';

function Resume(props) {
  // let like = 0;

  // console.log('useState : ', useState(0));

  const [like, setLike] = useState("");
  function clickLike() {
    // like += 1;

    // setLike(like + 1);
    if (like === '') {
      setLike("Like");
    }
    else {
      setLike('')
    }
  }

  return (
    <>
    <div style={{border: "px solid black"}}>
      <p>{props.name} 자기소개서</p>
      <strong>{props.hello}</strong>
      <p>취미 :{props.Hobby}</p>
      <p>좋아하는 음식 :{props.Food}</p>
      <p>좋아하는 색 : <span style={{ color: props.color }}>{props.color}</span></p>
      <button onClick={clickLike}>like</button> <span>{like}</span>
    </div>
    </>
  )
}

export default Resume;