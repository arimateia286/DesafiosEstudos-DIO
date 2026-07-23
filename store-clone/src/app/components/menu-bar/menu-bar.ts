import { Component } from '@angular/core';

type Link = {
  label: string;
  url: string;
};

@Component({
  selector: 'app-menu-bar',
  imports: [],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css',
})
export class MenuBar {
  protected readonly links: Link[] = [
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/arimateiabarbosa/',
    },
    { label: 'GitHub', url: 'https://github.com/arimateia286/' },
    { label: 'YouTube', url: 'https://youtu.be/-8BpbQlZ-FQ' },
  ];
}
