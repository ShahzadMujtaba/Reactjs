import React, { Component } from 'react'
import Tour from '../Tour/Tour';
import "./tourlist.scss";
import tourData from '../../tourData';
class TourList extends Component {
constructor(props) {
    super(props)

    this.state = {
         tours: tourData
    };
}

removeTour=id=>{
    const {tours} = this.state;
    const sortedTours = tours.filter(item=>item.id!==id)
    this.setState({
        tours:sortedTours
    })
   console.log(id);
}

    render() {
        console.log(this.state.tours);
        const {tours}=this.state;
        return (
            <section className="tourList">
             {
                 tours.map(tour=>(<Tour key={tour.id} tour={tour} removeTour={this.removeTour} />))
             }
            </section>
        )
    }
}

export default TourList

