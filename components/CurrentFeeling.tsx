import React from 'react';
import styled from 'styled-components';

import { Card, CardTitle } from 'pages';

const FeelingContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px;
    img {
        text-align: center;
        margin: 15px;
    }
`;

interface CurrentFeelingProps {
    srcUrl: string;
}

const CurrentlyFeeling: React.FC<CurrentFeelingProps> = ({ srcUrl }) => {
    return (
        <FeelingContainer className={'feeling_container'}>
            <Card>
                <CardTitle>💭 Currently feeling:</CardTitle>
                <img src={srcUrl} width={'200px'} />
            </Card>
        </FeelingContainer>
    );
};

export default CurrentlyFeeling;
