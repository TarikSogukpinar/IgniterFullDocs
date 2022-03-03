import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Kullanmasi Kolay',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
         Dosyalama sistemi diğer geliştiricilerin işini kolaylaştiracak şekilde düzenli ve anlamli bir şekilde yapilandirildi.
         İç içe geçmiş dosyalar ne işe yaradiği belli olmayan kod bloklari kullanmiyoruz!
      </>
    ),
  },
  {
    title: 'Gerçekten Optimize',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Igniter Projesi diğer roleplay paketlerinden farkli olarak zevkle ve titizlikle tasarlandi. Çalişsa yeterli 
        mantiğiyla hiç bir zaman yaklaşmadik yaklaşmiyoruz. Aktif olarak test ettiğimiz oyuncu sayisi güncel olarak; <strong>70 Online</strong>
      </>
    ),
  },
  {
    title: 'Temiz Kod',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Igniter Projesi yeni gelecek özellikler ve güncellemeler için kolay ve anlişilabilir bir alt yapi sunar geliştirici yeni özellikler
        eklemek için zorlanmayacak. Proje içerisin'deki sistemler "SOLID" kurallarina uygun olarak yazildi. Beğenmediğimiz yerleri dönüp "Recafto
      </>
    ),
  }, 
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Open Source Rapid Application Framework for .Net 5">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Hızlı Başlangıç
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
