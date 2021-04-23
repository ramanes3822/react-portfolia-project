import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-present</h3>
            <p>
              Technical support expert in Adstream and freelance react web
              developer. Responsible in solving critical ticket based on SLA.
              Responsible in monitoring server using Zabbix tools. Writing
              automation task to reduce static workload. Developing react
              website as per client request.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017-2019</h3>
            <p>
              System Analyst in Accenture. Responsible in solving critical
              ticket. Backend support for mobile application that build with
              node js. Writing automation script to reduce the static workload.
              Language use including javascript, java, python, shell script.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2015-2017</h3>
            <p>
              Database administrator in Toyo Engineering. specialized in
              creating application in microsoft access technology using vb
              program and SQL as a database.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
