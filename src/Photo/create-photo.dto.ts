export class CreatePhotoDto {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly filename: string;
    readonly views: number;
    readonly isPublished: boolean; 
  }