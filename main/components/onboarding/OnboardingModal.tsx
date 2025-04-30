import React from "react";
import { Modal, View, Text, Button } from "react-native";

interface OnboardingModalProps {
  visible: boolean;
  onClose: () => void;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            width: "80%",
            padding: 20,
            backgroundColor: "white",
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, marginBottom: 20 }}>
            🎉 Welcome to the App!
          </Text>
          <Button title="Got it!" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default OnboardingModal;
