export class Foods {
  id!: number;
  price!: number;
  name!: string;
  favourite: boolean = true;
  star: number = 5;
  tags?: string[];
  imageUrl!: string;
  cookTime!: string;
  origins!: string[];
  static cookTime: any;
}
