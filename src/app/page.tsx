"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
export default function Home() {

  const {
    data: session,
  } = authClient.useSession()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email({
      name,
      email,
      password,
    }, {
      onError: () => {
        window.alert("something went wrong");
      },
      onSuccess: () => {
        window.alert("success");
      },
    })
  }

  const onLogin = () => {
    authClient.signIn.email({
      email,
      password,
    }, {
      onError: () => {
        window.alert("something went wrong");
      },
      onSuccess: () => {
        window.alert("success");
      },
    })
  }


  if (session) {
    return (
      <div className="flex flex-col p-4 gap-4">
        <p>logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>
          Sign Out
        </Button>
      </div>
    );
  }
  return (
    <div>
      <div className="p-4 flex flex-col gap-4 ">
        <Input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}></Input>
        <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
        <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>

        <Button onClick={onSubmit}>
          Sign up
        </Button>
      </div>

      <div className="p-4 flex flex-col gap-y-10 ">
        <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
        <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>

        <Button onClick={onLogin}>
          Sign IN
        </Button>
      </div>
    </div>



  );
}
