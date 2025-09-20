import {
    Alert,
    Keyboard,
    KeyboardAvoidingView, Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import {Image} from "expo-image"
import {useRef, useState} from "react"
import {clsx} from 'clsx'
import {Feather} from "@expo/vector-icons"


export default function Index() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const passwordInput = useRef<TextInput>(null)

    //
    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert("Error", "Please fill in both fields");
            return;
        }
        Alert.alert("Error", "Server error 3413421[2]");
    };

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
            <Pressable
                onPress={Keyboard.dismiss}
                style={{
                    flex: 1,
                    alignItems: 'flex-start'
                }}
            >
                <ScrollView
                >

                    <View
                        style={{
                            width: '100%',
                            minHeight: 400,
                            flex: 1,
                            alignItems: 'center', justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={require('@/assets/images/login-top-bknd.png')}
                            style={{
                                width: '100%',
                                height: 400,
                                top: 0, left: 0,
                                flex: 1, position: 'absolute', zIndex: -1
                            }}
                            contentFit={'fill'}
                        />
                        <Image
                            source={require('@/assets/images/logo-800.png')}
                            style={{
                                height: 100,
                                width: '100%',
                                marginTop: -50,
                                marginStart: 20
                            }}
                            contentFit={'contain'}
                        />
                        <Text
                            style={{
                                position: 'absolute',
                                bottom: 40, left: 24,
                                fontWeight: 'bold',
                                fontSize: 24,
                            }}
                        >
                            Login
                        </Text>
                    </View>

                    <View
                        style={{
                            padding: 24,
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 16,
                                color: '#712b2b80',
                                marginBottom: 40,
                                fontWeight: 600
                            }}
                        >
                            Seja bem vindo ao nosso app! Faça o login para acessar os recursos.
                        </Text>

                        <Text
                            style={{
                                opacity: 0.3
                            }}
                        >
                            Email
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            submitBehavior={'submit'}
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            returnKeyType="next"
                            onSubmitEditing={() => passwordInput.current?.focus()}
                        />

                        <Text
                            style={{
                                opacity: 0.3
                            }}
                        >
                            Senha
                        </Text>
                        <TextInput
                            ref={(input) => {
                                passwordInput.current = input;
                            }}
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            submitBehavior={'submit'}
                            value={password}
                            onChangeText={setPassword}
                            onSubmitEditing={Keyboard.dismiss}
                        />

                        <Pressable
                            onPress={handleLogin}
                            className={clsx(
                                `py-4 px-3 rounded-lg bg-red-500 active:bg-red-400`,
                                'flex items-baseline justify-center flex-row gap-2'
                            )}
                        >
                            <Text className="text-white font-bold text-lg">
                                Entrar
                            </Text>
                            <Feather name={'arrow-right'} size={18} color={'white'}/>
                        </Pressable>

                    </View>
                </ScrollView>
            </Pressable>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 28,
        fontWeight: "600",
        marginBottom: 30,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
    }
})
