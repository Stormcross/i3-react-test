import React from "react";
import "../../App.css";
import Image1 from "../../Images/chemistry.png";
import Image2 from "../../Images/handshake.png";
import Image3 from "../../Images/megaphone.png";

function FinHighlights() {
  return (
    <div className="financialHighlights">
      <h1>Second page</h1>
      {/* container */}
      <div className="container">
        <h2 className="fhTitle">
          The standard Lorem Ipsum passage, used since the 1500s
        </h2>
        <div className="cSecond">
          <img className="moviePoster"
            src="https://images-na.ssl-images-amazon.com/images/I/81jCtVT4DjL._AC_SL1500_.jpg"
            alt="Bear in the woods"
          ></img>
        </div>
        <div className="cFirst">
          <p className="fhText">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <p className="fhText">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
          <div className="sideText">
            <img className="imageSide" src={Image1} alt="Chemistry icon"></img>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
          <div className="sideText">
            <img className="imageSide" src={Image2} alt="Handshake icon"></img>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
          <div className="sideText">
            <img className="imageSide" src={Image3} alt="Megaphone icon"></img>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
        </div>
      </div>

      {/* {postData.map(()=>{
              return;
          })} */}
    </div>
  );
}

export default FinHighlights;
