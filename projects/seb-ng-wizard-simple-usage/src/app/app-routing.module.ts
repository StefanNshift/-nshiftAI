import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WizardStep } from '@sebgroup/ng-wizard';
import { StepOneComponent } from './steps/step-one/step-one.component';
import { StepTwoComponent } from './steps/step-two/step-two.component';
import { StepThreeComponent } from './steps/step-three/step-three.component';
import { IndexComponent } from './steps/step-two/sub-steps/index/index.component';
import { IndexStepThreeComponent } from './steps/step-three/sub-steps/index/index.component';

import { StepAComponent } from './steps/step-two/sub-steps/step-a/step-a.component';
import { StepBComponent } from './steps/step-two/sub-steps/step-b/step-b.component';

const routes: WizardStep[] = [
  {
    path: '',
    redirectTo: 'step-one',
    pathMatch: 'full',
  },
  {
    path: 'step-one',
    component: StepOneComponent,
    data: {
      heading: 'Step one',
    },
  },
  {
    path: 'step-two',
    component: StepTwoComponent,
    data: {
      heading: 'Step two with a very long heading spanning two lines',
      subSteps: ['step-a', 'step-b'],
    },
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'step-a',
        component: StepAComponent,
        data: {
          heading: 'Sub step A with a very long heading',
        },
      },
      {
        path: 'step-b',
        component: StepBComponent,
        data: {
          heading: 'Sub step B',
        },
      },
    ],
  },
  {
    path: 'step-three',
    component: StepThreeComponent,
    data: {
      heading: 'Step Three with a very long heading spanning two lines',
      subSteps: ['step-a', 'step-b'],
    },
    children: [
      {
        path: '',
        component: IndexStepThreeComponent,
      },
      {
        path: 'step-a',
        component: StepAComponent,
        data: {
          heading: 'Sub step A with a very long heading',
        },
      },
      {
        path: 'step-b',
        component: StepBComponent,
        data: {
          heading: 'Sub step B',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
