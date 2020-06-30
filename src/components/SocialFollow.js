import React, { Component } from 'react';
import '../css/SocialFollow.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-modal';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const fbLink = "https://www.facebook.com/DynamicsPerformanceTeam/";

const igLink = "https://www.instagram.com/dynamicsperformanceteam/?hl=en";

const mailLink = "mailto:dynamicsperformanceteam@gmail.com?subject=Hi, Dynamics Performance Team!";

const mailChimpLink = "https://yahoo.us10.list-manage.com/subscribe/post?u=ef82b25683d865ac2ef14450e&amp;id=bfdc7f3462";

const youtubeLink = "https://www.youtube.com/channel/UCLVld8eG5THi_R1MpLobU4g";

const yelpLink = "https://www.yelp.com/biz/dynamics-performance-team-san-jose";

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div
      style={{
        background: "#FF4081",
        borderRadius: "2%",
        padding: 10,
        marginTop: "10vh",
        display: "inline-block"
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: "5vmin", padding: 5, color: '#333333' }}
        ref={node => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <br />
      <input
        style={{ fontSize: "5vmin", padding: 5, color: '#333333', borderColor: 'white'  }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button className="submit-button" onClick={submit}>
        Submit
      </button>
    </div>
  );
};

class SocialFollow extends Component{
    constructor(props) {
      super(props);
      this.state= {
        showModal: false
      };
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
      this.setState({ showModal: true });
    }

    handleCloseModal() {
      this.setState({ showModal: false });
    }

    render(){
        return(
            <div className="Social">
              <ul>

              <li>
                  <a href={youtubeLink} title="Youtube" target="_blank" rel="noopener noreferrer">
                    <img className="youtube-iconImg" src={require("../images/youtubeIcon.png")} width="30px" height="30px" alt="error loading img"></img>
                  </a>
              </li>

              <li>
                  <a href={yelpLink} title="Yelp" target="_blank" rel="noopener noreferrer">
                    <img className="yelp-iconImg" src={require("../images/yelpIcon.png")} width="30px" height="30px" alt="error loading img"></img>
                  </a>
              </li>

              <li>
                  <a href={fbLink} title="Facebook" target="_blank" rel="noopener noreferrer">
                    <img className="facebook-iconImg" src={require("../images/fbIcon.png")} width="30px" height="30px" alt="error loading img"></img>
                  </a>
              </li>
              <li>
                  <a href={igLink} title="Instagram" target="_blank" rel="noopener noreferrer">
                    <img className="instagram-iconImg" src={require("../images/igIcon.png")} width="30px" height="30px" alt="error loading img"></img>
                  </a>
                </li>
                <li>
                  <a href={mailLink} title="Email Us" target="_blank" rel="noopener noreferrer">
                    <img className="mail-iconImg" src={require("../images/mailIcon.png")} width="22px" height="22px" alt="error loading img"></img>
                  </a>
                </li>
                <li>
                  <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
                  <a onClick={this.handleOpenModal}>Subscribe</a>
                    <Modal className="subscribe-modal" isOpen={this.state.showModal} contentLabel="Subscribe to our Newsletter" id='myModal' >
                       <h2>Subscribe to our Newsletter</h2>
                       <MailchimpSubscribe
                        url={mailChimpLink}
                        render={({ subscribe, status, message }) => (
                        <CustomForm
                         status={status}
                         message={message}
                         onValidated={formData => subscribe(formData)}
                      />
                      )}
                      />
                      <br />
                      <button className="close-button" onClick={this.handleCloseModal}>Close</button>
                    </Modal>
                </li>
              </ul>
            </div>
        );
      } 
}

export default SocialFollow;
