import React from "react";
import { View, Button } from "react-native";


export default function Botao(){
    return(  
        <View>
        <Button
        title="Enviar"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View>
    );
}
