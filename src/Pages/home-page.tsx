import React, { ChangeEvent } from 'react';
import '../App.scss';
import logo from '../assets/images/bismillah.png';
import Buttons from '../assets/tsx components/buttons-inflex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faFile, faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchField from '../assets/tsx components/searchField'

class Homepage extends React.Component {

    componentDidMount () {
        const idio = document.querySelector('#auniqueid')! as HTMLDivElement;
        idio?.addEventListener('click', () => {
            alert('heldawoo')
        })
    }

    render() {
        const buttonData = [
            {textData: "Soore List", icon:<FontAwesomeIcon icon={faList} />, id: 2},
            {textData: "Setting", icon:<FontAwesomeIcon icon={faAddressBook} />, id: 3},
            {textData: "About Us", icon:<FontAwesomeIcon icon={faFile} />, id: 4}
        ]

        const ButtonDiv = buttonData.map(item => {
            return <Buttons 
            textData={item.textData} 
            icon={item.icon}
            key={item.id}
            />
        })



        return (
            <div className="Home-page">
                <div className="home-top">
                    <div className="home-page-image">
                        <div>
                            <img src={logo} alt=""/>
                        </div>
                        <FontAwesomeIcon icon={faList} />
                       
                    </div>
                    <div className="bannerContainer">
                        <div className="homeCover">
                            <h1  id="auniqueid">The Noble Quran</h1>
                            <p>
                            Lorem ipsum dolor sit amet, 
                            consectetuer adipiscing elit. Aenean commodo
                             
                            </p>
                        </div>
                        <div  className="quran-font-image"></div>
                    </div>
                </div>
                <div className="home-middle">
                    <SearchField />
                    <div className="HM-left" >
                    {ButtonDiv}
                    </div> <div className="scrollSuggestion"></div>             
                </div>
            </div>
        )
    }
}

export default Homepage;