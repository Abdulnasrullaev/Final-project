import React from "react";
import { Dashboard } from "./style";
import icon1 from "..//..//assest/icon/icon3.jpg";
import icon2 from "..//..//assest/icon/icon4.jpg";
import icon3 from "..//..//assest/icon/icon2.jpg";
import icon4 from "..//..//assest/icon/icon1.jpg";
import iconMenu from "..//..//assest/icon/menu.jpg";
import Chart from "react-apexcharts";

function DashBoard() {
  const series1 = [
    {
      name: "yellow",
      data: [20, 40, 60, 80, 100, 120, 140],
    },
  ];
  const series2 = [
    {
      name: "green",
      data: [20, 30, 16, 50, 70, 5, 80],
    },
  ];
  const option3 = {
    labels: ["desktop", "mobile", "tablet"],
    title: {
      text: "Visit Customer",
      style: {
        fotnSize: "20px",
        color: "gray",
      },
    },
    style: {
      margin: "10px 20px",
    },
    colors: ["#4049FE", "#34DEFF", "#FFBF40"],
    theme: {
      mode: "light",
    },
    legend: {
      position: "bottom",
      style: {
        margin: "100px 0",
      },
    },
    total: {
      show: true,
      showAlways: true,
    },
    dataLabels: {
      enabled: false,
    },
  };
  const option2 = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "string",
      category: ["Sun", "Mon", "Tue", 40, 50, 60, 70],
    },
    title: {
      text: "Analytics",
      style: {
        fotnSize: 30,
      },
    },
    toolbar: {
      style: {
        display: "none",
      },
    },
  };
  const option1 = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "number",
      category: [10, 20, 30, 40, 50, 60, 70],
    },
    title: {
      text: "Sales overview",
      style: {
        fotnSize: 40,
        fontFamily: "sans-serif",
      },
    },
    toolbar: {
      style: {
        display: "none",
      },
    },
  };

  return (
    <>
      <Dashboard>
        <div className="wrapper">
          <div className="mini-card">
            <div className="card-image">
              <div className="img1">
                <img src={icon1} />
              </div>
              <img src={iconMenu} className="img2" />
            </div>

            <p className="price-card">$25,255,000</p>
            <div className="card-total">
              <p className="title-card">Today Sales</p>
              <div className="bb">
                <p>+35%</p>
              </div>
            </div>
          </div>
          <div className="mini-card">
            <div className="card-image">
              <div className="img1">
                <img src={icon2} />
              </div>
              <img src={iconMenu} className="img2" />
            </div>

            <p className="price-card">$1255,00</p>
            <div className="card-total">
              <p className="title-card">Today Expenses</p>
              <div className="bb">
                <p style={{ margin: "0px 0px 0px 10px" }} className="p">
                  +10%
                </p>
              </div>
            </div>
          </div>
          <div className="mini-card">
            <div className="card-image">
              <div className="img1">
                <img src={icon3} />
              </div>
              <img src={iconMenu} className="img2" />
            </div>

            <p className="price-card">$5355</p>
            <div className="card-total">
              <p className="title-card">Today Visitors</p>
              <div className="bb">
                <p>+15%</p>
              </div>
            </div>
          </div>
          <div className="mini-card">
            <div className="card-image">
              <div className="img1">
                <img src={icon4} />
              </div>
              <img src={iconMenu} className="img2" />
            </div>

            <p className="price-card">$500</p>
            <div className="card-total">
              <p className="title-card">Today Orders</p>
              <div className="bb">
                <p>+17%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-2">
          <Chart
            style={{
              margin: "0px -10px 0px -15px",
              backgroundColor: "white",
              padding: "20px 5px",
            }}
            options={option1}
            series={series1}
            type="bar"
            width={500}
            height="320"
          />
          <Chart
            style={{
              margin: "0px 30px auto",
              backgroundColor: "white",
              padding: "20px 5px",
            }}
            options={option2}
            series={series2}
            type="area"
            width={416}
            height="320"
            title="Analtics"
          />
        </div>
        <div className="wrapper-3">
          <table>
            <div className="title7">Recent Orders</div>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <div className="hr"></div>
            <tr>
              <td>83448380</td>
              <td>Nike Air</td>
              <td>31/03/2021</td>
              <td>$250.00</td>
              <td>
                <button className="complete"> Complete</button>
              </td>
            </tr>
            <div className="hr"></div>
            <tr>
              <td>83418380</td>
              <td>Headphones</td>
              <td>31/03/2021</td>
              <td>$250.00</td>
              <td>
                {" "}
                <button className="complete2">Pending</button>
              </td>
            </tr>
            <div className="hr"></div>
            <tr>
              <td>83448349</td>
              <td>Iphone air</td>
              <td>31/03/2021</td>
              <td>$250.00</td>
              <td>
                <button className="complete3">Canceled</button>
              </td>
            </tr>
          </table>
          <Chart
            style={{
              margin: "30px -10px",
              borderRadius: "20px",
              backgroundColor: "white",
              padding: "20px 5px",
            }}
            options={option3}
            series={[70, 20, 20]}
            type="donut"
            width={366}
            height={320}
          ></Chart>
        </div>
      </Dashboard>
    </>
  );
}

export default DashBoard;
