import { Button, Flex, PasswordInput, TextInput, Text } from "@mantine/core";
import BackgroundLayout from "../components/BackgroundLayout";
import { At, Lock } from "@phosphor-icons/react";
import {Link} from "react-router-dom"


const Login = () => {
    return (  
        <BackgroundLayout
        bottomContent={<>
            <Text style={{ textAlign: "center" }} size="sm">
                Don't have an account yet?{" "}
                <Link
                    // to={!companySlug ? "/register" : `/${companySlug}/register`}
                    to={"/register"}
                    className="font-bold text-blue-400 no-underline"
                >
                    Sign Up
                </Link>
            </Text>
        </>}
        title={"Login to your account"}
        >
               <form method="POST"
                // onSubmit={handleSubmit}
                >
                <TextInput
                    required
                    // onBlur={handleBlur("email")}
                    // value={values.email}
                    // onChange={handleChange("email")}
                    leftSection={<At size={20} />}
                    // error={errors.email && touched?.email ? errors.email : null}
                    label="Email"
                    my={10} />
                <PasswordInput
                    required
                    // onBlur={handleBlur("password")}
                    // value={values.password}
                    // onChange={handleChange("password")}
                    // leftSection={<Lock size={20} />}
                    // error={errors.password && touched?.password ? errors.password : null}
                    label="Password"
                    my={10} />
                <Flex justify={"space-between"} align={"center"}>
                    <Button
                        // loading={loading}
                        type="submit"
                        my={10}>Login</Button>

                    <Button
                        // onClick={() => navigate(!companySlug ? "/reset-password" : `/${companySlug}/reset-password`)}
                        fw={300}
                        fz={"sm"}
                        px={0}
                        variant="transparent">
                        Forgot password?
                    </Button>
                </Flex>
            </form>
        </BackgroundLayout>
    );
}
 
export default Login;