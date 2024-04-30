# .TodoControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTodo**](TodoControllerApi.md#createTodo) | **POST** /todos/create/{todoListId} | 
[**deleteTodo**](TodoControllerApi.md#deleteTodo) | **DELETE** /todos/delete/{todoListId}/{todoId} | 
[**getTodos**](TodoControllerApi.md#getTodos) | **GET** /todos/get/{todoListId} | 
[**getTodos1**](TodoControllerApi.md#getTodos1) | **GET** /todos/get/{todoListId}/{page}/{size} | 
[**toggleTodo**](TodoControllerApi.md#toggleTodo) | **PATCH** /todos/toggle/{todoListId}/{todoId} | 
[**updateTodo**](TodoControllerApi.md#updateTodo) | **PUT** /todos/update/{todoListId} | 


# **createTodo**
> ResponseDTO createTodo(todoDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TodoControllerApi(configuration);

let body:.TodoControllerApiCreateTodoRequest = {
  // string
  authorization: "Authorization_example",
  // number
  todoListId: 1,
  // TodoDTO
  todoDTO: {
    title: "title_example",
    description: "description_example",
    isCompleted: true,
  },
};

apiInstance.createTodo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **todoDTO** | **TodoDTO**|  |
 **authorization** | [**string**] |  | defaults to undefined
 **todoListId** | [**number**] |  | defaults to undefined


### Return type

**ResponseDTO**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTodo**
> ResponseDTO deleteTodo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TodoControllerApi(configuration);

let body:.TodoControllerApiDeleteTodoRequest = {
  // number
  todoListId: 1,
  // number
  todoId: 1,
  // string
  authorization: "Authorization_example",
};

apiInstance.deleteTodo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **todoListId** | [**number**] |  | defaults to undefined
 **todoId** | [**number**] |  | defaults to undefined
 **authorization** | [**string**] |  | defaults to undefined


### Return type

**ResponseDTO**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTodos**
> ResponseDTO getTodos()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TodoControllerApi(configuration);

let body:.TodoControllerApiGetTodosRequest = {
  // number
  todoListId: 1,
  // string
  authorization: "Authorization_example",
};

apiInstance.getTodos(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **todoListId** | [**number**] |  | defaults to undefined
 **authorization** | [**string**] |  | defaults to undefined


### Return type

**ResponseDTO**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTodos1**
> ResponseDTO getTodos1()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TodoControllerApi(configuration);

let body:.TodoControllerApiGetTodos1Request = {
  // number
  todoListId: 1,
  // number
  page: 1,
  // number
  size: 1,
  // string
  authorization: "Authorization_example",
};

apiInstance.getTodos1(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **todoListId** | [**number**] |  | defaults to undefined
 **page** | [**number**] |  | defaults to undefined
 **size** | [**number**] |  | defaults to undefined
 **authorization** | [**string**] |  | defaults to undefined


### Return type

**ResponseDTO**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **toggleTodo**
> ResponseDTO toggleTodo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TodoControllerApi(configuration);

let body:.TodoControllerApiToggleTodoRequest = {
  // number
  todoListId: 1,
  // number
  todoId: 1,
  // string
  authorization: "Authorization_example",
};

apiInstance.toggleTodo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **todoListId** | [**number**] |  | defaults to undefined
 **todoId** | [**number**] |  | defaults to undefined
 **authorization** | [**string**] |  | defaults to undefined


### Return type

**ResponseDTO**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTodo**
> ResponseDTO updateTodo(todoDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TodoControllerApi(configuration);

let body:.TodoControllerApiUpdateTodoRequest = {
  // string
  authorization: "Authorization_example",
  // number
  todoListId: 1,
  // TodoDTO
  todoDTO: {
    title: "title_example",
    description: "description_example",
    isCompleted: true,
  },
};

apiInstance.updateTodo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **todoDTO** | **TodoDTO**|  |
 **authorization** | [**string**] |  | defaults to undefined
 **todoListId** | [**number**] |  | defaults to undefined


### Return type

**ResponseDTO**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


