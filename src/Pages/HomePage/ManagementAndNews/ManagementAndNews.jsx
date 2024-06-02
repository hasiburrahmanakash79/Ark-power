import React from 'react';
import { Link } from 'react-router-dom';

const ManagementAndNews = () => {
    return (
        <div className='mb-10'>
            <div className='grid grid-cols-2 gap-20'>
                <div>
                    <h1 className='text-2xl font-bold uppercase mb-10'>News and event</h1>
                </div>
                <div>
                    <h1 className='text-2xl font-bold uppercase mb-10'>Management</h1>
                    <div className='grid grid-cols-2 gap-10'>
                        <div>
                        <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1769" alt="" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                            <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corrupti vel suscipit explicabo asperiores quod?</p>
                            <Link className='text-[#00ADF2] text-lg'>View details ---</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagementAndNews;