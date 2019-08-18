import React from 'react';
import { Col, Card } from 'antd';
import styled from 'styled-components';
import { HeroItem as HeroItemState } from '../../redux/types/heros';
import Link from 'next/link';
import { withRouter, Router } from 'next/router';

interface HeroItemProps extends HeroItemState {
  router: Router;
}

const HeroItem: React.FC<HeroItemProps> = ({ name, image, id, router }) => {
  const active = router.query.id === id;
  const style = {
    borderColor: active ? '#FF8A65' : '#BDBDBD',
  };

  return (
    <Col lg={6} sm={12} xs={24}>
      <Link href={`/?id=${id}`} as={`/${id}`}>
        <MyCard style={style} cover={<img alt="example" src={image} />}>
          <HeroName>{name}</HeroName>
        </MyCard>
      </Link>
    </Col>
  );
};

HeroItem.defaultProps = {
  id: '',
  name: '',
  image: '',
};

const MyCard = styled(Card)`
  border: ${(props: any) => props.theme.border};
  border-radius: ${(props: any) => props.theme.borderRadius};
  padding: 5px;
  cursor: pointer;
  margin: 5px;
  translate: all 0.5s ease-in;
`;

const HeroName = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.85);
  font-weight: ${(props: any) => props.theme.fontWeight};
  font-size: ${(props: any) => props.theme.fontSize};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default withRouter(HeroItem);
