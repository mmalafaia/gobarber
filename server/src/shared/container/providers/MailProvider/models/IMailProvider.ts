export default interface IMailProvider {
  sendMail(to: string, title: string, body: string): Promise<void>;
}
