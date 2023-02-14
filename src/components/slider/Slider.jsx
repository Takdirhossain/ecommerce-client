import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./slider.css"
const fadeImages = [
  {
    url: "https://icms-image.slatic.net/images/ims-web/3e5a9dcf-209f-4d43-86fc-74c05e739568.jpg_1200x1200.jpg",
    caption: 'First Slide'
  },
  {
    url: "https://icms-image.slatic.net/images/ims-web/ecba4abe-968d-4457-b595-158b381c42e8.jpg" ,
    caption: 'Second Slide'
  },
  {
    url: "https://icms-image.slatic.net/images/ims-web/e85cd7c0-ecce-4ae8-a37d-e468bc4f4b04.jpg",
    caption: 'Third Slide'
  },
];
export default function Slider() {
  return (
    <div className="slide-container">
     <div className='sliderimgwrapper'>
     <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img className='sliderimg' src={fadeImage.url} alt="" />
           
          </div>
        ))}
      </Fade>
     </div>
    </div>
  )
}
