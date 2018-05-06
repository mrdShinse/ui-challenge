import React from 'react';

import { storiesOf } from '@storybook/react';

import WantedlyJobPosting from '../components/WantedlyJobPosting'
import LinkedinJobPosting from '../components/LinkedinJobPosting'

storiesOf('WantedlyJobPosting', module)
  .add('default', () => <WantedlyJobPosting />);

  storiesOf('LinkedinJobPosting', module)
    .add('default', () => <LinkedinJobPosting />);
