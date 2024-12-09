import React from 'react';
import './Testimonial.scss';
import Image from './image.png';

const Testimonial = () => {
    return (
        <div className='bigCard'>
            <div className='testi_img'>
                <img src={Image} />
            </div>
            <div className='p'>
                <h1>Rejoingnez-nous et adhérez à une large communauté de passionnés de film comme vous</h1>
            </div>
            <div className='p1'>
                <p>Découvrez une miltitude film et ce que pensent  les autrres de ces productions, ajoutez vos productions préférés à vos coup de coeurs et consultez-les à tout moment.</p>
            </div>

            <div className='row'>
                <div className='col20'>
                    <button className="btnC">Je rejoins Movshar</button>
                </div>
                <div className='col30'>
                    <button className="btnC">J'accède à mon compte</button>
                </div>
            </div>
            {/* <div className='row'>
                <div className='col'>
                    <div className='testi_img'>
                        <img src={Image} />
                    </div>
                </div>
                <div className='col50'>
                    <h1>Rejoingnez-nous et adhérez à une <br />large communauté de passionnés de film comme vous</h1>
                </div>
                <div className='col40'>
                    <p>Découvrez une miltitude film et ce que pensent  les autrres de ces <br />productions, ajoutez vos productions préférés à vos coup de coeurs <br />et consultez-les à tout moment.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col20'>
                    <button className="btnC">Je rejoins Movshar</button>
                </div>
                <div className='col30'>
                    <button className="btnC">J'accède à mon compte</button>
                </div>
            </div> */}

        </div>
    )
}

export default Testimonial
