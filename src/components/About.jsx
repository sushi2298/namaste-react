import User from './User'
import UserClass from './UserClass';

const About = () => {
    return <div>
        <h1>we are in About page</h1>
        <User />
        <UserClass name={'Shab'} />
    </div>
}

export default About;