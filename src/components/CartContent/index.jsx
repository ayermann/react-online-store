import styles from './CartContent.module.scss';
import { Link } from 'react-router-dom';
const CartContent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img
            src="https://cdn3.iconfinder.com/data/icons/feather-5/24/shopping-cart-256.png"
            alt=""
            width={30}
          />
          <span>Shopping cart</span>
        </div>
        <div className={styles.emptyCart}>
          <img
            src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/trash-256.png"
            alt=""
            width={18}
          />
          <span>Empty the shopping cart</span>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.leftBox}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/whcompare-servers-web-hosting/29/ssd-dark-512.png"
              alt=""
              width={50}
            />
            <div className={styles.title}>Intel Core i9 12900H</div>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.manageItems}>
              <div className={styles.add}>+</div>
              <div className={styles.numberOfItemsAdded}>3</div>
              <div className={styles.minus}>-</div>
            </div>
            <div className={styles.totalPrice}>990 $</div>
            <div className={styles.delete}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/linecon/512/cross-256.png"
                alt=""
                width={30}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.bottomLeftRow}>
          <div className={styles.totalNumOfItems}>
            Total items: <strong>1</strong>
          </div>
          <Link className={styles.link} to={'/'}>
            {'< Back'}
          </Link>
        </div>
        <div className={styles.bottomRightRow}>
          <div className={styles.totalAmountOfMoney}>
            Order price: <span>990 $</span>
          </div>
          <button>Pay now</button>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
