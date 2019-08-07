import React, { Component } from 'react'
import './tour.scss'

 class Tour extends Component {
    state={
        showInfo:false
    }
     handleInfo=()=>{
        this.setState({
            showInfo:!this.state.showInfo
        })
     }

    render() {
        const {id,city,img,name,info} = this.props.tour;
        const {removeTour} = this.props
        return (
            <article className="tour">
                <div className="image-conatner">
                    <span className="close-btn" onClick={()=>removeTour(id)}>
                        <i className="fa fa-window-close fa-2x" />
                    </span>
                    <img src={img} alt="the City Tour" />
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5> 
                        info{" "}
                        <span onClick={this.handleInfo}><i className="fa fa-caret-square-o-down" /></span>
                        </h5>
                        {this.state.showInfo&& <p>{info}</p>}
                </div>
            </article>
        )
    }
}

export default Tour
