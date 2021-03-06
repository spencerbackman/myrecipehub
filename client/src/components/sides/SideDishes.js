import React from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe';

class SideDishes extends React.Component {
   
    render() {
        return (
            <div>
                {this.props.recipe.filter(find => find.directory === 'sides').map(sides =>
                    <Recipe 
                        key={sides._id} 
                        id={sides._id}  
                        name={sides.name} 
                        ingredients={sides.ingredients} 
                        directions={sides.directions} 
                        imageURL={sides.imageURL} 
                        directory={sides.directory} /> 
                    )}
            </div>
        )
    }
}

export default connect(state => state)(SideDishes)