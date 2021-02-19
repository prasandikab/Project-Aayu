import React, { useState } from 'react';
console.ignoredYellowBox = ['Warning:'];
<<<<<<< Updated upstream
import * as Google from 'expo-google-app-auth'
=======
import * as Google from 'expo-google-app-auth';
>>>>>>> Stashed changes
import {
    FlatList,
    StyleSheet,
    Button,
    KeyboardAvoidingView,
    Modal,
    Image,
    TextInput,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Platform,
    Alert
} from "react-native";
//import { LinearGradient } from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
<<<<<<< Updated upstream
import { colours, cntSizes, appIcons, images, appFonts } from '../constants'
=======
import { colours, cntSizes, appIcons, images, appFonts } from '../constants';
>>>>>>> Stashed changes


const AppLoginScreen = ({ navigation }) => {
    //declaring a new state variable , useState to use inside function component to handle local state

<<<<<<< Updated upstream
    const [names, setNames] = useState()

    const [displayEnteredPasscord, setDisplayEnteredPasscord] = useState(false)
=======
    const [names, setNames] = useState();

    const [displayEnteredPasscord, setDisplayEnteredPasscord] = useState(false);
>>>>>>> Stashed changes

    //function to render app header
    function appHeaderRender() { //header render
        return (
            <TouchableOpacity
                style={{
                    //icon aligns
                    alignItems: "center",
                    flexDirection: "row",
                    //back icon margins
                    paddingHorizontal: cntSizes.paddingObj * 2,
                    marginTop: cntSizes.paddingObj * 3.62
                }}
                //set on action to back btn
                onPress={() => console.log("appSignUp")}
            >
                <Image
                    style={{
                        height: 30.24,
                        //back icon  color
                        tintColor: colours.black,
                        width: 30.24,
                    }} source={appIcons.bckArrw}
                    //import from icons
                    resizeMode="contain"

                />
                {/* login text */}
                < Text style={{ color: colours.white, ...appFonts.h2, marginLeft: cntSizes.paddingObj * 0.4 }}>Log In</Text>
            </TouchableOpacity>
        )
    }

    //function to render app logo
    function appLogoRender() {
        return (
            <View
                style={{
                    //setting up dimensions
                    height: 175,
                    alignItems: 'center',
                    //align logo from top
                    marginTop: cntSizes.paddingObj * 1.36,
                    justifyContent: 'center',
                }}
            >
                <Image
                    //logo setting up
                    style={{
                        width: "50%"
                    }}
                    resizeMode="contain"
                    source={images.aayuLogo}
                />
            </View>
        )
    }

    //function user reg form render
    function userRegFormRender() {
        return (
            <View
                style={{
                    marginTop: cntSizes.paddingObj * 4,
                    marginHorizontal: cntSizes.paddingObj * 4,
                }}
            >

                {/* getting user name */}
                <View
                    style={{ marginTop: cntSizes.paddingObj * 0.28 }}
                ><Text style={{ color: colours.white, ...appFonts.bdy5 }}>Full Name</Text>
                    <TextInput
                        style={{
                            //styles for user text input field
                            height: 28, ...appFonts.bdy3,
                            marginVertical: cntSizes.paddingObj * 0.1,
                            //borderBottomColor:colours.white,
                            borderBottomWidth: 1.2,
                            color: colours.white

                        }}
                        //props for placeholder
                        selectionColor={colours.white}
                        placeholder="Enter Your Name"
                        placeholderTextColor={colours.white}
                    />
                </View>

                {/* getting user password */}
                <View
                    style={{ marginTop: cntSizes.paddingObj * 1 }}
                ><Text style={{ color: colours.white, ...appFonts.bdy5 }}>Password</Text>
                    <TextInput
                        style={{
                            //styles for user text input field
                            height: 28, ...appFonts.bdy3,
                            marginVertical: cntSizes.paddingObj * 0.1,
                            //borderBottomColor:colours.white,
                            borderBottomWidth: 1.2,
                            color: colours.white
                        }}
                        //props for placeholder
                        secureTextEntry={true}
                        selectionColor={colours.white}
                        placeholder="Enter Password"
                        //secure text entry input
                        secureTextEntry={!displayEnteredPasscord}
                        placeholderTextColor={colours.white}
                    />
                    {/* //toggle button for password input */}
                    <TouchableOpacity
                        style={{
                            height: 32,
                            right: 0,
                            bottom: 0,
                            position: 'absolute',
                            width: 32,
                        }}
                        //on press display password
                        //set on action to display password when eye pressed
                        onPress={() => setDisplayEnteredPasscord(!displayEnteredPasscord)}
                    >
                        {/* setting up image to password view */}
                        <Image
                            source={appIcons.OpenEye}//consider to add disable icon when unClicked
                            style={{
                                height: 20.25,
                                width: 20.25,
                                tintColor: colours.white
                            }}
                        />

                    </TouchableOpacity>
                </View>
            </View>

        )
    }

    
    //function of google login
    async function signInWithGoogleAsync() {
      try {
          const result = await Google.logInAsync({
              //api key for login: client Id
              //OAuth 2.0 Client IDs 

              //id1052848989525-ats8cb7kna3al6r115sg8rcvgfctpv3t.apps.googleusercontent.com
              //type:Web application 
              androidClientId:

                  "727475050248-pb0bqq81se47p2mq6mhp8kn20sp5r0fn.apps.googleusercontent.com",
              scopes: ['profile', 'email'],
          });
          if (result.type === 'success') {
              setNames(result.user.name);
              //showing user name by popup
              Alert.alert('Hey There !!!',`Hey ${names}. Welcome to Aayu!`);
              return result.name;
            
          } else {
              return { cancelled: true };
          }
      } catch (e) {
          return { error: true };
      }
  }

  const signInWithGoogle = () => {
      signInWithGoogleAsync()
  }

    //function login button
    function buttonContRender() {
        return (
            <View style={{ margin: cntSizes.paddingObj * 2 }}>
                <TouchableOpacity
                    //styling the continue button
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: colours.black,
                        borderColor: colours.gray,
                        borderRadius: cntSizes.radius / 4, height: 55
                    }}
                    //set action to login button
<<<<<<< Updated upstream
                    onPress={() => navigation.navigate("HomeScreen")}
=======
                    onPress={() => {signInWithGoogle();navigation.navigate("HomeScreen");}}
>>>>>>> Stashed changes
                >
                    <Text style={{
                        ...appFonts.h2,
                        color: colours.white
                    }}>Log In</Text>
                </TouchableOpacity>
            </View>

        )
    }

    //function of google login
    async function signInWithGoogleAsync() {
        try {
            const result = await Google.logInAsync({
                //api key for login: client Id
                //OAuth 2.0 Client IDs 

                //id1052848989525-ats8cb7kna3al6r115sg8rcvgfctpv3t.apps.googleusercontent.com
                //type:Web application 
                androidClientId:

                    "727475050248-pb0bqq81se47p2mq6mhp8kn20sp5r0fn.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });
            if (result.type === 'success') {
                setNames(result.user.name);
                //showing user name by popup
                console.warn(`Hello ${names}. Welcome to the Aayu!`)
                return result.name;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }

    const signInWithGoogle = () => {
        signInWithGoogleAsync()
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "padding" : 0.5}
            style={{ flex: 1.0 }}
        >
            <LinearGradient
                //linear gradiant color mix in login screen
                colors={[colours.green, colours.lightGreen]}
                style={{ flex: 1 }}
            >
                <ScrollView>
                    {appHeaderRender()}
                    {appLogoRender()}
                    {userRegFormRender()}
<<<<<<< Updated upstream
                    <Button onPress={() => signInWithGoogle()} title="Sign in with Google" />
=======
                    {/* <Button  title="Sign in with Google" /> */}
>>>>>>> Stashed changes
                    {buttonContRender()}
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default AppLoginScreen;