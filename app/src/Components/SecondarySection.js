import '../Styles/SecondarySection.css';
import SecondarySectionCard from './SecondarySectionCard';
import resources from '../Assets/Images/resources-binders.png';
import faq from '../Assets/Images/faq-question-mark.png';
import expert from '../Assets/Images/expert-help.png';

function SecondarySection() {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco \
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat \
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return (
        <div className='secondary-section'>
            <div>
                <h2>Need help?</h2>
            </div>
            <div className='cards'>
                <SecondarySectionCard imgSrc={resources} title={"Review Our Resources"} body={loremIpsum} />
                <SecondarySectionCard imgSrc={faq} title={"FAQs"} body={loremIpsum} />
                <SecondarySectionCard imgSrc={expert} title={'Talk to a Professional'} body={loremIpsum} />
            </div>
        </div>
    );
}

export default SecondarySection;
