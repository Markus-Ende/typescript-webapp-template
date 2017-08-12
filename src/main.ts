class DocumentAppender {
  constructor(private text: string) {
  }

  public append() {
    const element = document.createElement('div');
    element.innerHTML = this.text;
    document.body.appendChild(element);
  }
}

new DocumentAppender('Hello, World!').append();