import { bindable, bindingMode } from 'aurelia-framework';

export class SideBar {

    @bindable position;

    content = ['Basic info', 'SCM', 'Technology', 'Build', 'Test']

    changePosition(c) {
        this.position = c;
    }
}