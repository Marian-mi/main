import React from 'react';
import '../assets/scss/soore-list.scss';
import SooreList from '../assets/tsx components/sooreList';
import Sura from '../assets/ts/quran-metadata'
import { Link } from 'react-router-dom';

export default class SooreListPage extends React.Component {


    render() {
        
        const Linkstyle = {
            textDecoration: 'none'
        }

        const SuraArray = Sura.Sura.map((item, index, array) => {
            if(item[4] !== undefined){
                return <Link style={Linkstyle} 
                to={{
                    pathname: `Aye/${item[5]}`,
                    state: {
                        start: item[0],
                        end: array[index+1][0]
                    }
                }}>
                <SooreList
                    arabicName={item[4] as string}
                    conuter={index}
                    finglishName={item[5] as string}
                    englishName={item[6] as string}
                    key={item[0]}
                />
                </Link>
            }else{return null};
        })
        return (
            <div className="soore-list-main">
                <div className="soore-list-top">
                    برای مشاهده آیات هر سوره کلیک کنید
                </div>
                <div className="soore-list-container">
                    {SuraArray}
                </div>
            </div>
        )
    }
}