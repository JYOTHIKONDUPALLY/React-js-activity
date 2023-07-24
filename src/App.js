import "./styles.css";
import ConditionalRender from "./ConditionalRendering";
import DogPictures from "./dogsPicture";
export default function App() {
  return (
    <div className="App">
      <ConditionalRender />
      <br></br>
      <hr></hr>
      <DogPictures />
    </div>
  );
}
