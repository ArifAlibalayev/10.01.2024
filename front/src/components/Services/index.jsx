import React, { useEffect, useState } from "react";
import "./index.scss";

function Services() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    GetData(apiData);
  }, []);

  async function GetData() {
    const res = await fetch("http://localhost:4500/");
    const data = await res.json();
    setApiData(data);
  }

  // useEffect(() => {

  // }, [])

  async function DeleteItem(id) {
    console.log("aa",id);
    await fetch(`http://localhost:4500/${id}`, {
      method: "DELETE",
    }).catch((e) => console.log(e));
    console.log("bb");
  }

  return (
    <section id="Services">
      <div className="servicesTitle">
        <div className="lineTitle">
          <div className="orangeLine"></div>
          <h4>OUR TOP SERVICES</h4>

          <h2>Our Top Services</h2>
        </div>
      </div>
      <div className="servicesWrapper">
        {apiData && apiData.map((x) => (
          <div className="serviceCard" key={x._id}>
            <i className={x.serviceIcon}></i>
            <h4>{x.serviceTitle}</h4>
            <p>{x.serviceDescription}</p>
            <button onClick={() => DeleteItem(x._id)}>X</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
