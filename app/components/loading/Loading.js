import React from 'react';
import Image from 'next/image';
import loadingImg from '../../assets/img/loading/loading.gif'

export default function Loading(props) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: props.color
    }}>
      {/* <Image src={loadingImg} width={100} alt="loading" /> */}
      {
        props.isLoading &&
        // <div className="spinner-border text-danger" role="status">
        //   {/* <span className="visually-hidden">Loading...</span> */}
        // </div>
         <i className='fas fa-spinner fa-2x' ></i>
      }

    </div>
  )
}