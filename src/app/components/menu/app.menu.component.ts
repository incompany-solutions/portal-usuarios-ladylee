import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-menu",
    template: `
        <div class="menu">
            <ul class="layout-menu">
                <li
                    app-menuitem
                    *ngFor="let item of model; let i = index"
                    [item]="item"
                    [index]="i"
                    [root]="true"
                ></li>
            </ul>
        </div>
    `,
})
export class AppMenuComponent implements OnInit {
    model: any[];

    ngOnInit() {
        this.model = [
            { label: "Dashboard", icon: "pi pi-fw pi-home", routerLink: ["/"] },
            {
                label: "Prospectos", icon: "pi pi-fw pi-list", routerLink: ['/leads']
            },
            {
                label: "Contactos", icon: "pi pi-fw pi-list", routerLink: ['/contacts']
            },
            {
                label: "Oportunidades", icon: "pi pi-fw pi-list", routerLink: ['/opportunities']
            }
        ];
    }
}
