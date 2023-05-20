"use client";

import React, { useRef, useState } from "react";
import axios from "axios";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Toast } from "primereact/toast";

const LoginOrRegister = () => {
  const router = useRouter();
  const toast = useRef<any>();

  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordAgain, setPasswordAgain] = useState<string>("");

  const loginOrRegister = () => {
    setIsLoading(true);
    if (isLogin) {
      signIn("credentials", {
        email,
        password,
        redirect: false,
      }).then((callback) => {
        // todo do sth w/ loading state
        setIsLoading(false);

        if (callback?.error) {
          toast.current?.show({
            severity: "error",
            summary: "Fout",
            detail: callback.error,
          });
          return;
        }
        if (callback?.ok) {
          toast.current?.show({
            severity: "info",
            summary: "Ingelogd",
            detail: "U bent ingelogd",
          });
          router.push("/setup");
        }
      });
    } else {
      axios
        .post("/api/auth/register", { name, email, password })
        .then((response) => {
          toast.current?.show({
            severity: "info",
            summary: "Geregistreerd",
            detail: "U bent geregistreerd:" + response,
          });
          setIsLogin(true);
        })
        .catch((error) => {
          toast.current?.show({
            severity: "error",
            summary: "Fout",
            detail: error?.message,
          });
        })
        .finally(() => setIsLoading(false));
    }
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Toast ref={toast} position="top-center" />
      <div className="p-4 pt-8 w-96">
        <Card
          title={`Keepstraight - ${isLogin ? "Login" : "Register"}`}
          className={"p-3"}
        >
          <div className="flex flex-column align-self-center">
            {/*LOGIN EXISTING USER*/}
            {isLogin && (
              <div className="card">
                <div className="field">
                  <label htmlFor="email">E-mail</label>
                  <InputText
                    id={"email"}
                    value={email}
                    className="text-base text-color surface-overlay surface-border border-round appearance-none outline-none w-full"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="password">Password</label>
                  <Password
                    id={"password"}
                    value={password}
                    className="text-base text-color surface-overlay surface-border border-round appearance-none outline-none w-full"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* REGISTER NEW USER */}
            {!isLogin && (
              <div className="card">
                <div className="field">
                  <label htmlFor="email">E-mail</label>
                  <InputText
                    id={"email"}
                    value={email}
                    className="text-base text-color surface-overlay surface-border border-round appearance-none outline-none w-full"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <InputText
                    id={"name"}
                    value={name}
                    className="text-base text-color surface-overlay surface-border border-round appearance-none outline-none w-full"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="password">Password</label>
                  <Password
                    id={"password"}
                    value={password}
                    className="text-base text-color surface-overlay surface-border border-round appearance-none outline-none w-full"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="passwordAgain">Retype password</label>
                  <Password
                    id={"passwordAgain"}
                    value={passwordAgain}
                    className="text-base text-color surface-overlay surface-border border-round appearance-none outline-none w-full"
                    onChange={(e) => setPasswordAgain(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="pt-4">
            <Button
              className={"w-full"}
              label={isLogin ? "Login" : "Register"}
              icon={"pi pi-check"}
              size={"large"}
              onClick={loginOrRegister}
            />
            <Button
              link
              className={"w-full pt-4"}
              label={isLogin ? "Naar registreren" : "Terug naar login"}
              icon={isLogin ? "pi pi-arrow-right" : "pi pi-arrow-left"}
              onClick={() => setIsLogin(() => !isLogin)}
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default LoginOrRegister;
