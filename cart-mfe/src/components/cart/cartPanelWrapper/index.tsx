import React, { Suspense } from 'react';
import styles from './cartPanelWrapper.module.scss';

interface CartPanelWrapperProps {
  closePanel(): void;
}

const LazyCartPanel = React.lazy(() => import('../cartPanel'));

const CartPanelWrapper: React.FC<CartPanelWrapperProps> = ({ closePanel }) => {
  return (
    <div className={styles.panelWrapper}>
      <div className={styles.panelWrapperContent}>
        <button className={styles.panelWrapperClose} onClick={closePanel}>
          Close
        </button>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyCartPanel />
        </Suspense>
      </div>
    </div>
  );
};

export default CartPanelWrapper;
