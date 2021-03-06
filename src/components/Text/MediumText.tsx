import { StyleSheet, Text, TextStyle } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

interface TextProps {
    children?: string, 
    customstyle?: TextStyle,
};

const MediumText = (Props: TextProps) => {

    const { children, customstyle, ...rest } = Props;

    const styles = StyleSheet.create({
        text: {
            fontFamily: "Roboto-Medium",
            fontSize: RFValue(13)
        }
    })
    return (
      <Text style={[styles.text, customstyle]} {...rest}>{children}</Text>
    )
}

export default MediumText;