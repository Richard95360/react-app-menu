import React,{useState} from 'react'
import "./Modal.css"

export default function Modal() {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
           <button 
           onClick={toggleModal}
           className="btn-modal">Open</button>
           {modal && (
           
           <div className="overlay">
               <div className="modal">
                   <div className="modal-content">
                       <h2>Hello Modale</h2>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi distinctio a magni saepe quod nostrum nihil doloremque officiis, aperiam ad fugit dolorum nesciunt fuga? Quam amet doloremque eligendi quae deserunt. Harum a unde cum praesentium qui voluptas dolore voluptatibus ab repellendus, veniam iste consectetur accusamus ex impedit maiores doloribus maxime.</p>
                       <button
                       onClick={toggleModal}
                        className="close-modal">CLOSE</button>
                   </div>
               </div>
           </div>
           )}
        </>
    )
}





