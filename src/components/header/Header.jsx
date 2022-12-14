import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss'
import { addFlag } from '../../redux/slice/setClassName.js'

const Header = () => {
   const dispatch = useDispatch();
   const active = useSelector(state => state.setClassName.active);

   const showForm = () => {
      dispatch(addFlag())
   }
   return (
      <div className={styles.header}>
         <h1 className={styles.h1} >Список користувачів</h1>

         <div className={styles.buttonBlock} onClick={() => showForm()}>
            <button className={styles.openForm} href="#">
               <img src="assets/logo/close.svg" alt="" />
            </button>
         </div>
      </div>
   )
}

export default Header
