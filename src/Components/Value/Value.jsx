import React, { useState } from 'react'
import { Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemState,AccordionItemPanel } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import datas from '../utils/accordion.jsx'
import './Value.css'
const Value = () => {
  return (
     <section className="v-wrapper">
        <div className="v-conatiner inner-width">
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>
            <div className="v-right">
                <span className="orangeText">Our Value</span><br/>
                <span className="primary-text">Value We Give to You</span><br/>
                <span className='secondarytext'>
                    We always ready to help by providing the best Services for you.
                    <br/>
                    We beleive a good blace to live can make your life better.
                </span>
                <Accordion className='accordion' allowMultipleExpanded={false}
                preExpanded={[0]}>
                    {
                        datas.map((item, i)=>{
                            const [className, SetClassname] = useState(null)
                            return(

                                <AccordionItem className={`accordionitem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading className='accordion-headding'>
                                        <AccordionItemButton className='flexstart'>
                                            <AccordionItemState>
                                                {
                                                    ({expanded})=>{
                                                        expanded
                                                        ? SetClassname('expanded')
                                                        : SetClassname('collapsed')
                                                    }
                                                }
                                            </AccordionItemState>
                                            <div className="icon">{item.icon}</div>
                                            <span className='primarytext'>{item.heading}</span>
                                            <div className="icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>{item.detail}</AccordionItemPanel>
                                    
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
     </section>
  )
}

export default Value
