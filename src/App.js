import React, {useState, useEffect} from 'react';
import './App.css';
import FileUploadScreen from './screens/FileUploadScreen';
import {getSingleFiles, getMultipleFiles} from './data/api';
import Carousel from 'react-bootstrap/Carousel';

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
  }
 
  useEffect(() => {
    getSingleFileslist();
   
  }, []);
  return (
    <>
        <div className="container">
          <h3 className="text-primary font-weight-bolder border-bottom text-center">Upload hình ảnh</h3>
          <FileUploadScreen getsingle={() => getSingleFileslist()}/>
         
       </div> 
       <div className="container-fluid mt-6">
         <div className="row">
           <div className="col-6">
             <h4 className="text-success font-weight-bold">List</h4>
             <div className="row">
                {singleFiles.map((file, index) => 
                  <div className="col-6">
                    <div className="card mb-2 border-0 p-0">
                      <img src={`http://localhost:8080/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img"/>
                      </div>
                  </div>
                )}
             </div>
           
           
           </div>
           <div className="col-6">
           <Carousel activeIndex={index} onSelect={handleSelect}>
           {singleFiles.map((file, index) => 
                  <div className="col-6">
                    <div className="card mb-2 border-0 p-0">
                    <Carousel.Item>
                       <img src={`http://localhost:8080/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img"/>
                    </Carousel.Item>  
                    
                      </div>
                  </div>
                )}
             
            </Carousel>
            </div>
                          
   
          
         </div>
       </div>

       
    </>
  );
}

export default App;
