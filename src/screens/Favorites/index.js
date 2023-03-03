import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import Api from '../../Api';
import BarberItem from '../../components/BarberItem';
import {
  Container,
  HeaderArea,
  HeaderTitle,
  Scroller,
  LoadingIcon,
  ListArea,
  EmptyWarning,
} from './styles';

export default () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const getFavorites = async () => {
    setLoading(true);
    setList([]);

    let res = await Api.getFavorites();
    if (res.error == '') {
      setList(res.list);
    } else {
      alert(res.error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <Container>
      <HeaderArea>
        <HeaderTitle>Favoritos</HeaderTitle>
      </HeaderArea>

      <Scroller refreshControl={<RefreshControl refreshing={loading} onRefresh={getFavorites} />}>
        {!loading && list.length === 0 && <EmptyWarning>Não há favoritos</EmptyWarning>}

        <ListArea>
          {list.map((item, key) => (
            <BarberItem key={key} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};
