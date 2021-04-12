import React from 'react';
import {Qurantext} from '../assets/ts/quran-simple-plain';
import '../assets/scss/ayePage.scss';


type props = {
    location: {
        state: {
            start: number;
            end: number;
        }
    }
}


export default class ayatePage extends React.Component<props> {

    
    render() {
        let start = this.props.location.state.start;
        let end = this.props.location.state.end;
        const AyeText = Qurantext.filter((item, index) => {
            if(index >= start && index < end) {
                return {item}
            }else return false;
        })

        const AyeDiv = AyeText.map(item => {
            return <div>{item}</div>
        })

        return (
            <div className="aye-main">
                <div>بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ</div>
                {AyeDiv}
            </div>
        )
    }
}