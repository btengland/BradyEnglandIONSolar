import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

function PokemonNames({ navigation }) {
  const [data, setData] = useState([]);

  const getPokemon = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <View style={{ flex: 1, padding: 50 }}>
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Text
            onPress={() =>
              navigation.navigate("PokemonDetails", {
                name: item.name,
                url: item.url,
              })
            }
          >
            {item.name}
          </Text>
        )}
      />
    </View>
  );
}

export default PokemonNames;
