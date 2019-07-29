'use strict'

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button'

import "./default.css";

storiesOf('Ciashop Buttons', module)
    .add('Default', 
        () => <Button onClick={action('clicked')}></Button>
    )
    .add('Passing Text', 
        () => <Button onClick={action('clicked')} text={ 'Clique Aqui!' }></Button>
    ); 