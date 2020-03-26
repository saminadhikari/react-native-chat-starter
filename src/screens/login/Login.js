import React, { useState } from 'react';
import {
    View,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native';
import styles from './styles';
import { AuthContext } from '../../helpers/context';
import Logo from '../../components/Logo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Caption, Button, Text } from 'react-native-paper';
import { commonStyles } from '../commonStyles';
import { MyColors } from '../../config/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';

function Login({ navigation }) {

    const { signIn } = React.useContext(AuthContext);

    const [showSpinner, setShowSpinner] = useState(false);
    const [inputValues, setInputValues] = useState({
        email: '', password: ''
    });

    const _handleOnChange = (key, value) => {
        setInputValues({ ...inputValues, [key]: value });
    };

    function _login() {
        Keyboard.dismiss();
        console.log(inputValues);
        setShowSpinner(true);
        setTimeout(()=>{
            setShowSpinner(false);
            signIn('token'); //save token and change stack to logged in
        }, 2000);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: MyColors.defaultBackground }}>
            <Spinner
                visible={showSpinner}
            />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    keyboardVerticalOffset={-250}
                    behavior="position"
                    enabled
                    style={{ padding: 20, flex: 1 }}>
                    <Logo />
                    <Caption>Enter your login info</Caption>
                    <TextInput
                        autoCapitalize="none"
                        theme={{
                            roundness: 20,
                            colors: {
                                placeholder: MyColors.lightGray
                            }
                        }}
                        mode="outlined"
                        keyboardType="email-address"
                        style={commonStyles.textInput}
                        label='Email'
                        value={inputValues.email}
                        onChangeText={text => _handleOnChange('email', text)}
                    />
                    <TextInput
                        autoCapitalize="none"
                        theme={{
                            roundness: 20,
                            colors: {
                                placeholder: MyColors.lightGray
                            }
                        }}
                        secureTextEntry={true}
                        mode="outlined"
                        style={commonStyles.textInput}
                        label='Password'
                        value={inputValues.password}
                        value={inputValues.password}
                        onChangeText={text => _handleOnChange('password', text)}
                    />
                    <Button
                        theme={{ roundness: 20 }}
                        style={{ marginTop: 30 }}
                        mode="contained"
                        onPress={_login}>
                        Login
                    </Button>
                    <View style={styles.bottomContainer}>
                        <Caption>Don't have an account?</Caption>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.signup}> Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );

}

export default Login;