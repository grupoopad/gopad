import { Component, input, Input, OnInit } from '@angular/core';
import { Member } from '../entities/member';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.sass'
})
export class MemberCardComponent implements OnInit {
  @Input() member!: Member;
  @Input() name!: string;
  @Input() lattes!: string;
  @Input() photo!: string;
  @Input() email!: string;
  @Input() phoneNumber!: string;
  @Input() interests !: string[]
  @Input() degree!: string;
  @Input() orcid!: string
  ngOnInit(): void {
    if (this.member == undefined) {
      this.member = new Member("","","","","",[],"","");
      this.member.name = this.name
      this.member.lattes = this.lattes
      this.member.photo = this.photo
      this.member.email = this.email
      this.member.phoneNumber = this.phoneNumber
      this.member.interests = this.interests
      this.member.degree = this.degree
      this.member.orcid = this.orcid
    }
  }
  constructor() {}
}
