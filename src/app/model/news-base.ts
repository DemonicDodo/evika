export class NewsBase {

    constructor(logo: string, title: string, publicationdate: Date, type: string, image: string, body: string, link: string,) {
        this.logo = logo;
        this.title = title;
        this.publicationdate = publicationdate;
        this.type = type;
        this.image = image;
        this.body = body;
        this.link = link;
        this.voteDown = false;
        this.votesUp = false;
    }

    logo: string;
    title: string;
    publicationdate: Date;
    type: string;
    image: string;
    body: string;
    link: string;
    votesUp: boolean;
    voteDown: boolean;



}
