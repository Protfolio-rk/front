import type { Image } from "@/types";
import styles from "./slider.module.css";
import { useState } from "react";

interface Props {
  images: Image[];
  staticPath: string;
}

export function ImageSlider({ images, staticPath }: Props) {
  const [actual, setActual] = useState(0);
  const [modalState, setModal] = useState(false);
  const moveRight = () => setActual(getIndex(actual + 1));
  const moveLeft = () => setActual(getIndex(actual - 1));

  const getIndex = (i: number) =>
    ((i % images.length) + images.length) % images.length;

  return (
    <>
      <dialog
        open={modalState}
        className={styles.modal}
        onClick={(e) => {
          if (e.target === e.currentTarget) setModal(!modalState);
        }}
      >
        <button onClick={moveLeft}>{"<"}</button>
        {modalState ? (
          <img
            src={
              staticPath +
              (images[actual]?.sizes.thumbnail.filename ?? images[actual]?.filename)
            }
            alt={images[actual]?.alt}
          />
        ) : null}
        <button onClick={moveRight}>{">"}</button>
      </dialog>
      <article className={styles.container}>
        <div className={styles.capsule}>
          <div className={styles.slider}>
            <div className={styles.img_l}>
              <img
                src={
                  staticPath +
                  (images[getIndex(actual - 1)]?.sizes.card.filename ??
                    images[getIndex(actual - 1)]?.sizes.thumbnail.filename ??
                    images[getIndex(actual - 1)]?.filename)
                }
                alt={images[getIndex(actual - 1)]?.alt}
              />
            </div>
            <button className={styles.img_c} onClick={() => setModal(true)}>
              <img
                src={
                  staticPath +
                  (images[actual]?.sizes.card.filename ??
                    images[actual]?.sizes.thumbnail.filename ??
                    images[actual]?.filename)
                }
                alt={images[actual]?.alt}
              />
            </button>
            <div className={styles.img_r}>
              <img
                src={
                  staticPath +
                  (images[getIndex(actual + 1)]?.sizes.card.filename ??
                    images[getIndex(actual + 1)]?.sizes.thumbnail.filename ??
                    images[getIndex(actual + 1)]?.filename)
                }
                alt={images[getIndex(actual + 1)]?.alt}
              />
            </div>
          </div>
        </div>
        <button onClick={moveLeft} className={styles.left}>
          {"<"}
        </button>
        <button onClick={moveRight} className={styles.right}>
          {">"}
        </button>
      </article>
    </>
  );
}
