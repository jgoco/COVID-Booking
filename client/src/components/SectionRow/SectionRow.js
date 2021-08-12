import { Button } from '../Button/Button';
import React from 'react'
import { Link } from 'react-router-dom';
import './SectionRow.css';

function SectionRow({
    imageAlignment,
    topLine,
    headline,
    isLightText,
    description,
    isLightTextDescription,
    buttonLabel,
    image,
    alt
}) {
    return (
        <div className='row section-row' style={{display: 'flex', flexDirection: imageAlignment === 'left' ? 'row-reverse' : 'row'}}>
            <div className="col">
                <div className="section-row-text-wrapper">
                    <div className="top-line">
                        {topLine}
                    </div>
                    <h1 className={isLightText ? 'heading' : 'heading dark'}>{headline}</h1>
                    <p className={isLightTextDescription ? 'section-row-subtitle' : 'section-row-subtitle dark'}>{description}</p>
                    <Link to='/api/user/register'>
                        <Button buttonSize='btn--wide' buttonColour='blue'>{buttonLabel}</Button>
                    </Link>
                </div>
            </div>
            <div className="col">
                <div className="section-row-img-wrapper">
                    <img src={image} alt={alt} className="section-row-img" />
                </div>
            </div>
        </div>
    );
}

export default SectionRow;
