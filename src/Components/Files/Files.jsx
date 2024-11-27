import React, { useEffect, useState } from "react";
import { DownloadRounded, Upload, ImageTwoTone } from "@mui/icons-material";
import avi from "./assets/avi.svg";
import eps from "./assets/eps.svg";
import pdf from "./assets/pdf.svg";
import png from "./assets/png.svg";
import psd from "./assets/psd.svg";
import sql from "./assets/sql.svg";
import txt from "./assets/txt.svg";
import zip from "./assets/zip.svg";
import "./Files.scss";

function Files() {
  const [randomEle, setRandomEle] = useState([]);
  const fileData = [
    {
      title: "my-file.pdf",
      img: pdf,
      date: "20/06/2024",
      uploader: "USHEN",
      size: 5.5,
    },
    {
      title: "my-file.avi",
      img: avi,
      date: "16/5/2021",
      uploader: "Admin",
      size: 12.5,
    },
    {
      title: "my-file.eps",
      img: eps,
      date: "03/10/2024",
      uploader: "Uploader",
      size: 2.7,
    },
    {
      title: "my-file.png",
      img: png,
      date: "16/5/2021",
      uploader: "Ushen",
      size: 15.2,
    },
    {
      title: "my-file.psd",
      img: psd,
      date: "02/06/2024",
      uploader: "Ubbe",
      size: 1.5,
    },
    {
      title: "my-file.sql",
      img: sql,
      date: "10/06/2023",
      uploader: "Farah",
      size: 1.4,
    },
    {
      title: "my-file.txt",
      img: txt,
      date: "20/01/2022",
      uploader: "Farah",
      size: 10.2,
    },
    {
      title: "my-file.zip",
      img: zip,
      date: "05/06/2024",
      uploader: "Ippo",
      size: 7.2,
    },
  ];
  useEffect(() => {
    const randomFileData = [];
    for (let i = 0; i <= 3; i++) {
      fileData.map(() => {
        return randomFileData.push(
          fileData[Math.floor(Math.random() * fileData.length)],
        );
      });
    }
    setRandomEle(randomFileData);
  }, []);
  return (
    <div className="whole-files-container">
      <div className="files-container">
        <div className="title-container">
          <h4></h4>
          <span></span>
        </div>
        <div className="files-uploader">
          {randomEle.map((file, index) => {
            return (
              <div key={index} className="file">
                <div className="icon">
                  <i>
                    <DownloadRounded />
                  </i>
                </div>
                <div className="img-container">
                  <img src={file.img} />
                  <div className="title">{file.title}</div>
                </div>
                <div className="file-author">{file.uploader}</div>
                <span className="line"></span>
                <div className="file-meta-data">
                  <div className="file-date">{file.date}</div>
                  <div className="file-size">{`${file.size}MB`}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="files-statistic">
        <div className="statistic">
          <h4 className="statistic-title">Files Statistics</h4>

          <div className="img-container">
            <div className="files-statistic-icon">
              <ImageTwoTone />
            </div>
            <div className="files-statistic-meta-data">
              <p className="title">Images</p>
              <small>130 Files</small>
            </div>
            <div className="size">6.5GB</div>
          </div>
          <div className="img-container pdf-container">
            <div className="files-statistic-icon">
              <ImageTwoTone />
            </div>
            <div className="files-statistic-meta-data">
              <p className="title">Images</p>
              <small>130 Files</small>
            </div>
            <div className="size">6.5GB</div>
          </div>
          <div className="img-container sql-container">
            <div className="files-statistic-icon">
              <ImageTwoTone />
            </div>
            <div className="files-statistic-meta-data">
              <p className="title">Images</p>
              <small>130 Files</small>
            </div>
            <div className="size">6.5GB</div>
          </div>
          <div className="img-container csv-container">
            <div className="files-statistic-icon">
              <ImageTwoTone />
            </div>
            <div className="files-statistic-meta-data">
              <p className="title">Images</p>
              <small>130 Files</small>
            </div>
            <div className="size">6.5GB</div>
          </div>
          <button className="uplode-btn">
            <label>
              <Upload />
            </label>
            Uplode
          </button>
        </div>
      </div>
    </div>
  );
}

export default Files;
