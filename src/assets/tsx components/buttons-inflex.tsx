import React from 'react';





type fprop = {
    
    id?: number;
    textData: string;
    icon: any;
    
}

class buttonInflex extends React.Component<fprop> {
    //eslint-disable-next-line
    constructor(props: fprop) {
        super(props);
    }
    render () {
        return ( 
            <div className="felxItem">
                {this.props.icon}
                <p>
                    {this.props.textData}
                </p>
            </div>
        )
    }
}

export default buttonInflex;