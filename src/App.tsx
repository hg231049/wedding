import "./App.css";
import Account from "./sections/account/account";
import Day from "./sections/day/day";
import Footer from "./sections/footer/footer";
import Gallery from "./sections/gallery/gallery";
import Home from "./sections/home/home";
import Location from "./sections/location/location";
import Message from "./sections/message/message";

function App() {
  return (
    <>
      <main>
        <Home />
        <Day />
        <Message />
        <Gallery />
        <Location />
        <Account />
        <Footer />
      </main>
    </>
  );
}

export default App;
