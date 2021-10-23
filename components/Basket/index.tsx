import { Key, ReactChild, ReactElement } from "react";

import styles from "./style.module.scss";

const products = [
  {
    "tags": [
      "Boat",
      "Ocean",
      "People"
    ],
    "price": 11.99,
    "name": "Generic Boat Shirt",
    "description": "eum maiores ratione dolorem error qui voluptas est nostrum quia amet recusandae rerum quam perferendis veritatis est qui amet et fugiat",
    "slug": "Generic-Boat-Shirt",
    "added": 1485146789635,
    "manufacturer": "Leannon-Fahey-and-Sawayn",
    "itemType": "shirt"
  },
  {
    "tags": [
      "City",
      "Architecture",
      "Building"
    ],
    "price": 18.99,
    "name": "Incredible Building Shirt",
    "description": "tenetur qui perferendis ipsum et temporibus voluptatem eius fugiat rem expedita quasi molestiae ipsa et expedita dolore occaecati expedita sit sed et",
    "slug": "Incredible-Building-Shirt-2",
    "added": 1486142324579,
    "manufacturer": "Hodkiewicz-Inc",
    "itemType": "shirt"
  },
  {
    "tags": [
      "Tree",
      "Orange",
      "Fruit"
    ],
    "price": 14.99,
    "name": "Refined Orange Shirt",
    "description": "accusamus est et quis aut necessitatibus similique exercitationem vel qui quia aut architecto",
    "slug": "Refined-Orange-Shirt",
    "added": 1483851781199,
    "manufacturer": "Leannon-Fahey-and-Sawayn",
    "itemType": "shirt"
  },
]
const price = 39.97;

export function Basket(props): ReactElement {
  function renderBasketProducts(): ReactChild[] {
    return products.map((product, key: Key) => {
    // return props.basket.products.map((product) => {
      return (
        <div className={styles["basket-item"]} key={key}>
          <div className={styles["basket-item_details"]}>
            <div className={styles["basket-item_details--name"]}>
              {product.name}
            </div>
            <div className={styles["basket-item_details--price"]}>
              ₺{product.price}
            </div>
          </div>

          <div className={styles["basket-item_quatity"]}>
            <div className={styles["basket-item_quatity--minus"]}>
              -
            </div>
            <div className={styles["basket-item_quatity--content"]}>
              1
            </div>
            <div className={styles["basket-item_quatity--plus"]}>
              +
            </div>
          </div>
        </div>
      )
    })
  }


  return (
    <div className={styles.basket}>
      {renderBasketProducts()}

      <div className={styles["basket-price"]}>
        ₺{price}
      </div>
    </div>
  )
}

export default Basket;