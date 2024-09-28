import React from 'react'
import './Contact.css'
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";


const Contact = () => {
  return (
    <section className='c-wrapper c-wrap'>
        <div className="c-container inner-width">
            <div className="c-left">
            <span className="orangeText">Our Value</span><br/>
                <span className="primary-text">Value We Give to You</span><br/>
                <span className='secondarytext'>
                    We always ready to help by providing the best Services for you.
                    <br/>
                    We beleive a good blace to live can make your life better.
                </span>
                <div className="contactmodes">
                    <div className="row">
                        <div className="mode">
                            <div className="flexstarts">
                                <div className="icon">
                                <MdCall size={25}/>
                                </div>
                                <div className="Detail">
                                    <span>Call</span><br/>
                                    <span>021 123 145 14</span>
                                </div>
                                
                            </div>
                            <div className="button">Call Now</div>
                        </div>
                        <div className="mode">
                            <div className="flexstarts">
                                <div className="icon">
                                <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="Detail">
                                    <span>Chat</span><br/>
                                    <span>021 123 145 14</span>
                                </div>
                                
                            </div>
                            <div className="button">Chat Now</div>
                        </div>
                        <div className="mode">
                            <div className="flexstarts">
                                <div className="icon">
                                <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="Detail">
                                    <span>Video Call</span><br/>
                                    <span>021 123 145 14</span>
                                </div>
                                
                            </div>
                            <div className="button">Video Call Now</div>
                        </div>
                        <div className="mode">
                            <div className="flexstarts">
                                <div className="icon">
                                <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="Detail">
                                    <span>Message</span><br/>
                                    <span>021 123 145 14</span>
                                </div>
                                
                            </div>
                            <div className="button">Message Now</div>
                        </div>
                    </div>
                </div>
                 
            </div>
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
