# .TagControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTag**](TagControllerApi.md#createTag) | **POST** /tags/create | 
[**deleteTag**](TagControllerApi.md#deleteTag) | **DELETE** /tags/delete/{tagId} | 
[**updateTag**](TagControllerApi.md#updateTag) | **PATCH** /tags/update | 


# **createTag**
> ResponseDTO createTag(tagDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TagControllerApi(configuration);

let body:.TagControllerApiCreateTagRequest = {
  // string
  authorization: "Authorization_example",
  // TagDTO
  tagDTO: {
    name: "name_example",
    todoId: 1,
  },
};

apiInstance.createTag(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagDTO** | **TagDTO**|  |
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

# **deleteTag**
> ResponseDTO deleteTag()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TagControllerApi(configuration);

let body:.TagControllerApiDeleteTagRequest = {
  // number
  tagId: 1,
  // string
  authorization: "Authorization_example",
};

apiInstance.deleteTag(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**number**] |  | defaults to undefined
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

# **updateTag**
> ResponseDTO updateTag(tagDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TagControllerApi(configuration);

let body:.TagControllerApiUpdateTagRequest = {
  // string
  authorization: "Authorization_example",
  // TagDTO
  tagDTO: {
    name: "name_example",
    todoId: 1,
  },
};

apiInstance.updateTag(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagDTO** | **TagDTO**|  |
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


