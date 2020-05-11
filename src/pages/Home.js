import React, { Component } from 'react';
//can import your own css file here instead of App.css
import mainBanner from '../images/home/Facebook_Cover_2019.png';
import Slideshow from '../components/Slideshow.js'
import '../css/Home.css';
import Toolbar from '../components/Toolbar.js';
// must extend "Component" and it's recommended to name the class the same name as the filename
class Home extends React.Component {
	// area where functions are defined (See FormExample.js)
	constructor(props){
		super(props);
		this.state = { width: 0, height: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.myRef = React.createRef();
		this.changeStyle = this.changeStyle.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.textTimer = setInterval(this.changeStyle, 1000);
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
		clearInterval(window.textTimer);
	}

	changeStyle(){
		const x = this.myRef.current;

		if(x.style.fontStyle=='italic'){
			x.style.fontWeight= 'bold';
			x.style.fontStyle='normal';
		}
		else if(x.style.fontStyle=='normal'&&x.style.fontWeight=='normal'){
			x.style.fontWeight = 'bold';
			x.style.textDecorationLine = 'underline';
		}
		else if(x.style.textDecorationLine=='underline'){
			x.style.fontStyle='italic';
			x.style.fontWeight = 'normal';
			x.style.textDecorationLine = 'initial';
		}
		else if(x.style.fontWeight=='bold'){
			x.style.fontStyle='normal';
			x.style.fontWeight='normal';
		}
	}
	
	render() {

		return(
			<div>
				<Toolbar/>
				<img onContextMenu={(e)=> {e.preventDefault(); return false;}} src={mainBanner} style={{height: this.state.width * 0.4, width: this.state.width}}/>
				<div className="Text-Container">
					<div className="Left-Container" style={{width: this.state.width*0.5}}>
						<p className="Dynamic-Text" >A team of<span style={{color: 'rgb(15, 185, 185)',fontStyle: 'normal',fontWeight: 'normal'}}id='dynamics' ref={this.myRef}> dynamic</span> <span><br/>dancers.</span></p>
						<p className="Static-Text"> 
								The Dynamics Performance Team (DPT) is an award winning non-profit dance company training the next generation of versatile artists in San Jose and the surrounding Bay Area. Established in 2005, DPT performs and competes in jazz, contemporary, lyrical, tap, and hip hop, among others. <br/> <br/>
		
								Dancers learn quality technique along with competitive choreography in both commercial and concert styles. Like the five points of a star, DPT has five primary goals: instill technique, performance, character, dedication and passion in all of its dancers. Dancers have the opportunity to perform in groups, trios, duets, and even solos.<br/> <br/>
		
								DPT holds open auditions for dancers ages 8+ for each season, and are excited to open up the team to ages 5-7 this year! <a style={{color: 'rgb(15, 185, 185)'}} href='https://stackoverflow.com/questions/30208108/make-part-of-the-text-as-link-react-localization'>Click here</a> for more information. 
								Dancers have the opportunity to perform in groups, trios, duets, and even solos. <a style={{color: 'rgb(15, 185, 185)'}} href='https://stackoverflow.com/questions/30208108/make-part-of-the-text-as-link-react-localization'>Click here</a> to learn more about DPT.
						</p>
					</div>
					<div className="Right-Container" style={{width: this.state.width*0.5}}>
						<Slideshow/>
					</div>	
				</div>
				<div className="Footer">
					<p className="Contact-Header" style={{fontSize: "2vw"}}>
						Contact <br/> Us
					</p>
					<p className="Contact-Header" style={{textAlign: "left", fontSize: "1.3vw"}}>
						+ 408 622 0249 <br/> <a style={{color: "black"}} href={`mailto:dynamicsperformanceteam@gmail.com`}>dynamicsperformanceteam@gmail.com</a>
					</p>
				</div>
			</div>
		)
	}
}

export default Home
