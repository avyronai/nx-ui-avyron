import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { HeaderComponent } from "../site/landing-page/header/header.component";

@Component({
  selector: 'app-register',
  imports: [HeaderComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void { }

}
