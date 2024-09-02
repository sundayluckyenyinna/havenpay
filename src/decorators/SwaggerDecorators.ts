/*eslint-disable*/

import { Type, applyDecorators } from "@nestjs/common";
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from "@nestjs/swagger";
import ServerApiResponse from "src/common/ServerApiResponse";


export const ApiOkResponseSchema = <DataDto extends Type<unknown>>(dataDto: DataDto) =>
  applyDecorators(
    ApiExtraModels(dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ServerApiResponse) },
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
              responseData: { $ref: getSchemaPath(dataDto) },
            },
          },
        ],
      },
    }),
  )