import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import kk from './assets/kk.jpeg';
import db from "./firebase";
import { collection, getDocs, updateDoc, doc, arrayUnion, onSnapshot } from 'firebase/firestore';



export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let unsubscribeFromNewSnapshots = onSnapshot(doc(db, "Chats", "myfirstchat"), (snapshot) => {
      console.log("New Snapshot! ", snapshot.data().messages);
      setMessages(snapshot.data().messages);
    });
  
    return function cleanupBeforeUnmounting() {
      unsubscribeFromNewSnapshots();
    };
  }, []);
  

  const onSend = useCallback(async (messages = []) => {
    await updateDoc(doc(db, "Chats", "myfirstchat"), {
      messages: arrayUnion(messages[0]),
    });
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
}, [])

  console.log("here message state", messages)

  return (
    <View style={styles.container}>
      <GiftedChat
        renderUsernameOnMessage={true}
        showUserAvatar={true}
        alwaysShowSend={true}
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: "1",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});