import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import HeroList from '../components/heros/heroList';
import HeroProfile from '../components/heros/heroProfile';
import { ReducersState } from '../redux/store';
import { shallowEqual, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Head from 'next/head';
import { fetchingAllHeros, fetchingHeroProfile } from '../redux/actions/heros';

const IndexPage: NextPage = () => {
  const heroList = useSelector(
    (state: ReducersState) => state.heros.heros,
    shallowEqual,
  );
  const heroProfile = useSelector(
    (state: ReducersState) => state.heros.heroProfile,
    shallowEqual,
  );
  const totalAbility = useSelector(
    (state: ReducersState) => state.heros.totalAbility,
    shallowEqual,
  );

  const isFetching = useSelector(
    (state: ReducersState) => state.heros.isFetching,
  );

  return (
    <>
      <Head>
        <title>hahow-recruit</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeroList list={heroList} />
      <HeroProfile
        status={heroProfile}
        total={totalAbility}
        isFetching={isFetching}
      />
    </>
  );
};

IndexPage.getInitialProps = async ({
  reduxStore,
  ctx,
}: NextPageContext): Promise<any> => {
  const { dispatch, getState } = reduxStore;
  const { query } = ctx;
  const isServer = typeof window === 'undefined';
  const fetchingHerosAction = bindActionCreators(fetchingAllHeros, dispatch);
  const fetchingHeroProfileAction = bindActionCreators(
    fetchingHeroProfile,
    dispatch,
  );
  const activeId = getState().heros.heroProfile.id;
  if (isServer) {
    await fetchingHerosAction();
  }
  if (query && query.id && activeId !== query.id) {
    await fetchingHeroProfileAction(query.id);
  }
  return {};
};

export default IndexPage;
