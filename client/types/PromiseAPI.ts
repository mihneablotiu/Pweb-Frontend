import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { FeedbackDTO } from '../models/FeedbackDTO';
import { ResponseDTO } from '../models/ResponseDTO';
import { TagDTO } from '../models/TagDTO';
import { TodoDTO } from '../models/TodoDTO';
import { TodoListDTO } from '../models/TodoListDTO';
import { UserLoginDTO } from '../models/UserLoginDTO';
import { UserRegisterDTO } from '../models/UserRegisterDTO';
import { UserUpdateRoleDTO } from '../models/UserUpdateRoleDTO';
import { ObservableFeedbackControllerApi } from './ObservableAPI';

import { FeedbackControllerApiRequestFactory, FeedbackControllerApiResponseProcessor} from "../apis/FeedbackControllerApi";
export class PromiseFeedbackControllerApi {
    private api: ObservableFeedbackControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FeedbackControllerApiRequestFactory,
        responseProcessor?: FeedbackControllerApiResponseProcessor
    ) {
        this.api = new ObservableFeedbackControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param authorization 
     * @param feedbackDTO 
     */
    public createFeedbackWithHttpInfo(authorization: string, feedbackDTO: FeedbackDTO, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.createFeedbackWithHttpInfo(authorization, feedbackDTO, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param feedbackDTO 
     */
    public createFeedback(authorization: string, feedbackDTO: FeedbackDTO, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.createFeedback(authorization, feedbackDTO, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param authorization 
     */
    public deleteFeedbackWithHttpInfo(id: number, authorization: string, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.deleteFeedbackWithHttpInfo(id, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param authorization 
     */
    public deleteFeedback(id: number, authorization: string, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.deleteFeedback(id, authorization, _options);
        return result.toPromise();
    }


}



import { ObservableTagControllerApi } from './ObservableAPI';

import { TagControllerApiRequestFactory, TagControllerApiResponseProcessor} from "../apis/TagControllerApi";
export class PromiseTagControllerApi {
    private api: ObservableTagControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TagControllerApiRequestFactory,
        responseProcessor?: TagControllerApiResponseProcessor
    ) {
        this.api = new ObservableTagControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param authorization 
     * @param tagDTO 
     */
    public createTagWithHttpInfo(authorization: string, tagDTO: TagDTO, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.createTagWithHttpInfo(authorization, tagDTO, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param tagDTO 
     */
    public createTag(authorization: string, tagDTO: TagDTO, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.createTag(authorization, tagDTO, _options);
        return result.toPromise();
    }

    /**
     * @param tagId 
     * @param authorization 
     */
    public deleteTagWithHttpInfo(tagId: number, authorization: string, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.deleteTagWithHttpInfo(tagId, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param tagId 
     * @param authorization 
     */
    public deleteTag(tagId: number, authorization: string, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.deleteTag(tagId, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param tagDTO 
     */
    public updateTagWithHttpInfo(authorization: string, tagDTO: TagDTO, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.updateTagWithHttpInfo(authorization, tagDTO, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param tagDTO 
     */
    public updateTag(authorization: string, tagDTO: TagDTO, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.updateTag(authorization, tagDTO, _options);
        return result.toPromise();
    }


}



import { ObservableTodoControllerApi } from './ObservableAPI';

import { TodoControllerApiRequestFactory, TodoControllerApiResponseProcessor} from "../apis/TodoControllerApi";
export class PromiseTodoControllerApi {
    private api: ObservableTodoControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TodoControllerApiRequestFactory,
        responseProcessor?: TodoControllerApiResponseProcessor
    ) {
        this.api = new ObservableTodoControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param authorization 
     * @param todoListId 
     * @param todoDTO 
     */
    public createTodoWithHttpInfo(authorization: string, todoListId: number, todoDTO: TodoDTO, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.createTodoWithHttpInfo(authorization, todoListId, todoDTO, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param todoListId 
     * @param todoDTO 
     */
    public createTodo(authorization: string, todoListId: number, todoDTO: TodoDTO, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.createTodo(authorization, todoListId, todoDTO, _options);
        return result.toPromise();
    }

    /**
     * @param todoListId 
     * @param todoId 
     * @param authorization 
     */
    public deleteTodoWithHttpInfo(todoListId: number, todoId: number, authorization: string, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.deleteTodoWithHttpInfo(todoListId, todoId, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param todoListId 
     * @param todoId 
     * @param authorization 
     */
    public deleteTodo(todoListId: number, todoId: number, authorization: string, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.deleteTodo(todoListId, todoId, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param todoListId 
     * @param authorization 
     */
    public getTodosWithHttpInfo(todoListId: number, authorization: string, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.getTodosWithHttpInfo(todoListId, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param todoListId 
     * @param authorization 
     */
    public getTodos(todoListId: number, authorization: string, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.getTodos(todoListId, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param todoListId 
     * @param page 
     * @param size 
     * @param authorization 
     */
    public getTodos1WithHttpInfo(todoListId: number, page: number, size: number, authorization: string, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.getTodos1WithHttpInfo(todoListId, page, size, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param todoListId 
     * @param page 
     * @param size 
     * @param authorization 
     */
    public getTodos1(todoListId: number, page: number, size: number, authorization: string, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.getTodos1(todoListId, page, size, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param todoListId 
     * @param todoId 
     * @param authorization 
     */
    public toggleTodoWithHttpInfo(todoListId: number, todoId: number, authorization: string, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.toggleTodoWithHttpInfo(todoListId, todoId, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param todoListId 
     * @param todoId 
     * @param authorization 
     */
    public toggleTodo(todoListId: number, todoId: number, authorization: string, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.toggleTodo(todoListId, todoId, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param todoListId 
     * @param todoDTO 
     */
    public updateTodoWithHttpInfo(authorization: string, todoListId: number, todoDTO: TodoDTO, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.updateTodoWithHttpInfo(authorization, todoListId, todoDTO, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param todoListId 
     * @param todoDTO 
     */
    public updateTodo(authorization: string, todoListId: number, todoDTO: TodoDTO, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.updateTodo(authorization, todoListId, todoDTO, _options);
        return result.toPromise();
    }


}



import { ObservableTodoListControllerApi } from './ObservableAPI';

import { TodoListControllerApiRequestFactory, TodoListControllerApiResponseProcessor} from "../apis/TodoListControllerApi";
export class PromiseTodoListControllerApi {
    private api: ObservableTodoListControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TodoListControllerApiRequestFactory,
        responseProcessor?: TodoListControllerApiResponseProcessor
    ) {
        this.api = new ObservableTodoListControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param authorization 
     * @param todoListDTO 
     */
    public createTodoListWithHttpInfo(authorization: string, todoListDTO: TodoListDTO, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.createTodoListWithHttpInfo(authorization, todoListDTO, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param todoListDTO 
     */
    public createTodoList(authorization: string, todoListDTO: TodoListDTO, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.createTodoList(authorization, todoListDTO, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param authorization 
     */
    public deleteTodoListWithHttpInfo(id: number, authorization: string, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.deleteTodoListWithHttpInfo(id, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param authorization 
     */
    public deleteTodoList(id: number, authorization: string, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.deleteTodoList(id, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param size 
     * @param authorization 
     */
    public getTodoListWithHttpInfo(page: number, size: number, authorization: string, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.getTodoListWithHttpInfo(page, size, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param size 
     * @param authorization 
     */
    public getTodoList(page: number, size: number, authorization: string, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.getTodoList(page, size, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param authorization 
     */
    public getTodoList1WithHttpInfo(id: number, authorization: string, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.getTodoList1WithHttpInfo(id, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param authorization 
     */
    public getTodoList1(id: number, authorization: string, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.getTodoList1(id, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     */
    public getTodoListsWithHttpInfo(authorization: string, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.getTodoListsWithHttpInfo(authorization, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     */
    public getTodoLists(authorization: string, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.getTodoLists(authorization, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param todoListDTO 
     */
    public updateTodoListWithHttpInfo(authorization: string, todoListDTO: TodoListDTO, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.updateTodoListWithHttpInfo(authorization, todoListDTO, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param todoListDTO 
     */
    public updateTodoList(authorization: string, todoListDTO: TodoListDTO, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.updateTodoList(authorization, todoListDTO, _options);
        return result.toPromise();
    }


}



import { ObservableUserControllerApi } from './ObservableAPI';

import { UserControllerApiRequestFactory, UserControllerApiResponseProcessor} from "../apis/UserControllerApi";
export class PromiseUserControllerApi {
    private api: ObservableUserControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserControllerApiRequestFactory,
        responseProcessor?: UserControllerApiResponseProcessor
    ) {
        this.api = new ObservableUserControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param email 
     * @param authorization 
     */
    public deleteUserWithHttpInfo(email: string, authorization: string, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.deleteUserWithHttpInfo(email, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param email 
     * @param authorization 
     */
    public deleteUser(email: string, authorization: string, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.deleteUser(email, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param userLoginDTO 
     */
    public loginWithHttpInfo(userLoginDTO: UserLoginDTO, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.loginWithHttpInfo(userLoginDTO, _options);
        return result.toPromise();
    }

    /**
     * @param userLoginDTO 
     */
    public login(userLoginDTO: UserLoginDTO, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.login(userLoginDTO, _options);
        return result.toPromise();
    }

    /**
     * @param userRegisterDTO 
     */
    public registerUserWithHttpInfo(userRegisterDTO: UserRegisterDTO, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.registerUserWithHttpInfo(userRegisterDTO, _options);
        return result.toPromise();
    }

    /**
     * @param userRegisterDTO 
     */
    public registerUser(userRegisterDTO: UserRegisterDTO, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.registerUser(userRegisterDTO, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param userUpdateRoleDTO 
     */
    public updateRoleWithHttpInfo(authorization: string, userUpdateRoleDTO: UserUpdateRoleDTO, _options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        const result = this.api.updateRoleWithHttpInfo(authorization, userUpdateRoleDTO, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param userUpdateRoleDTO 
     */
    public updateRole(authorization: string, userUpdateRoleDTO: UserUpdateRoleDTO, _options?: Configuration): Promise<ResponseDTO> {
        const result = this.api.updateRole(authorization, userUpdateRoleDTO, _options);
        return result.toPromise();
    }


}



