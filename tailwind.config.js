/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      fontSize: {
        6: "6px",
        10: "10px",
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        20: "20px",
        21: "21px",
        22: "22px",
        23: "23px",
        24: "24px",
        36: "36px",
      },
      colors: {
        normal: "#159D00",
        bac:"#BAC7D580",
        ink:"#4F5E71",
        inkdark:"#252A31",
        cloud:"#E8EDF1",
        cloudlight:"#F5F7F9",
        productlight:"#E8F5E6",
        blue:"#0172CB",
        red:"#E70127"
      },
      width: {
        54: "54px",
        60:"60px",
        66:"66px",
        70: "70px",
        80: "80px",
        90: "90px",
        100: "100px",
        110: "110px",
        150: "150px",
        160: "160px",
        180: "180px",
        250:"250px",
        260:"260px",
        270: "270px",
        300: "300px",
        320: "320px",
        360: "360px",
        450: "450px",
        500: "500px"
      },
      height: {
        66:"66px",
        70: "70px",
        80: "80px",
        90: "90px",
        150: "150px",
        160: "160px",
        180: "180px",
        240: "240px",
        270: "270px",
        320: "320px",
        360: "360px",
        400: "400px",
        450: "450px",
        500: "500px"
      },
      padding: {
        0.5: "2px",
        2.5: "10px"
      },
      margin: {
        0.5: "2px",
        2.5: "10px"
      }
    },
  },

}

