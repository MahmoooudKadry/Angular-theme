import img from '../../images/avataaars.svg'

import React from 'react'

export default function Home() {
  return (<>
        <header className='position-relative'>
        <div className="home-content position-absolute top-50 start-50 translate-middle">
          <div className='mx-auto text-center'>
            <img style={{ width: '250px' }} className="mb-4 mt-3" src={img} alt="" />
            <h1 style={{ fontSize: '4.5rem' }} className='text-white text-center'>START REACT</h1>
            <div className="d-flex align-items-center justify-content-center">
              <div className='border border-2 border-white border-left me-4 mt-2'></div>
              <i className="fa-solid fa-star fs-2 text-white"></i>
              <div className='border border-2 border-white border-right ms-4 mt-2'></div>
            </div>
            <p className='text-white fs-4 mt-5'>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </header>
  </>
  )
}

