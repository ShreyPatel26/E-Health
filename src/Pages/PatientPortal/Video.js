import React from 'react'
import ReactPlayer from 'react-player'



function Video(){
  
  var arr=['Robotic.mp4','/Video/Ottawa.mp4'];
    return (
      <div style={{margin:'auto'}} className='player-wrapper'>
        {
          
          arr.map((x,i)=>
          
            <ReactPlayer url={x}
              height='500px'
              width='800px'
              controls='true'
              style={{margin:'auto'}}
              key={'video'+i}
            />
            
          )
        }
        
    
        
      </div>
    )
  
}

export default Video;