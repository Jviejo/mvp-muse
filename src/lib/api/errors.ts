export const success = {
    "200": {
        "message": "OK",
        "lambda": "Use to tell 'there is not a error' in Check_TTL; Check_Email; Verify_Table and all those lambdas use from another lambda as secondary."
    },
    "201": {
        "message": "User Created",
        "lambda": "Use in Sign_Up"
    },
    "202": {
        "message": "Successful Login",
        "lambda": "use in Login"
    },
    "203": {
        "message": "Successful User Data Updated",
        "lambda": "Use in Update_User_Data"
    },
    "204": {
        "message": "Successful Logout",
        "lambda": "Use in Logout"
    },
    "205": {
        "message": "Successful Password changed",
        "lambda": "Use in User_Change_Password"
    },
    "206": {
        "message": "Exercises List Sent",
        "lambda": "Use in Show_User_Exercises"
    },
    "207": {
        "message": "Connections List Sent",
        "lambda": "Use in Show_User_Connections"
    },
    "208": {
        "message": "Students List Sent",
        "lambda": "Use in Show_Institute_Students"
    },
    "209": {
        "message": "Temporary Password Sent",
        "lambda": "Use in Forget_Password"
    },
    "210": {
        "message": "Exercise Saved",
        "lambda": "Use in Save_Exercise_Json"
    },
    "211": {
        "message": "Institutes List Sent",
        "lambda": "Use in Show_Institutions"
    },
    "212": {
        "message": "Institute's Members List Sent",
        "lambda": "Us in Institutions_Members"
    },
    "213": {
        "message": "confirmed transational emails",
        "lambda": "Use in Confirm Transational Emails"
    },
    "214": {
        "message": "Guest joined",
        "lambda": "Use in Guest_join"
    },
    "215": {
        "message": "Guest data updated",
        "lambda": "Us in Update_Guest_Data"
    },
    "216": {
        "message": "Guests List Sent",
        "lambda": "Use in Show_Guests"
    },
    "217": {
        "message": "Location List Sent",
        "lambda": "Use in Show_Location"
    },
    "218": {
        "message": "Exercise Created",
        "lambda": "Use In Create_Exercise"
    },
    "219": {
        "message": "Teachers List Sent",
        "lambda": "Use in Show_Institute_Teachers"
    },
    "220": {
        "message": "Teacher Exercises Sent",
        "lambda": "Use in Show_Teacher_Exercises"
    },
    "221": {
        "message": "Exercise Deleted",
        "lambda": "Use in Delete_Teacher_Exercise"
    },
    "222": {
        "message": "Preregistration emails sent",
        "lambda": "Use in 0_MSL_Send_Preregistration_Email_All and 0_MSL_Send_Preregistration_Email"
    },
    "223": {
        "message": "New users added",
        "lambda": "USe in 0_MSL_Add_Batch_Of_Users"
    },
    "224": {
        "message": "User Removed",
        "lambda": "Use in 0_MSL_Remove_User"
    },
    "225": {
        "message": "Json File returned",
        "lambda": "Use in 0_MSL_Return_Json"
    }
}
export const errors = {
    "400": {
        "message": "Server Error",
        "lambda": "Use to tell 'there is a error' in Check_TTL; Check_Email; Verify_Table and all those lambdas use from another lambda as secondary."
    },
    "401": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Sign_UP",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Sign_UP / Checking api_code"
            },
            "2": {
                "message": "Acceskey is incorrect",
                "lambda": "Use in Sign_UP / Verifying table"
            },
            "3": {
                "message": "Email no preaccept",
                "lambda": "Use in Sign_UP / Checking email"
            },
            "4": {
                "message": "User already exists",
                "lambda": "Use in Sign_UP / creating user table"
            },
            "5": {
                "message": "table exists.",
                "lambda": "Use in Sign_UP / creating exercises table"
            },
            "6": {
                "message": "Welcome email imposible to send",
                "lambda": "Use in Sign_UP / sending welcome email"
            },
            "7": {
                "message": "imposible to create teacer table",
                "lambda": "Use in Sign_UP / creating teacher table"
            }
        }
    },
    "402": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Log_In",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Log_In / Checking api_code"
            },
            "2": {
                "message": "Acceskey is incorrect",
                "lambda": "Use in Log_In / Verifying table"
            },
            "3": {
                "message": "Email no preaccept",
                "lambda": "Use in Log_In / Checking email"
            },
            "4": {
                "message": "Password Incorrect",
                "lambda": "Use in Log_In / checking password"
            },
            "5": {
                "message": "Temporary password Incorrect",
                "lambda": "Use in Log_In / checking temporary password"
            },
            "6": {
                "message": "We are loging out your account for a problem, please try again later",
                "lambda": "Use in Log_In / checking TTL"
            },
            "7": {
                "message": "imposible to updata data",
                "lambda": "Use in Log_In / updating user data login"
            }
        }
    },
    "403": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Log_In",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Log_In / Checking api_code"
            },
            "2": {
                "message": "Acceskey is incorrect",
                "lambda": "Use in Log_In / Verifying table"
            }
        }
    },
    "404": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Logout",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Logout/ checking api_code"
            },
            "2": {
                "message": "Imposible to close correctly your account, please try again.",
                "lambda": "Use in Logout / user remove to ttl table"
            }
        }
    },
    "405": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Change_Passwoord",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Password_Change / checking api_code"
            },
            "2": {
                "message": "Email does not exist",
                "lambda": "Use in Password_Change / checking email"
            },
            "3": {
                "message": "Password Incorrect",
                "lambda": "Use in Password_Change / checking password"
            },
            "4": {
                "message": "Failed to store provisional password",
                "lambda": "Use in Password_Change / saving temporary password"
            }
        }
    },
    "406": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Show_User_Exercises",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Show_User_Exercises/ checking api_code"
            }
        }
    },
    "407": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Show_User_Connections",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Show_User_Connections/ checking api_code"
            }
        }
    },
    "408": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Show_Institute_Students",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Show_Institute_Students/ checking api_code"
            }
        }
    },
    "409": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Reset_Password",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Reset_Password/ checking api_code"
            },
            "2": {
                "message": "Email does not exist",
                "lambda": "Use in Reset_Password/ checking email"
            }
        }
    },
    "410": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Show_Students",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Show_Students / checking api_code"
            }
        }
    },
    "411": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Show_Institutes",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Show_Institutes/ checking api_code"
            }
        }
    },
    "412": {
        "message": "Imposible to scan table",
        "lambda": "Use in Show_Institute_Members",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Show_Institute_Members/ checking api_code"
            }
        }
    },
    "413": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Confrm_transational_emails",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Confrm_transational_emails/ checking api_code"
            }
        }
    },
    "414": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Guest_join",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Guest_join/ checking api_code"
            }
        }
    },
    "415": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Update_Guest_Data",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Update_Guest_Data/ checking api_code"
            }
        }
    },
    "416": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Show_Guests",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Show_Guests/ checking api_code"
            }
        }
    },
    "417": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Show_Location",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Show_Location/ checking api_code"
            }
        }
    },
    "418": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Show_Location",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Show_Location/ checking api_code"
            }
        }
    },
    "419": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Show_Location",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Show_Location/ checking api_code"
            }
        }
    },
    "420": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Show_Location",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Show_Location/ checking api_code"
            }
        }
    },
    "421": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Delete_Teacher_Exercise",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Delete_Teacher_Exercise/ checking api_code"
            }
        }
    },
    "422": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Send_Preregistration_Email and Send_Preregistration_Email_All",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Send_Preregistration_Email and Send_Preregistration_Email_All/ checking api_code"
            }
        }
    },
    "423": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Add_Batch_Of_Users",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Add_Batch_Of_Users / checking api_code"
            }
        }
    },
    "424": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Remove_User",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Remove_User / checking api_code"
            }
        }
    },
    "425": {
        "message": "Error during signing up, please check your internet connection and try again",
        "lambda": "Use in Return_Json",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Return_Json / checking api_code"
            }
        }
    },
    "488": {
        "message": "Imposible to get country code",
        "lambda": "Use Return_Ip_countryCode",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Return_Ip_countryCode/ checking api_code"
            }
        }
    },
    "499": {
        "message": "No conected to serve",
        "lambda": "Use Ping_TTL",
        "sub_codes": {
            "1": {
                "message": "Unauthorized Access",
                "lambda": "Use in Ping_TTL/ checking api_code"
            }
        }
    }
}

