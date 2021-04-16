import React, { useState, useEffect } from "react";
import "./App.css";
import FileUploadScreen from "./screens/FileUploadScreen";
import { getSingleFiles, getMultipleFiles } from "./data/api";
import Carousel from "react-bootstrap/Carousel";

function App() {
  const [singleFiles, setSingleFiles] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const getSingleFileslist = async () => {
    try {
      const fileslist = await getSingleFiles();
      setSingleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleFileslist();
  }, []);
  return (
    <>
      <div className="container mt-3">
        <h3 className="text-primary font-weight-bolder border-bottom text-center">
          Upload hình ảnh
        </h3>
        <FileUploadScreen getsingle={() => getSingleFileslist()} />
      </div>
      <div className="container-fluid">
        <div className="col-md-auto pb-5">
          <h4 className="text-success font-weight-bold">Slide Show</h4>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            Indicators={false}
            autoplay
          >
            {singleFiles.map((file, index) => (
              <Carousel.Item>
                <img
                  src={`https://ec18a006imageupload.herokuapp.com/${file.filePath}`}
                  height="500"
                  className="d-block w-100"
                  alt="img"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="row-md-auto p-2">
          <h4 className="text-success font-weight-bold">List</h4>
          <div className="row">
            {singleFiles.map((file, index) => (
              <div className="col-6">
                <div className="card mb-4 border-0 p-0">
                  <img
                    src={`https://ec18a006imageupload.herokuapp.com/${file.filePath}`}
                    height="400"
                    className="card-img-top img-responsive"
                    alt="img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
