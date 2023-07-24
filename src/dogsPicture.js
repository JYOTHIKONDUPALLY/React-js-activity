import axios from "axios";
import { useState } from "react";
export default function DogPicture() {
  const [picture, setPicture] = useState(
    "https://images.dog.ceo/breeds/terrier-american/n02093428_632.jpg"
  );
  // const [next, setNext] = useState(picture);
  const nextimage = async (e) => {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    // console.log(response.data.message);
    setPicture(response.data.message);
  };
  const selopt = async (e) => {
    if (e.target.value !== "random") {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${e.target.value}/images/random`
      );
      setPicture(response.data.message);
      // setNext();
    } else {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      // console.log(response.data.message);
      setPicture(response.data.message);
    }
  };
  return (
    <div>
      <h2>Select a breed:</h2>
      <select name="dogs" onChange={selopt}>
        <option value="random">random</option>
        <option value="beagle">beagle</option>
        <option value="boxer">boxer</option>
        <option value="dalmatian">dalmatian</option>
        <option value="husky">husky</option>
      </select>
      <br></br>
      <input type="image" src={picture} alt="dog pictures" />
      <br></br>
      <button onClick={nextimage}>next</button>
    </div>
  );
}
