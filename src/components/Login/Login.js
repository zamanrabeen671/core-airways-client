import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import firebaseConfig from "./firebase.config";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [userDetails, setUserDetails] = useContext(UserContext);
    const [user, setUser] = useState({
        isSigned: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: true
    });
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        if (newUser) {
            signUp(data)
        }
        else {
            signIn(data)
        }
        console.log(data)
    };
    const signUp = data => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                const signedInUser = {
                    isSigned: true,
                    name: res.user.displayName,
                    email: res.email,
                }
                setUser(signedInUser)
                setUserDetails(signedInUser);
                updateUserName(res.user.displayName);
                console.log(res)
                history.replace(from);

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

            });
    }
    const signIn = data => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                const signInUser = {
                    name: res.user.displayName,
                    email: res.user.email,
                }
                setUser(signInUser)
                setUserDetails(signInUser);
                updateUserName(res.name);
                console.log(signInUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }
    const updateUserName = name => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log('user name updated successfully')
        }).catch(function (error) {
            console.log(error);
        });
    }
    return (
        <div className="container">
            <Header />

            <div className="box-container text-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {newUser ? <h2 className="login-header-info">Create an account</h2> : <h2 className="login-header-info">Login</h2>}
                    <div class="row g-3 mt-3">
                        {newUser && <div className="col-md-8">
                            <input name="name" {...register("name", { required: true })} className="form-control w-100" placeholder="name" />
                            {errors.name && <span>This field is required</span>}
                        </div>}
                        <div className="col-md-8">
                            <input name="email" {...register("email", { required: true })} className="form-control w-100" placeholder="email" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="col-md-8">
                            <input name="password" type="password" {...register("password", { required: true })} className="form-control w-100" placeholder="password" />
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <div className="col-md-6">
                            <input type="submit" />
                        </div>
                        <div onClick={() => setNewUser(!newUser)}>
                            {newUser ? <p>Already have an account?<Link>login</Link></p> : <p>Don't have an account? <Link>Create an account</Link></p>}
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;
