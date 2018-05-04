import React from 'react';

const styles = {
  container: {
    paddingTop: 10,
    paddingBottom: 8,
    borderBottomColor: '#e3e3e3',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
  },
  innerContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  coverImageContainer: {
    marginBottom: 20,
  },
  coverImage: {
    width: 560,
    height: 228,
    overflow: 'hidden',
    backgroundColor: '#1AA4BA', // temporary
  },
  jobTypeLabelContainer: {
    display: 'flex'
  },
  jobTypeLabelContainer: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, "Hiragino Sans", "ヒラギノ角ゴシック", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3",Roboto, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", sans-serif',
    borderRadius: 2,
    display: 'block',
    boxSizing: 'border-box',
    margiRight: 8,
    paddingLeft: 4,
    paddingRight: 4,
    height: 20,
    color: '#1AA4BA',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#1AA4BA',
    fontSize: 11,
    fontWeight: 500,
    lineHeight: '18px',
  },
  jobTitle: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 1.4,
    marginTop: 10,
    marginBottom: 8,
  },
  jobDescription: {
    lineHeight: 1.5,
    color: '#9DA0A4',
    marginBottom: 14,
    fontSize: 14,
    fontWeight: 400,
    wordWrap: 'break-word',
  },
  footer: {
    display: 'flex',
    marginTop: 16,
  },
  companyImageContainer: {
    width: 50,
    height: 50,
    paddingRight: 12,
  },
  companyImage: {
    height: '100%',
    backgroundColor: '#000000',
    borderRadius: '50%',
  },
  companyNameContainer: {
    flexShrink: 1,
    flexBasis: 'auto',
    minWidth: 0,
  },
  companyName: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '1.3em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  actionsContainer: {
    flexGrow: 1,
    flexBasis: 'auto',
    textAlign: 'right',
  },
  publishedAt: {
    display: 'inline-block',
    paddingRight: 15,
    marginRight: 15,
    marginLeft: 15,
    borderRightWidth: 1,
    borderRightStyle: 'solid',
    borderRightColor: '#ccc',
    fontSize: 11,
    lineHeight: '20px',
    color: '#ccc',
  },
  supportPointsContainer: {
    fontSize: 18,
    color: '#aaa',
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  supportCount: {
    fontWeight: 600,
  },
  bookmarkButtonContainer: {
    display: 'inline-block',
    paddingLeft: 10,
    paddingRight: 10,
  }
};

const WantedlyJobPosting = () => {
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div>
          <div style={styles.coverImageContainer}>
            <div style={styles.coverImage}>
              <img />
            </div>
          </div>
          <div style={styles.jobTypeLabelContainer}>
            <span style={styles.jobTypeLabel}>Web engineer</span>
          </div>
          <h1 style={styles.jobTitle}>
            <a>フロントエンドエンジニア募集！</a>
          </h1>
          <p style={styles.jobDescription}>
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。 またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガン...
          </p>
        </div>
        <div style={styles.footer}>
          <div style={styles.companyImageContainer}>
            <div style={styles.companyImage}>
              image
            </div>
          </div>
          <div style={styles.companyNameContainer}>
            <h3 style={styles.companyName}>
              株式会社カブシキガイシャ
            </h3>
          </div>
          <div style={styles.actionsContainer}>
            <div style={styles.publishedAt}>1 day ago</div>
            <div style={styles.supportPointsContainer}>
              <a>
                <span style={styles.supportCount}>
                  23
                </span>
              </a>
            </div>
            <div style={styles.bookmarkButtonContainer}>
              b
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default WantedlyJobPosting;
