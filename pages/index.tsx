import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import { theme } from '../layout/theme';

const Title = styled.h1`
    text-align: center;
    margin-top: 0;
    padding-top: 0.67em;
`;

const Card = styled.div`
    padding: 15px 0 0 0;
    border: 1px solid black;
    border-radius: 20px;
`;

const CardTitle = styled.h3`
    margin: 0 0 12px 0;
    padding: 0 0 0 10%;
`;

const CardBody = styled.div`
    /* border: solid 1px green; */
    > div:first-child {
        border-top: solid 1px ${theme.colors.cardBorder};
    }
    > div:last-child {
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border: none;
    }
`;

const CardsContainer = styled.div`
    display: flex;
    /* desktop view */
    @media screen and (min-width: 769px) {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 10%;
        .card {
            width: 40%;
        }
    }
    /* mobile view */
    @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        overflow: scroll;
        .card {
            width: 90%;
            margin-top: 20px;
        }
    }
`;

const SocialLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px;
    border-bottom: solid 1px ${theme.colors.cardBorder};
    :hover {
        background-color: ${theme.colors.linkHover};
    }
`;

const Anchor = styled.a`
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: ${theme.colors.text};
`;

const Icon: React.FC<{ url: string; alt?: string }> = ({ url, alt }) => {
    return <img src={url} alt={alt ? alt : ''} height={`24px`} />;
};

interface SocialLinkProps {
    iconUrl: string;
    linkText: string;
    url: string;
}
const SocialLink: React.FC<SocialLinkProps> = ({ iconUrl, linkText, url }) => {
    return (
        <SocialLinkContainer>
            <Icon url={iconUrl} />
            <Anchor href={url}>{linkText}</Anchor>
        </SocialLinkContainer>
    );
};

const LandingPage: NextPage = () => {
    return (
        <>
            <Title>rupson.me</Title>
            <CardsContainer>
                <Card className={'card'}>
                    <CardTitle>💼 Professional</CardTitle>
                    <CardBody>
                        <SocialLink
                            iconUrl={'/GitHub-Mark-32px.png'}
                            url={'https://github.com/rupson'}
                            linkText={`Github`}
                        />
                        <SocialLink
                            iconUrl={'/LI-In-Bug.png'}
                            url={'https://www.linkedin.com/in/rupson/'}
                            linkText={`Linkedin`}
                        />
                    </CardBody>
                </Card>
                <Card className={'card'}>
                    <CardTitle>🧸 Personal</CardTitle>
                    <CardBody>
                        <SocialLink
                            iconUrl={'/glyph-logo_May2016.png'}
                            url={'https://www.instagram.com/rupson22/'}
                            linkText={'Instagram'}
                        />
                        <SocialLink
                            iconUrl={'/Twitter_Logo_Blue.svg'}
                            url={'https://twitter.com/rupson_'}
                            linkText={'Twitter'}
                        />
                    </CardBody>
                </Card>
            </CardsContainer>
        </>
    );
};

export default LandingPage;
