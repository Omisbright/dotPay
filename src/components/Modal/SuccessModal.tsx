import React, { Dispatch, SetStateAction, useCallback, useMemo, useRef, useState } from 'react';
import { View, StyleSheet, Pressable, Button } from 'react-native';
import Modal from "react-native-modal";
import { RFValue } from 'react-native-responsive-fontsize';
import { SelectedAwardProps } from '../../screens/main';
import { width } from '../../utils/functions/Dimensions';
import { MediumText } from '../Text';
import SubmitButton from '../Button/SubmitButton';

const SuccessModal = ({setSelectedAwards}: {setSelectedAwards: Dispatch<SetStateAction<SelectedAwardProps[]>>}) => {
 
const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const handleSubmit = () => {
    setModalVisible(false);
    setSelectedAwards([])
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <SubmitButton onPress={openModal} text="Submit" />

        <Modal isVisible={isModalVisible}>
            <View style={styles.contentContainer}>
                <MediumText>Vote cast succesfully 🎉</MediumText>

                <SubmitButton onPress={handleSubmit} text="Close" />
            </View>
      </Modal>
    </View>
    )};

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center", 
        width: width * 0.5,
        padding: 15,
        borderRadius: 6,
    },
    container: {
        marginTop: RFValue(20),
        justifyContent: "center",
        alignItems: "center"
    },
    contentContainer: {
        flex: 0.5,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: "center", 
    },
});

export default SuccessModal;