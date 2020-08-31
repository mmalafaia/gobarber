import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNoficationDTO';
import Notification from '@modules/notifications/infra/typeorm/schemas/Notification';

export default interface INotificationsRepository {
  create(date: ICreateNotificationDTO): Promise<Notification>;
}
