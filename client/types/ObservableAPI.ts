import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { FeedbackDTO } from '../models/FeedbackDTO';
import { ResponseDTO } from '../models/ResponseDTO';
import { TagDTO } from '../models/TagDTO';
import { TodoDTO } from '../models/TodoDTO';
import { TodoListDTO } from '../models/TodoListDTO';
import { UserLoginDTO } from '../models/UserLoginDTO';
import { UserRegisterDTO } from '../models/UserRegisterDTO';
import { UserUpdateRoleDTO } from '../models/UserUpdateRoleDTO';

import { FeedbackControllerApiRequestFactory, FeedbackControllerApiResponseProcessor} from "../apis/FeedbackControllerApi";
export class ObservableFeedbackControllerApi {
    private requestFactory: FeedbackControllerApiRequestFactory;
    private responseProcessor: FeedbackControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FeedbackControllerApiRequestFactory,
        responseProcessor?: FeedbackControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FeedbackControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FeedbackControllerApiResponseProcessor();
    }

    /**
     * @param authorization 
     * @param feedbackDTO 
     */
    public createFeedbackWithHttpInfo(authorization: string, feedbackDTO: FeedbackDTO, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.createFeedback(authorization, feedbackDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFeedbackWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param feedbackDTO 
     */
    public createFeedback(authorization: string, feedbackDTO: FeedbackDTO, _options?: Configuration): Observable<ResponseDTO> {
        return this.createFeedbackWithHttpInfo(authorization, feedbackDTO, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param authorization 
     */
    public deleteFeedbackWithHttpInfo(id: number, authorization: string, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.deleteFeedback(id, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFeedbackWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param authorization 
     */
    public deleteFeedback(id: number, authorization: string, _options?: Configuration): Observable<ResponseDTO> {
        return this.deleteFeedbackWithHttpInfo(id, authorization, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

}

import { TagControllerApiRequestFactory, TagControllerApiResponseProcessor} from "../apis/TagControllerApi";
export class ObservableTagControllerApi {
    private requestFactory: TagControllerApiRequestFactory;
    private responseProcessor: TagControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TagControllerApiRequestFactory,
        responseProcessor?: TagControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TagControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TagControllerApiResponseProcessor();
    }

    /**
     * @param authorization 
     * @param tagDTO 
     */
    public createTagWithHttpInfo(authorization: string, tagDTO: TagDTO, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.createTag(authorization, tagDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTagWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param tagDTO 
     */
    public createTag(authorization: string, tagDTO: TagDTO, _options?: Configuration): Observable<ResponseDTO> {
        return this.createTagWithHttpInfo(authorization, tagDTO, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

    /**
     * @param tagId 
     * @param authorization 
     */
    public deleteTagWithHttpInfo(tagId: number, authorization: string, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.deleteTag(tagId, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTagWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param tagId 
     * @param authorization 
     */
    public deleteTag(tagId: number, authorization: string, _options?: Configuration): Observable<ResponseDTO> {
        return this.deleteTagWithHttpInfo(tagId, authorization, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

    /**
     * @param authorization 
     * @param tagDTO 
     */
    public updateTagWithHttpInfo(authorization: string, tagDTO: TagDTO, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.updateTag(authorization, tagDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTagWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param tagDTO 
     */
    public updateTag(authorization: string, tagDTO: TagDTO, _options?: Configuration): Observable<ResponseDTO> {
        return this.updateTagWithHttpInfo(authorization, tagDTO, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

}

import { TodoControllerApiRequestFactory, TodoControllerApiResponseProcessor} from "../apis/TodoControllerApi";
export class ObservableTodoControllerApi {
    private requestFactory: TodoControllerApiRequestFactory;
    private responseProcessor: TodoControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TodoControllerApiRequestFactory,
        responseProcessor?: TodoControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TodoControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TodoControllerApiResponseProcessor();
    }

    /**
     * @param authorization 
     * @param todoListId 
     * @param todoDTO 
     */
    public createTodoWithHttpInfo(authorization: string, todoListId: number, todoDTO: TodoDTO, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.createTodo(authorization, todoListId, todoDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTodoWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param todoListId 
     * @param todoDTO 
     */
    public createTodo(authorization: string, todoListId: number, todoDTO: TodoDTO, _options?: Configuration): Observable<ResponseDTO> {
        return this.createTodoWithHttpInfo(authorization, todoListId, todoDTO, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

    /**
     * @param todoListId 
     * @param todoId 
     * @param authorization 
     */
    public deleteTodoWithHttpInfo(todoListId: number, todoId: number, authorization: string, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.deleteTodo(todoListId, todoId, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTodoWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param todoListId 
     * @param todoId 
     * @param authorization 
     */
    public deleteTodo(todoListId: number, todoId: number, authorization: string, _options?: Configuration): Observable<ResponseDTO> {
        return this.deleteTodoWithHttpInfo(todoListId, todoId, authorization, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

    /**
     * @param todoListId 
     * @param authorization 
     */
    public getTodosWithHttpInfo(todoListId: number, authorization: string, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.getTodos(todoListId, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTodosWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param todoListId 
     * @param authorization 
     */
    public getTodos(todoListId: number, authorization: string, _options?: Configuration): Observable<ResponseDTO> {
        return this.getTodosWithHttpInfo(todoListId, authorization, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

    /**
     * @param todoListId 
     * @param page 
     * @param size 
     * @param authorization 
     */
    public getTodos1WithHttpInfo(todoListId: number, page: number, size: number, authorization: string, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.getTodos1(todoListId, page, size, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTodos1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param todoListId 
     * @param page 
     * @param size 
     * @param authorization 
     */
    public getTodos1(todoListId: number, page: number, size: number, authorization: string, _options?: Configuration): Observable<ResponseDTO> {
        return this.getTodos1WithHttpInfo(todoListId, page, size, authorization, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

    /**
     * @param todoListId 
     * @param todoId 
     * @param authorization 
     */
    public toggleTodoWithHttpInfo(todoListId: number, todoId: number, authorization: string, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.toggleTodo(todoListId, todoId, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.toggleTodoWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param todoListId 
     * @param todoId 
     * @param authorization 
     */
    public toggleTodo(todoListId: number, todoId: number, authorization: string, _options?: Configuration): Observable<ResponseDTO> {
        return this.toggleTodoWithHttpInfo(todoListId, todoId, authorization, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

    /**
     * @param authorization 
     * @param todoListId 
     * @param todoDTO 
     */
    public updateTodoWithHttpInfo(authorization: string, todoListId: number, todoDTO: TodoDTO, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.updateTodo(authorization, todoListId, todoDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTodoWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param todoListId 
     * @param todoDTO 
     */
    public updateTodo(authorization: string, todoListId: number, todoDTO: TodoDTO, _options?: Configuration): Observable<ResponseDTO> {
        return this.updateTodoWithHttpInfo(authorization, todoListId, todoDTO, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

}

import { TodoListControllerApiRequestFactory, TodoListControllerApiResponseProcessor} from "../apis/TodoListControllerApi";
export class ObservableTodoListControllerApi {
    private requestFactory: TodoListControllerApiRequestFactory;
    private responseProcessor: TodoListControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TodoListControllerApiRequestFactory,
        responseProcessor?: TodoListControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TodoListControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TodoListControllerApiResponseProcessor();
    }

    /**
     * @param authorization 
     * @param todoListDTO 
     */
    public createTodoListWithHttpInfo(authorization: string, todoListDTO: TodoListDTO, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.createTodoList(authorization, todoListDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTodoListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param todoListDTO 
     */
    public createTodoList(authorization: string, todoListDTO: TodoListDTO, _options?: Configuration): Observable<ResponseDTO> {
        return this.createTodoListWithHttpInfo(authorization, todoListDTO, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param authorization 
     */
    public deleteTodoListWithHttpInfo(id: number, authorization: string, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.deleteTodoList(id, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTodoListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param authorization 
     */
    public deleteTodoList(id: number, authorization: string, _options?: Configuration): Observable<ResponseDTO> {
        return this.deleteTodoListWithHttpInfo(id, authorization, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

    /**
     * @param page 
     * @param size 
     * @param authorization 
     */
    public getTodoListWithHttpInfo(page: number, size: number, authorization: string, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.getTodoList(page, size, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTodoListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page 
     * @param size 
     * @param authorization 
     */
    public getTodoList(page: number, size: number, authorization: string, _options?: Configuration): Observable<ResponseDTO> {
        return this.getTodoListWithHttpInfo(page, size, authorization, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param authorization 
     */
    public getTodoList1WithHttpInfo(id: number, authorization: string, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.getTodoList1(id, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTodoList1WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param authorization 
     */
    public getTodoList1(id: number, authorization: string, _options?: Configuration): Observable<ResponseDTO> {
        return this.getTodoList1WithHttpInfo(id, authorization, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

    /**
     * @param authorization 
     */
    public getTodoListsWithHttpInfo(authorization: string, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.getTodoLists(authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTodoListsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authorization 
     */
    public getTodoLists(authorization: string, _options?: Configuration): Observable<ResponseDTO> {
        return this.getTodoListsWithHttpInfo(authorization, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

    /**
     * @param authorization 
     * @param todoListDTO 
     */
    public updateTodoListWithHttpInfo(authorization: string, todoListDTO: TodoListDTO, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.updateTodoList(authorization, todoListDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTodoListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param todoListDTO 
     */
    public updateTodoList(authorization: string, todoListDTO: TodoListDTO, _options?: Configuration): Observable<ResponseDTO> {
        return this.updateTodoListWithHttpInfo(authorization, todoListDTO, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

}

import { UserControllerApiRequestFactory, UserControllerApiResponseProcessor} from "../apis/UserControllerApi";
export class ObservableUserControllerApi {
    private requestFactory: UserControllerApiRequestFactory;
    private responseProcessor: UserControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserControllerApiRequestFactory,
        responseProcessor?: UserControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserControllerApiResponseProcessor();
    }

    /**
     * @param email 
     * @param authorization 
     */
    public deleteUserWithHttpInfo(email: string, authorization: string, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.deleteUser(email, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param email 
     * @param authorization 
     */
    public deleteUser(email: string, authorization: string, _options?: Configuration): Observable<ResponseDTO> {
        return this.deleteUserWithHttpInfo(email, authorization, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

    /**
     * @param userLoginDTO 
     */
    public loginWithHttpInfo(userLoginDTO: UserLoginDTO, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.login(userLoginDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userLoginDTO 
     */
    public login(userLoginDTO: UserLoginDTO, _options?: Configuration): Observable<ResponseDTO> {
        return this.loginWithHttpInfo(userLoginDTO, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

    /**
     * @param userRegisterDTO 
     */
    public registerUserWithHttpInfo(userRegisterDTO: UserRegisterDTO, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.registerUser(userRegisterDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.registerUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userRegisterDTO 
     */
    public registerUser(userRegisterDTO: UserRegisterDTO, _options?: Configuration): Observable<ResponseDTO> {
        return this.registerUserWithHttpInfo(userRegisterDTO, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

    /**
     * @param authorization 
     * @param userUpdateRoleDTO 
     */
    public updateRoleWithHttpInfo(authorization: string, userUpdateRoleDTO: UserUpdateRoleDTO, _options?: Configuration): Observable<HttpInfo<ResponseDTO>> {
        const requestContextPromise = this.requestFactory.updateRole(authorization, userUpdateRoleDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param userUpdateRoleDTO 
     */
    public updateRole(authorization: string, userUpdateRoleDTO: UserUpdateRoleDTO, _options?: Configuration): Observable<ResponseDTO> {
        return this.updateRoleWithHttpInfo(authorization, userUpdateRoleDTO, _options).pipe(map((apiResponse: HttpInfo<ResponseDTO>) => apiResponse.data));
    }

}
