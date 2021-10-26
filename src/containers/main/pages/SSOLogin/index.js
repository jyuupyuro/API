import React from "react";
import { useDispatch } from 'react-redux'

import { message } from "antd";

/**
 * Sub Components
 */
import SSOLoginForm from './components/SSOLoginForm'

/**
 * Config
 */
import { config } from '../../config'

/**
 * Constant
 */
import CONSTANT from '../../constants'

/**
 * Services
 */
import { signInAccount } from "../../services/auth/authService";

/**
 * Redux Actions
 */
import { sso_user_sign_in_action } from '../../services/redux/actions';
// import { moveToSV } from '../../navigation/navigationService';

const SSOLogin= (props) => {

    const dispatch = useDispatch()

    const loginPerformed = result => {

        if (result.type === "success") {
            dispatch(sso_user_sign_in_action ())
            // dispatch(sso_user_sign_in_action (result.result.user.uid))
            // dispatch(moveToSV())
        } 
        // else {
        //     let errorMessage;
            
        //     switch (result.error.code) {
        //         case "auth/invalid-email":
        //             errorMessage = "Please enter a valid email address";
        //             break;
        //         case "auth/user-disabled":
        //             errorMessage =
        //                 "User has been disabled, please contact admin";
        //             break;
        //         case "auth/user-not-found":
        //             errorMessage = "User does not exist";
        //             break;
        //         case "auth/wrong-password":
        //             errorMessage = "Entered a wrong password, please try again";
        //             break;
        //         default:
        //             errorMessage = result.error.code;
        //             break;
        //     }

        //     message.error(errorMessage);
        // }
    };

    const loginPressed = (email, password) => {
        loginPerformed({type : "success"})
        // signInAccount(email, password, loginResult =>
        //     loginPerformed(loginResult)
        // );
    };

    return (
        <div
            style={{
                height: "100vh",
                width: "100%",
                display: "flex",
                flex: 1,
                alignItems: "center"
            }}
        >
            <div
                style={{
                    position: "absolute",
                    height: "100vh",
                    width: "100%",
                    backgroundImage:`url(${CONSTANT.THEME.LOGINBACKGROUND})`,
                    backgroundSize: "cover"
                }}
            />

            <div
                style={{
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "35px 30px 15px 30px",
                            borderRadius: "17px"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center"
                            }}
                        >
                            <img
                                src={CONSTANT.THEME.LOGO}
                                alt={CONSTANT.THEME.COMPANY.NAME}
                                style={CONSTANT.THEME.STYLE.LOGO}
                            />
                        </div>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center"
                            }}
                        >
                            <div
                                style={{
                                    width: "250px",
                                    paddingTop: "30px"
                                }}
                            >
                                <SSOLoginForm
                                    {...props}
                                    onLoginPress={(email, password) =>
                                        loginPressed(email, password)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    backgroundColor: 'black',
                    borderRadius: "17px",
                    paddingRight: '20px',
                    paddingLeft: '20px',
                    color: 'white',
                    position: 'absolute',
                    bottom: '2vh',
                    right: '5vw',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    zIndex: 1
                }}
            >
                {CONSTANT.THEME.PLATFORM.NAME} - {config.version}
            </div>
        </div>
    );
}

export default SSOLogin