import React, { Component } from 'react';
import Toolbar from "../../components/Toolbar";
import GalleryImages from "../../components/GalleryImages.js";
import Footer from '../../components/Footer.js';
import '../../css/Gallery.css';
import { Tabs, TabPane } from 'react-bootstrap';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
       isDesktop: true
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    console.log(window.innerHeight, window.innerWidth);
    window.addEventListener('resize', this.updateWindowDimensions);
    let visited = sessionStorage["check"];
    if(visited) {
      return;
    }
    window.location.reload();
      sessionStorage["check"]= true;
    
	}
	
	updateWindowDimensions() {
		if (window.innerWidth > 800 && !this.state.isDesktop){
			this.setState({ isDesktop: true });
		}
    
    if(window.innerWidth <= 800 && this.state.isDesktop){
			this.setState({ isDesktop: false });
		}
	}
  render() {

    return(
      <div>
         <Toolbar />
         <Tabs className="tabholder" fill defaultActiveKey="photos">
           <TabPane className="tab1" eventKey="photos" title="Photos">
             <div style={{width: "100%", height: "100%",marginTop:"30px"}}>
             <div className="text-modal-container"> 
               <h1 className="tab-title"> Photo Gallery </h1>
             </div> 
            <GalleryImages/>
            </div>
            </TabPane>
         
           <TabPane eventKey="videos" title="Videos">
            {/*Render first div if window is desktop size, render second div if tablet or mobile*/}
            {
            this.state.isDesktop ? 
              <div>
                <div style={{alignItems: "center", justifyContent: "center"}}>
                  <div className="gallery-text-container"> 
                    <h1 className="tab-title"> Video Gallery </h1>
                    <img className="DPT-logo" src={require("../../images/logo1.png")}></img>
                    <br />
                    <p className="subscribe-text"> For more videos, click <a style={{color: '#FF4081'}} target="_blank" href="https://www.youtube.com/channel/UCLVld8eG5THi_R1MpLobU4g">here</a> to subscribe to our Youtube channel! </p>
                  </div> 
                </div>

                <iframe className="youtube-iframe" src="https://www.youtube.com/embed/+lastest?list=PLCyEpHAXCjJMDXWsfMdWfD1NHh3zoYa1m" frameborder="0" allowFullScreen></iframe>
                <Footer />
              </div>
            : 
              <div> 
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}> 
                  <img className="DPT-logo" src={require("../../images/logo1.png")}></img>
                  <h1 className="tab-title"> Video Gallery </h1>
                </div>

                <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>  
                  <iframe className="youtube-iframe" src="https://www.youtube.com/embed/+lastest?list=PLCyEpHAXCjJMDXWsfMdWfD1NHh3zoYa1m" frameborder="0" allowFullScreen></iframe>
                </div>  

                {(window.innerWidth <= 600 && window.innerHeight < 950) ? <div className="bottom-absolute"> <Footer/> </div> : <Footer />}
              </div>
          }
          </TabPane>
         </Tabs>
      </div>
    );
  }
}

export default Gallery

