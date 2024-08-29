import React from "react";
import Image from "next/image";
import ceo from "../../assets/images/ceo-1.webp";
import sign from "../../assets/images/sign-3.svg";
import check from "../../assets/images/checked.png";
import delivery from "../../assets/images/delivery-1.avif";
import abt1 from "../../assets/images/about-1.jpeg";
import abt3 from "../../assets/images/about-3.jpeg";

const About: React.FC = () => {
  return (
    <>
      <div className="abt-title">
        <p>CUSTOMER TEAM AND AGILE SERVICES</p>
        <h1>Provide Transportation Services Since 2000.</h1>
      </div>
      <div className="abt-container">
        <div>
          <div>
            <p>
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curab arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque vel nisi, pretium ut lacinia in, elementum id enim.
              Vestibulum ante ipsu primis in faucibus orci luctus et ultrices
              posuere cubilia Curae;
            </p>
            <div className="abt-ceo">
              <Image
                src={ceo}
                alt="ceo"
                height={100}
                width={100}
                className="abt-ceo1"
              />
              <div className="abt-ceo2">
                <h4>Brittary Herman</h4>
                <p>CEO, Caargo</p>
              </div>
              <Image
                src={sign}
                alt="signature"
                height={100}
                width={100}
                className="abt-ceo3"
              />
            </div>
          </div>
          <div>
            <div className="check">
              <Image
                src={check}
                alt="checked"
                height={50}
                width={50}
                className="check-item-1"
              />
              <h4 className="check-item-2">Global Shipping</h4>
              <p className="check-item-3">
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Curabitur.
              </p>
            </div>
            <div className="check">
              <Image
                src={check}
                alt="checked"
                height={50}
                width={50}
                className="check-item-1"
              />
              <h4 className="check-item-2">Short Time Delivery</h4>
              <p className="check-item-3">
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Curabitur.
              </p>
            </div>
          </div>
        </div>
        <div className="abt-image">
          <div className="logistics-1">
            <Image src={delivery} alt="logistics-1" height={200} width={250} />
          </div>
          <div className="logistics-2">
            <Image src={abt1} alt="logistics-2" height={290} width={280} />
          </div>
          <div className="logistics-3">
            <Image src={abt3} alt="logistics-3" height={250} width={260} />
          </div>
          <div className="logistics-4">
            <h5>
              <b>15+</b> YEARS OF EXPERIENCE
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
