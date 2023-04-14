import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "./modalPopup.module.scss";
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';

function ModalPopup({message, action, popup, changeStatus, removeItem}:any) {
  console.log('OO-www-',action);
  const [openPopup, setOpenPopup] = useState(popup);
  const router = useRouter();
 
  const closeModal = () => {
       setOpenPopup('d-none');
       if(action == 'remove'){
        changeStatus()
       }
       
  }
  const removeItemFromCart = (removeItem:any) =>{
    // console.log('ITEM===',removeItem);
    const cartProducts =window.localStorage.getItem('ids');  
                console.log('CTPRO==',cartProducts);
                const cartIds = JSON.parse(cartProducts || `{}`);
               
                let index = cartIds.indexOf( removeItem )
                if( index !== -1 ){
                    // remove it from state
                    cartIds.splice(index, 1 )
    
                    console.log('CKKKK=',cartIds);
                    window.localStorage.setItem('cartCount', cartIds.length);
    
                    // update localStorage
                    window.localStorage.setItem( 'ids', JSON.stringify(cartIds) )
                    // update reptiles State to re-render the list
                    // setCartProducts( [...cartItems] )
                    router.reload();
                  }

  }
  // useEffect(()=>{
  //   setOpenPopup('d-block')
  // },[popup])
  // console.log('IIII==',openPopup)

  return (
    <div
      className={`modal show ${openPopup}  ${styles.modalPopup}`}
     
    >
      <Modal.Dialog>
        <Modal.Header >
          <Modal.Title>Oriental Lotus</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{message}</p>
        </Modal.Body>
        { action == 'remove' ? 
        <Modal.Footer>
          <Button variant="secondary" onClick={() => removeItemFromCart(removeItem)}>Remove</Button>
          <Button variant="primary" onClick={closeModal}>Cancel</Button>
        </Modal.Footer>
        : 
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Ok</Button>
        </Modal.Footer>}
        
      </Modal.Dialog>
    </div>
  );
}

export default ModalPopup;