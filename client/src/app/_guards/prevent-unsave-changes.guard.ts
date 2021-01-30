import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsaveChangesGuard implements CanDeactivate<unknown> {
  // this is used if the form is edited and the user clicks something else in the app,
  // to be notified that all changes will be lost if he clicks elsewhere. Connected to canDeactivate: [PreventUnsaveChangesGuard]
  // in app-AppRoutingModule.module.ts
  canDeactivate(
    component: MemberEditComponent): boolean {
      if(component.editForm.dirty) {
        return confirm("Are you sure you want to continue ? Any unsaved changes will be lost.");
      }
    return true;
  }
  
}
