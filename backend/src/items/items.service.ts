import { Injectable, NotFoundException } from '@nestjs/common';
import{ Item, ItemStatus } from '@prisma/client'
import { CreateItemDto } from './dto/create-item.dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class ItemsService {

    constructor(private readonly prismaService: PrismaService){}
    //local

    async findAll(): Promise<Item[]>{
        return await this.prismaService.item.findMany();
    }

    async create(createItemDto: CreateItemDto, userId:string): Promise<Item>{
        const {name, price, description} = createItemDto;
        return await this.prismaService.item.create({
            data:{
                name,
                price,
                description,
                status: ItemStatus.ON_SALE,
                userId:userId,
            },
        });
    }

    async findById(id:string):Promise<Item>{
        const items = await this.prismaService.item.findUnique({
            where:{
                id,
            }
        });
        if(!items){
            // throw new Error('not exist item');
            throw new NotFoundException();
        }
        return items;
    }

    async updateStatus(id:string):Promise<Item>{
        return await this.prismaService.item.update({
            data:{status: 'SOLD_OUT'},
            where:{id,},
        });
    }

    async delete(id:string, userId:string){
        await this.prismaService.item.delete({
            where:{id, userId},
        });
    }
}
