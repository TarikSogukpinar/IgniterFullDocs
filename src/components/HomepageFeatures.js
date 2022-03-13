import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate from '@docusaurus/Translate';
const FeatureList = [
  {
    title: 'Kullanmasi Kolay',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      Dosyalama sistemi diğer geliştiricilerin işini kolaylaştiracak şekilde düzenli ve anlamli bir şekilde yapilandirildi.
      İç içe geçmiş dosyalar ne işe yaradiği belli olmayan kod bloklari kullanmiyoruz!
      </>
    ),
  },
  {
    title: 'Gerçekten Optimize',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Igniter Projesi diğer roleplay paketlerinden farkli olarak zevkle ve titizlikle tasarlandi. Çalişsa yeterli 
       mantiğiyla hiç bir zaman yaklaşmadik yaklaşmiyoruz. Aktif olarak test ettiğimiz oyuncu sayisi güncel olarak; <strong>70 Online</strong>
      </>
    ),
  },
  {
    title: 'Temiz Kod',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Igniter Projesi yeni gelecek özellikler ve güncellemeler için kolay ve anlişilabilir bir alt yapi sunar geliştirici yeni özellikler
        eklemek için zorlanmayacak. Proje içerisin'deki sistemler "SOLID" kurallarina uygun olarak yazildi. Beğenmediğimiz yerleri dönüp "Recaftoring" ettik.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <Translate>
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    </Translate>
  );
}
