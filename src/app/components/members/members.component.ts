import { Component, OnInit } from '@angular/core';
import { MemberCardComponent } from "../../member-card/member-card.component";
import { Member } from '../../entities/member';
import { MemberService } from '../../services/member.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [MemberCardComponent,CommonModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.sass'
})
export class MembersComponent implements OnInit {
  members:Member[] = []
  constructor(readonly memberService:MemberService) {}

  ngOnInit(): void {
  this.memberService.loadMembers()
  this.memberService.member$.subscribe(
  member => {
    this.members.push(member)
  })
  }
}
