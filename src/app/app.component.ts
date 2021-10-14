import { TemplatePortal } from '@angular/cdk/portal';
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PanelService } from './panel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) private sidenav: MatSidenav;

  constructor(
    public sidenavService: PanelService,
    private vcf: ViewContainerRef
  ) {}

  ngOnInit() {
    this.sidenavService.panel = this.sidenav;
  }

  openRightPanel(templateRef: TemplateRef<any>) {
    const portal = new TemplatePortal(templateRef, this.vcf);
    this.sidenavService.open(portal);
  }
}
