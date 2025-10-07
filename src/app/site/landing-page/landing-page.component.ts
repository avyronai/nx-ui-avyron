import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-landing-page',
  imports: [HeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void { }

}
