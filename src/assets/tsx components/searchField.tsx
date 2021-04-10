import React, { ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

type props = {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default class searchField extends React.Component<props> {

    constructor(props: props) {
        super(props)
    }

    render () {
        return ( 
            <div className="searchContainer">
                <div className="searchField">
                    <label htmlFor="search"></label>
                    <input
                    type="text"
                    placeholder="Example: الفاتحه..."
                    name="search"
                    onChange={this.props.onChange}
                    />
                    <div className="searchlogo">
                        <FontAwesomeIcon 
                        icon={faSearch}
                        />
                    </div>
                </div>
                        
            </div>
        )
    }
}