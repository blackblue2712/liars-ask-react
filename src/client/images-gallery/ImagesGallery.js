import React from 'react';
import "./ImagesGallery.css";
import ModalPopup from './ModalPopup';
import  { getUploadImages } from '../../controllers/galleryController';
import { isAuthenticated } from '../../controllers/userController';
import Copy from '../../images/copy.png';
import Copy1 from '../../images/copy1.png';

class ImagesGallery extends React.Component {
    constructor() {
        super();
        this.state = {
            images: []
        }
    }

    handleUploadedImage = (url) => {
        this.setState( {images: [[url,...this.arrImgs1], this.arrImgs2, this.arrImgs3, this.arrImgs4]} )
    }

    async componentDidMount() {
        let usreId = isAuthenticated().user._id;
        let data = await getUploadImages(usreId);
        
        this.arrImgs1 = [];
        this.arrImgs2 = [];
        this.arrImgs3 = [];
        this.arrImgs4 = [];

        // try 4 for loop
        if(data.images && data.images.length > 4) {
            for(let i = 0; i < data.images.length; i+=4) {
                this.arrImgs1 = [...this.arrImgs1, data.images[i]];
                if(data.images[i+1] !== undefined) {
                    this.arrImgs2 = [...this.arrImgs2, data.images[i+1]];
                    if(data.images[i+2] !== undefined) {
                        this.arrImgs3 = [...this.arrImgs3, data.images[i+2]];
                        if(data.images[i+3] !== undefined) {
                            this.arrImgs4 = [...this.arrImgs4, data.images[i+3]];
                        }
                    }
                }
            }
            this.setState( {images: [this.arrImgs1, this.arrImgs2, this.arrImgs3, this.arrImgs4]} );
        } else if(data.images && data.images.length <= 4) {
            this.setState( {images: [data.images]} );
        }

    }

    handleCopyText = (text) => {
        navigator
            .clipboard
            .writeText(text)
            .then(function() {
                document.getElementById(text).src = Copy;
            }, function(err) {
                
            });
    }

    render() {
        let { images } = this.state;
        return (
            <div id="content">
                <div className="main-head">
                    {/* <Notify />  
                    {message !== "" &&  <Notify class="on" text={message} clearMess={this.clearMess} />} */}
                    <div className="grid d-flex align-items-centers mb16">
                        <h1 className="fs-headline1 mr-auto">Images Gallery</h1>
                        <button
                            className="s-btn s-btn__outline s-btn__primary s-btn__primary"
                            onClick={() => document.getElementsByClassName("js-welcom-modal")[0].style.display = "block"}
                        >+ Upload photo</button>
                    </div>
                    <p className="mb24 f13 fw350">
                        <hr/>
                    </p>
                </div>

                {/* LIST WRAPPER  */}
                <div id="images-gallery">
                    <ModalPopup handleUploadedImage={this.handleUploadedImage} />
                    <div className="mini-list">
                        {/* LIST ITEM */}
                        {
                            images.map( (arr, i) => {
                                return (
                                    <div className="grid-column" key={i}>
                                        {
                                            arr.map( (img, i) => {
                                                return (
                                                    <div className="image-card ps-relative" key={i}>
                                                        <button
                                                            className="s-btn s-btn__outline s-btn__hovero bd-none p-absolute btn-copy d-none"
                                                            onClick={() => this.handleCopyText(img)}
                                                        >
                                                            <img src={Copy1} width={45} alt="img-copy" id={img}/>
                                                        </button>
                                                        <img width="220" className="w-220 single-image" src={img} alt="imgs-gallery" loading="lazy"/>
                                                        <div className="image-url">
                                                            <span>{img}</span>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                <div className="clear-fix"></div>
            </div>
        )
    }
}

export default ImagesGallery;