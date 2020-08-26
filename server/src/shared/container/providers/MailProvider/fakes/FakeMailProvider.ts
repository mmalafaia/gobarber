import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';

interface IMessage {
  to: string;
  subject: string;
  text: string;
}

export default class FakeMailProvider implements IMailProvider {
  private messages: IMessage[] = [];

  public async sendMail(
    to: string,
    subject: string,
    text: string,
  ): Promise<void> {
    this.messages.push({
      to,
      subject,
      text,
    });
  }
}
