import '../styles/Content.scss';
import Button from './Button';
import { t } from '../i18n';

function Content() {

     const list = t('Content.list'); 
     const date = "6.8.2025";

    return (
        <div className="content">
             <h2>{t('Content.header')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('Content.text1') }}  />
            <p ><strong> {t('Content.list.heading')}</strong></p>
            <ul className='list'>
            {list.items.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
            </ul>
            <div className='button-content'>
            <Button label={t('Content.buttonLabel')} onClick={() => alert('Yhteydenottopyyntö lähetetty!')} />
            </div>
            <p>{t('Content.text2')} <strong>{date}.</strong></p>
            <p> {t('Content.text3')}</p>
        </div>
    );
}

export default Content;
