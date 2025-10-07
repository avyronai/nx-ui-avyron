import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { HeaderComponent } from "../site/landing-page/header/header.component";

@Component({
  selector: 'app-error',
  imports: [HeaderComponent],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent implements OnInit {

  ngOnInit(): void { }

}
