import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { HeaderComponent } from "../site/landing-page/header/header.component";

@Component({
  selector: 'app-login',
  imports: [HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  ngOnInit(): void { }

}
