import React from "react";
export default function About() {
  return (
    <div className="container">
      <h3 className="my-3">About Us</h3>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Format Your Text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Effortlessly enhance your text with our versatile formatting tools. From capitalization options to controlling letter cases, we provide the tools you need to perfect your written
              content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Free to Use
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Enjoy the benefits of our platform without any cost. Access a wide range of formatting features without the need for a subscription or payment. Make your text shine without breaking the
              bank.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Browser Compatible
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Use our platform seamlessly across different web browsers. Whether you prefer Chrome, Firefox, Safari, or others, our tools are designed to be compatible, ensuring a smooth and
              accessible experience regardless of your browser choice.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
