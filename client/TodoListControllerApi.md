# .TodoListControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTodoList**](TodoListControllerApi.md#createTodoList) | **POST** /todolists/create | 
[**deleteTodoList**](TodoListControllerApi.md#deleteTodoList) | **DELETE** /todolists/delete/{id} | 
[**getTodoList**](TodoListControllerApi.md#getTodoList) | **GET** /todolists/get/{page}/{size} | 
[**getTodoList1**](TodoListControllerApi.md#getTodoList1) | **GET** /todolists/get/{id} | 
[**getTodoLists**](TodoListControllerApi.md#getTodoLists) | **GET** /todolists/get | 
[**updateTodoList**](TodoListControllerApi.md#updateTodoList) | **PUT** /todolists/update | 


# **createTodoList**
> ResponseDTO createTodoList(todoListDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TodoListControllerApi(configuration);

let body:.TodoListControllerApiCreateTodoListRequest = {
  // string
  authorization: "Authorization_example",
  // TodoListDTO
  todoListDTO: {
    title: "title_example",
    description: "description_example",
  },
};

apiInstance.createTodoList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **todoListDTO** | **TodoListDTO**|  |
 **authorization** | [**string**] |  | defaults to undefined


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

# **deleteTodoList**
> ResponseDTO deleteTodoList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TodoListControllerApi(configuration);

let body:.TodoListControllerApiDeleteTodoListRequest = {
  // number
  id: 1,
  // string
  authorization: "Authorization_example",
};

apiInstance.deleteTodoList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
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

# **getTodoList**
> ResponseDTO getTodoList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TodoListControllerApi(configuration);

let body:.TodoListControllerApiGetTodoListRequest = {
  // number
  page: 1,
  // number
  size: 1,
  // string
  authorization: "Authorization_example",
};

apiInstance.getTodoList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **getTodoList1**
> ResponseDTO getTodoList1()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TodoListControllerApi(configuration);

let body:.TodoListControllerApiGetTodoList1Request = {
  // number
  id: 1,
  // string
  authorization: "Authorization_example",
};

apiInstance.getTodoList1(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
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

# **getTodoLists**
> ResponseDTO getTodoLists()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TodoListControllerApi(configuration);

let body:.TodoListControllerApiGetTodoListsRequest = {
  // string
  authorization: "Authorization_example",
};

apiInstance.getTodoLists(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **updateTodoList**
> ResponseDTO updateTodoList(todoListDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TodoListControllerApi(configuration);

let body:.TodoListControllerApiUpdateTodoListRequest = {
  // string
  authorization: "Authorization_example",
  // TodoListDTO
  todoListDTO: {
    title: "title_example",
    description: "description_example",
  },
};

apiInstance.updateTodoList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **todoListDTO** | **TodoListDTO**|  |
 **authorization** | [**string**] |  | defaults to undefined


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


