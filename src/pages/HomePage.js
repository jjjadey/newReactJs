import React from 'react';
import { Content } from '../components/content/Content';
import Features from '../components/features/Features';
import Hero from '../components/hero/Hero';
import { contentOne, contentTwo, contentThree } from '../data/ContentData';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Features />
            <Content {...contentOne} />
			<Content {...contentTwo} />
			<Content {...contentThree} />
        </>
    )
}

export default HomePage