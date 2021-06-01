// import React from 'react'
// import './style.css'
import API from "../../utils/Api";

// function ImageUpload() {

//     const handleImageUpload = e => {
//         e.preventDefault();
//         const image = [...document.querySelector('input[type=file]').files];
//         console.log(image)

//         API.imageLoad(files).then(res=> {
//             console.log('Success', res.data)
//         }).catch(error => {
//             console.log('Error', error)
//         })
// }

// const handleImageUpload = e => {
//     e.preventDefault();
//     // let base64String = '';
//     var file = document.querySelector(
//         'input[type=file]')['files'][0];
//         let reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onloadend = () => {
//           this.setState({
//             file: file,
//             base64: reader.result
//           });
//         };

// var reader = new FileReader();
// console.log("next");

// reader.onload = function () {
//     base64String = reader.result.replace("data:", "")
//         .replace(/^.+,/, "");

// imageBase64Stringsep = base64String;

// alert(imageBase64Stringsep);
//     console.log(base64String);
// }
// reader.readAsDataURL(file);
// }

// API.imageLoad(files).then(res=> {
//     console.log('Success', res.data)
// }).catch(error => {
//     console.log('Error', error)
// })

//     return(
//  <form className="form" onSubmit={handleImageUpload}>
//      <div>
//          <label>Submit a picture of your plant to identify and get details about it:</label>
//              <input  type="file"></input>
//              <button  type="submit" value="imageUpload">Submit</button>
//      </div>
//  </form>

//     )
// }
// export default ImageUpload;

import React from "react";
import FileBase64 from "react-file-base64";
export default class ImageUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      files: [],
    };
  }

  getFiles(files) {
    this.setState({ files: files });
  }

  render() {
    // console.log(this.state.files);
    for (let i = 0; i < this.state.files.length; i++) {
      const file = this.state.files[i].base64;
    //   console.log(file);
      API.imageLoad(file)
        .then((res) => {
          console.log("Success");
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }

    return (
      <div>
        <h1 className="text-center">React File to Base64 Converter</h1>

        <div className="text-center mt-25">
          <p className="text-center"> *) Try To Upload Some Image~</p>
          <FileBase64 multiple={true} onDone={this.getFiles.bind(this)} />
        </div>

        <div className="text-center">
          {this.state.files.map((file, i) => {
            return <img key={i} src={file.base64} width="25%" height="25%" />;
          })}
          <img src="" />
        </div>

        {this.state.files.length != 0 ? (
          <div>
            <h3 className="text-center mt-25">Callback Object</h3>
            <div className="pre-container">
              <pre>{JSON.stringify(this.state.files[0].base64, null, 2)}</pre>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

// export default ImageUpload
