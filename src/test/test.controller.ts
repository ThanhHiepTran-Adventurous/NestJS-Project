import { Controller, Get, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Test Module')
@Controller('test')
export class TestController {

    @Get('/getAll')
    @ApiOperation({ summary: 'Get all data from this api for swagger' })
    @ApiResponse({
        status: 200,
        description: 'All Data list'
    })
    @ApiResponse({
        status: 403,
        description: 'Fobidden'
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error'
    })
    getAll(): string {
        return 'All Data list'
    }

    @Post('/createNew')
    @ApiOperation({ summary: 'create new record' })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    example: 5,
                    description: 'this is unique id',
                },
                name: {
                    type: 'string',
                    example: 'test',
                    description: 'this is the name'
                }
            }
        }
    })
    @ApiResponse({
        status: 201,
        description: 'Saved...'
    })
    @ApiResponse({
        status: 403,
        description: 'Fobidden'
    })
    save(): string {
        return 'saved...';
    }
}