import React from 'react'
import { useForm } from 'react-hook-form';
import { useAddUserMutation } from '../../redux/usersApi';
import styles from './FormAddUser.module.scss'
import './FormAddUser.module.scss'
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { addFlag, removeFlag } from '../../redux/slice/setClassName.js'

const FormAddUser = () => {
   const dispatch = useDispatch();
   const active = useSelector(state => state.setClassName.active);

   const {

      register,
      formState: {
         errors,
         isValid
      },
      handleSubmit,
      reset,

   } = useForm({
      mode: "onChange"

   })

   const [addUser, { isError }] = useAddUserMutation()

   const onSubmit = async (data) => {
      await addUser({ ...data }).unwrap()
      reset()
      closeForm()
   }

   const closeForm = () => {
      dispatch(removeFlag())
   }

   return (
      <div className={active ? classNames(styles.blockFrom, styles.active) : classNames(styles.blockFrom,)}>

         <div className={styles.conteinerForm}>

            <div className={styles.contentForm}>

               <div onClick={() => closeForm()}>
                  <button className={styles.closeForm} href="#">
                     <img src="/assets/logo/close.svg" alt="" />
                  </button>
               </div>

               <h2>Додати користувача</h2>
               <form onSubmit={handleSubmit(onSubmit)}>

                  <label >
                     <span>Им'я:</span>
                     <input type="text"
                        {...register('firstName', {
                           required: "обов'зкове поле",
                           minLength: {
                              value: 2,
                              message: 'мінімальна кількість символів 2'
                           },
                           maxLength: {
                              value: 9,
                              message: 'максимальна кількість символів 9'
                           }

                        })}
                     />
                  </label>

                  <div className={styles.error}>
                     {errors?.firstName && <p>{errors?.firstName.message || "Erorrs"}</p>}
                  </div>

                  <label >
                     <span> Фамілія:</span>
                     <input type="text"
                        {...register('lastName', {
                           required: "обов'зкове поле",
                           minLength: {
                              value: 2,
                              message: 'мінімальна кількість символів 2'
                           },
                           maxLength: {
                              value: 9,
                              message: 'максимальна кількість символів 9'

                           }
                        })}
                     />
                  </label>

                  <div className={styles.error}>
                     {errors?.lastName && <p>{errors?.lastName.message || "Erorrs"}</p>}
                  </div>


                  <label >
                     <span>Імейл:</span>
                     <input type="email"
                        {...register('email',
                           {
                              required: "обов'зкове поле",
                              pattern: {
                                 value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                 message: 'Некоректний імейл'
                              }

                           },
                        )}
                     />
                  </label>

                  <div className={styles.error}>
                     {errors?.email && <p>{errors?.email.message || "Erorrs"}</p>}
                  </div>

                  <label >
                     <span>Номер телефону:</span>
                     <input type="tel"
                        {...register('number', {
                           required: "обов'зкове поле",
                           min: {
                              value: 10,
                              message:'максимальна кільскість символів 80'
                           },
                           pattern: {
                              value: /^[0-9][A-Za-z0-9 -]*$/,
                              message:'тільки цифри '
                           }
                        })
                        }
                     />
                  </label>

                  <div className={styles.error}>
                     {errors?.number && <p>{errors?.number.message || "Erorrs"}</p>}
                  </div>

                  <label >
                     <span>Про себе:</span>
                     <textarea
                        {...register('text', {

                           maxLength: {
                              value: 180,
                              message: 'максимальна кільскість символів 180'
                           }
                        })}
                     />
                  </label>

                  <div className={styles.error}>
                     {errors?.text && <p>{errors?.text.message || "Erorrs"}</p>}
                  </div>

                  <div className={styles.buttonBlock}>
                     <input onClick={() => onSubmit(data)} className={styles.button} type='submit' disabled={!isValid} />
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default FormAddUser
