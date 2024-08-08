export class Member {
  name: string;
  lattes: string;
  photo: string;
  email: string;
  phoneNumber: string;
  interests: string[];
  degree: string;
  orcid: string;

  constructor(
    name: string,
    lattes: string,
    photo: string,
    email: string,
    phoneNumber: string,
    interests: string[],
    degree: string,
    orcid: string
  ) {
    this.name = name || '';
    this.lattes = lattes || '';
    this.photo = photo || '';
    this.email = email || '';
    this.phoneNumber = phoneNumber || '';
    this.interests = interests || [];
    this.degree = degree || '';
    this.orcid = orcid || '';
  }
}
