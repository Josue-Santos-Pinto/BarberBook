import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import TodayIcon from '../assets/today.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';

const TabArea = styled.View`
  height: 60px;
  background-color: #4eadbe;
  flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ({ state, navigation }) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon width="24" height="24" fill="#FFF" />
      </TabItem>
      <TabItem onPress={() => goTo('Search')}>
        <SearchIcon width="24" height="24" fill="#FFF" />
      </TabItem>
      <TabItem onPress={() => goTo('Appointments')}>
        <TodayIcon width="24" height="24" fill="#FFF" />
      </TabItem>
      <TabItem onPress={() => goTo('Favorites')}>
        <FavoriteIcon width="24" height="24" fill="#FFF" />
      </TabItem>
      <TabItem onPress={() => goTo('Profile')}>
        <AccountIcon width="24" height="24" fill="#FFF" />
      </TabItem>
    </TabArea>
  );
};
