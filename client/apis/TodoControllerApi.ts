// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ResponseDTO } from '../models/ResponseDTO';
import { TodoDTO } from '../models/TodoDTO';

/**
 * no description
 */
export class TodoControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param authorization 
     * @param todoListId 
     * @param todoDTO 
     */
    public async createTodo(authorization: string, todoListId: number, todoDTO: TodoDTO, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("TodoControllerApi", "createTodo", "authorization");
        }


        // verify required parameter 'todoListId' is not null or undefined
        if (todoListId === null || todoListId === undefined) {
            throw new RequiredError("TodoControllerApi", "createTodo", "todoListId");
        }


        // verify required parameter 'todoDTO' is not null or undefined
        if (todoDTO === null || todoDTO === undefined) {
            throw new RequiredError("TodoControllerApi", "createTodo", "todoDTO");
        }


        // Path Params
        const localVarPath = '/todos/create/{todoListId}'
            .replace('{' + 'todoListId' + '}', encodeURIComponent(String(todoListId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(todoDTO, "TodoDTO", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param todoListId 
     * @param todoId 
     * @param authorization 
     */
    public async deleteTodo(todoListId: number, todoId: number, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'todoListId' is not null or undefined
        if (todoListId === null || todoListId === undefined) {
            throw new RequiredError("TodoControllerApi", "deleteTodo", "todoListId");
        }


        // verify required parameter 'todoId' is not null or undefined
        if (todoId === null || todoId === undefined) {
            throw new RequiredError("TodoControllerApi", "deleteTodo", "todoId");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("TodoControllerApi", "deleteTodo", "authorization");
        }


        // Path Params
        const localVarPath = '/todos/delete/{todoListId}/{todoId}'
            .replace('{' + 'todoListId' + '}', encodeURIComponent(String(todoListId)))
            .replace('{' + 'todoId' + '}', encodeURIComponent(String(todoId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param todoListId 
     * @param authorization 
     */
    public async getTodos(todoListId: number, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'todoListId' is not null or undefined
        if (todoListId === null || todoListId === undefined) {
            throw new RequiredError("TodoControllerApi", "getTodos", "todoListId");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("TodoControllerApi", "getTodos", "authorization");
        }


        // Path Params
        const localVarPath = '/todos/get/{todoListId}'
            .replace('{' + 'todoListId' + '}', encodeURIComponent(String(todoListId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param todoListId 
     * @param page 
     * @param size 
     * @param authorization 
     */
    public async getTodos1(todoListId: number, page: number, size: number, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'todoListId' is not null or undefined
        if (todoListId === null || todoListId === undefined) {
            throw new RequiredError("TodoControllerApi", "getTodos1", "todoListId");
        }


        // verify required parameter 'page' is not null or undefined
        if (page === null || page === undefined) {
            throw new RequiredError("TodoControllerApi", "getTodos1", "page");
        }


        // verify required parameter 'size' is not null or undefined
        if (size === null || size === undefined) {
            throw new RequiredError("TodoControllerApi", "getTodos1", "size");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("TodoControllerApi", "getTodos1", "authorization");
        }


        // Path Params
        const localVarPath = '/todos/get/{todoListId}/{page}/{size}'
            .replace('{' + 'todoListId' + '}', encodeURIComponent(String(todoListId)))
            .replace('{' + 'page' + '}', encodeURIComponent(String(page)))
            .replace('{' + 'size' + '}', encodeURIComponent(String(size)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param todoListId 
     * @param todoId 
     * @param authorization 
     */
    public async toggleTodo(todoListId: number, todoId: number, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'todoListId' is not null or undefined
        if (todoListId === null || todoListId === undefined) {
            throw new RequiredError("TodoControllerApi", "toggleTodo", "todoListId");
        }


        // verify required parameter 'todoId' is not null or undefined
        if (todoId === null || todoId === undefined) {
            throw new RequiredError("TodoControllerApi", "toggleTodo", "todoId");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("TodoControllerApi", "toggleTodo", "authorization");
        }


        // Path Params
        const localVarPath = '/todos/toggle/{todoListId}/{todoId}'
            .replace('{' + 'todoListId' + '}', encodeURIComponent(String(todoListId)))
            .replace('{' + 'todoId' + '}', encodeURIComponent(String(todoId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param todoListId 
     * @param todoDTO 
     */
    public async updateTodo(authorization: string, todoListId: number, todoDTO: TodoDTO, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("TodoControllerApi", "updateTodo", "authorization");
        }


        // verify required parameter 'todoListId' is not null or undefined
        if (todoListId === null || todoListId === undefined) {
            throw new RequiredError("TodoControllerApi", "updateTodo", "todoListId");
        }


        // verify required parameter 'todoDTO' is not null or undefined
        if (todoDTO === null || todoDTO === undefined) {
            throw new RequiredError("TodoControllerApi", "updateTodo", "todoDTO");
        }


        // Path Params
        const localVarPath = '/todos/update/{todoListId}'
            .replace('{' + 'todoListId' + '}', encodeURIComponent(String(todoListId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(todoDTO, "TodoDTO", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class TodoControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTodo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTodoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const responseBody = await response.body.text();
            const parsedBody = ObjectSerializer.parse(responseBody, contentType);

            // Create a new ResponseDTO instance and set default values
            const body: ResponseDTO = new ResponseDTO();
            body.message = parsedBody.message; // Set a default message
            body.httpStatus = parsedBody.httpStatus; // Set a default HTTP status

            // Map additional dynamic fields from the parsed body
            for (const key in parsedBody) {
                if (Object.prototype.hasOwnProperty.call(parsedBody, key)) {
                    body[key] = parsedBody[key];
                }
            }

            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseDTO", ""
            ) as ResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTodo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteTodoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseDTO", ""
            ) as ResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseDTO", ""
            ) as ResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTodos
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTodosWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const responseBody = await response.body.text();
            const parsedBody = ObjectSerializer.parse(responseBody, contentType);

            // Create a new ResponseDTO instance and set default values
            const body: ResponseDTO = new ResponseDTO();
            body.message = parsedBody.message; // Set a default message
            body.httpStatus = parsedBody.httpStatus; // Set a default HTTP status

            // Map additional dynamic fields from the parsed body
            for (const key in parsedBody) {
                if (Object.prototype.hasOwnProperty.call(parsedBody, key)) {
                    body[key] = parsedBody[key];
                }
            }

            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseDTO", ""
            ) as ResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTodos1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTodos1WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const responseBody = await response.body.text();
            const parsedBody = ObjectSerializer.parse(responseBody, contentType);

            // Create a new ResponseDTO instance and set default values
            const body: ResponseDTO = new ResponseDTO();
            body.message = parsedBody.message; // Set a default message
            body.httpStatus = parsedBody.httpStatus; // Set a default HTTP status

            // Map additional dynamic fields from the parsed body
            for (const key in parsedBody) {
                if (Object.prototype.hasOwnProperty.call(parsedBody, key)) {
                    body[key] = parsedBody[key];
                }
            }

            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseDTO", ""
            ) as ResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to toggleTodo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async toggleTodoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseDTO", ""
            ) as ResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseDTO", ""
            ) as ResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTodo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateTodoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ResponseDTO >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const responseBody = await response.body.text();
            const parsedBody = ObjectSerializer.parse(responseBody, contentType);

            // Create a new ResponseDTO instance and set default values
            const body: ResponseDTO = new ResponseDTO();
            body.message = parsedBody.message; // Set a default message
            body.httpStatus = parsedBody.httpStatus; // Set a default HTTP status

            // Map additional dynamic fields from the parsed body
            for (const key in parsedBody) {
                if (Object.prototype.hasOwnProperty.call(parsedBody, key)) {
                    body[key] = parsedBody[key];
                }
            }

            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ResponseDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseDTO", ""
            ) as ResponseDTO;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
