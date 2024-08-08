export class Publication {
    title: string;
    publicationDate: string;
    abstract: string;
    doi: string;
    pdf: string;
    authors: string[];

    constructor(
        title: string,
        publicationDate: string,
        abstract: string,
        doi: string,
        pdf: string,
        authors: string[]
    ) {
        this.title = title;
        this.publicationDate = publicationDate;
        this.abstract = abstract;
        this.doi = doi;
        this.pdf = pdf;
        this.authors = authors;
    }
}
