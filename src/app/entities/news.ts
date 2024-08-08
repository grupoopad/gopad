export class News {
    title: string;
    publicationDate: Date;
    abstract: string;
    video?: string;
    image?: string;
    paragraphs: string[];
    authors: string[];
  
    constructor(
      title: string,
      publicationDate: Date,
      abstract: string,
      video: string,
      image: string,
      paragraphs: string[],
      authors: string[]
    ) {
      this.title = title;
      this.publicationDate = publicationDate;
      this.abstract = abstract;
      this.video = video;
      this.image = image;
      this.paragraphs = paragraphs;
      this.authors = authors;
    }

}