import BackgroundLayout from "@/components/BackgroundLayout";
import { Button, PasswordInput, TextInput, Text }
    from "@mantine/core";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup"
// import client, { useClient } from "@/shared/client";
// import { toast } from "@/shared/helpers";
import { At, User as UserIcon, Lock } from "@phosphor-icons/react"
import { useUserContext } from "@/context/UserContext";
// import { Action_Type, Company, User } from "@/shared/types";
// import { useQuery } from "@tanstack/react-query";
// import AppLoader from "@/components/shared/AppLoader";

const Register = () => {
    return (  
        <BackgroundLayout
        bottomContent={<>
            <Text style={{ textAlign: "center" }} size="sm">Already have an account ?
                {" "}
                <Link to={"/login"}
                    className="font-bold text-blue-400 no-underline">
                    Login
                </Link>
            </Text>
        </>}
        title={"Create account"}
        >

        {/* <LoadingOverlay
            visible={loading || isLoading}
            zIndex={1000}
            loaderProps={{ type: "dots" }}
            overlayProps={{ radius: "sm", blur: 2 }} /> */}
        <form 
        // onSubmit={handleSubmit}
        >
            <TextInput
                label="Name"
                my={10}
                // onBlur={handleBlur("name")}
                // value={values.name}
                // onChange={handleChange("name")}
                leftSection={<UserIcon size={20} />}
                // error={errors.name && touched.name ? errors.name : null}
            />
            <TextInput
                // onBlur={handleBlur("email")}
                // value={values.email}
                // onChange={handleChange("email")}
                // error={errors.email && touched.email ? errors.email : null}
                label="Email"
                leftSection={<At size={20} />}
                my={10} />

            <PasswordInput
                // onBlur={handleBlur("password")}
                // value={values.password}
                // onChange={handleChange("password")}
                leftSection={<Lock size={20} />}
                // error={errors.password && touched.password ? errors.password : null}
                label="Password"
                my={10} />
            <Button
                // loading={loading}
                my={10}
                type="submit">Register</Button>
        </form>
    </BackgroundLayout>
    );
}
 
export default Register;