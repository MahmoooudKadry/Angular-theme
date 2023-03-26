import React from 'react'

export default function Contact() {
    return (<>
        <section className='py-5' id='contact'>
            <div className="container">
                <h2 className='text-dark text-center'>PORTFOLIO</h2>
                <div className="d-flex align-items-center justify-content-center mt-4">
                    <div className='border border-2 border-dark border-left me-4 mt-2'></div>
                    <i className="fa-solid fa-star fs-2 text-dark"></i>
                    <div className='border border-2 border-dark border-right ms-4 mt-2'></div>
                </div>
                <div className="w-75 mx-auto">
                    <div className="form-group mt-4">
                        <input required type="text" className='form-control' placeholder='Name' id='name' name='name' />
                    </div>
                    <div className="form-group mt-4">
                        <input required type="email" className='form-control' placeholder='Email address' id='email' name='email' />
                    </div>
                    <div className="form-group mt-4">
                        <input required type="tel" className='form-control' placeholder='Phone Number' id='number' name='number' />
                    </div>
                    <div className="form-group mt-4">
                    <textarea required placeholder='Message' className='form-control' name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <button className='btn btn-lg mt-4'>Send</button>
                </div>
            </div>
        </section>
        <section className='py-5' id='contact-info'>
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="inner text-white text-center">
                    <h3 className='mb-3'>LOCATION</h3>
                    <p className='fs-5'>2215 John Daniel Drive <br /> Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="inner text-white text-center">
                    <h3>AROUND THE WEB</h3>
                    <div className="icons d-flex justify-content-center align-items-center mt-4">
                    <div className="icon px-2">
                    <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="icon px-2">
                    <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className="icon px-2">
                    <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div className="icon px-2">
                    <i className="fa-brands fa-dribbble"></i>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="inner text-white text-center">
                    <h3 className='mb-3'>ABOUT FREELANCER</h3>
                    <p className='fs-5'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </>
    )
}
