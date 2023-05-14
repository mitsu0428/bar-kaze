/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Mail() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  // 指定秒を待機する関数
  const _sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  // メール送信関数
  const sendMail = async () => {
    // 名前が入力されているか
    if (name == "") {
      alert("名前を入力してください！");
      return;
    }
    // メールアドレスが入力されているかと正しいフォーマットか
    if (mail == "") {
      alert("メールアドレスを入力してください。");
      return;
    } else if (mail.indexOf("@") == -1) {
      alert("有効なメールアドレスを入力してください。");
      return;
    }
    // 内容が入力されているか
    if (message == "") {
      alert("内容を入力してください。");
      return;
    }
    await _sleep(1000);
    alert("お問い合わせを送信しました。");
    await fetch("/api/mail", {
      method: "POST",
      body: `\n
      名前: ${name} \n
      メールアドレス: ${mail} \n
      お問い合わせ内容: \n${message} `,
    });
    // 値は保持されているのでリロードしてOK
    location.reload();
  };

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
            placeholder="お問い合わせ内容&#13; 例）イベント会場として使用したいです。"
            onChange={(e) => setMessage(e.target.value)}
          />
        </BasicSubContainer>
        <BasicSubContainer>
          <BasicButton
            type="button"
            onClick={sendMail}
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
  padding: 0 1rem;
`;

const BasicSubContainer = styled(BasicContainer)``;

const ContactContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #fff;
  border-radius: 4px;
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
