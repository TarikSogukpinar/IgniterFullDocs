import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Kullanması Kolay',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      Dosyalama sistemi diğer geliştiricilerin işini kolaylaştıracak şekilde düzenli ve anlamlı bir şekilde yapılandırıldı.
      İç içe geçmiş dosyalar ne işe yaradığı belli olmayan kod blokları kullanmıyoruz!
      </>
    ),
  },
  {
    title: 'Gerçekten Optimize',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Igniter Projesi diğer roleplay paketlerinden farklı olarak zevkle ve titizlikle tasarlandı. Çalışsa yeterli 
       mantığıyla hiç bir zaman yaklaşmadık yaklaşmıyoruz. Aktif olarak test ettiğimiz oyuncu sayısı güncel olarak; <strong>70 Online</strong>
      </>
    ),
  },
  {
    title: 'Temiz Kod',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Igniter Projesi yeni gelecek özellikler ve güncellemeler için kolay ve anlışılabilir bir alt yapı sunar geliştirici yeni özellikler
        eklemek için zorlanmayacak. Proje içerisin'deki sistemler "SOLID" kurallarına uygun olarak yazıldı. Beğenmediğimiz yerleri dönüp "Recaftoring" ettik.
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
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
