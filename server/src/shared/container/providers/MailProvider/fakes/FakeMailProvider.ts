import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';

interface IMessage {
  to: string;
  title: string;
  body: string;
}

export default class FakeMailProvider implements IMailProvider {
  private messages: IMessage[] = [];

  public async sendMail(
    to: string,
    title: string,
    body: string,
  ): Promise<void> {
    this.messages.push({
      to,
      title,
      body,
    });
  }
}
