import { Type } from 'class-transformer'
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator'

export class Attribute {
  @IsString()
  @IsNotEmpty()
  type: string

  @IsString()
  @IsNotEmpty()
  value: string
}

export class CreateMetadataNFTDto {
  @IsNumber()
  @IsNotEmpty()
  nftId: number

  @IsString()
  @IsNotEmpty()
  factionNumber: string

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  image: string

  @IsString()
  @IsOptional()
  description?: string

  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  @Type(() => Attribute)
  attributes?: Attribute[]
}

export class UpdateMetadataNFTDto {
  @IsNumber()
  @IsNotEmpty()
  nftId: number

  @IsString()
  @IsNotEmpty()
  factionNumber?: string

  @IsString()
  @IsOptional()
  name?: string

  @IsString()
  @IsOptional()
  image?: string

  @IsString()
  @IsOptional()
  description?: string

  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  @Type(() => Attribute)
  add?: Attribute[]

  @IsArray()
  @IsOptional()
  remove?: string[]
}

export class UpdateMetadataNFTAttributesDto {
  @IsNumber()
  @IsOptional()
  cardLevel?: number

  @IsNumber()
  @IsOptional()
  goalKeeper?: number

  @IsNumber()
  @IsOptional()
  defence?: number

  @IsNumber()
  @IsOptional()
  midField?: number

  @IsNumber()
  @IsOptional()
  attack?: number

  @IsNumber()
  @IsOptional()
  stamina?: number

  @IsNumber()
  @IsOptional()
  captaincy?: number

  @IsNumber()
  @IsOptional()
  gamesPlayed?: number

  @IsNumber()
  @IsOptional()
  goalsScored?: number
}
