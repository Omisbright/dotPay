import { StyleSheet, Text, TextStyle } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

interface TextProps {
    children?: string, 
    customstyle?: TextStyle,
};

const BoldText = (Props: TextProps) => {

    const { children, customstyle, ...rest } = Props;

    const styles = StyleSheet.create({
        text: {
            fontFamily: "Roboto-Bold",
            fontSize: RFValue(14)
        }
    })
    return (
      <Text style={[styles.text, customstyle]} {...rest}>{children}</Text>
    )
}

export default BoldText;