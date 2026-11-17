import "../../css/home.css";
import Intro from "./intro";
import MainVisual from "./main-visual";

export default function Home() {
  return (
    <div className="opening">
      <Intro />
      <MainVisual />
    </div>
  );
}
