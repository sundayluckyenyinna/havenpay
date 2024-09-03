"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiOkResponseSchema = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ServerApiResponse_1 = require("../common/ServerApiResponse");
const ApiOkResponseSchema = (dataDto) => (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(dataDto), (0, swagger_1.ApiOkResponse)({
    schema: {
        allOf: [
            { $ref: (0, swagger_1.getSchemaPath)(ServerApiResponse_1.default) },
            {
                properties: {
                    responseCode: {
                        type: 'string',
                        example: '00'
                    },
                    responseMessage: {
                        type: 'string',
                        example: 'Sucessful operation'
                    },
                    responseData: { $ref: (0, swagger_1.getSchemaPath)(dataDto) },
                },
            },
        ],
    },
}));
exports.ApiOkResponseSchema = ApiOkResponseSchema;
//# sourceMappingURL=SwaggerDecorators.js.map