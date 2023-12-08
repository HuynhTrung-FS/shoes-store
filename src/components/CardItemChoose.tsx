/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import styles from "./card.module.css";
interface CardItemChooseProps {
  arrayProduct: CardItem;
  handleDeclineClick: (id: number) => void;
  handleAddOne: (id: number) => void;
  handlRemoveOne: (id: number) => void;
}
const CardItemChoose: React.FC<CardItemChooseProps> = ({
  arrayProduct,
  handleDeclineClick,
  handleAddOne,
  handlRemoveOne,
}) => {
  const [count, setCount] = useState<number>(1);
  const handleCountDownClick = (id: number) => {
    handlRemoveOne(id);
    setCount((count) => count - 1);
  };
  const handleCountUpClick = (id: number) => {
    handleAddOne(id);
    setCount((count) => count + 1);
  };
  const handleRemove = (id: number) => {
    handleDeclineClick(id);
    setCount(0);
  };
  useEffect(() => {
    if (count === 0) {
      handleDeclineClick(arrayProduct.id);
    }
  });
  return count === 0 ? (
    <></>
  ) : (
    <div>
      <div className={styles.cardChoose}>
        <div className={styles.cardItemChooseLeft}>
          <div className={styles.cardItemChooseImage}>
            <div className={styles.cardItemChooseImageInside}>
              <img src={arrayProduct.image} alt={arrayProduct.name} />
            </div>
          </div>
        </div>
        <div className={styles.cardItemChooseRight}>
          <div className={styles.itemName}>{arrayProduct.name}</div>
          <div className={styles.itemPrice}>{arrayProduct.price}</div>
          <div className={styles.itemAction}>
            <div className={styles.itemCount}>
              <div
                className={styles.itemCountButton}
                onClick={() => handleCountDownClick(arrayProduct.id)}
              >
                -
              </div>
              <div className={styles.itemCountNumber}>{count}</div>
              <div
                className={styles.itemCountButton}
                onClick={() => handleCountUpClick(arrayProduct.id)}
              >
                +
              </div>
            </div>
            <div
              className={styles.itemRemove}
              onClick={() => handleRemove(arrayProduct.id)}
            >
              <img src="/images/trash.png" alt="" width={16} height={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItemChoose;
