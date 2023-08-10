export default class HttpError extends Error {
  constructor(
    public readonly status: number,
    public readonly url: string
  ) {
    super(url);
  }

  toString() {
    return `[${this.status}] ${this.url}`;
  }
}
