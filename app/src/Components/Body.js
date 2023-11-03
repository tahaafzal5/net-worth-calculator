import MainSection from './MainSection.js'
import SecondarySection from './SecondarySection.js'
import '../Styles/Body.css';

function Body() {
    return (
        <div className="body">
            <MainSection />
            <SecondarySection />
        </div>
    );
}

export default Body;
