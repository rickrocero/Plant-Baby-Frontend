import React, { useState } from "react";
import "./style.css";
import API from "../../utils/Api";
import FileBase64 from "react-file-base64";
import PlantCard from '../PlantCard/index'

export default class ImageUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      files: [],
      originalImage:'',
      wikiDescription:'',
      plantName: '',
      plantImageURL:'',
      wikiURL:''
    };
  }

  getFiles(files) {
    this.setState({ files: files }); 
     for (let i = 0; i < files.length; i++) {
      const file = files[i];
      API.imageLoad(file)
        .then(res => {
          console.log(res);
          console.log(res.dataRes)
          this.setState({
            originalImage: res.dataRes.images[0].url,
            wikiDescription: res.dataRes.suggestions[0].plant_details.wiki_description.value,
            plantName: res.dataRes.suggestions[0].plant_name,
            plantImageURL: res.dataRes.suggestions[0].similar_images[0].url_small,
            wikiURL: res.dataRes.suggestions[0].plant_details.url,
          })
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }

  componentDidMount(){
  
  }

  render() {
    return (
      <div>
        <div className="text-center mt-25">
          <p className="text-center">Load an image to get back a card of your plant.</p>
          <FileBase64 multiple={true} onDone={this.getFiles.bind(this)}/>
        </div>
        <PlantCard 
        originalImage={this.state.originalImage}
        plantName={this.state.plant_name}
        wikiDescription={this.state.wikiDescription}
        wikiURL={this.state.wikiURL}
        />
      </div>
    );
  }
}
