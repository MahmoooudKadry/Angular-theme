import React from 'react'

export default function About() {
  return (<>
    <section id='about'>
      <div className="container">
        <h2 className='text-white text-center pt-5 pb-3 fs-1'>ABOUT</h2>
        <div className="d-flex align-items-center justify-content-center">
          <div className='border border-2 border-white border-left me-4 mt-1'></div>
          <i className="fa-solid fa-star fs-2 text-white"></i>
          <div className='border border-2 border-white border-right ms-4 mt-1'></div>
        </div>
        <div className="row gy-4 text-white py-5 fs-5">
          <div className="col-md-4 offset-md-2">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-4 ">
            <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
          </div>
        </div>

      </div>

    </section>
  </>
  )
}
