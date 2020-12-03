import React from 'react';
import './showTeams.scss'

const ShowTeams = ({name, badge}) => {


        return(
         <div className="show-teams__team-wrapper">
             <div className="show-teams__team-Name">{name && name.toUpperCase()}</div>
             <div>
                 <img className="show-teams__image" alt="" src={badge}></img>
             </div>
         </div>
        )
}
        
export default ShowTeams
