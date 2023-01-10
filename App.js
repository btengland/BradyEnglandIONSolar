import PokemonNames from "./src/PokemonNames";
import PokemonDetails from "./src/PokemonDetails";
import { FlatList, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PokemonNames"
          component={PokemonNames}
          options={{ title: "Choose a Pokemon" }}
        />
        <Stack.Screen
          name="PokemonDetails"
          component={PokemonDetails}
          options={{ title: "Pokemon Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
