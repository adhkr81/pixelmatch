import { useEffect } from 'react';
import Jimp from "jimp";
const pixelmatch = require('pixelmatch');

function App() {

  async function fetchImages(img1, img2) {

    try{
      const jimage1 = await Jimp.read(img1);
      const jimage2 = await Jimp.read(img2);
      const width1 = jimage1.bitmap.width;
      const width2 = jimage2.bitmap.width;
      const height1 = jimage1.bitmap.height;
      const height2 = jimage2.bitmap.height;
  
        if (width1 === width2 && height1 === height2) {
            console.log(height1, width1, height2, width2);
            var diff = Jimp.diff(jimage1, jimage2, 0.1);
            console.log("Percent Difference - ", parseInt(diff.percent * 100) + "%");
            const numDiffPixels = pixelmatch(img1, img2, diff, 1600, 600, {threshold: 0.1});
            console.log(diff)
        }
    } catch(error) {
      console.log(error)
    }
  }

fetchImages("https://www.lg.com/us/images/Laundry_measure-D.jpg", "https://www.lg.com/us/images/d_measure.jpg")

  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
