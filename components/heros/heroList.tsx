import React from 'react';
import styled from 'styled-components';
import { Row } from 'antd';
import HeroItem from './heroItem';
import { HeroItem as HeroItemState } from '../../redux/types/heros';

interface HeroListProps {
  list: HeroItemState[];
}

const HeroList: React.FC<HeroListProps> = ({ list }) => {
  return (
    <HeroListContainer>
      <Row gutter={16}>
        {list.map((item: HeroItemState) => {
          return (
            <HeroItem
              key={item.id}
              name={item.name}
              image={item.image}
              id={item.id}
            />
          );
        })}
      </Row>
    </HeroListContainer>
  );
};

export default HeroList;

const HeroListContainer = styled.div`
  margin-top: 100px;
  padding: 10px;
  border: ${(props: any) => props.theme.border};
  border-radius: ${(props: any) => props.theme.borderRadius};
`;
