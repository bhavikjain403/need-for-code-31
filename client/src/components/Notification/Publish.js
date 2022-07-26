import Announcement from 'react-announcement'

function Publish(){
    return(
        <div>
        <Announcement
          title="Here is your component"
          subtitle="The best announcement component for React is finally here. Install it in all your projects."
          link="https://github.com/kristofferandreasen/react-announcement"
      />
        </div>
    );
}
export default Publish;