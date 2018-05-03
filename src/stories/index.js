import React from 'react';

import { storiesOf } from '@storybook/react';

import JobPosting from '../components/JobPosting'

storiesOf('JobPosting', module)
  .add('default', () => <JobPosting />);
