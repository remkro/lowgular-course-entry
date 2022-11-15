import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import {Observable} from "rxjs";
import {ProjectModel} from "../../model/project.model";

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent {
  constructor(private _projectService: ProjectService) {
  }
  data$: Observable<ProjectModel[] | null> = this._projectService.getAll();
}
