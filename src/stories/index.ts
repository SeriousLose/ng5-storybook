import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/angular/demo';
import { MyButtonComponent } from '../app/my-button/my-button.component';
// import { AppComponent } from '../app/app.component';

import {
  MatButtonModule,
  MatButtonToggleModule
} from '@angular/material';

import { moduleMetadata } from '@storybook/angular';

storiesOf('Button', module)
  .add('no name', () => ({
    component: MyButtonComponent,
    moduleMetadata: {
        imports: [MatButtonModule, MatButtonToggleModule]
    }
  }))
  .add('by template', () => ({
    component: MyButtonComponent,
    props: {
      name: '💯',
      click: action('clicked'),
    },
    moduleMetadata: {
        imports: [MatButtonModule, MatButtonToggleModule]
    }
  }));