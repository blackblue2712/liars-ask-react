import React from 'react';
import "./ImagesGallery.css";
import ModalPopup from './ModalPopup';

class ImagesGallery extends React.Component {
    constructor() {
        super();
        this.state = {
            questions: []
        }
    }

    componentDidMount() {
        
    }

    render() {

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
                    <ModalPopup />
                    <div className="mini-list">
                        {/* LIST ITEM */}
                        <div className="grid-column">
                            <div className="image-card">
                                <img className="w-220" src="https://res.cloudinary.com/dged6fqkf/image/upload/v1569931985/vs3ub8m4ixd6gbwadkgb.jpg" alt="img1"/>
                                <div className="image-url">
                                    <span>https://res.cloudinary.com/dged6fqkf/image/upload/v1570282919/wep4gepazhg9msjrh3yg.jpg</span>
                                </div>
                            </div>
                            <div className="image-card">
                                <img className="w-220" src="https://res.cloudinary.com/dged6fqkf/image/upload/v1570283075/afwlhawsozvafzy8p0ru.jpg" alt="img1"/>
                                <div className="image-url">
                                    <span>https://res.cloudinary.com/dged6fqkf/image/upload/v1570283075/afwlhawsozvafzy8p0ru.jpg</span>
                                </div>
                            </div>
                            <div className="image-card">
                                <img className="w-220" src="https://res.cloudinary.com/dged6fqkf/image/upload/v1569931985/vs3ub8m4ixd6gbwadkgb.jpg" alt="img1"/>
                                <div className="image-url">
                                    <span>https://res.cloudinary.com/dged6fqkf/image/upload/v1570282919/wep4gepazhg9msjrh3yg.jpg</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid-column">
                            <div className="image-card">
                                <img className="w-220" src="https://res.cloudinary.com/dged6fqkf/image/upload/v1570282919/wep4gepazhg9msjrh3yg.jpg" alt="img1"/>
                                <div className="image-url">
                                    <span>https://res.cloudinary.com/dged6fqkf/image/upload/v1570282919/wep4gepazhg9msjrh3yg.jpg</span>
                                </div>
                            </div>
                            <div className="image-card">
                                <img className="w-220" src="https://res.cloudinary.com/dged6fqkf/image/upload/v1570282919/wep4gepazhg9msjrh3yg.jpg" alt="img1"/>
                                <div className="image-url">
                                    <span>https://res.cloudinary.com/dged6fqkf/image/upload/v1570282919/wep4gepazhg9msjrh3yg.jpg</span>
                                </div>
                            </div>
                            <div className="image-card">
                                <img className="w-220" src="https://res.cloudinary.com/dged6fqkf/image/upload/v1569931985/vs3ub8m4ixd6gbwadkgb.jpg" alt="img1"/>
                                <div className="image-url">
                                    <span>https://res.cloudinary.com/dged6fqkf/image/upload/v1570282919/wep4gepazhg9msjrh3yg.jpg</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid-column">
                            <div className="image-card">
                                <img className="w-220" src="https://res.cloudinary.com/dged6fqkf/image/upload/v1570283075/afwlhawsozvafzy8p0ru.jpg" alt="img1"/>
                                <div className="image-url">
                                    <span>https://res.cloudinary.com/dged6fqkf/image/upload/v1570283075/afwlhawsozvafzy8p0ru.jpg</span>
                                </div>
                            </div>
                            <div className="image-card">
                                <img className="w-220" src="https://res.cloudinary.com/dged6fqkf/image/upload/v1570282919/wep4gepazhg9msjrh3yg.jpg" alt="img1"/>
                                <div className="image-url">
                                    <span>https://res.cloudinary.com/dged6fqkf/image/upload/v1570282919/wep4gepazhg9msjrh3yg.jpg</span>
                                </div>
                            </div>
                            <div className="image-card">
                                <img className="w-220" src="https://res.cloudinary.com/dged6fqkf/image/upload/v1570282919/wep4gepazhg9msjrh3yg.jpg" alt="img1"/>
                                <div className="image-url">
                                    <span>https://res.cloudinary.com/dged6fqkf/image/upload/v1570282919/wep4gepazhg9msjrh3yg.jpg</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid-column">
                            <div className="image-card">
                                <img className="w-220" src="https://res.cloudinary.com/dged6fqkf/image/upload/v1570282919/wep4gepazhg9msjrh3yg.jpg" alt="img1"/>
                                <div className="image-url">
                                    <span>https://res.cloudinary.com/dged6fqkf/image/upload/v1570282919/wep4gepazhg9msjrh3yg.jpg</span>
                                </div>
                            </div>
                            <div className="image-card">
                                <img className="w-220" src="https://res.cloudinary.com/dged6fqkf/image/upload/v1570282919/wep4gepazhg9msjrh3yg.jpg" alt="img1"/>
                                <div className="image-url">
                                    <span>https://res.cloudinary.com/dged6fqkf/image/upload/v1570282919/wep4gepazhg9msjrh3yg.jpg</span>
                                </div>
                            </div>
                            <div className="image-card">
                                <img className="w-220" src="https://res.cloudinary.com/dged6fqkf/image/upload/v1569931985/vs3ub8m4ixd6gbwadkgb.jpg" alt="img1"/>
                                <div className="image-url">
                                    <span>https://res.cloudinary.com/dged6fqkf/image/upload/v1570282919/wep4gepazhg9msjrh3yg.jpg</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="clear-fix"></div>
            </div>
        )
    }
}

export default ImagesGallery;