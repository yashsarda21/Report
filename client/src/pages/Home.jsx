// import { Analytics } from "../components/Analytics";

// import { Footer } from "../components/Footer";
import "../CSS/home.css"

export const Home = () => {
    return (
    <>
        <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <p className="home-heading">We are the World Best IT Company</p>
                    <h1>Welcome to Y&S and R&R</h1>
                    <p>
                    Are you ready to see your business like never before? Our platform delivers detailed reports and actionable insights that unlock your company's full potential. With in-depth analysis and tailored dashboards, we provide the clarity you need to make smarter, data-driven decisions.
                    </p>
                    <div className="btn btn-group">
                        <a href="/contact">
                            <button className="btn">connect now</button>
                        </a>
                        <a href="/services">
                            <button className="btn secondary-btn">learn more</button>
                        </a>
                    </div>
                </div>

            {/* hero images  */}
            <div className="hero-image">
                <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
                />
            </div>
            </div>
            </section>
        </main>

      {/* 2nd section  */}
        {/* <Analytics /> */}

      {/* 3rd section  */}
        <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
            <div className="hero-image top-image">
                <img
                    src="/images/design.png"
                    alt="coding together"
                    width="400"
                    height="500"
                />
                </div>

            <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
            Take the leap into smarter business strategies! Our tools for performance benchmarking and trend forecasting ensure you stay ahead of the competition. Simplify complex data and turn it into valuable insights to elevate your decision-making and fuel your success.
            </p>
            <div className="btn btn-group ">
                <a href="/contact">
                <button className="btn">connect now</button>
                </a>
                <a href="/services">
                <button className="btn secondary-btn">learn more</button>
                </a>
            </div>
            </div>
            <div className="hero-image bottom-image">
            <img
                src="/images/design.png"
                alt="coding together"
                width="400"
                height="500"
            />
            </div>
        </div>
        </section>
        {/* <Footer/> */}
    </>
);
};