import { Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Test Module')
@Controller('test')
export class TestController {

    @Get('/getAll')
    @ApiOperation({ summary: 'Get all data from this api' })
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

    @Post('/create')
    save(): string {
        return 'saved...';
    }
}