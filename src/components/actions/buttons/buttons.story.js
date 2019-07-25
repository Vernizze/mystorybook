'use strict'

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import "./default.css";

storiesOf('Ciashop Buttons', module)
    .add('Default', () => <button class="testbutton" onClick={action('For the Alliance')}>Clique aqui</button>); 