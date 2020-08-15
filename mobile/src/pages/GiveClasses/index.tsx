import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import giveClassesBgImage from "../../assets/images/give-classes-background.png";
// import { Container } from './styles';
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();
  function handleNavigateBack() {
    goBack();
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Profy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web
        </Text>
      </ImageBackground>
      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo Bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;
