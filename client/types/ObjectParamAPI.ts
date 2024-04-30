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

import { ObservableFeedbackControllerApi } from "./ObservableAPI";
import { FeedbackControllerApiRequestFactory, FeedbackControllerApiResponseProcessor} from "../apis/FeedbackControllerApi";

export interface FeedbackControllerApiCreateFeedbackRequest {
    /**
     * 
     * @type string
     * @memberof FeedbackControllerApicreateFeedback
     */
    authorization: string
    /**
     * 
     * @type FeedbackDTO
     * @memberof FeedbackControllerApicreateFeedback
     */
    feedbackDTO: FeedbackDTO
}

export interface FeedbackControllerApiDeleteFeedbackRequest {
    /**
     * 
     * @type number
     * @memberof FeedbackControllerApideleteFeedback
     */
    id: number
    /**
     * 
     * @type string
     * @memberof FeedbackControllerApideleteFeedback
     */
    authorization: string
}

export class ObjectFeedbackControllerApi {
    private api: ObservableFeedbackControllerApi

    public constructor(configuration: Configuration, requestFactory?: FeedbackControllerApiRequestFactory, responseProcessor?: FeedbackControllerApiResponseProcessor) {
        this.api = new ObservableFeedbackControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createFeedbackWithHttpInfo(param: FeedbackControllerApiCreateFeedbackRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.createFeedbackWithHttpInfo(param.authorization, param.feedbackDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createFeedback(param: FeedbackControllerApiCreateFeedbackRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.createFeedback(param.authorization, param.feedbackDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteFeedbackWithHttpInfo(param: FeedbackControllerApiDeleteFeedbackRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.deleteFeedbackWithHttpInfo(param.id, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteFeedback(param: FeedbackControllerApiDeleteFeedbackRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.deleteFeedback(param.id, param.authorization,  options).toPromise();
    }

}

import { ObservableTagControllerApi } from "./ObservableAPI";
import { TagControllerApiRequestFactory, TagControllerApiResponseProcessor} from "../apis/TagControllerApi";

export interface TagControllerApiCreateTagRequest {
    /**
     * 
     * @type string
     * @memberof TagControllerApicreateTag
     */
    authorization: string
    /**
     * 
     * @type TagDTO
     * @memberof TagControllerApicreateTag
     */
    tagDTO: TagDTO
}

export interface TagControllerApiDeleteTagRequest {
    /**
     * 
     * @type number
     * @memberof TagControllerApideleteTag
     */
    tagId: number
    /**
     * 
     * @type string
     * @memberof TagControllerApideleteTag
     */
    authorization: string
}

export interface TagControllerApiUpdateTagRequest {
    /**
     * 
     * @type string
     * @memberof TagControllerApiupdateTag
     */
    authorization: string
    /**
     * 
     * @type TagDTO
     * @memberof TagControllerApiupdateTag
     */
    tagDTO: TagDTO
}

export class ObjectTagControllerApi {
    private api: ObservableTagControllerApi

    public constructor(configuration: Configuration, requestFactory?: TagControllerApiRequestFactory, responseProcessor?: TagControllerApiResponseProcessor) {
        this.api = new ObservableTagControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createTagWithHttpInfo(param: TagControllerApiCreateTagRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.createTagWithHttpInfo(param.authorization, param.tagDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createTag(param: TagControllerApiCreateTagRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.createTag(param.authorization, param.tagDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteTagWithHttpInfo(param: TagControllerApiDeleteTagRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.deleteTagWithHttpInfo(param.tagId, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteTag(param: TagControllerApiDeleteTagRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.deleteTag(param.tagId, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateTagWithHttpInfo(param: TagControllerApiUpdateTagRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.updateTagWithHttpInfo(param.authorization, param.tagDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateTag(param: TagControllerApiUpdateTagRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.updateTag(param.authorization, param.tagDTO,  options).toPromise();
    }

}

import { ObservableTodoControllerApi } from "./ObservableAPI";
import { TodoControllerApiRequestFactory, TodoControllerApiResponseProcessor} from "../apis/TodoControllerApi";

export interface TodoControllerApiCreateTodoRequest {
    /**
     * 
     * @type string
     * @memberof TodoControllerApicreateTodo
     */
    authorization: string
    /**
     * 
     * @type number
     * @memberof TodoControllerApicreateTodo
     */
    todoListId: number
    /**
     * 
     * @type TodoDTO
     * @memberof TodoControllerApicreateTodo
     */
    todoDTO: TodoDTO
}

export interface TodoControllerApiDeleteTodoRequest {
    /**
     * 
     * @type number
     * @memberof TodoControllerApideleteTodo
     */
    todoListId: number
    /**
     * 
     * @type number
     * @memberof TodoControllerApideleteTodo
     */
    todoId: number
    /**
     * 
     * @type string
     * @memberof TodoControllerApideleteTodo
     */
    authorization: string
}

export interface TodoControllerApiGetTodosRequest {
    /**
     * 
     * @type number
     * @memberof TodoControllerApigetTodos
     */
    todoListId: number
    /**
     * 
     * @type string
     * @memberof TodoControllerApigetTodos
     */
    authorization: string
}

export interface TodoControllerApiGetTodos1Request {
    /**
     * 
     * @type number
     * @memberof TodoControllerApigetTodos1
     */
    todoListId: number
    /**
     * 
     * @type number
     * @memberof TodoControllerApigetTodos1
     */
    page: number
    /**
     * 
     * @type number
     * @memberof TodoControllerApigetTodos1
     */
    size: number
    /**
     * 
     * @type string
     * @memberof TodoControllerApigetTodos1
     */
    authorization: string
}

export interface TodoControllerApiToggleTodoRequest {
    /**
     * 
     * @type number
     * @memberof TodoControllerApitoggleTodo
     */
    todoListId: number
    /**
     * 
     * @type number
     * @memberof TodoControllerApitoggleTodo
     */
    todoId: number
    /**
     * 
     * @type string
     * @memberof TodoControllerApitoggleTodo
     */
    authorization: string
}

export interface TodoControllerApiUpdateTodoRequest {
    /**
     * 
     * @type string
     * @memberof TodoControllerApiupdateTodo
     */
    authorization: string
    /**
     * 
     * @type number
     * @memberof TodoControllerApiupdateTodo
     */
    todoListId: number
    /**
     * 
     * @type TodoDTO
     * @memberof TodoControllerApiupdateTodo
     */
    todoDTO: TodoDTO
}

export class ObjectTodoControllerApi {
    private api: ObservableTodoControllerApi

    public constructor(configuration: Configuration, requestFactory?: TodoControllerApiRequestFactory, responseProcessor?: TodoControllerApiResponseProcessor) {
        this.api = new ObservableTodoControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createTodoWithHttpInfo(param: TodoControllerApiCreateTodoRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.createTodoWithHttpInfo(param.authorization, param.todoListId, param.todoDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createTodo(param: TodoControllerApiCreateTodoRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.createTodo(param.authorization, param.todoListId, param.todoDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteTodoWithHttpInfo(param: TodoControllerApiDeleteTodoRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.deleteTodoWithHttpInfo(param.todoListId, param.todoId, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteTodo(param: TodoControllerApiDeleteTodoRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.deleteTodo(param.todoListId, param.todoId, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTodosWithHttpInfo(param: TodoControllerApiGetTodosRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.getTodosWithHttpInfo(param.todoListId, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTodos(param: TodoControllerApiGetTodosRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.getTodos(param.todoListId, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTodos1WithHttpInfo(param: TodoControllerApiGetTodos1Request, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.getTodos1WithHttpInfo(param.todoListId, param.page, param.size, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTodos1(param: TodoControllerApiGetTodos1Request, options?: Configuration): Promise<ResponseDTO> {
        return this.api.getTodos1(param.todoListId, param.page, param.size, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public toggleTodoWithHttpInfo(param: TodoControllerApiToggleTodoRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.toggleTodoWithHttpInfo(param.todoListId, param.todoId, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public toggleTodo(param: TodoControllerApiToggleTodoRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.toggleTodo(param.todoListId, param.todoId, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateTodoWithHttpInfo(param: TodoControllerApiUpdateTodoRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.updateTodoWithHttpInfo(param.authorization, param.todoListId, param.todoDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateTodo(param: TodoControllerApiUpdateTodoRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.updateTodo(param.authorization, param.todoListId, param.todoDTO,  options).toPromise();
    }

}

import { ObservableTodoListControllerApi } from "./ObservableAPI";
import { TodoListControllerApiRequestFactory, TodoListControllerApiResponseProcessor} from "../apis/TodoListControllerApi";

export interface TodoListControllerApiCreateTodoListRequest {
    /**
     * 
     * @type string
     * @memberof TodoListControllerApicreateTodoList
     */
    authorization: string
    /**
     * 
     * @type TodoListDTO
     * @memberof TodoListControllerApicreateTodoList
     */
    todoListDTO: TodoListDTO
}

export interface TodoListControllerApiDeleteTodoListRequest {
    /**
     * 
     * @type number
     * @memberof TodoListControllerApideleteTodoList
     */
    id: number
    /**
     * 
     * @type string
     * @memberof TodoListControllerApideleteTodoList
     */
    authorization: string
}

export interface TodoListControllerApiGetTodoListRequest {
    /**
     * 
     * @type number
     * @memberof TodoListControllerApigetTodoList
     */
    page: number
    /**
     * 
     * @type number
     * @memberof TodoListControllerApigetTodoList
     */
    size: number
    /**
     * 
     * @type string
     * @memberof TodoListControllerApigetTodoList
     */
    authorization: string
}

export interface TodoListControllerApiGetTodoList1Request {
    /**
     * 
     * @type number
     * @memberof TodoListControllerApigetTodoList1
     */
    id: number
    /**
     * 
     * @type string
     * @memberof TodoListControllerApigetTodoList1
     */
    authorization: string
}

export interface TodoListControllerApiGetTodoListsRequest {
    /**
     * 
     * @type string
     * @memberof TodoListControllerApigetTodoLists
     */
    authorization: string
}

export interface TodoListControllerApiUpdateTodoListRequest {
    /**
     * 
     * @type string
     * @memberof TodoListControllerApiupdateTodoList
     */
    authorization: string
    /**
     * 
     * @type TodoListDTO
     * @memberof TodoListControllerApiupdateTodoList
     */
    todoListDTO: TodoListDTO
}

export class ObjectTodoListControllerApi {
    private api: ObservableTodoListControllerApi

    public constructor(configuration: Configuration, requestFactory?: TodoListControllerApiRequestFactory, responseProcessor?: TodoListControllerApiResponseProcessor) {
        this.api = new ObservableTodoListControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createTodoListWithHttpInfo(param: TodoListControllerApiCreateTodoListRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.createTodoListWithHttpInfo(param.authorization, param.todoListDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createTodoList(param: TodoListControllerApiCreateTodoListRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.createTodoList(param.authorization, param.todoListDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteTodoListWithHttpInfo(param: TodoListControllerApiDeleteTodoListRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.deleteTodoListWithHttpInfo(param.id, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteTodoList(param: TodoListControllerApiDeleteTodoListRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.deleteTodoList(param.id, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTodoListWithHttpInfo(param: TodoListControllerApiGetTodoListRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.getTodoListWithHttpInfo(param.page, param.size, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTodoList(param: TodoListControllerApiGetTodoListRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.getTodoList(param.page, param.size, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTodoList1WithHttpInfo(param: TodoListControllerApiGetTodoList1Request, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.getTodoList1WithHttpInfo(param.id, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTodoList1(param: TodoListControllerApiGetTodoList1Request, options?: Configuration): Promise<ResponseDTO> {
        return this.api.getTodoList1(param.id, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTodoListsWithHttpInfo(param: TodoListControllerApiGetTodoListsRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.getTodoListsWithHttpInfo(param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTodoLists(param: TodoListControllerApiGetTodoListsRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.getTodoLists(param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateTodoListWithHttpInfo(param: TodoListControllerApiUpdateTodoListRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.updateTodoListWithHttpInfo(param.authorization, param.todoListDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateTodoList(param: TodoListControllerApiUpdateTodoListRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.updateTodoList(param.authorization, param.todoListDTO,  options).toPromise();
    }

}

import { ObservableUserControllerApi } from "./ObservableAPI";
import { UserControllerApiRequestFactory, UserControllerApiResponseProcessor} from "../apis/UserControllerApi";

export interface UserControllerApiDeleteUserRequest {
    /**
     * 
     * @type string
     * @memberof UserControllerApideleteUser
     */
    email: string
    /**
     * 
     * @type string
     * @memberof UserControllerApideleteUser
     */
    authorization: string
}

export interface UserControllerApiLoginRequest {
    /**
     * 
     * @type UserLoginDTO
     * @memberof UserControllerApilogin
     */
    userLoginDTO: UserLoginDTO
}

export interface UserControllerApiRegisterUserRequest {
    /**
     * 
     * @type UserRegisterDTO
     * @memberof UserControllerApiregisterUser
     */
    userRegisterDTO: UserRegisterDTO
}

export interface UserControllerApiUpdateRoleRequest {
    /**
     * 
     * @type string
     * @memberof UserControllerApiupdateRole
     */
    authorization: string
    /**
     * 
     * @type UserUpdateRoleDTO
     * @memberof UserControllerApiupdateRole
     */
    userUpdateRoleDTO: UserUpdateRoleDTO
}

export class ObjectUserControllerApi {
    private api: ObservableUserControllerApi

    public constructor(configuration: Configuration, requestFactory?: UserControllerApiRequestFactory, responseProcessor?: UserControllerApiResponseProcessor) {
        this.api = new ObservableUserControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public deleteUserWithHttpInfo(param: UserControllerApiDeleteUserRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.deleteUserWithHttpInfo(param.email, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteUser(param: UserControllerApiDeleteUserRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.deleteUser(param.email, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public loginWithHttpInfo(param: UserControllerApiLoginRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.loginWithHttpInfo(param.userLoginDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public login(param: UserControllerApiLoginRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.login(param.userLoginDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public registerUserWithHttpInfo(param: UserControllerApiRegisterUserRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.registerUserWithHttpInfo(param.userRegisterDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public registerUser(param: UserControllerApiRegisterUserRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.registerUser(param.userRegisterDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateRoleWithHttpInfo(param: UserControllerApiUpdateRoleRequest, options?: Configuration): Promise<HttpInfo<ResponseDTO>> {
        return this.api.updateRoleWithHttpInfo(param.authorization, param.userUpdateRoleDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateRole(param: UserControllerApiUpdateRoleRequest, options?: Configuration): Promise<ResponseDTO> {
        return this.api.updateRole(param.authorization, param.userUpdateRoleDTO,  options).toPromise();
    }

}
