import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ThemeServie {

    public theme : string = "dark-theme";

    setTheme(themeName: string){
        this.theme = themeName;
    }

    toggleTheme(){
        if(this.theme == "dark-theme"){
            this.setTheme('light-theme');
        }else{
            this.setTheme('dark-theme');
        }
    }
}
