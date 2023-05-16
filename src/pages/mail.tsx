/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useToast } from "@/components/hooks/useToast";
import router from "next/router";

export default function Mail() {
  const [name, setName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const toast = useToast();

  const _sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const sendMail = async () => {
    if (name == "") {
      toast({
        text: "名前が入力されていません。",
        type: "error",
        isDisplay: true,
      });
      return;
    }

    if (mail == "") {
      toast({
        text: "メールアドレスが入力されていません。",
        type: "error",
        isDisplay: true,
      });
      return;
    }

    if (mail.indexOf("@") == -1) {
      toast({
        text: "無効なメールアドレスです。",
        type: "error",
        isDisplay: true,
      });
      return;
    }

    if (message == "") {
      toast({
        text: "内容が入力されていません。",
        type: "error",
        isDisplay: true,
      });
      return;
    }
    await _sleep(1000);
    await fetch("/api/mail", {
      method: "POST",
      body: `\n
      名前: ${name} \n
      メールアドレス: ${mail} \n
      お問い合わせ内容: \n${message} `,
    });

    toast({
      text: "メッセージを送信しました。",
      type: "normal",
      isDisplay: true,
    });
  };

  const hideToast = React.useCallback(() => {
    toast({ text: "", type: "", isDisplay: false });
  }, [toast]);

  React.useEffect(() => {
    const handleRouteChange = () => {
      hideToast();
    };

    const handleBeforeUnload = () => {
      hideToast();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [hideToast]);

  return (
    <BasicContainer>
      <ContactContainer>
        <BasicSubContainer>
          <ContactSubTitle>お問い合わせ</ContactSubTitle>
          <BasicText>
            <BasicButton>
              <Link href={"/"}>公式サイトに戻る</Link>
            </BasicButton>
          </BasicText>
        </BasicSubContainer>
        <BasicSubContainer>
          <BasicInputField
            type="text"
            placeholder="名前"
            onChange={(e) => setName(e.target.value)}
          />
        </BasicSubContainer>
        <BasicSubContainer>
          <BasicInputField
            type="text"
            placeholder="メールアドレス"
            onChange={(e) => setMail(e.target.value)}
          />
        </BasicSubContainer>
        <BasicSubContainer>
          <ContactTextArea
            placeholder="お問い合わせ&#13; 例）イベント会場として使用したいです。"
            onChange={(e) => setMessage(e.target.value)}
          />
        </BasicSubContainer>
        <BasicSubContainer>
          <BasicButton
            type="button"
            onClick={() => {
              sendMail();
            }}
          >
            送信
          </BasicButton>
        </BasicSubContainer>
      </ContactContainer>
    </BasicContainer>
  );
}

const BasicContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
`;

const BasicSubContainer = styled(BasicContainer)``;

const ContactContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #fff;
  border-radius: 8px;
`;

const ContactSubTitle = styled.h2`
  position: relative;
  padding: 1.5rem 1rem;
  margin: 0;
  font-size: 2rem;
  color: #fff;
  font-weight: bold;
`;

const BasicText = styled.span`
  font-size: 1rem;
  color: #fff;
`;

const BasicInputField = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  transition: border-bottom-color 0.3s;
  color: #fff;
  :focus {
    border-bottom-color: #fff;
    outline: none;
  }
`;

const ContactTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-top: 6px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  resize: none;
  transition: border-bottom-color 0.3s;
  color: #fff;
  :focus {
    border-bottom-color: #fff;
    outline: none;
  }
`;

const BasicButton = styled.button`
  display: inline-block;
  width: 100%;
  max-width: 350px;
  height: 3rem;
  padding: 0.5rem 1.5rem;
  margin: 1rem 0;
  text-decoration: none;
  color: white;
  background-color: gray;
  border: none;
  border-radius: 0.5rem;
  transition: 0.4s;
  cursor: pointer;
  :hover {
    background-color: #cc5757;
  }
`;
