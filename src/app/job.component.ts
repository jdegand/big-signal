import { CDFlashingDirective } from './cd-flashing.directive';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserStore } from './user.service';

@Component({
  selector: 'job',
  standalone: true,
  template: `
    <div cd-flash class="m-4 block border border-gray-500 p-4">
      Job:
      <div>title: {{ userService.title() }}</div>
      <div>salary: {{ userService.salary() }}</div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CDFlashingDirective],
})
export class JobComponent {
  userService = inject(UserStore);
}