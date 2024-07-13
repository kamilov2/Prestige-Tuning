import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Contact.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Message from '@/app/components/ui/Message/Message';


const Contact = () => {
    const { setMessage, messageType, setMessageType, messageText, setMessageText } = React.useContext(Context);
    const [formData, setFormData] = React.useState({ name: '', phone: '' });
    const [focused, setFocused] = React.useState({ name: false, phone: false });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleFocus = (e) => {
        const { id } = e.target;
        setFocused({ ...focused, [id]: true });
    };

    const handleBlur = (e) => {
        const { id } = e.target;
        if (!formData[id]) {
            setFocused({ ...focused, [id]: false });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        setMessage(true)
        setMessageType('success')
        setMessageText('Xabaringiz qabul qilindi!')
    };

    return (
        <section id='contact' className={styles.contact}>
            <MyContainer>
                <Message messages={messageText} type={messageType} />
                <div className={styles.contact__item}>
                    <div className={styles.contact__item__title}>
                        <h2>Manzil va bog’lanish</h2>
                    </div>
                    <div className={styles.contact__item__content}>
                        <div className={styles.contact__item__content__left}>
                            <p className={styles.contact__item__content__left__address}><span>Prestige Tuning</span> markazimiz Andijon shahar <span>Mashrab ko’chasi 2B</span> uyda joylashgan. Mo’ljal : Delfin moykasi, Oqshom choyxonasi.</p>
                            <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4876.99878707187!2d72.3288522771734!3d40.739349435939225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced2ca7c5470d%3A0x94dd6d4ba9d395e1!2z0YPQu9C40YbQsCDQnNGD0YHRgtCw0LrQuNC70LvQuNC6IDIsINCQ0L3QtNC40LbQsNC9LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e1!3m2!1sru!2s!4v1689419610812!5m2!1sru!2s`} width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className={styles.contact__item__content__right}>
                            <div className={styles.contact__item__content__right__form}>
                                <h3>Bog’lanish formasi</h3>
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.inputContainer}>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        <label
                                            htmlFor="name"
                                            className={`${styles.placeholder} ${focused.name || formData.name ? styles.active : ''}`}
                                        >
                                            Ismingizni yozing
                                        </label>
                                    </div>
                                    <div className={styles.inputContainer}>
                                        <input
                                            type="number"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        <label
                                            htmlFor="phone"
                                            className={`${styles.placeholder} ${focused.phone || formData.phone ? styles.active : ''}`}
                                        >
                                            Telefon raqamingizni yozing
                                        </label>
                                    </div>
                                    <button type="submit" className={styles.submitButton}>Qo’ng’iroq buyurtma qilish</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Contact;