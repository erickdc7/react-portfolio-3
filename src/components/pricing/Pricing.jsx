import React from 'react'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import './pricing.css'

const Pricing = () => {
    return (
        <section className="pricing section" id="pricing">
            <h2 className="section__title text-cs">Pricing</h2>
            <p className="section__subtitle">
                My <span>Price Board</span>
            </p>

            <div className="pricing__container container grid">
                <div className="pricing__item card card-one">
                    <span className="pricing__subtitle text-cs">Hourley Basis</span>
                    <h3 className="pricing__price">
                        39 <span>$</span> <em>Hour</em>
                    </h3>

                    <p className="pricing__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio fugiat nihil placeat quas! Maiores ipsa excepturi omnis doloribus laudantium.
                    </p>

                    <ul className="pricing__list">
                        <li className="list__item">
                            <FaCheck className='list__icon' />
                            <span>Brand Design</span>
                        </li>

                        <li className="list__item">
                            <FaCheck className='list__icon' />
                            <span>Web Development</span>
                        </li>

                        <li className="list__item">
                            <del>Advertising</del>
                        </li>

                        <li className="list__item">
                            <del>Photography</del>
                        </li>
                    </ul>

                    <a href="" className="btn pricing__btn text-cs">
                        Start Project
                        <FaArrowRight className='pricing__btn-icon' />
                    </a>

                    <img src={shapeTwo} alt="" className="shape c__shape" />
                </div>

                <div className="pricing__item-wrapper">
                    <span className="pricing__label text-cs">Popular</span>

                    <div className="pricing__item card card-one">
                        <span className="pricing__subtitle text-cs">Freelancing</span>
                        <h3 className="pricing__price">
                            259 <span>$</span> <em>Week</em>
                        </h3>

                        <p className="pricing__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio fugiat nihil placeat quas! Maiores ipsa excepturi omnis doloribus laudantium.
                        </p>

                        <ul className="pricing__list">
                            <li className="list__item">
                                <FaCheck className='list__icon' />
                                <span>Brand Design</span>
                            </li>

                            <li className="list__item">
                                <FaCheck className='list__icon' />
                                <span>Web Development</span>
                            </li>

                            <li className="list__item">
                                <FaCheck className='list__icon' />
                                <span>Advertising</span>
                            </li>

                            <li className="list__item">
                                <del>Photography</del>
                            </li>
                        </ul>

                        <a href="" className="btn pricing__btn text-cs">
                            Start Project
                            <FaArrowRight className='pricing__btn-icon' />
                        </a>

                        <img src={shapeTwo} alt="" className="shape c__shape" />
                    </div>
                </div>

                <div className="pricing__item card card-one">
                    <span className="pricing__subtitle text-cs">Full Time</span>
                    <h3 className="pricing__price">
                        1,249 <span>$</span> <em>Month</em>
                    </h3>

                    <p className="pricing__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio fugiat nihil placeat quas! Maiores ipsa excepturi omnis doloribus laudantium.
                    </p>

                    <ul className="pricing__list">
                        <li className="list__item">
                            <FaCheck className='list__icon' />
                            <span>Brand Design</span>
                        </li>

                        <li className="list__item">
                            <FaCheck className='list__icon' />
                            <span>Web Development</span>
                        </li>

                        <li className="list__item">
                            <FaCheck className='list__icon' />
                            <span>Advertising</span>
                        </li>

                        <li className="list__item">
                            <FaCheck className='list__icon' />
                            <span>Photography</span>
                        </li>
                    </ul>

                    <a href="" className="btn pricing__btn text-cs">
                        Start Project
                        <FaArrowRight className='pricing__btn-icon' />
                    </a>

                    <img src={shapeTwo} alt="" className="shape c__shape" />
                </div>
            </div>

            <div className="section__deco deco__left">
                <img src={shapeOne} alt="" className='shape' />
            </div>
        </section>
    )
}

export default Pricing