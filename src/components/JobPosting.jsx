import React from 'react';

const styles = {
  container: {},
  jobImage: {
    height: 228,
    backgroundColor: '#1AA4BA',
    marginBottom: 15,
  },
  jobTypeLabel: {
    maxWidth: 130,
    color: '#1AA4BA',
    fontSize: 13,
    borderColor: '#1AA4BA',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 2,
    paddingLeft: 5,
    paddingRight: 5,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  jobDescription: {
    color: '#9DA0A4',
    fontSize: 14,
  },
  jobInformation: {
    display: 'flex',
    height: 52,
    lineHeight: '52px',
    marginTop: 10,
  },
  companyImage: {
    width: 52,
    height: 52,
    backgroundColor: '#000000',
    borderRadius: 26,
  },
  companyName: {
    width: 280,
    marginLeft: 10,
  },
  jobCreatedAt: {
    width: 80,
    marginLeft: 10,
    color: '#9DA0A4',
  },
  supportPoints: {
    width: 80,
    marginLeft: 10,
    color: '#9DA0A4',
  },
  bookmarkButton: {
    width: 20,
    marginLeft: 10,
    color: '#9DA0A4',
  }
};

const JobPosting = () => {
  return (
    <div style={styles.container}>
      <div style={styles.jobImage}>image</div>
      <div style={styles.jobTypeLabel}>Web engineer</div>
      <div style={styles.jobTitle}>フロントエンドエンジニア募集！</div>
      <div style={styles.jobDescription}>あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。 またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガン...</div>
      <div style={styles.jobInformation}>
        <div style={styles.companyImage}>image</div>
        <div style={styles.companyName}>株式会社カブシキガイシャ</div>
        <div style={styles.jobCreatedAt}>1 day ago</div>
        <div style={styles.supportPoints}>23</div>
        <div style={styles.bookmarkButton}>bookmark</div>
      </div>
    </div>
  )
};

export default JobPosting;
