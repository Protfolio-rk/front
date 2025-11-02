import { useState, useEffect, type FormEventHandler } from "react";
import type { MessageRequestArgs } from "@/types";
import { Container } from "../Container";
import { extendsClassName } from "@/utils/client";
import styles from "./contact.module.css";

export function ContactForm() {
  const [popupMsg, setPopupMsg] = useState<
    { title: string; content: string } | undefined
  >(undefined);
  const [timeOut, setTime] = useState<
    ReturnType<typeof setTimeout> | undefined
  >();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const requestData: Partial<MessageRequestArgs> = {
      title: form.get("title") as string,
      content: form.get("content") as string,
      email: form.get("email") as string,
    };

    const res = await fetch("/api/message", {
      method: "POST",
      body: JSON.stringify(requestData),
      credentials: "same-origin",
    }).catch((e: Error) => e);

    if (res instanceof Error) {
      setPopupMsg({
        title: "❌ Error",
        content: res.message,
      });
      return;
    }
    if (res.status !== 200) {
      const data = await res.json();

      setPopupMsg({
        title: "❌ Error",
        content: data.message,
      });
      return;
    }

    setPopupMsg({
      title: "✔️  Sended",
      content: "I will respond as soon as possible",
    });
  };

  useEffect(() => {
    if (popupMsg) {
      clearTimeout(timeOut);
      setTime(
        setTimeout(() => {
          setPopupMsg(undefined);
        }, 3000),
      );
    }
  }, [popupMsg]);

  return (
    <>
      {popupMsg ?
        <Container className={extendsClassName(styles.float)}>
          <span>{popupMsg.title}</span>
          <p>{popupMsg.content}</p>
        </Container> :
        ""
      }
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <label invalid-txt="A title is nedded">
          <input type="text" required placeholder=" " name="title" />
          <span>Title</span>
        </label>
        <label invalid-txt="Invalid E-Mail">
          <input
            type="email"
            required
            placeholder=" "
            autoComplete="on"
            name="email"
          />
          <span>Email</span>
        </label>
        <label>
          <textarea
            required
            placeholder="Write someting :)"
            name="content"
            maxLength={400}
          />
          <span>Menssage</span>
        </label>
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </>
  );
}
