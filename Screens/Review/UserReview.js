import * as React from "react";
import { render } from "react-dom";
import { View, Text, StyleSheet, FlatList } from "react-native";

const UserList = ({ item }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          marginLeft: 20,
          marginRight: 20,
          paddingRight: 10,
        }}
      >
        {item.name}
        <Text
          style={{
            fontSize: 18,
            marginLeft: 30,
            marginRight: 20,
          }}
        >
          {item.review}
        </Text>
      </Text>
    </View>
  );
};

export const UserReview = ({ data }) => {
  console.log(data);
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return <UserList item={item} />;
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
