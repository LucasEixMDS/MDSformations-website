import { useState } from 'react';
import Modal from './Modal'; 


const Header = () => {
    const [activeModal, setActiveModal] = useState(null);

    const handleModalOpen = (modalName) => {
        setActiveModal(modalName);
    };

    return (
        <header className='headerDesktop'>
            <div className="logo"></div>
            <nav>
                <ul>
                    <li onClick={() => handleModalOpen('formations')}>Nos Formations</li>
                    <li onClick={() => handleModalOpen('orientation')}>Orientation</li>
                    <li onClick={() => handleModalOpen('articles')}>Articles</li>
                    <li onClick={() => handleModalOpen('chezMDS')}>Chez MDS</li>
                </ul>
            </nav>
            {activeModal && <Modal modalName={activeModal} closeModal={() => setActiveModal(null)} />}
        </header>
    );
};

export default Header;