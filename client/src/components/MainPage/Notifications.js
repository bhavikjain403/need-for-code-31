import React from 'react'
import{Card, CardBody, CardHeader} from 'reactstrap'
import Zoom from 'react-reveal/Zoom'
function Notifications() {
  return (
    <Card style={{background:"transparent"}}>
        <Zoom>
        <Card  style={{background:"transparent"}}>
            <CardBody>
                <h2>Announcement</h2>
                Exams are coming on 23rd August
            </CardBody>
            <CardBody>
                <h2>Events</h2>
                College Fest Details will be available soon
            </CardBody>
            <CardBody>
                <h2>Achievements</h2>
                TeachCraft ranked first in Codetantra Competition !!
            </CardBody>
        </Card>
        </Zoom>
        
        
    </Card>
  )

}

export default Notifications