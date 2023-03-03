import React, { useState } from 'react';
import { Text } from 'react-native';
import Api from '../../Api';
import BarberItem from '../../components/BarberItem';
import {
  Container,
  SearchArea,
  SearchInput,
  Scroller,
  LoadingIcon,
  ListArea,
  EmptyWarning,
} from './styles';

export default () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [emptyList, setEmptyList] = useState(false);

  const searchBarbers = async () => {
    setEmptyList(false);
    setLoading(true);
    setList([]);

    if (searchText != '') {
      let res = await Api.search(searchText);
      if (res.error == '') {
        if (res.list.length > 0) {
          setList(res.list);
        } else {
          setEmptyList(true);
        }
      } else {
        alert(res.error);
      }
    }
    setLoading(false);
  };

  return (
    <Container>
      <SearchArea>
        <SearchInput
          placeholder="Digite o nome do barbeiro"
          placeholderTextColor="#fff"
          value={searchText}
          onChangeText={(e) => setSearchText(e)}
          onEndEditing={searchBarbers}
          returnKeyType="search"
          autoFocus
          selectTextOnFocus
        />
      </SearchArea>

      <Scroller>
        {loading && <LoadingIcon size="large" color="#000" />}
        {emptyList && <EmptyWarning>Não achamos barbeiros com o nome "{searchText}"</EmptyWarning>}
        <ListArea>
          {list.map((item, key) => (
            <BarberItem key={key} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};
