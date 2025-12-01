import PenEdit from '../../images/pen-edit.png'
import Image from 'next/image'
import './resume.css'

const Resume = () => {
    return (
        <div className="resume">
            <div className="resume__header">
                <p className="resume__title">Creating incredible experiences</p>
                <Image
                    src={PenEdit}
                    width={32.5}
                    height={32.5}
                    className="resume__image"
                    alt="Pen edit image"
                />
            </div>
            <div className="resume__content">
                <p className='resume__text'>Web applications centered on user experience have been at the core of my work across banking, broadband, and telecom.</p>
                <p className='resume__text'>Crafting reusable, well-documented interfaces and components is part of my routine, along with contributing to scalable and consistent Design Systems.</p>
                <p className='resume__text'>Experience includes payment and checkout flows, broad integration work, OTP validation, analytics setup, and content management in Liferay.</p>
            </div>
        </div >
    );
};

export default Resume;
