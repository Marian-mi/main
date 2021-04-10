import React, { ComponentProps, PropsWithChildren } from 'react';





type fprop = {
    
    id?: number;
    textData: string;
    icon: any;
    
}

class buttonInflex extends React.Component<fprop> {
    constructor(props: fprop) {
        super(props);
    }

   

    render () {
        return ( 
            <div>
                <a>
                    <div className="iconContainer">
                        {this.props.icon}
                  </div>
                    <div className="textBox">
                        {this.props.textData}
                    </div>
                </a>
            </div>
        )
    }
}

export default buttonInflex;