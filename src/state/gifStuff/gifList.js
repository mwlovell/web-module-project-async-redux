import React from "react";
import Gif from './Gif'

const GifList = props => {
    const { gifs } = props;

    return(<div id='gifList'>
        {
            gifData.map(gif => {
                return(
                    <propsGif gif ={gif}/>
                )
            })
        }
        </div>);

}
 export default GifList;