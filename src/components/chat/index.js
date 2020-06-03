import React from 'react';

import { Card } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

const Chat = () => {
  const userId = useSelector((state) => state.userId);
  const dispatch = useDispatch();
  const visible = useSelector((state)=> state.messagePanelVisible)
  const chattingUser = useSelector((state)=>state.chattingUser)

  return (
    <Card
      className="position-fixed shadow-lg"
      style={{
        top: visible ? 0: undefined,
        right: 0,
        width: 300,
        zIndex: 1,
        bottom: 0,
      }}
    >
      <Card.Header>
        {!chattingUser ? "Messages": chattingUser.name}
        <small
          className="float-right link"
          onClick={() => {
            dispatch({ type: visible ? 'HIDE_MESSAGE_PANEL':'SHOW_MESSAGE_PANEL', userId: 3 });
          }}
        >
          {visible ? "close" : "expand"}
        </small>
      </Card.Header>

      {visible && <Card.Body> Hello </Card.Body>}
    </Card>
  );
};

export default Chat;
