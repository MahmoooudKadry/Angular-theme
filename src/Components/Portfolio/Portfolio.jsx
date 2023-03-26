import React from 'react'
import image1 from '../../images/cabin.png'
import image2 from '../../images/cake.png'
import image3 from '../../images/circus.png'
import image4 from '../../images/game.png'
import image5 from '../../images/safe.png'
import image6 from '../../images/submarine.png'

export default function Portfolio() {




    function display() {
        document.getElementById("lightBoxContainer").classList.replace("d-none" , "d-block")
        document.body.style.overflow = "hidden"
    }
    function closeSlide() {
        document.getElementById("lightBoxContainer").classList.replace("d-block" , "d-none")
        document.body.style.overflow = "auto"
    }

    return (<>
        <section id='Portfolio'>
            <div className="container">
                <h2 className='text-dark text-center'>PORTFOLIO</h2>
                <div className="d-flex align-items-center justify-content-center mt-4">
                    <div className='border border-2 border-dark border-left me-4 mt-2'></div>
                    <i className="fa-solid fa-star fs-2 text-dark"></i>
                    <div className='border border-2 border-dark border-right ms-4 mt-2'></div>
                </div>
                <div className="row g-5 my-2">
                    <div className="col-md-4">
                        <div onClick={display} className="item position-relative">
                            <img src={image1} className='w-100 rounded' alt="" />
                            <div className="image-caption d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus text-white"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={display}  className="item position-relative">
                            <img  src={image2} className='w-100 rounded' alt="" />
                            <div className="image-caption d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus text-white"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={display} className="item position-relative">
                            <img src={image3} className='w-100 rounded' alt="" />
                            <div className="image-caption d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus text-white"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={display} className="item position-relative">
                            <img src={image4} className='w-100 rounded' alt="" />
                            <div className="image-caption d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus text-white"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={display} className="item position-relative">
                            <img src={image5} className='w-100 rounded' alt="" />
                            <div className="image-caption d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus text-white"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={display} className="item position-relative">
                            <img src={image6} className='w-100 rounded' alt="" />
                            <div className="image-caption d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div id="lightBoxContainer" className='d-none'>
            <div className="container">
                <div className="bg-white mt-5 rounded position-relative">
                    <i onClick={closeSlide} className='fa fa-xmark fs-1 position-absolute end-0 pe-2'></i>
                    <h2 className='text-dark text-center pt-5'>LOG CABIN</h2>
                    <div className="d-flex align-items-center justify-content-center my-4">
                        <div className='border border-2 border-dark border-left me-4 mt-2'></div>
                        <i className="fa-solid fa-star fs-2 text-dark"></i>
                        <div className='border border-2 border-dark border-right ms-4 mt-2'></div>
                    </div>
                    <div id="lightBox" className='mx-auto rounded mb-4'>
                    </div>
                    <p className=' w-50  text-center mx-auto mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                    <button onClick={closeSlide} className='btn mx-auto text-center d-block my-3 '><i className='fa fa-xmark me-2'></i>close window</button>
                    </p>
                    <p>.</p>
                    

                </div>
            </div>
        </div>
    </>
    )
}
