import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public counter: number = 0;
  public updatedAt?: number;

  public get countDecrease(): boolean {
    return this.counter <= 0;
  }

  public increase(): void {
    this.updatedAt = Date.now();
    this.counter++;
  }

  public decrease(): void {
    this.updatedAt = Date.now();
    this.counter--;
  }

  public clear(): void {
    this.updatedAt = Date.now();
    this.counter = 0;
  }
}
