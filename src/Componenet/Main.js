import React from "react"
import HornedBeasts from 'HornedBeasts';

class Main extends React.Component{
    render() {
        return (
                <div className="main">
                    <HornedBeasts
                    title="Reality"
                    imageUrl="https://pbs.twimg.com/media/EsK6HEnWMAAHwWi.jpg"
                    description ="rhinoceros statue in africa"
                    />
                    <HornedBeasts
                    title ="Delusion"
                    imageUrl="https://cdna.artstation.com/p/assets/images/images/010/158/754/large/adela-quiles-beast-the2nd5.jpg?1522877892"
                    description= "It shows the different between the sizes "
                    />
                    <HornedBeasts
                    title="Game"
                    imageUrl="https://product-images.tcgplayer.com/fit-in/400x558/242117.jpg"
                    description=" Seems people having fun with it"
                    />
                </div> 
            );
    }
}
export default Main;