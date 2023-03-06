import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import Api from '../../Api';
import AppointmentItem from '../../components/AppointmentItem';
import { Container, Scroller, ListArea, EmptyWarning } from './styles';

export default () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const getAppointments = async () => {
    setLoading(true);
    setList([]);

    let res = await Api.getAppointments();
    if (res.error == '') {
      setList(res.list);
    } else {
      alert(res.error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <Container>
      <Scroller
        refreshControl={<RefreshControl refreshing={loading} onRefresh={getAppointments} />}
      >
        {!loading && list.length === 0 && <EmptyWarning>Não há agendamentos</EmptyWarning>}

        <ListArea>
          {list.map((item, key) => (
            <AppointmentItem key={key} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};
