import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Member } from '../entities/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  path = "/assets/members.json"

  constructor(readonly http:HttpClient){}
  private memberSubject = new Subject<Member>()
  member$ = this.memberSubject.asObservable()

  getMember(path:string): Observable<Member[]> {
    return this.http.get<Member[]>(path)
  }

  loadMembers() {
    this.getMember(this.path).subscribe(
      (members:Member[]) => members.forEach((member:Member) => this.memberSubject.next(member))
      )
  }

}
