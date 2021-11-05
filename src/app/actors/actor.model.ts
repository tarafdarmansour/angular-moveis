export interface actorCreationDTO {
  name: string;
  dateOfBirth: Date;
  biography: string;
  picture: File;
}

export interface actorDTO {
  id: number;
  name: string;
  dateOfBirth: Date;
  picture: string;
  biography: string;
}

export interface actorAutoCompleteDTO {
  name: string;
  picture: string;
}
