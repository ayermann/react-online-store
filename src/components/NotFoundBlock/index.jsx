import React from 'react';
import styles from './NotFoundBlock.module.scss';
const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <img
          src="https://cdn3.iconfinder.com/data/icons/emoticons-50/24/sad_emoticon_emoticons_emoji_emote_1-256.png"
          alt=""
          width={50}
        />
        <br />
        Nothing was found
      </h1>
      <p>Sorry, this page is not available right now.</p>
    </div>
  );
};

export default NotFoundBlock;
