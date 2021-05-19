import React,{useState,useRef,useEffect} from 'react'
import  './Accord.css'
import Chevron from './chevron.svg'

function Accord() {
  
    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState()

    const toggleState = () => {
        setToggle(!toggle)
    }
  const refHeight = useRef();


  useEffect(() => {
      setHeightEl(`${refHeight.current.scrollHeight}px`)
    
  }, [])


    return (
        <div className="accord">

            <div 
            onClick={toggleState}
            className="accord-visible">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <img src={Chevron} alt="chevron down"  />
            </div>
            <div 
            ref={refHeight}
            className={toggle ? 'accord-toggle animated' : 'accord-toggle'}
            style={{height: toggle ? `${heightEl}` : '0px'}}
            >
                <p
                arria-hidden={toggle ? 'true' : 'false'}
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore sint provident in fugit vero corporis repudiandae, eos blanditiis iusto, dolore excepturi amet nemo sequi perferendis a ut eius. Quam!</p>
            </div>
        </div>
    )
}

export default Accord
