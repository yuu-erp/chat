import { DomainEvent, type IDomainEvent } from "@/shared/core/domain-base/events/domain-event.base";
import type { UserMetadata } from "../value-objects/user-metadata.value-object";
import type { UserProps, UserRoles } from "../types/user-props.type";

export class UserCreatedDomainEvent extends DomainEvent implements UserProps {
  address: string;
  addressSC: string;
  userName: string;
  avatar: string;
  bio: string;
  role: UserRoles;
  metadata?: UserMetadata;

  constructor(props: IDomainEvent<UserCreatedDomainEvent> & UserProps) {
    super(props);

    this.address = props.address;
    this.addressSC = props.addressSC;
    this.userName = props.userName;
    this.avatar = props.avatar;
    this.bio = props.bio;
    this.role = props.role;
    this.metadata = props.metadata;
  }
}
