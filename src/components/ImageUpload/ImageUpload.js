import React from "react";
import "./style.css";
import API from "../../utils/Api";
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
   for (let i = 0; i < this.state.files.length; i++) {
      const file = this.state.files[i];
      API.imageLoad(file)
        .then(res => {
          console.log(res);
          console.log('hello')
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }

    return (
      <div>
        <div className="text-center mt-25">
          <p className="text-center">Load an image to get back a card of your plant.</p>
          <FileBase64 multiple={true} onDone={this.getFiles.bind(this)}/>
        </div>
      </div>
    );
  }
}
