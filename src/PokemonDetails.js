import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

function PokemonDetails({ navigation, route }) {
  const [data, setData] = useState(null);

  const name = route.params?.name;
  const url = route.params?.url;

  useEffect(() => {
    async function getPokemonDetails() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        //  alert(JSON.stringify(json));
        setData(json);
      } catch (error) {
        console.error(error);
      }
    }
    getPokemonDetails();
  }, []);

  return (
    <View style={{ flex: 1, padding: 50 }}>
      {data ? (
        <View>
          <Text style={{ flex: 1, paddingBottom: 10, fontSize: 20 }}>
            {name}'s abilities
          </Text>
          {data?.abilities
            .map((el) => ({ ...el.ability }))
            .map((ability, index) => (
              <View key={ability.name + "_" + index}>
                <Text>{ability.name}</Text>
              </View>
            ))}
        </View>
      ) : (
        <Text>No data to display!</Text>
      )}
    </View>
  );
}

export default PokemonDetails;
