import React from 'react';
import '../App.scss';
import logo from '../assets/images/quran-font.png';
import Buttons from '../assets/tsx components/buttons-inflex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faCoffee, faFile, faList, faSearch } from '@fortawesome/free-solid-svg-icons';

class Homepage extends React.Component {

    render() {
        const buttonData = [
            {textData: "جست و جو", icon:<FontAwesomeIcon icon={faSearch} />, id: 1},
            {textData: "لیست آیات", icon:<FontAwesomeIcon icon={faList} />, id: 2},
            {textData: "تنظیمات", icon:<FontAwesomeIcon icon={faAddressBook} />, id: 3},
            {textData: "درباره ما", icon:<FontAwesomeIcon icon={faFile} />, id: 4}
        ]

        const ButtonDiv = buttonData.map(item => {
            return <Buttons 
            textData={item.textData} 
            icon={item.icon}
            />
        })

        return (
            <div className="Home-page">
                <div className="home-top">
                    <div className="home-page-image"></div>
                    <div className="quran-font-image"></div>
                </div>
                <div className="home-middle">
                    <div>
                        <h1><pre>The Noble Quran</pre></h1>
                        <div  className="buttonsContainer">                   
                            {ButtonDiv}
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default Homepage;