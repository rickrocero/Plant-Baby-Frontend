import React from 'react'
import ReactDOM from 'react-dom'
// // import './index.css'

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import {Cloudinary} from 'cloudinary-core';

function showUploadWidget() {
    cloudinary.openUploadWidget({
       cloudName: "<cloud name>",
       uploadPreset: "<upload preset>",
       sources: [
           "camera",
           "facebook",
           "dropbox",
           "instagram",
           "local"
       ],
       googleApiKey: "<image_search_google_api_key>",
       showAdvancedOptions: true,
       cropping: true,
       multiple: false,
       defaultSource: "local",
       styles: {
           palette: {
               window: "#464040",
               sourceBg: "#292222",
               windowBorder: "#c7a49f",
               tabIcon: "#cc6600",
               inactiveTabIcon: "#E8D5BB",
               menuIcons: "#ebe5db",
               link: "#ffb107",
               action: "#ffcc00",
               inProgress: "#99cccc",
               complete: "#78b3b4",
               error: "#ff6666",
               textDark: "#4C2F1A",
               textLight: "#D8CFCF"
           },
           fonts: {
               default: null,
               "'Poppins', sans-serif": {
                   url: "https://fonts.googleapis.com/css?family=Poppins",
                   active: true
               }
           }
       }
   },
    (err, info) => {
      if (!err) {    
        console.log("Upload Widget event - ", info);
      }
     });
    }

    export default ImageUpload;