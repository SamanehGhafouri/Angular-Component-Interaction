import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  // Observable string source
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  // Service message commands
  announceMission(misson: string){
    this.missionAnnouncedSource.next(misson);
  }

  confirmMission(astronut: string){
    this.missionConfirmedSource.next(astronut);
  }


}
