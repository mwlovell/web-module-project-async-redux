import React from "react";
import Gif from './Gif'

const GifList = props => {
    const { gifData } = props;

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