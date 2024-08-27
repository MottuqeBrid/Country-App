import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './Countries.module.css';

import Country from '../country/Country';

const Countries = (props) => {
    return (
        <section className={style.countries}>
            {props.countries.map((country) => {
                const coununyNew = { country, id: uuidv4() }
                return <Country {...coununyNew} key={coununyNew.id} onRemoveCountry={props.onRemoveCountry} />
            })}
        </section>
    );
};

export default Countries;