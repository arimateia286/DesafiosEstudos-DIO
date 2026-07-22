import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBar {
  protected readonly socialLinks: SocialLink[] = [
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/arimateiabarbosa/',
      icon: 'fa-brands fa-linkedin',
    },
    { label: 'GitHub', url: 'https://github.com/arimateia286/', icon: 'fa-brands fa-github' },
  ];
}
