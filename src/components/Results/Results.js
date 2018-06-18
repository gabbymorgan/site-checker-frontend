import React from 'react';
import FeatureCompatibility from '../FeatureCompatibility/FeatureCompatibility';

const Results = props => {
    if (Object.keys(props.data).length) {
        return (
            <div>
                <h2>{ props.data.brokenLinks.length } links are broken.</h2>
                { props.data.brokenLinks.map(link => {
                    return <p>{link}</p>
                })}
                <h2>{ props.data.brokenImages.length } images failed to render.</h2>
                { props.data.brokenImages.map(imageUrl => {
                    return <p>{imageUrl}</p>
                })}
                { props.data.compatibilities.map(feature => {
                    return <FeatureCompatibility feature={ feature }/>
                })}
            </div>
        );
    } else {
        return (
            <div>
                <h2>Please go back and enter the URL of the site you wish to check.</h2>
            </div>
        )
    }
};

export default Results;