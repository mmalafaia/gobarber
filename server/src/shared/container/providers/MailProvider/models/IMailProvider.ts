export default interface IMailProvider {
  sendMail(to: string, subject: string, text: string): Promise<void>;
}
