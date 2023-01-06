import './MainSection.css';
import SectionRow from '../SectionRow/SectionRow';

function MainSection({
    isLightBackground,
    imageAlignment,
    topLine,
    headline,
    isLightText,
    description,
    isLightTextDescription,
    buttonLabel,
    image,
    alt
}) {
    return (
        <>
            <div className={isLightBackground ? 'home__main-section' : 'home__main-section dark-background'}>
                <div className="container">
                    <SectionRow imageAlignment={imageAlignment} topLine={topLine} headline={headline} isLightText={isLightText} 
                        description={description} isLightTextDescription={isLightTextDescription} buttonLabel={buttonLabel} 
                        image={image} alt={alt}/>
                </div>
            </div>
        </>
    )
}

export default MainSection
