import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { HomeComponent } from "./home/home.component";
import { ProfiloComponent } from "./profilo/profilo.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "", redirectTo:'/home', pathMatch: 'full' },
    { path: "profilo", component: ProfiloComponent},
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
