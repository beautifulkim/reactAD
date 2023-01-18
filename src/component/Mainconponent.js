import React from 'react';
import Banner from './Banner';

const Mainconponent = () => {
    return (
        <div>
            <Banner objid="mainBanner h-100"></Banner>
            <div>
                <div style={{height: '100vh'}} id='procss' className='border-top'></div>
                <div style={{height: '100vh'}} id='review' className='border-top bg-dark'></div>
                <div style={{height: '100vh'}} id='qna' className='border-top'></div>
            </div>
        </div>
    );
};

export default Mainconponent;