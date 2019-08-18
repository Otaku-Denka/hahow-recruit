import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Col, Row, Button } from 'antd';
import { HeroProfile as HeroProfileState } from '../../redux/types/heros';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  plusAbility,
  minusAbility,
  updateHeroProfile,
} from '../../redux/actions/heros';

interface HeroProfileProps {
  status: HeroProfileState;
  total: number;
  isFetching: boolean;
}

interface AbilityItemProps {
  name: string;
  value: number | string;
  total: number;
}

const AbilityItem: React.FC<AbilityItemProps> = ({ name, value, total }) => {
  const dispatch = useDispatch();
  const incrementAbility = useCallback(() => dispatch(plusAbility(name)), [
    dispatch,
  ]);
  const decreaseAbility = useCallback(() => dispatch(minusAbility(name)), [
    dispatch,
  ]);

  return (
    <AbilityItemWrap>
      <AbilitySpan>{name.toUpperCase()}</AbilitySpan>
      <Button
        icon={'plus'}
        type={'primary'}
        disabled={total <= 0}
        onClick={incrementAbility}
      />
      <AbilitySpan>{value}</AbilitySpan>
      <Button
        icon={'minus'}
        type={'primary'}
        disabled={value <= 0}
        onClick={decreaseAbility}
      />
    </AbilityItemWrap>
  );
};

const HeroProfile: React.FC<HeroProfileProps> = ({
  status,
  total,
  isFetching,
}) => {
  const dispatch = useDispatch();
  const updateHeroProfileAction = bindActionCreators(
    updateHeroProfile,
    dispatch,
  );
  const handleUpdateHeroProfile = useCallback(() => {
    updateHeroProfileAction(status.id, status);
  }, [dispatch]);
  return (
    <HeroProfileContainer>
      <Row type={'flex'}>
        <Col xs={24} sm={12}>
          <StatusContainer>
            {Object.keys(status).map((name: string, index: number) => {
              if (name === 'id') return;
              return (
                <AbilityItem
                  key={`${name}-${index}`}
                  name={name}
                  value={status[name]}
                  total={total}
                />
              );
            })}
          </StatusContainer>
        </Col>
        <Col xs={24} sm={12}>
          <BtnContainer>
            <TotalAbilityContainer>剩餘點數：{total}</TotalAbilityContainer>
            <Button
              type={'primary'}
              onClick={handleUpdateHeroProfile}
              disabled={total !== 0}
              loading={isFetching}>
              {isFetching ? '存取中' : '確定'}
            </Button>
          </BtnContainer>
        </Col>
      </Row>
    </HeroProfileContainer>
  );
};

export default HeroProfile;

HeroProfile.defaultProps = {
  status: {
    id: '',
    str: 0,
    int: 0,
    agi: 0,
    luk: 0,
  },
  total: 0,
  isFetching: false,
};

const HeroProfileContainer = styled.div`
  margin-top: 30px;
  padding: 10px;
  border: ${(props: any) => props.theme.border};
  border-radius: ${(props: any) => props.theme.borderRadius};
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AbilityItemWrap = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${(props: any) => props.theme.fontSize};
  font-weight: ${(props: any) => props.theme.fontWeight};
  color: rgba(0, 0, 0, 0.85);
  padding: 10px;
  button {
    margin: 0 10px;
  }
`;

const AbilitySpan = styled.span`
  width: 50px;
  text-align: center;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: 100%;
`;

const TotalAbilityContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${(props: any) => props.theme.fontSize};
  margin: 10px 0;
`;
