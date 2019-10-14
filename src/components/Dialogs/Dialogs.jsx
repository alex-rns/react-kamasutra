import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Anna
                </div>
                <div className={s.dialog}>
                    Lena
                </div>
                <div className={s.dialog}>
                    Petr
                </div>
            </div>
            <div className="messages">
                <div className="message">Hi</div>
                <div className="message">Hello</div>
                <div className="message">Boo!</div>
            </div>
        </div>
    )
};

export default Dialogs;