import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { dataContact } from '../../data/contact';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  useEffect(() => {
    const titleContact = document.querySelector('.contact-title');
    const mapContact = document.querySelector('.box-map');
    const titleFirst = document.querySelector('.contact-title-1');
    const titleSecond = document.querySelector('.contact-title-2');
    const revealAnim = () => {
      const TLFade = gsap.timeline();
      TLFade.from(
        titleContact,
        {
          autoAlpha: 0,
          x: -380,
          duration: 1,
          ease: 'power4.out',
        },
        '-=0.2'
      )
        .from(mapContact, { autoAlpha: 0, x: -40, duration: 1, ease: 'power4.out' }, '-=0.2')
        .from(titleFirst, { autoAlpha: 0, x: -120, duration: 0.5, ease: 'power4.out' })
        .from(titleSecond, { autoAlpha: 0, x: -120, duration: 0.5, ease: 'power4.out' });
    };

    revealAnim();
  }, []);
  const { i18n } = useTranslation();

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact us</h1>
        <div className="box-map">
          <div className="map-child">
            <iframe
              src={dataContact.pathMap}
              style={{
                border: 0,
              }}
              loading="lazy"
              title="map"
            ></iframe>
          </div>
          <div className="map-child info-wrapper">
            <div className="info">
              <div className="top">
                <p>{i18n.language === 'en' ? dataContact.address_en : dataContact.address_ko}</p>
                <p>{i18n.language === 'en' ? dataContact.district_en : dataContact.district_ko}</p>
                <p>T 02 543 4983</p>
              </div>
              <div className="bottom">
                <div className="contact-title-1">
                  <div className="title ">Work With Us.</div>
                  <a href={`mailto:${dataContact.mail}`} target="/">
                    {dataContact.mail}
                  </a>
                </div>

                <div className="hidden"></div>
                <div className="contact-title-2">
                  <div className="title ">Careers.</div>
                  <a href={`mailto:${dataContact.mail}`} target="/">
                    {dataContact.mail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
