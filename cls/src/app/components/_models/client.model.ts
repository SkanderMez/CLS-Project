export class ClientModel {
  imageUrl: string;
  externalUrl: string;
  dark: boolean; // to be set to true if the image colors are dark ad can't be seen on dark bcg

  public constructor() {
    this.dark = false;
  }
}
