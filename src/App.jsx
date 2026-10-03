import "./App.css";
import Header from "./components/app/Header";
import Button from "./components/Button";
import StickyNote from "./components/app/StickyNote";

function App() {
  return (
    <>
      <section id="hero-home">
        <Header />
        <div className="hero-content-container">
          <div className="hero-content-text-container">
            <div className="hero-content-text">
              <h1 className="hero-title hero-content-animate-on-load-down">
                SCRIPT YOUR WAY <br /> AROUND THE WORLD
              </h1>
              <p className="hero-subtitle hero-content-animate-on-load-left">
                YOUR NEXT ADVENTURE STARTS HERE
              </p>

              <ul className="hero-features">
                <li className="hero-content-animate-on-load-up">
                  <span>●</span>Prepare, create, and manage every detail in one
                  plan
                </li>
                <li className="hero-content-animate-on-load-up">
                  <span>●</span>Turn your dream destinations into real
                  adventures
                </li>
                <li className="hero-content-animate-on-load-up">
                  <span>●</span>Celebrate your global experiences
                </li>
                <li className="hero-content-animate-on-load-up">
                  <span>●</span>Explore the world with confidence
                </li>
              </ul>
            </div>
            <div className="hero-content-btns hero-content-animate-on-load-right">
              <Button classValue={"btn-luxury"} label={"Create your journey"} />
              <Button
                classValue={"btn-primary"}
                label={"Your wishes journey"}
              />
            </div>
          </div>
          <div className="hero-contain-shape-container">
            <StickyNote />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
