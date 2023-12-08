/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import styles from "./card.module.css";
interface CardItemProps {
  arrayProduct: CardItem;
  handleChooseClick: (id: number) => void;
}
const CardItem: React.FC<CardItemProps> = ({
  arrayProduct,
  handleChooseClick,
}) => {
  return (
    <div>
      {/* childbody */}
      <div className={styles.cardBodyChild}>
        <div className={styles.cardImage}>
          <img src={arrayProduct.image} alt="" />
        </div>
        <div className={styles.cardName}>{arrayProduct.name}</div>
        <div className={styles.cardDescription}>{arrayProduct.description}</div>
        <div className={styles.cardItemBottom}>
          <div className={styles.cardItemPrice}>{arrayProduct.price}</div>
          {!arrayProduct.isChoose ? (
            <div
              className={styles.cardItemButton}
              onClick={() => handleChooseClick(arrayProduct.id)}
            >
              <p>ADD TO CART</p>
            </div>
          ) : (
            <div className={styles.cardItemButton}>
              <div className={styles.cardButtonCover}>
                <img
                  src="/images/check.png"
                  alt=""
                  width={22}
                  height={22}
                  className={styles.checkIcon}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CardItem;
