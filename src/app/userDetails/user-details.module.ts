import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserDetailsComponent} from "./user-details.component";

@NgModule(({
    declarations:[UserDetailsComponent],
    exports:[UserDetailsComponent],
    imports:[CommonModule]
}))

export class UserDetailsModule{}