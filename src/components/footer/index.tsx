import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <>
      <div className="container">
        <br />
        <br />
        <br />
        <hr />
      </div>
      <footer className="container-fluid footer">
        <br />
        <div className="row footer-div">
          <div className="col-4">
            <div className="footer-hd">Pages</div>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-10">
            <div className="footer-links">
              <div className="row">
                <div className="col">
                  <div className="footer-headings">Company</div>
                  <div className="footer-links-body">
                    <div className="footer-links-links">About Us</div>
                    <div className="footer-links-links">Contact Us</div>
                    <div className="footer-links-links">Partnership</div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-headings">Help Links</div>
                  <div className="footer-links-body">
                    <div className="footer-links-links">Trending Coins</div>
                    <div className="footer-links-links">Coin List</div>
                    <div className="footer-links-links">News</div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-headings">Tools</div>
                  <div className="footer-links-body">
                    <div className="footer-links-links">Currency Converter</div>
                    <div className="footer-links-links">Deep Analyzer</div>
                    {/* <div className="footer-links-links">About Us</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="footer-socials">Pages</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
