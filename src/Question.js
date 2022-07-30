import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showInfo : true
        }
    }

    setShowInfo() {
        if (this.state.showInfo) {
            this.setState({
                showInfo: false
            })
        } else {
            this.setState({
                showInfo: true
            })
        }
    }

    render() {
        return (
            <article className='question'>
                <header>
                    <h4>{this.props.question.title}</h4>
                    <button className='btn' onClick={() => this.setShowInfo()}>
                        {this.state.showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                </header>
                {this.state.showInfo && <p> {this.props.question.info } </p>}
            </article>
        );
    }
}

export default Question;