import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CulturalComponent } from "./cultural/cultural.component";
import { SponsersComponent } from "./sponsers/sponsers.component";
import { SportsComponent } from "./sports/sports.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
    // children: [
    //   { path: "cultural", pathMatch: "full", component: CulturalComponent },
    //   { path: "sports", pathMatch: "full", component: SportsComponent },
    //   { path: "sponsers", pathMatch: "full", component: SponsersComponent },
    //   { path: "contact", pathMatch: "full", component: ContactComponent }
    // ]
  },
  { path: "cultural", pathMatch: "full", component: CulturalComponent },
  { path: "sports", pathMatch: "full", component: SportsComponent },
  { path: "sponsers", pathMatch: "full", component: SponsersComponent },
  { path: "contact", pathMatch: "full", component: ContactComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, [RouterModule.forRoot(routes)]]
})
export class AppRoutingModule {}
