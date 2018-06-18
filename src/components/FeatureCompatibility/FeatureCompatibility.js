import React from 'react';

const FeatureCompatibility = props => {
    const browserKey = {
        ie: 'Internet Explorer', 
        edge: 'Edge',
        chrome: 'Chrome', 
        firefox: 'Firefox', 
        safari: 'Safari',
        opera: 'Opera',
        and_chr: 'Android Chrome',
        android: 'Android',
    }
    const feature = props.feature;
    const browsers = Object.keys(feature.support);
    const getUnsupportedVersions = (browser) => {
        const versions = Object.keys(feature.support[browser]);
        return versions.filter(version => {
            return feature.support[browser][version] === 'n';
        })
    };
    let unsupportedCount = 0;
    browsers.forEach(browser => {
        unsupportedCount += getUnsupportedVersions(browser).length;
    });
    if (unsupportedCount) {
        return (
            <div>
                <h2>{ feature.attr } is incompatible with: </h2>
                { browsers.map(browser => {
                    return getUnsupportedVersions(browser).map(unsupportedVersion =>{
                        return <p>{browserKey[browser]} version {unsupportedVersion}.</p>
                    })
                })}
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }
}

export default FeatureCompatibility;