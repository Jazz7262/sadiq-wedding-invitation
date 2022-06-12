import React from "react";
import "../styles/Couple.css";

function Couple() {
    return (
        <section id="couple">
            <h1 className="title-quote">Happy Couple Going To Be Married</h1>

            <div className="row">
                <div className="col-lg-5" data-aos="fade-up">
                    <div className="img-wrapper">
                        <img
                            className="couple-img"
                            src="../assets/images/groom.jpeg"
                            alt="Groom_img"
                        />
                    </div>
                    <div className="info">
                        <h3>B. Sadiq Khan</h3>
                        <p>Grand S/O Janab B. Ahmed Khan Sahab (Late)</p>
                    </div>
                </div>
                <div
                    className="col-lg-2"
                    data-aos="zoom-out "
                    data-aos-delay="300"
                >
                    <img
                        className=" heart-mid"
                        src="../assets/images/heart.png"
                        alt="heart_img"
                    />
                </div>
                <div className="col-lg-5" data-aos="fade-up">
                    <div className="img-wrapper">
                        <img
                            className="couple-img"
                            src="../assets/images/bride.png"
                            alt="Bride_img"
                        />
                    </div>

                    <div className="info">
                        <h3>Dukhtar-e-Nek Akhtar</h3>
                        <p>
                            D/O Janab Abdul Kaleem Sahab,
                            <br />
                            A.K. Electrical,
                            <br />
                            Raichur.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;
